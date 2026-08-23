---
title: 恭喜你发现了一个隐藏页面
description: 你是不是在找什么东西？
lastUpdated: 1145-06-07
editUrl: false
---

⚡你被骗了⚡

<div id="video-container" style="text-align: center; margin: 1rem 0;">
  <iframe
    src="//player.bilibili.com/player.html?isOutside=true&aid=80433022&bvid=BV1GJ411x7h7&cid=137649199&p=1"
    scrolling="no"
    border="0"
    frameborder="no"
    framespacing="0"
    allowfullscreen="true"
    style="width: 100%; max-width: 720px; aspect-ratio: 16 / 9; border-radius: 12px;"
  ></iframe>
  <br>
  <button id="close-video" class="sl-link-button primary">
    不要点我
  </button>
</div>

<div id="animation-container" style="display: none; text-align: center; padding: 2rem; font-size: 2rem;">
  <span id="animated-text"></span>
</div>

<style>
#close-video {
  margin-top: 1rem;
  border: none;
  font-family: var(--sl-font);
  cursor: pointer;  /* ← 这一行新增 */
}
#animated-text {
  white-space: pre;
}
</style>

<script>
(function() {
  const closeBtn = document.getElementById('close-video');
  const videoContainer = document.getElementById('video-container');
  const animContainer = document.getElementById('animation-container');
  const animatedText = document.getElementById('animated-text');
  let animationInterval = null;
  let isAnimationRunning = false;

  const frames = [
    '你又被骗了！ 😈',
    '你又被骗了！ 😈',
    '你又被骗了！ 😈',
    '😡 ▄︻┻┳═一……  😱',
    '😡 ▄︻┻┳═一……  😱',
    '😡 ▄︻┻┳═一……  😱',
    '😡 ▄︻┻┳═一……     😱',
    '😡 ▄︻┻┳═一……       😱',
    '😡 ▄︻┻┳═一……         😱',
    '😡 ▄︻┻┳═一…… ····    😱',
    '😡 ▄︻┻┳═一……       🟥💀🟥',
    '😡 ▄︻┻┳═一……       🟥💀🟥',
    '😡 ▄︻┻┳═一……       🟥💀🟥'
  ];

  function startAnimation() {
    if (isAnimationRunning) return;
    let index = 0;
    animatedText.textContent = frames[index];
    animationInterval = setInterval(() => {
      index = (index + 1) % frames.length;
      animatedText.textContent = frames[index];
    }, 400);
    isAnimationRunning = true;
  }

  function stopAnimation() {
    if (animationInterval) {
      clearInterval(animationInterval);
      animationInterval = null;
    }
    isAnimationRunning = false;
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      videoContainer.style.display = 'none';
      const initialText = document.querySelector('p[style*="text-align: center; font-size: 1.5rem;"]');
      if (initialText) initialText.style.display = 'none';
      animContainer.style.display = 'block';
      startAnimation();
    });
  }

  window.addEventListener('beforeunload', function() {
    stopAnimation();
  });
})();
</script>