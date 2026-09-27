# 我的MC服务器文档

基于 [Astro Starlight](https://starlight.astro.build/) 和 [starlight-theme-md3](https://github.com/Axiaobo7788/starlight-material-design-theme) 构建的文档站。

## 为什么创建它？

大电子文盲时代终究是到来了，我不想什么都亲自教，自己翻文档去。

## 关于本服务器

一个在 [简幻欢](https://simpfun.cn/) 建立的朋友之间的 Minecraft 1.20.1 原版生存服务器。

## 许可证

除另有声明外，本仓库采用**双许可证**方案：

- **网站源代码**（包括 Astro 配置、主题样式、构建脚本等）：使用 [MIT 许可证](https://opensource.org/licenses/MIT)。
- **文档内容**（包括所有文字、图片、教程等）：使用 [CC BY-NC-SA 4.0 许可协议](https://creativecommons.org/licenses/by-nc-sa/4.0/)。

> 简单来说，你可以自由地使用、修改和分享本项目的代码，但若引用或修改文档内容，需注明出处、不得用于商业用途，且必须以相同许可证共享。

## 技术栈

- [Astro](https://astro.build/) — 网站核心前端框架
- [Starlight](https://starlight.astro.build/) — 基于 Astro 的文档主题框架
- [starlight-theme-md3](https://github.com/Axiaobo7788/starlight-material-design-theme) — Material Design 3 主题插件
- [starlight-announcement](https://github.com/frostybee/starlight-announcement) — 页面顶部公告栏
- [starlight-image-zoom](https://github.com/HiDeoo/starlight-image-zoom) — 点击图片放大查看
- [Expressive Code](https://expressive-code.com/) — 代码块渲染，内置 Shiki 语法高亮
- [Pagefind](https://pagefind.app/) — 站内搜索
- [unified](https://github.com/unifiedjs/unified) — Markdown 处理管道
- [syntax-mcfunction](https://github.com/MinecraftCommands/syntax-mcfunction) — Minecraft 命令语法定义
- [Node.js](https://nodejs.org/) — 本地开发与构建运行时

部署与托管：

- [GitHub Pages](https://pages.github.com/) — 网站部署与托管
- [GitHub Actions](https://github.com/features/actions) — 推送后自动构建与部署

## 本地开发

需要 **Node.js ≥ 22.12.0**（`starlight-theme-md3`、`starlight-announcement`、`starlight-image-zoom` 的最低版本要求）。

```bash
npm install
npm run dev      # 启动开发服务器
npm run build    # 构建生产版本到 dist/
npm run preview  # 本地预览构建结果
```
