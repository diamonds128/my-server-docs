// public/scripts/coordinate.js
document.addEventListener('DOMContentLoaded', function () {
  const $ = (id) => document.getElementById(id);
  const dirBtns = document.querySelectorAll('.conv .conv-seg:not(.conv-seg--unit) .conv-seg__btn');
  const axes = ['X', 'Y', 'Z'];
  let dir = 'ow-nether'; // 'ow-nether' | 'nether-ow'

  const fmtValue = (v) => (Number.isFinite(v) ? Math.round(v * 100) / 100 : '');

  function convert(v, axis) {
    if (axis === 'Y') return v; // Y 不换算
    if (dir === 'ow-nether') return Math.floor(v / 8);
    return v * 8; // 下界 → 主世界 ×8
  }

  function render() {
    const out = $('cordOut');
    const anyValue = axes.some((a) => $(`cord${a}`).value !== '');
    if (!anyValue) {
      out.innerHTML = '';
      return;
    }
    const chunks = axes.map((a) => {
      const raw = parseFloat($(`cord${a}`).value);
      const v = Number.isNaN(raw) ? '' : convert(raw, a);
      return `<span class="conv-result__item"><strong>${fmtValue(v)}</strong> ${a}</span>`;
    });
    out.innerHTML = chunks.join('');
  }

  function setDir(mode) {
    dir = mode;
    dirBtns.forEach((b) => b.classList.toggle('is-active', b.dataset.dir === mode));
    render();
  }

  dirBtns.forEach((b) => b.addEventListener('click', () => setDir(b.dataset.dir)));
  axes.forEach((a) => $(`cord${a}`).addEventListener('input', render));

  setDir('ow-nether');
});
