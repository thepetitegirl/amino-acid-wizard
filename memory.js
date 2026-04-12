// ================================================================
//  MEMORY MATCH GAME
// ================================================================

/* ---------- Setup ---------- */

function startMatchingGame() {
  const mg = state.mg;

  // Cycle through all amino acids in random batches of 6
  if (!mg.pool || mg.pool.length < 6) {
    mg.pool = shuffle([...AMINO_ACIDS]);
  }
  mg.pairs = mg.pool.splice(0, 6);

  // Reset state
  mg.cards         = [];
  mg.flipped       = [];
  mg.locked        = 0;
  mg.playerCorrect = 0;
  mg.botCorrect    = 0;
  mg.botActive     = false;
  mg.botKnown      = new Map();
  clearTimeout(mg.botTimer);

  buildMemoryCards();
  refreshAllScores();
  document.getElementById('mg-matched').textContent  = '0 / 6';
  document.getElementById('mg-pcorrect').textContent = '0';
  document.getElementById('mg-bcorrect').textContent = '0';
  showScreen('screen-matching');
  setTurnIndicator('player');
  botSetMsg('mg', 'You go first — good luck!');
}

function newAminoAcidSet() {
  const mg = state.mg;
  clearTimeout(mg.botTimer);
  // Force a fresh batch (don't consume from the pool — just reshuffle)
  if (!mg.pool || mg.pool.length < 6) mg.pool = shuffle([...AMINO_ACIDS]);
  mg.pairs = mg.pool.splice(0, 6);
  mg.cards = []; mg.flipped = []; mg.locked = 0;
  mg.playerCorrect = 0; mg.botCorrect = 0;
  mg.botActive = false; mg.botKnown = new Map();
  buildMemoryCards();
  refreshAllScores();
  document.getElementById('mg-matched').textContent  = '0 / 6';
  document.getElementById('mg-pcorrect').textContent = '0';
  document.getElementById('mg-bcorrect').textContent = '0';
  setTurnIndicator('player');
  botSetMsg('mg', 'New set — let\'s go!');
}

/*
  buildMemoryCards — creates 12 card objects (6 name + 6 struct),
  shuffles them, then renders the 4×3 grid.
*/
function buildMemoryCards() {
  const mg = state.mg;
  const cards = [];

  mg.pairs.forEach((aa, pairIdx) => {
    cards.push({ id: `n${pairIdx}`, pairIdx, type: 'name',   flipped: false, locked: false });
    cards.push({ id: `s${pairIdx}`, pairIdx, type: 'struct', flipped: false, locked: false });
  });

  mg.cards = shuffle(cards);
  renderMemoryGrid();
}

/* ---------- Rendering ---------- */

function renderMemoryGrid() {
  const mg   = state.mg;
  const grid = document.getElementById('memory-grid');
  grid.innerHTML = '';

  mg.cards.forEach(card => {
    const wrap  = document.createElement('div');
    wrap.className = 'mem-card-wrap';
    wrap.id        = `wrap-${card.id}`;
    wrap.onclick   = () => onCardClick(card.id);

    const inner = document.createElement('div');
    inner.className = 'mem-card-inner';
    inner.id        = `card-inner-${card.id}`;

    // --- Back face ---
    const back = document.createElement('div');
    back.className = `mem-face mem-back ${card.type === 'name' ? 'back-name' : 'back-struct'}`;
    back.innerHTML = `
      <div class="mem-back-icon">${card.type === 'name' ? '🔤' : '🔬'}</div>
      <div class="mem-back-label">${card.type === 'name' ? 'NAME' : 'STRUCTURE'}</div>
    `;

    // --- Front face ---
    const front = document.createElement('div');
    front.className = `mem-face mem-front ${card.type === 'name' ? 'front-name' : 'front-struct'}`;

    const aa = mg.pairs[card.pairIdx];
    if (card.type === 'name') {
      front.innerHTML = `
        <div class="mem-name-text">${aa.name}</div>
        <div class="mem-abbr">${aa.abbr3} · ${aa.abbr1}</div>
        <div class="mem-cat-tag cat-tag-${aa.category}">${catLabel(aa.category)}</div>
      `;
    } else {
      front.innerHTML = `
        <div class="mem-svg-wrap">${getStructureMarkup(aa.name)}</div>
        <div class="mem-struct-label">${aa.name}</div>
      `;
    }

    inner.appendChild(back);
    inner.appendChild(front);
    wrap.appendChild(inner);
    grid.appendChild(wrap);
  });
}

/* ---------- Card interaction ---------- */

/*
  onCardClick — called when player clicks a card.
  Ignores clicks if: bot is active, card is locked, card is already
  face-up, or two cards are already pending resolution.
*/
function onCardClick(id) {
  const mg   = state.mg;
  if (mg.botActive) return;
  if (mg.flipped.length >= 2) return;

  const card = mg.cards.find(c => c.id === id);
  if (!card || card.locked || card.flipped) return;

  flipCard(id, true);
  mg.flipped.push(id);
  // Reveal helps bot memorise (player actions also populate bot's memory)
  updateBotMemory(card);

  if (mg.flipped.length === 2) {
    // Disable clicks briefly while we evaluate
    document.querySelectorAll('.mem-card-wrap:not(.locked)').forEach(w => w.classList.add('no-click'));
    setTimeout(() => checkMemoryMatch(), 600);
  }
}

/*
  flipCard — add/remove the is-flipped class on the wrapper element,
  which triggers the CSS rotateY transition.
*/
function flipCard(id, faceUp) {
  const wrap = document.getElementById(`wrap-${id}`);
  if (!wrap) return;
  if (faceUp) {
    wrap.classList.add('is-flipped');
  } else {
    wrap.classList.remove('is-flipped');
  }
  // Keep card data in sync
  const card = state.mg.cards.find(c => c.id === id);
  if (card) card.flipped = faceUp;
}

/*
  checkMemoryMatch — runs 600ms after the second card is flipped.
  A match requires: same pairIdx AND different type (name+struct).
*/
function checkMemoryMatch() {
  const mg  = state.mg;
  const [id1, id2] = mg.flipped;
  const c1 = mg.cards.find(c => c.id === id1);
  const c2 = mg.cards.find(c => c.id === id2);

  const isMatch = c1.pairIdx === c2.pairIdx && c1.type !== c2.type;

  if (isMatch) {
    // Lock after a brief pause so player can see the match
    setTimeout(() => lockMemoryPair(c1, c2), 0);
    mg.flipped = [];
    // Player goes again — re-enable clicks
    document.querySelectorAll('.mem-card-wrap:not(.locked)').forEach(w => w.classList.remove('no-click'));
    setTurnIndicator('player');
    botSetMsg('mg', 'Nice find! Your turn again.');
  } else {
    // Flip both back after 1.4s, then bot's turn
    setTimeout(() => {
      flipCard(id1, false);
      flipCard(id2, false);
      mg.flipped = [];
      document.querySelectorAll('.mem-card-wrap:not(.locked)').forEach(w => w.classList.remove('no-click'));
      setTurnIndicator('bot');
      botTurnMemory();
    }, 1400);
  }
}

/*
  lockMemoryPair — marks both cards as locked, applies locked CSS,
  awards points, updates counters.
*/
function lockMemoryPair(c1, c2) {
  const mg = state.mg;
  [c1, c2].forEach(card => {
    card.locked = true;
    const wrap = document.getElementById(`wrap-${card.id}`);
    if (wrap) { wrap.classList.add('locked', 'is-flipped'); wrap.classList.remove('no-click'); }
  });
  mg.locked++;
  mg.playerCorrect++;
  addPoints('player', 10);
  document.getElementById('mg-matched').textContent  = `${mg.locked} / 6`;
  document.getElementById('mg-pcorrect').textContent = mg.playerCorrect;
  toast(`Matched ${mg.pairs[c1.pairIdx].name}! +10 pts`, 'success');

  if (mg.locked >= 6) {
    setTimeout(() => showResults('matching'), 700);
  }
}

/* ---------- Turn indicator ---------- */

function setTurnIndicator(who) {
  const badge = document.getElementById('mg-turn-badge');
  if (who === 'player') {
    badge.textContent = `${state.playerName}'s Turn`;
    badge.className   = 'turn-badge player-turn';
  } else {
    badge.textContent = "BioBot's Turn";
    badge.className   = 'turn-badge bot-turn';
  }
}

/* ---------- Bot memory helpers ---------- */

/*
  updateBotMemory — 65% chance the bot remembers a newly revealed card.
*/
function updateBotMemory(card) {
  if (Math.random() < 0.65) {
    state.mg.botKnown.set(card.id, card.pairIdx);
  }
}

/*
  botPickMemoryCards — choose two card ids for the bot to play.
  Strategy: if bot knows a complete pair (both a name+struct card
  for the same pairIdx are in botKnown), play them. Otherwise pick
  two random unmatched, unflipped cards.
*/
function botPickMemoryCards() {
  const mg = state.mg;

  // Build a map from pairIdx → {name:id, struct:id} for known cards
  const knownByPair = new Map();
  mg.botKnown.forEach((pairIdx, cardId) => {
    const card = mg.cards.find(c => c.id === cardId);
    if (!card || card.locked) return;
    if (!knownByPair.has(pairIdx)) knownByPair.set(pairIdx, {});
    knownByPair.get(pairIdx)[card.type] = cardId;
  });

  // Look for a complete known pair
  for (const [, types] of knownByPair) {
    if (types.name && types.struct) {
      return [types.name, types.struct];
    }
  }

  // Fall back to random selection among available cards
  const available = mg.cards.filter(c => !c.locked && !c.flipped);
  if (available.length < 2) return null;
  const shuffled = shuffle(available);
  return [shuffled[0].id, shuffled[1].id];
}

/* ---------- Bot turn ---------- */

/*
  botTurnMemory — runs the bot's turn with delays so the player can
  watch. After resolving, either goes again (match) or returns turn
  to the player.
*/
function botTurnMemory() {
  const mg = state.mg;
  if (mg.locked >= 6) return;

  mg.botActive = true;
  // Disable all card clicks during bot's turn
  document.querySelectorAll('.mem-card-wrap:not(.locked)').forEach(w => w.classList.add('no-click'));
  botSetMsg('mg', 'My turn — let me think…');
  document.getElementById('thinking-mg').style.display = 'flex';

  mg.botTimer = setTimeout(() => {
    document.getElementById('thinking-mg').style.display = 'none';

    const picks = botPickMemoryCards();
    if (!picks) {
      // No cards left to play — end
      mg.botActive = false;
      setTurnIndicator('player');
      document.querySelectorAll('.mem-card-wrap:not(.locked)').forEach(w => w.classList.remove('no-click'));
      return;
    }

    const [id1, id2] = picks;
    const c1 = mg.cards.find(c => c.id === id1);
    const c2 = mg.cards.find(c => c.id === id2);

    // Flip first card
    botSetMsg('mg', `Flipping a card…`);
    flipCard(id1, true);
    updateBotMemory(c1);

    setTimeout(() => {
      // Flip second card
      flipCard(id2, true);
      updateBotMemory(c2);

      setTimeout(() => {
        const isMatch = c1.pairIdx === c2.pairIdx && c1.type !== c2.type;

        if (isMatch) {
          // Lock the pair
          [c1, c2].forEach(card => {
            card.locked = true;
            const wrap = document.getElementById(`wrap-${card.id}`);
            if (wrap) wrap.classList.add('locked', 'is-flipped');
          });
          mg.locked++;
          mg.botCorrect++;
          addPoints('bot', 10);
          document.getElementById('mg-matched').textContent  = `${mg.locked} / 6`;
          document.getElementById('mg-bcorrect').textContent = mg.botCorrect;
          toast(`BioBot matched ${mg.pairs[c1.pairIdx].name}!`, 'info');
          botSetMsg('mg', `Got ${mg.pairs[c1.pairIdx].name}! My turn again.`);

          if (mg.locked >= 6) {
            mg.botActive = false;
            setTimeout(() => showResults('matching'), 700);
            return;
          }

          // Bot goes again
          setTurnIndicator('bot');
          document.querySelectorAll('.mem-card-wrap:not(.locked)').forEach(w => w.classList.add('no-click'));
          mg.botTimer = setTimeout(() => botTurnMemory(), 1200);

        } else {
          // No match — flip cards back, hand to player
          setTimeout(() => {
            flipCard(id1, false);
            flipCard(id2, false);
            mg.botActive = false;
            setTurnIndicator('player');
            document.querySelectorAll('.mem-card-wrap:not(.locked)').forEach(w => w.classList.remove('no-click'));
            botSetMsg('mg', 'No match. Your turn!');
          }, 1200);
        }
      }, 1200);
    }, 1200);
  }, 1500);
}

