// public/scripts/copy.js
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-copy]').forEach(function(el) {
    el.addEventListener('click', function() {
      const textToCopy = this.getAttribute('data-copy') || this.textContent;
      copyToClipboard(textToCopy);
    });
  });
});

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert('已复制到剪贴板！');
  }).catch(() => {
    // 降级方案
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);
    alert('已复制到剪贴板！');
  });
}