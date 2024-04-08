import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FUN-FE",
  description: "乐前端",
  themeConfig: {
    lang:'zh-CN',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '博客', link: 'https://blog.funfe.cn/' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pancrasli' }
    ]
  }
})
