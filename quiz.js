//  QUIZ GAME
// ================================================================
function startQuizGame() {
  const qz = state.qz;
  qz.questions         = shuffle(ALL_QUESTIONS).slice(0, 10);
  qz.current           = 0;
  qz.playerRoundScore  = 0;
  qz.botRoundScore     = 0;
  qz.answered          = false;
  clearInterval(qz.timerInterval);
  clearTimeout(qz.botTimer);

  refreshAllScores();
  showScreen('screen-quiz');
  renderQuestion();
}

function renderQuestion() {
  const qz = state.qz;
  if (qz.current >= qz.questions.length) { endQuiz(); return; }

  const q = qz.questions[qz.current];
  qz.answered = false;
  qz.timeLeft = 20;
  clearInterval(qz.timerInterval);
  clearTimeout(qz.botTimer);

  const label = `Question ${qz.current + 1} of ${qz.questions.length}`;
  document.getElementById('qz-q-label').textContent      = label;
  document.getElementById('qz-header-label').textContent  = label;
  document.getElementById('qz-question').textContent      = q.q;
  document.getElementById('qz-timer-fill').style.width   = '100%';
  document.getElementById('qz-timer-fill').classList.remove('urgent');
  document.getElementById('qz-timer-label').textContent  = '⏱ 20s';
  document.getElementById('qz-feedback').style.display   = 'none';
  document.getElementById('qz-feedback').className       = 'feedback-box';
  document.getElementById('qz-next-btn').style.display   = 'none';
  document.getElementById('thinking-qz').style.display   = 'none';
  botSetMsg('qz', 'Reading the question…');

  // Render shuffled options
  const optEl = document.getElementById('qz-options');
  optEl.innerHTML = '';
  shuffle(q.options).forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'opt-btn';
    btn.textContent = opt;
    btn.onclick = () => playerAnswer(opt);
    optEl.appendChild(btn);
  });

  // Countdown timer
  qz.timerInterval = setInterval(() => {
    qz.timeLeft--;
    const pct  = (qz.timeLeft / 20) * 100;
    const fill = document.getElementById('qz-timer-fill');
    fill.style.width = pct + '%';
    document.getElementById('qz-timer-label').textContent = `⏱ ${qz.timeLeft}s`;
    if (qz.timeLeft <= 7) fill.classList.add('urgent');
    if (qz.timeLeft <= 0) { clearInterval(qz.timerInterval); if (!qz.answered) timedOut(); }
  }, 1000);

  // Bot answers after a random delay (70% accuracy)
  qz.botTimer = setTimeout(() => {
    if (!qz.answered) botAnswerQuiz(false);
  }, rand(5000, 17000));
}

function playerAnswer(selected) {
  const qz = state.qz;
  if (qz.answered) return;
  qz.answered = true;
  clearInterval(qz.timerInterval);
  clearTimeout(qz.botTimer);

  const q         = qz.questions[qz.current];
  const correct   = selected.trim() === q.a.trim();
  const timeBonus = Math.floor(qz.timeLeft / 4);

  document.querySelectorAll('.opt-btn').forEach(btn => {
    btn.disabled = true;
    if (btn.textContent.trim() === q.a.trim()) btn.classList.add('correct');
    else if (btn.textContent.trim() === selected.trim() && !correct) btn.classList.add('wrong');
  });

  const fb = document.getElementById('qz-feedback');
  fb.style.display = 'block';
  if (correct) {
    const pts = 10 + timeBonus;
    addPoints('player', pts);
    qz.playerRoundScore += pts;
    fb.className = 'feedback-box correct-fb';
    fb.innerHTML = `<strong style="color:var(--success)">Correct! +${pts} pts${timeBonus ? ` (+${timeBonus} time bonus)` : ''}</strong><br><br>${q.explain}`;
  } else {
    fb.className = 'feedback-box wrong-fb';
    fb.innerHTML = `<strong style="color:var(--danger)">Incorrect.</strong> The answer is: <strong>${q.a}</strong><br><br>${q.explain}`;
  }

  botAnswerQuiz(true);
  document.getElementById('qz-next-btn').style.display = 'block';
}

function timedOut() {
  const qz = state.qz;
  qz.answered = true;
  clearTimeout(qz.botTimer);

  const q = qz.questions[qz.current];
  document.querySelectorAll('.opt-btn').forEach(btn => {
    btn.disabled = true;
    if (btn.textContent.trim() === q.a.trim()) btn.classList.add('correct');
  });

  const fb = document.getElementById('qz-feedback');
  fb.style.display = 'block';
  fb.className = 'feedback-box wrong-fb';
  fb.innerHTML = `<strong style="color:var(--danger)">Time's up!</strong> The answer was: <strong>${q.a}</strong><br><br>${q.explain}`;

  botAnswerQuiz(true);
  document.getElementById('qz-next-btn').style.display = 'block';
}

function botAnswerQuiz(silent) {
  const qz = state.qz;
  if (!silent) {
    document.getElementById('thinking-qz').style.display = 'flex';
    botSetMsg('qz', 'I have my answer!');
  }
  const doScore = () => {
    document.getElementById('thinking-qz').style.display = 'none';
    const botCorrect = Math.random() < 0.70;
    if (botCorrect) {
      const bonus = silent ? 0 : Math.floor(qz.timeLeft / 4);
      addPoints('bot', 10 + bonus);
      qz.botRoundScore += 10;
      botSetMsg('qz', silent ? 'I got that one right.' : `Answered correctly! +${10 + bonus} pts`);
    } else {
      botSetMsg('qz', 'I got that wrong.');
    }
  };
  if (silent) doScore();
  else setTimeout(doScore, 1000);
}

function nextQuestion() {
  state.qz.current++;
  renderQuestion();
}

function endQuiz() {
  clearInterval(state.qz.timerInterval);
  clearTimeout(state.qz.botTimer);
  showResults('quiz');
}

// ================================================================
//  RESULTS SCREEN
// ================================================================
function showResults(gameType) {
  const p = state.playerScore;
  const b = state.botScore;

  let trophy, title, sub;
  if      (p > b) { trophy = '🏆'; title = `${state.playerName} Wins!`; sub = 'You beat BioBot!'; }
  else if (b > p) { trophy = '🤖'; title = 'BioBot Wins!';              sub = 'Better luck next round!'; }
  else            { trophy = '🤝'; title = "It's a Tie!";               sub = 'Evenly matched!'; }

  document.getElementById('result-trophy').textContent = trophy;
  document.getElementById('result-title').textContent  = title;
  document.getElementById('result-sub').textContent    = sub;
  document.getElementById('r-pscore').textContent      = p;
  document.getElementById('r-bscore').textContent      = b;
  document.getElementById('r-pname').textContent       = state.playerName;

  const pc = document.getElementById('r-player-card');
  const bc = document.getElementById('r-bot-card');
  pc.classList.toggle('winner', p > b);
  bc.classList.toggle('winner', b > p);

  const bd = document.getElementById('r-breakdown');
  if (gameType === 'matching') {
    const mg = state.mg;
    bd.innerHTML = `
      <p style="font-weight:700; margin-bottom:0.6rem;">Memory Match Breakdown</p>
      <p>Total pairs: <strong>6</strong></p>
      <p>Your matched pairs: <strong>${mg.playerCorrect}</strong></p>
      <p>BioBot's matched pairs: <strong>${mg.botCorrect}</strong></p>
    `;
  } else {
    const qz = state.qz;
    bd.innerHTML = `
      <p style="font-weight:700; margin-bottom:0.6rem;">Quiz Breakdown</p>
      <p>Questions answered: <strong>${qz.current}</strong></p>
      <p>Your quiz score: <strong>${qz.playerRoundScore} pts</strong></p>
      <p>BioBot's quiz score: <strong>${qz.botRoundScore} pts</strong></p>
    `;
  }

  // Quick reference sheet
  const ref = document.getElementById('r-ref');
  ref.innerHTML = AMINO_ACIDS.map(aa => `
    <div class="ref-item">
      <span style="font-weight:700;">${aa.name}</span>
      <span class="muted"> (${aa.abbr3}, ${aa.abbr1})</span><br>
      <span style="color:var(--${catColour(aa.category)}); font-size:0.75rem;">${catLabel(aa.category)}</span>
    </div>
  `).join('');

  showScreen('screen-results');
}
