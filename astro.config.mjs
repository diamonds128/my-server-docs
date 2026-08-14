// astro.config.mjs
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import md3Theme from 'starlight-theme-md3';

export default defineConfig({
  site: 'https://diamonds128.github.io',
  base: '/my-server-docs/',
  integrations: [
    starlight({
      title: 'MC服务器文档',
      defaultLocale: 'zh-CN',
      locales: {
        'zh-CN': {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
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