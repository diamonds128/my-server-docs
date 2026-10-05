// public/scripts/coordinate.js
// Starlight 走客户端路由：换页时不触发 DOMContentLoaded，
// 改用 Astro 的 astro:page-load。
(function () {
  function init() {
    const $ = (id) => document.getElementById(id);
    const dirBtns = document.querySelectorAll('.conv .conv-seg:not(.conv-seg--unit) .conv-seg__btn');
    // 本页没有转换器时直接退出（astro:page-load 在所有页面触发）
    if (!dirBtns.length) return;

    const axes = ['X', 'Y', 'Z'];
    let dir = 'ow-nether';

    const fmtValue = (v) => (Number.isFinite(v) ? Math.round(v * 100) / 100 : '');

    function convert(v, axis) {
      if (axis === 'Y') return v;
      if (dir === 'ow-nether') return Math.floor(v / 8);
      return v * 8;
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
  }

  if (!window.__coordinatePageLoadBound) {
    window.__coordinatePageLoadBound = true;
    document.addEventListener('astro:page-load', init);
  }
})();