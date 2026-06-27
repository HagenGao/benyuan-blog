import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// 部署到自定义域名时，把 site 改成你的域名；用 Cloudflare/Vercel 时一般无需改 base
export default defineConfig({
  // site 留空即可；Workers/Pages 静态托管不需要它，也避免把网址写进页面源码
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: { prefixDefaultLocale: true },
  },

  output: "hybrid",
  adapter: cloudflare()
});