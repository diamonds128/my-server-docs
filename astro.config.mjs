// Astro 配置文件
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import md3Theme from 'starlight-theme-md3';

export default defineConfig({
  // 站点部署的根 URL
  site: 'https://diamonds128.github.io',
  // 仓库名作为路径前缀（GitHub Pages 子目录部署必须配置）
  base: '/my-server-docs/',
  integrations: [
    starlight({
      title: 'MC服务器文档',
      plugins: [
        md3Theme({
          // 主题色（Material You 种子色）
          seed: '#6750A4',
          // 色彩风格：tonalSpot（默认）、expressive、content
          variant: 'tonalSpot',
          // 圆角大小：small、medium、large
          shape: 'large',
          // 布局密度：compact、comfortable
          density: 'comfortable',
        }),
      ],
    }),
  ],
});