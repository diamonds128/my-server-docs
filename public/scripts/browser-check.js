// public/scripts/browser-check.js
(function () {
  // === 1. 核心弹窗与动画逻辑 ===
  function showWarning() {
    // 如果已经存在提示条（防止本地调试时重复点击生成多个），先移除旧的
    const existing = document.getElementById('browser-compat-warn');
    if (existing) existing.remove();

    const warn = document.createElement('div');
    warn.id = 'browser-compat-warn';
    
    warn.style.cssText = `
      position: fixed;
      bottom: 24px;
      left: 16px;
      right: 16px;
      background-color: var(--md-sys-color-error, #ba1a1a);
      color: var(--md-sys-color-on-error, #ffffff);
      padding: 14px 16px;
      border-radius: var(--md-sys-shape-corner-medium, 12px);
      font-size: 14px;
      line-height: 1.5;
      z-index: 99999;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: inherit;
      max-width: 600px;
      margin: 0 auto;
      transition: opacity var(--md-sys-motion-duration-short3, 0.15s) var(--md-sys-motion-easing-emphasized-accelerate, ease-in), 
                  transform var(--md-sys-motion-duration-short3, 0.15s) var(--md-sys-motion-easing-emphasized-accelerate, ease-in);
    `;
    
    warn.innerHTML = `
      <div style="flex: 1; margin-right: 12px;">
        <strong style="font-weight: 600;">浏览器版本较旧</strong><br>
        你当前使用的浏览器版本较旧，本站的部分排版和动效可能无法完美显示。为了获得最佳的阅读体验，建议升级浏览器或操作系统。
      </div>
      <button id="close-warn-btn" style="
        background: transparent;
        border: 1px solid currentColor;
        color: inherit;
        border-radius: var(--md-sys-shape-corner-full, 999px);
        padding: 6px 16px;
        cursor: pointer;
        font-size: 13px;
        font-family: inherit;
        white-space: nowrap;
        opacity: 0.8;
      ">我知道了</button>
    `;

    document.body.appendChild(warn);

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    document.getElementById('close-warn-btn').addEventListener('click', () => {
      if (isReducedMotion) {
        warn.remove();
      } else {
        warn.style.opacity = '0';
        warn.style.transform = 'translateY(1rem) scale(0.95)';
        setTimeout(() => warn.remove(), 150);
      }
      sessionStorage.setItem('browser-warn-dismissed', 'true');
    });
  }

  // === 2. 自动检测逻辑 ===
  const supportsColorMix = CSS.supports('color', 'color-mix(in srgb, red, blue)');
  const supportsHas = CSS.supports('selector(:has(*))');
  const isLegacyBrowser = !supportsColorMix || !supportsHas;

  const ua = navigator.userAgent;
  const isOldIOS = /iPhone|iPad|iPod/.test(ua) && /OS (1[0-5]|16\.[0-3])_/.test(ua);

  if ((isLegacyBrowser || isOldIOS) && !sessionStorage.getItem('browser-warn-dismissed')) {
    if (document.readyState === 'loading') {
      window.addEventListener('DOMContentLoaded', showWarning);
    } else {
      showWarning();
    }
  }

  // === 3. 开发环境专用调试接口 ===
  // 仅在 localhost 或 127.0.0.1 下暴露接口，线上环境不执行此代码
  const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
  if (isLocalhost) {
    window.testBrowserWarning = showWarning;
    console.log('💡 调试模式：在控制台输入 testBrowserWarning() 可强制预览兼容性提示条。');
  }
})();