// public/scripts/uptime.js
// 填充 [data-start] 元素的开服天数。
// Starlight 走客户端路由（SPA），从子页面回首页时 DOMContentLoaded 不会再触发，
// 因此额外监听 Astro 的 astro:page-load（首次加载与每次客户端导航后都会触发）。
// 用标记避免重复绑定；DOMContentLoaded 保留以兼容非 Astro 环境。
//
// 间距稳定性：数字位数变化（如 99 → 100）会让键帽/行内文本宽度突变，
// 中文正文的行内元素宽度变化可能触发换行，导致整段“跳一下”。
// 因此先把最宽的数字（8 位）写进一个隐藏的等宽探针，量出单字符宽度，
// 再用 font-variant-numeric: tabular-nums + 固定 min-width 把数字位撑住。
(function () {
  var probe = null;

  function digitWidth(el) {
    if (!probe) {
      probe = document.createElement('span');
      probe.setAttribute('aria-hidden', 'true');
      probe.style.cssText =
        'position:absolute;left:-9999px;top:0;visibility:hidden;white-space:pre;pointer-events:none;';
      document.body.appendChild(probe);
    }
    var cs = getComputedStyle(el);
    probe.style.fontFamily = cs.fontFamily;
    probe.style.fontSize = cs.fontSize;
    probe.style.fontWeight = cs.fontWeight;
    probe.style.letterSpacing = cs.letterSpacing;
    probe.style.fontVariantNumeric = 'tabular-nums';
    probe.textContent = '00000000';
    return probe.getBoundingClientRect().width / 8;
  }

  function fillUptime() {
    document.querySelectorAll('[data-start]').forEach(function (el) {
      var startDate = new Date(el.getAttribute('data-start'));
      if (isNaN(startDate)) return;
      var diffDays = Math.floor((Date.now() - startDate) / (1000 * 60 * 60 * 24));
      var text = String(diffDays);

      // 只对纯数字容器做等宽处理，避免影响正文里混排的键帽
      if (el.childElementCount === 0) {
        el.style.fontVariantNumeric = 'tabular-nums';
        el.style.display = 'inline-block';
        el.style.textAlign = 'right';
        el.style.minWidth = digitWidth(el) * text.length + 'px';
      }

      el.textContent = text; // 只填充数字，不包含单位
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
