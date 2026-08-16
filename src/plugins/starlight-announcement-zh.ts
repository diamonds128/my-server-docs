import type { StarlightPlugin } from '@astrojs/starlight/types';

/**
 * 为 starlight-announcement 补充简体中文界面文案。
 *
 * 插件内置翻译仅含 en/fr/es/de/nl，中文字幕页面的关闭按钮等 aria-label
 * 会退化为原始 i18n 键。此插件在公告插件之后注入 zh-CN 翻译覆盖。
 */
export default function starlightAnnouncementZh(): StarlightPlugin {
  return {
    name: 'starlight-announcement-zh',
    hooks: {
      'config:setup': () => {
        // 仅用于注入翻译，无需修改配置
      },
      'i18n:setup': ({ injectTranslations }) => {
        injectTranslations({
          'zh-CN': {
            'starlightAnnouncement.dismiss': '关闭公告',
            'starlightAnnouncement.learnMore': '了解更多',
            'starlightAnnouncement.indicatorLabel': '公告导航',
            'starlightAnnouncement.goToAnnouncement': '转到公告 {current} / {total}',
          },
        });
      },
    },
  };
}
