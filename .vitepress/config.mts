import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "wfc-blog",
  description: "记录技术探索，分享编程心得",
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '📝 文章', link: '/articles/hello-world' },
      { text: '🙋 关于', link: '/about' }
    ],

    sidebar: {
      '/articles/': [
        {
          text: '文章列表',
          items: [
            { text: 'Hello World', link: '/articles/hello-world' },
            { text: 'Markdown 扩展', link: '/articles/markdown-guide' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],

    footer: {
      message: 'Powered by VitePress',
      copyright: 'Copyright © 2026 wfc-blog'
    },

    outline: {
      level: [2, 3],
      label: '目录'
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },

    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    lastUpdated: {
      text: '最后更新于'
    }
  }
})
