// Astro 配置文件
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import md3Theme from 'starlight-theme-md3';

export default defineConfig({
  // 站点部署的根 URL（GitHub Pages 用户域名）
  site: 'https://diamonds128.github.io',
  // 仓库名作为路径前缀（子目录部署必须配置，用于正确加载资源）
  base: '/my-server-docs/',
  integrations: [
    starlight({
      // 网站标题（显示在浏览器标签和导航栏）
      title: 'Diamond服务器文档',

      // 语言与本地化配置
      // root 表示内容文件直接位于 src/content/docs/ 根目录，URL 无 locale 前缀
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },

      // 侧边栏导航配置
      // 显式列出文档页面（首页 index 通过 sidebar.hidden 隐藏，不会出现在侧边栏）
      sidebar: [
        {
          label: '导航',
          items: [
            { label: '欢迎', link: '/welcome' },
            { label: '开始', link: '/start' },
          ],
        },
      ],

      // 自定义样式文件入口，用于覆盖主题默认样式
      customCss: [
        './src/styles/custom.css',
      ],

      // 编辑此页功能：点击后跳转到 GitHub 上对应文件的编辑界面
      editLink: {
        // 指向仓库 main 分支下的 src/content/docs/ 目录
        // Starlight 会自动拼接当前页面的相对路径（如 /welcome → welcome.md）
        baseUrl: 'https://github.com/diamonds128/my-server-docs/edit/main/src/content/docs',
      },

      // Material Design 3 主题插件配置
      plugins: [
        md3Theme({
          seed: '#6750A4',      // 主题色（Material You 种子色）
          variant: 'tonalSpot', // 色彩风格：tonalSpot（默认）、expressive、content
          shape: 'large',       // 圆角大小：small、medium、large
          density: 'comfortable', // 布局密度：compact、comfortable
        }),
      ],
    }),
  ],
});