import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FUNFE",
  description: "一个循序渐进的前端学习网站",
  themeConfig: {
    lang: "zh-CN",
    nav: [
      { text: "首页", link: "/" },
      { text: "js权威指南", link: "/class/js/index" },
      { text: "博客", link: "https://blog.funfe.cn/" },
    ],
    outline:{
      label: '页面导航'
    },
    sidebar: {
      "/class/js/": {
        text: "js权威指南",
        items: [
          { text: "开始", link: "/class/js/index" },
         
        ],
      },
    },
    socialLinks: [{ icon: "github", link: "https://github.com/pancrasli" }],
  },
});
