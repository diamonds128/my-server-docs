// 复制成功提示（MD3 Snackbar）
// 用事件委托绑定，兼容 view transitions（换页后 DOM 重建也无需重新绑定）。
(function () {
  let snackbar = null;
  let timeoutId = null;

  function ensureSnackbar() {
    if (!snackbar) {
      snackbar = document.querySelector('.md3-snackbar');
    }
    if (!snackbar) {
      snackbar = document.createElement('div');
      snackbar.className = 'md3-snackbar';
      snackbar.textContent = '已复制到剪贴板';
      snackbar.setAttribute('role', 'status');
      snackbar.setAttribute('aria-live', 'polite');
      document.body.appendChild(snackbar);
    }
    return snackbar;
  }

  function showSnackbar() {
    const el = ensureSnackbar();
    el.classList.add('md3-snackbar--active');
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function () {
      el.classList.remove('md3-snackbar--active');
    }, 1500);
  }

  function fallbackCopy(text) {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
  }

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(function () {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
  }

  // 事件委托：捕获阶段监听，先于 Expressive Code 自身的处理器触发。
  document.addEventListener(
    'click',
    function (event) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      // 1) 自定义 [data-copy] 元素：由本脚本负责写入剪贴板
      const custom = target.closest('[data-copy]');
      if (custom) {
        const text = custom.getAttribute('data-copy') || custom.textContent;
        copyText(text);
        showSnackbar();
        return;
      }

      // 2) Expressive Code 代码块复制按钮：EC 自己写剪贴板，这里只显示提示
      if (target.closest('.expressive-code .copy button')) {
        showSnackbar();
      }
    },
    true
  );
})();
