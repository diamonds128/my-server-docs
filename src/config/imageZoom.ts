/**
 * 图片放大后标题栏（figcaption）的显示样式。
 *
 * - 'bar'        底部圆角横条（md3 风格，顶部圆角底部直角）
 * - 'square-bar' 底部直角横条（完全去掉圆角）
 * - 'pill'       悬浮胶囊（居中悬浮的圆角小标签，最不突兀）
 *
 * 修改此值后 dev server 会自动热更新，无需重启。
 */
export type ImageZoomCaptionStyle = 'bar' | 'square-bar' | 'pill'

export const imageZoomCaptionStyle: ImageZoomCaptionStyle = 'pill'
