// public/scripts/uptime.js
document.addEventListener('DOMContentLoaded', function() {
  const startDate = new Date('2025-08-06T00:00:00+08:00');
  const now = new Date();
  const diffTime = now - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const el = document.getElementById('uptime-days');
  if (el) el.textContent = diffDays;
});