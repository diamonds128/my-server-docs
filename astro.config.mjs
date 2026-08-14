import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import md3Theme from 'starlight-theme-md3';

export default defineConfig({
  site: 'https://diamonds128.github.io',
  base: '/my-server-docs/',
  integrations: [
    starlight({
      title: 'MC服务器文档',
      // 使用 root 语言：页面直接放在 src/content/docs/ 根目录，URL 无 locale 前缀
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      // 侧边栏：显式列出文档页（首页 index 已通过 sidebar.hidden 隐藏）
      sidebar: [
        {
          label: '导航',
          items: [
            { label: '欢迎', link: '/welcome' },
          ],
        },
      ],
      // 自定义样式入口（可选，若不需要可删除）
      customCss: [
        './src/styles/custom.css',
      ],
      plugins: [
        md3Theme({
          seed: '#6750A4',
          variant: 'tonalSpot',
          shape: 'large',
          density: 'comfortable',
        }),
      ],
    }),
  ],
});