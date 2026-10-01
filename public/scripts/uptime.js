// public/scripts/uptime.js
// 填充 [data-start] 元素的开服天数。
// Starlight 走客户端路由（SPA），从子页面回首页时 DOMContentLoaded 不会再触发，
// 因此额外监听 Astro 的 astro:page-load（首次加载与每次客户端导航后都会触发）。
// 用标记避免重复绑定；DOMContentLoaded 保留以兼容非 Astro 环境。
(function () {
  function fillUptime() {
    document.querySelectorAll('[data-start]').forEach(function (el) {
      const startDate = new Date(el.getAttribute('data-start'));
      if (isNaN(startDate)) return;
      const diffDays = Math.floor((Date.now() - startDate) / (1000 * 60 * 60 * 24));
      el.textContent = diffDays; // 只填充数字，不包含单位
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fillUptime);
  } else {
    fillUptime();
  }

  if (!window.__uptimePageLoadBound) {
    window.__uptimePageLoadBound = true;
    document.addEventListener('astro:page-load', fillUptime);
  }
})();
