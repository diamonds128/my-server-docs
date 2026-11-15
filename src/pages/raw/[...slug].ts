// src/pages/raw/[...slug].ts
// 输出每篇文档的 Markdown 源码，供「查看 Markdown 源码」使用。
// 路径：/my-server-docs/raw/<slug>，例如 /my-server-docs/raw/faq
// 末尾不加 .md：Astro 会把 pages 路由名里的点当作扩展名，生成 faq.md 会变成名为 faq 的无扩展名文件。
// draft 文档（如 machines.md）不输出，避免把未公开内容暴露出去。
//
// 不存在的文档没有对应文件，请求会落到站点的 404 页面。为了让这类请求
// （以及带 .md / .txt 后缀的请求）也得到纯文本，这里额外生成 raw/404.html：
// 静态托管（GitHub Pages / astro preview）对未命中路径返回最近的 404.html，
// 于是 /raw/xxx、/raw/xxx.md 都会拿到等宽纯文本的 404 Not Found，而不是整页 HTML。
import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';

const NOT_FOUND_TEXT = [
  '404 Not Found',
  '',
  '没有找到对应的 Markdown 源码。',
  '',
  '可能原因：',
  '  - 该文档不存在，或已被移动 / 删除',
  '  - 该文档是 draft，未对外输出',
  '',
  '请回到文档页面，从页脚的「查看 Markdown 源码」重新进入。',
  '',
].join('\n');

type RawProps = { body: string };

export const getStaticPaths = (async () => {
  const docs = await getCollection('docs', ({ data }) => !data.draft);
  const paths = docs.map((entry) => ({
    params: { slug: entry.id },
    props: { body: entry.body ?? '' },
  })) satisfies { params: { slug: string }; props: RawProps }[];

  // raw 目录下的 404.html，用于兜住 /raw/* 的未命中请求
  paths.push({ params: { slug: '404.html' }, props: { body: '' } });
  return paths;
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ params, props }) => {
  if (params.slug === '404.html') {
    return new Response(NOT_FOUND_TEXT, {
      status: 404,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'X-Content-Type-Options': 'nosniff',
      },
    });
  }
  return new Response(props.body as string, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
    },
  });
};
