// public/scripts/converter.js
document.addEventListener('DOMContentLoaded', function () {
  const $ = (id) => document.getElementById(id);
  const stackInput = $('convStack');
  const dirBtns = document.querySelectorAll('.conv-seg:not(.conv-seg--unit) .conv-seg__btn');
  const unitBtns = document.querySelectorAll('.conv-seg--unit .conv-seg__btn');
  const remainToggle = $('convRemain');
  const panels = document.querySelectorAll('.conv-panel');

  // 一盒组数固定为 27（潜影盒），无需用户配置
  const BOX = 27;
  let unit = '组'; // '组' | '盒'
  let dir = 'total-unit'; // 'total-unit' | 'unit-total'

  const stack = () => parseInt(stackInput.value) || 64;
  // 所选单位的物品数量：组 = stack，盒 = 27 * stack
  const unitSize = () => (unit === '盒' ? BOX * stack() : stack());

  const fmt = (n) => {
    if (!isFinite(n)) return '0';
    const r = Math.round(n * 100) / 100;
    return String(r);
  };

  function chunk(label, value) {
    return `<span class="conv-result__item"><strong>${value}</strong> ${label}</span>`;
  }

  function renderTotalToUnit() {
    const total = parseFloat($('convTotalIn').value) || 0;
    const size = unitSize();
    const out = $('convTotalOut');
    if (remainToggle.checked) {
      // 余数模式：整数个所选单位，余下不足一个单位的个数
      const units = Math.floor(total / size);
      const remain = total % size;
      out.innerHTML = chunk(unit, units) + chunk('个', fmt(remain));
    } else {
      // 小数模式：一次性折算为所选单位，保留两位
      out.innerHTML = chunk(unit, fmt(total / size));
    }
    // 回填到反向输入
    $('convUnitIn').value = remainToggle.checked ? Math.floor(total / size) : '';
    $('convRemainIn').value = remainToggle.checked ? fmt(total % size) : '';
  }

  function renderUnitToTotal() {
    const units = parseFloat($('convUnitIn').value) || 0;
    const size = unitSize();
    const remain = remainToggle.checked ? parseFloat($('convRemainIn').value) || 0 : 0;
    const total = units * size + remain;
    $('convUnitTotalOut').textContent = fmt(total);
    // 回填到总数
    $('convTotalIn').value = fmt(total);
  }

  function setDir(mode) {
    dir = mode;
    dirBtns.forEach((b) => b.classList.toggle('is-active', b.dataset.dir === mode));
    panels.forEach((p) => { p.hidden = p.dataset.panel !== mode; });
    if (mode === 'unit-total') renderUnitToTotal();
    else renderTotalToUnit();
  }

  function setUnit(u) {
    unit = u;
    unitBtns.forEach((b) => b.classList.toggle('is-active', b.dataset.unit === u));
    $('convUnitLabel').textContent = u === '盒' ? '盒数' : '组数';
    if (dir === 'total-unit') renderTotalToUnit();
    else renderUnitToTotal();
  }

  function setRemain(checked) {
    $('convRemainField').hidden = !checked;
    if (dir === 'total-unit') renderTotalToUnit();
    else renderUnitToTotal();
  }

  dirBtns.forEach((b) => b.addEventListener('click', () => setDir(b.dataset.dir)));
  unitBtns.forEach((b) => b.addEventListener('click', () => setUnit(b.dataset.unit)));
  remainToggle.addEventListener('change', () => setRemain(remainToggle.checked));
  $('convTotalIn').addEventListener('input', renderTotalToUnit);
  $('convUnitIn').addEventListener('input', renderUnitToTotal);
  $('convRemainIn').addEventListener('input', renderUnitToTotal);
  stackInput.addEventListener('input', () => {
    if (dir === 'total-unit') renderTotalToUnit();
    else renderUnitToTotal();
  });

  setDir('total-unit');
});
