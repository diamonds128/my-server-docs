// 复制成功提示
document.addEventListener('DOMContentLoaded', function() {
  let snackbar = document.querySelector('.md3-snackbar');
  if (!snackbar) {
    snackbar = document.createElement('div');
    snackbar.className = 'md3-snackbar';
    snackbar.textContent = '已复制到剪贴板';
    document.body.appendChild(snackbar);
  }
  let timeoutId = null;
  document.querySelectorAll('[data-copy]').forEach(function(el) {
    el.addEventListener('click', function() {
      const text = this.getAttribute('data-copy') || this.textContent;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).catch(() => {
          const input = document.createElement('input');
          input.value = text;
          document.body.appendChild(input);
          input.select();
          document.execCommand('copy');
          document.body.removeChild(input);
        });
      } else {
        const input = document.createElement('input');
        input.value = text;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      snackbar.classList.add('md3-snackbar--active');
      clearTimeout(timeoutId);
      timeoutId = setTimeout(function() {
        snackbar.classList.remove('md3-snackbar--active');
      }, 4000);
    });
  });
});