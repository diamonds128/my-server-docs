// public/scripts/uptime.js
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-start]').forEach(function(el) {
    const startDateStr = el.getAttribute('data-start');
    const startDate = new Date(startDateStr);
    const now = new Date();
    const diffTime = now - startDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    el.textContent = diffDays;  // 只填充数字，不包含单位
  });
});