import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FUNFE",
  description: "一个循序渐进的前端学习网站",
  themeConfig: {
    lang: "zh-CN",
    nav: [
      { text: "首页", link: "/" },
      { text: "javascript高级程序设计", link: "/class/js/index" },
      { text: "博客", link: "https://blog.funfe.cn/" },
    ],
    outline:{
      label: '页面导航'
    },
    sidebar: {
      "/class/js/": {
        text: "javascript高级程序设计",
        items: [
          { text: "开始", link: "/class/js/index" },
          { text: "内容", link: "/class/js/index" },
         
        ],
      },
    },
    socialLinks: [{ icon: "github", link: "https://github.com/pancrasli" }],
  },
});
