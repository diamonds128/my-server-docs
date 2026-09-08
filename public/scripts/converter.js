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

  // 依据所选单位 + 余数开关，决定反向面板显示多少列、哪些字段可见
  function updateRowClass() {
    const row = $('convRow');
    const remainOn = remainToggle.checked;
    const groupShown = unit === '盒' && remainOn; // 目标=盒且显示余数时才需要中间的"组"层
    row.classList.toggle('conv-row--triple', groupShown);
    $('convGroupField').hidden = !groupShown;
    $('convRemainField').hidden = !remainOn;
  }

  // 把总数按 盒→组→个 逐级拆解，余数优先落入更大的单位
  function renderTotalToUnit() {
    const total = parseFloat($('convTotalIn').value) || 0;
    const out = $('convTotalOut');
    const stackN = stack();

    // 逐级拆解（只用于"显示余数"分支）
    let boxes = 0, groups = 0, rem = total;
    if (unit === '盒') {
      const boxSize = BOX * stackN;
      boxes = Math.floor(rem / boxSize);
      rem -= boxes * boxSize;
    }
    groups = Math.floor(rem / stackN);
    rem -= groups * stackN;

    if (remainToggle.checked) {
      const parts = [];
      if (unit === '盒' && boxes > 0) parts.push(chunk('盒', boxes));
      if (groups > 0) parts.push(chunk('组', groups));
      if (rem > 0 || parts.length === 0) parts.push(chunk('个', fmt(rem)));
      out.innerHTML = parts.join('');

      // 回填到反向输入
      $('convUnitIn').value = unit === '盒' ? boxes : groups;
      $('convGroupIn').value = unit === '盒' ? groups : '';
      $('convRemainIn').value = fmt(rem);
    } else {
      // 小数模式：一次性折算为所选单位，保留两位
      out.innerHTML = chunk(unit, fmt(total / unitSize()));
      $('convUnitIn').value = fmt(total / unitSize());
      $('convGroupIn').value = '';
      $('convRemainIn').value = '';
    }
  }

  function renderUnitToTotal() {
    const stackN = stack();
    let total = 0;
    if (unit === '盒') {
      const boxes = parseFloat($('convUnitIn').value) || 0; // 盒数
      const groups = remainToggle.checked ? parseFloat($('convGroupIn').value) || 0 : 0;
      const rem = remainToggle.checked ? parseFloat($('convRemainIn').value) || 0 : 0;
      total = boxes * BOX * stackN + groups * stackN + rem;
    } else {
      const groups = parseFloat($('convUnitIn').value) || 0; // 组数
      const rem = remainToggle.checked ? parseFloat($('convRemainIn').value) || 0 : 0;
      total = groups * stackN + rem;
    }
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
    updateRowClass();
    if (dir === 'total-unit') renderTotalToUnit();
    else renderUnitToTotal();
  }

  function setRemain(checked) {
    updateRowClass();
    if (dir === 'total-unit') renderTotalToUnit();
    else renderUnitToTotal();
  }

  dirBtns.forEach((b) => b.addEventListener('click', () => setDir(b.dataset.dir)));
  unitBtns.forEach((b) => b.addEventListener('click', () => setUnit(b.dataset.unit)));
  remainToggle.addEventListener('change', () => setRemain(remainToggle.checked));
  $('convTotalIn').addEventListener('input', renderTotalToUnit);
  $('convUnitIn').addEventListener('input', renderUnitToTotal);
  $('convGroupIn').addEventListener('input', renderUnitToTotal);
  $('convRemainIn').addEventListener('input', renderUnitToTotal);
  stackInput.addEventListener('input', () => {
    if (dir === 'total-unit') renderTotalToUnit();
    else renderUnitToTotal();
  });

  setDir('total-unit');
  updateRowClass();
});
