// ================================================================
//  REFERENCE TAB
// ================================================================
function showReference() {
  showScreen('screen-reference');
  buildReferenceGrid('all');
}

function buildReferenceGrid(filter) {
  const grid = document.getElementById('ref-grid');
  grid.innerHTML = '';
  AMINO_ACIDS.forEach(aa => {
    if (filter !== 'all' && aa.category !== filter) return;
    const svg = getStructureMarkup(aa.name);
    const hasCustom = !!localStorage.getItem('aq-img-' + aa.name);
    const catColors = {
      nonpolar: { bg: 'rgba(251,146,60,0.12)', border: 'rgba(251,146,60,0.4)', text: 'var(--nonpolar)' },
      polar:    { bg: 'rgba(52,211,153,0.12)', border: 'rgba(52,211,153,0.4)', text: 'var(--polar)' },
      positive: { bg: 'rgba(96,165,250,0.12)', border: 'rgba(96,165,250,0.4)', text: 'var(--positive)' },
      negative: { bg: 'rgba(248,113,113,0.12)', border: 'rgba(248,113,113,0.4)', text: 'var(--negative)' },
    };
    const c = catColors[aa.category] || catColors.nonpolar;
    const card = document.createElement('div');
    card.className = 'ref-card' + (hasCustom ? ' has-custom' : '');
    card.dataset.name = aa.name;
    card.innerHTML = `
      <div class="ref-svg-wrap">${svg}</div>
      <div class="ref-name">${aa.name}</div>
      <div class="ref-abbr">${aa.abbr3} &nbsp;·&nbsp; ${aa.abbr1}</div>
      <div class="ref-cat cat-tag-${aa.category}">${aa.category}</div>
      <div class="ref-card-upload" title="Upload image">⬆</div>`;
    card.addEventListener('click', () => openRefModal(aa));
    grid.appendChild(card);
  });
}

let _refModalAA = null;

function openRefModal(aa) {
  _refModalAA = aa;
  document.getElementById('ref-modal-svg').innerHTML = getStructureMarkup(aa.name);
  document.getElementById('ref-modal-name').textContent = aa.name;
  document.getElementById('ref-modal-codes').textContent =
    `${aa.abbr3} (3-letter) · ${aa.abbr1} (1-letter) · ${aa.category.charAt(0).toUpperCase() + aa.category.slice(1)}`;
  document.getElementById('ref-modal-prop').textContent = aa.property;
  document.getElementById('ref-modal-hint').textContent = aa.hint;
  const hasCustom = !!localStorage.getItem('aq-img-' + aa.name);
  document.getElementById('ref-reset-btn').style.display = hasCustom ? 'inline-block' : 'none';
  document.getElementById('ref-modal-overlay').classList.add('open');
}

function triggerUpload() {
  document.getElementById('ref-file-input').click();
}

function handleStructureUpload(event) {
  const file = event.target.files[0];
  if (!file || !_refModalAA) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    localStorage.setItem('aq-img-' + _refModalAA.name, e.target.result);
    // Refresh modal preview
    document.getElementById('ref-modal-svg').innerHTML = getStructureMarkup(_refModalAA.name);
    document.getElementById('ref-reset-btn').style.display = 'inline-block';
    // Refresh grid card
    buildReferenceGrid(document.querySelector('.ref-filter-btn.active')?.dataset?.filter || 'all');
    event.target.value = '';
  };
  reader.readAsDataURL(file);
}

function resetStructure() {
  if (!_refModalAA) return;
  localStorage.removeItem('aq-img-' + _refModalAA.name);
  document.getElementById('ref-modal-svg').innerHTML = getStructureMarkup(_refModalAA.name);
  document.getElementById('ref-reset-btn').style.display = 'none';
  buildReferenceGrid(document.querySelector('.ref-filter-btn.active')?.dataset?.filter || 'all');
}

function closeRefModal() {
  document.getElementById('ref-modal-overlay').classList.remove('open');
}

function setRefFilter(btn, filter) {
  document.querySelectorAll('.ref-filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  buildReferenceGrid(filter);
}
