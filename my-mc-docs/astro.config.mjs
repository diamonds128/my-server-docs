import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import md3Theme from 'starlight-theme-md3';

export default defineConfig({
  integrations: [
    starlight({
      title: '我的MC服务器文档',
      // site 和 base 等部署相关配置
      plugins: [
        md3Theme({
          seed: '#6750A4',      // 主题色，可替换为你喜欢的颜色[reference:9]
          variant: 'tonalSpot', // 色彩风格，可选 'tonalSpot', 'expressive', 'content'[reference:10]
          shape: 'large',       // 圆角大小，可选 'small', 'medium', 'large'[reference:11]
          density: 'comfortable', // 布局密度，可选 'compact', 'comfortable'[reference:12]
        }),
      ],
    }),
  ],
});