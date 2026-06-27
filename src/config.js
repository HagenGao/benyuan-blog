// 站点配置 + 双语 UI 文案集中管理。改文案只动这里。
export const SITE = {
  // Giscus 评论：去 https://giscus.app 生成后填这四项
  giscus: {
    repo: 'HagenGao/benyuan-blog',
    repoId: 'R_kgDOTG6lDw',
    category: 'Announcements',
    categoryId: 'DIC_kwDOTG6lD84DAAkb',
  },
  // Buttondown 订阅：把 yourname 换成你的 Buttondown 用户名
  buttondownUser: 'yourname',
  // YouTube 频道地址（文章末尾的关注引导指向这里）
  youtube: 'https://youtube.com/@gaohailu',
};

export const UI = {
  zh: {
    brandMark: '本源',
    brandName: '随笔',
    navBlog: '文章',
    navAbout: '关于',
    heroEyebrow: '个人写作',
    heroTitle: '把想清楚的事，写下来',
    heroDesc: '关于经济、系统与一个人如何按自己的方式活一次的长期笔记。',
    latest: '最新文章',
    back: '← 返回文章列表',
    subscribeTitle: '订阅更新',
    subscribeDesc: '新文章发布时收到一封邮件，没有广告，随时退订。',
    subscribePlaceholder: '你的邮箱地址',
    subscribeButton: '订阅',
    commentsLabel: '评论',
    followLine: '想追更新，可以关注我的 YouTube 频道 →',
    footerNote: '以 CC BY-NC-ND 4.0 授权',
    otherLang: 'EN',
    otherLangPath: (p) => p.replace(/^\/zh/, '/en'),
  },
  en: {
    brandMark: 'Benyuan',
    brandName: 'Notes',
    navBlog: 'Writing',
    navAbout: 'About',
    heroEyebrow: 'Personal Writing',
    heroTitle: 'Write down what you have thought through',
    heroDesc: 'Long-form notes on economics, systems, and how a person might live once on their own terms.',
    latest: 'Latest',
    back: '← Back to all writing',
    subscribeTitle: 'Subscribe',
    subscribeDesc: 'Get an email when a new piece goes up. No ads, unsubscribe anytime.',
    subscribePlaceholder: 'your@email.com',
    subscribeButton: 'Subscribe',
    commentsLabel: 'Comments',
    followLine: 'Want new pieces as they go up? Follow on YouTube →',
    footerNote: 'Licensed under CC BY-NC-ND 4.0',
    otherLang: '中文',
    otherLangPath: (p) => p.replace(/^\/en/, '/zh'),
  },
};

export function fmtDate(date, lang) {
  return new Intl.DateTimeFormat(lang === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  }).format(date);
}
