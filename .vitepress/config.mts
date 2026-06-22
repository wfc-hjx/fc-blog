import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "wfc-blog",
  description: "记录技术探索，分享编程心得",
  lang: 'zh-CN',
  cleanUrls: true,
  lastUpdated: true,

  base: "/fc-blog/",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '🏠 首页', link: '/' },
      {
        text: '📝 文章',
        items: [
          { text: '全部文章', link: '/articles/' },
          { text: '🧠 AI', link: '/articles/ai/' },
          { text: '🧩 前端', link: '/articles/frontend/' },
          { text: '⚙️ 后端', link: '/articles/backend/' },
          { text: '🌱 生活', link: '/articles/life/' },
        ]
      },
      { text: '🔧 项目', link: '/projects' },
      { text: '🙋 关于', link: '/about' }
    ],

    sidebar: {
      '/articles/ai/': [
        {
          text: 'AI / 机器学习',
          items: [
            { text: '概述', link: '/articles/ai/' },
          ]
        }
      ],
      '/articles/frontend/': [
        {
          text: '前端开发',
          items: [
            { text: '概述', link: '/articles/frontend/' },
            { text: 'Markdown 写作指南', link: '/articles/frontend/markdown-guide' },
          ]
        }
      ],
      '/articles/backend/': [
        {
          text: '后端开发',
          items: [
            { text: '概述', link: '/articles/backend/' },
          ]
        }
      ],
      '/articles/life/': [
        {
          text: '生活随记',
          items: [
            { text: '概述', link: '/articles/life/' },
            { text: 'Hello World', link: '/articles/life/hello-world' },
          ]
        }
      ],
      '/articles/': [
        {
          text: '文章列表',
          items: [
            { text: '全部文章', link: '/articles/' },
            { text: '🧠 AI', link: '/articles/ai/' },
            { text: '🧩 前端', link: '/articles/frontend/' },
            { text: '⚙️ 后端', link: '/articles/backend/' },
            { text: '🌱 生活', link: '/articles/life/' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/wfc-hjx/fc-blog' }
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
