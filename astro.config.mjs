// Astro 配置文件
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';
import starlight from '@astrojs/starlight';
import md3Theme from 'starlight-theme-md3';
import starlightImageZoom from 'starlight-image-zoom';
import starlightAnnouncement from 'starlight-announcement';
import starlightAnnouncementZh from './src/plugins/starlight-announcement-zh';

export default defineConfig({
  site: 'https://diamonds128.github.io',
  base: '/my-server-docs/',
  // 插件暂不支持 Sätteri 处理器，改用 unified
  markdown: {
    processor: unified(),
  },
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
          label: '基础',
          items: [
            { label: '欢迎', link: '/welcome' },
            { label: '开始', link: '/start' },
            { label: '加入服务器', link: '/join' },
            { label: '基岩版', link: '/bedrock' },
            {label: '常见问题', link: '/faq' },
          ],
        },
        {
          label: '命令与权限',
          items: [
            { label: '权限配置', link: '/permissions' },
            { label: '皮肤配置', link: '/skinrestorer' },
          ],
        },
        {
          label: '其他',
          items: [
            { label: '服务端模组列表', link: '/mods' },
          ],
        },
      ],
      customCss: [
        './src/styles/custom.css',
        './src/styles/accents.css',
      ],
      components: {
        Header: './src/components/Header.astro',
        MobileMenuFooter: './src/components/MobileMenuFooter.astro',
        MarkdownContent: './src/components/MarkdownContent.astro',
      },
      editLink: {
        baseUrl: 'https://github.com/diamonds128/my-server-docs/edit/main/src/content/docs',
      },
      social: [
        { icon: 'github', label: 'GitHub 仓库', href: 'https://github.com/diamonds128/my-server-docs' },
      ],
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
        starlightImageZoom(),
        starlightAnnouncement({
          displayMode: 'stack',
          announcements: [
            {
              id: 'welcome',
              content: '文档站正在测试中！欢迎PR',
              variant: 'tip',
              endDate: '2026-09-01',
            },
          ],
        }),
        starlightAnnouncementZh(),
      ],
    }),
  ],
});