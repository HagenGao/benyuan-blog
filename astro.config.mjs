import { defineConfig } from 'astro/config';

// 部署到自定义域名时，把 site 改成你的域名；用 Cloudflare/Vercel 时一般无需改 base
export default defineConfig({
  site: 'https://your-domain.com',
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: { prefixDefaultLocale: true },
  },
});
