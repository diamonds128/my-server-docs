---
title: 精选图库
description: 我们的精选截图
---

<style>
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
}
/* MD3 elevated card：surface-container-low 底 + level1 阴影，
   悬浮升到 level2（原先是硬编码 16px 圆角、rgba 阴影、translateY 位移） */
.gallery-item {
  margin-top: 0;
  background: var(--md-sys-color-surface-container-low);
  border-radius: var(--md-sys-shape-corner-large);
  overflow: hidden;
  box-shadow: var(--md-sys-elevation-level1);
  transition: background-color var(--md3-motion-duration-control)
      var(--md-sys-motion-easing-standard),
    box-shadow var(--md3-motion-duration-control) var(--md-sys-motion-easing-standard);
}
/* 触屏上 :hover 会粘住，卡片悬浮效果限定指针设备 */
@media (hover: hover) {
  .gallery-item:hover {
    background: var(--md-sys-color-surface-container);
    box-shadow: var(--md-sys-elevation-level2);
  }
}
.gallery-item :is(img, starlight-image-zoom-zoomable) {
  display: block;
}
.gallery-item img {
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
}
.gallery-item .caption {
  padding: 0.75rem 1rem;
  font-size: var(--md-sys-typescale-body-small-size);
  color: var(--md-sys-color-on-surface-variant);
  text-align: center;
  border-top: 1px solid var(--md-sys-color-outline-variant);
}
</style>

## 精选截图

<div class="gallery-grid">

  <div class="gallery-item">
    <img src="/my-server-docs/images/screenshots/sword_of_nether.png" alt="地狱之剑" />
    <div class="caption">地狱之剑</div>
  </div>

  <div class="gallery-item">
    <img src="/my-server-docs/images/screenshots/riverside_cabin.png" alt="河畔小屋" />
    <div class="caption">河畔小屋</div>
  </div>

  <div class="gallery-item">
    <img src="/my-server-docs/images/screenshots/someone_house.png" alt="某人的家" />
    <div class="caption">某人的家</div>
  </div>

  <div class="gallery-item">
    <img src="/my-server-docs/images/screenshots/small_hot_spring.png" alt="小温泉" />
    <div class="caption">小温泉</div>
  </div>

  <div class="gallery-item">
    <img src="/my-server-docs/images/screenshots/basement.png" alt="服主家的地下室二层" />
    <div class="caption">服主家的地下室二层</div>
  </div>
  
  <div class="gallery-item">
    <img src="/my-server-docs/images/screenshots/dragon_dead.png" alt="末地解放" />
    <div class="caption">末地解放</div>
  </div>

  <div class="gallery-item">
    <img src="/my-server-docs/images/screenshots/horse_stable.png" alt="马圈" />
    <div class="caption">马圈</div>
  </div>
  
  <div class="gallery-item">
    <img src="/my-server-docs/images/screenshots/owner_tomb.png" alt="服主之墓" />
    <div class="caption">服主之墓</div>
  </div>
  
  <div class="gallery-item">
    <img src="/my-server-docs/images/screenshots/owner_tomb_interior.png" alt="服主之墓内部" />
    <div class="caption">服主之墓内部</div>
  </div>

</div>

## 地图

<div class="gallery-grid">

  <div class="gallery-item">
    <img src="/my-server-docs/images/screenshots/map_day260823.png" alt="白昼地图" />
    <div class="caption">白昼地图</div>
  </div>
    
  <div class="gallery-item">
    <img src="/my-server-docs/images/screenshots/map_night260823.png" alt="夜晚地图" />
    <div class="caption">夜晚地图</div>
  </div>
  
  <div class="gallery-item">
    <img src="/my-server-docs/images/screenshots/industrial_zone.png" alt="工业区" />
    <div class="caption">工业区</div>
  </div>
  
  <div class="gallery-item">
    <img src="/my-server-docs/images/screenshots/map_day_0.png" alt="第一天的地图" />
    <div class="caption">第一天的地图</div>
  </div>

</div>

## 历史记录

<div class="gallery-grid">

  <div class="gallery-item">
    <img src="/my-server-docs/images/screenshots/the_first_day.png" alt="第一天" />
    <div class="caption">第一天 · 一切的起点</div>
  </div>
  
  <div class="gallery-item">
    <img src="/my-server-docs/images/screenshots/sunset_first.png" alt="第一天 · 日落" />
    <div class="caption">第一天 · 日落</div>
  </div>
  
  <div class="gallery-item">
    <img src="/my-server-docs/images/incident/01.png" alt="炸服事件1" />
    <div class="caption">炸服事件 · 一片狼藉</div>
  </div>

  <div class="gallery-item">
    <img src="/my-server-docs/images/incident/02.png" alt="炸服事件2" />
    <div class="caption">炸服事件 · 倒 T</div>
  </div>

  <div class="gallery-item">
    <img src="/my-server-docs/images/incident/06.png" alt="炸服事件3" />
    <div class="caption">炸服事件 · MuYu 家</div>
  </div>
  
  <div class="gallery-item">
    <img src="/my-server-docs/images/screenshots/the_end_of_mushroom.png" alt="真·蘑菇岛" />
    <div class="caption">真·蘑菇岛</div>
  </div>

</div>