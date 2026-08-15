// Astro 配置文件
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import md3Theme from 'starlight-theme-md3';

export default defineConfig({
  site: 'https://diamonds128.github.io',
  base: '/my-server-docs/',
  integrations: [
    starlight({
      title: 'Diamond服务器文档',
      lastUpdated: true,
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      sidebar: [
        {
          label: '导航',
          items: [
            { label: '欢迎', link: '/welcome' },
            { label: '开始', link: '/start' },
            { label: '进入并注册/登录', link: '/join' },
          ],
        },
      ],
      customCss: [
        './src/styles/custom.css',
        './src/styles/accents.css',
      ],
      components: {
        Header: './src/components/Header.astro',
      },
      editLink: {
        baseUrl: 'https://github.com/diamonds128/my-server-docs/edit/main/src/content/docs',
      },
      head: [
        {
          tag: 'script',
          attrs: { 'data-accent-init': '' },
          content: `(()=>{try{var a=localStorage.getItem('starlight-accent');if(a)document.documentElement.setAttribute('data-accent',a)}catch(e){}})();`,
        },
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