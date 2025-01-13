import { defineConfig } from "vitepress";
import container from 'markdown-it-container'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FUNFE",
  description: "让代码变得有趣",
  lang: 'zh-CN',
  base: '/',
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3451b2' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: 'javascript学习记录', link: '/class/js/index.md' },
      { text: '在线编辑器', link: '/playground/' },
      { text: '博客', link: 'https://blog.funfe.cn' }
    ],

    sidebar: {
      '/class/js/': [
        {
          text: '基础概念',
          collapsed: false,
          items: [
            { text: '第一章 什么是JavaScript', link: '/class/js/1' },
            { text: '第二章 HTML中的JavaScript', link: '/class/js/2' },
            { text: '第三章 语言基础', link: '/class/js/3' }
          ]
        },
        {
          text: '核心概念',
          collapsed: false,
          items: [
            { text: '第四章 变量、作用域与内存', link: '/class/js/4' },
            { text: '第五章 基本引用类型', link: '/class/js/5' },
            { text: '第六章 集合引用类型', link: '/class/js/6' }
          ]
        },
        {
          text: '进阶内容',
          collapsed: false,
          items: [
            { text: '第七章 迭代器与生成器', link: '/class/js/7' },
            { text: '第八章 对象、类与面向对象编程', link: '/class/js/8' },
            { text: '第九章 代理与反射', link: '/class/js/9' },
            { text: '第十章 函数', link: '/class/js/10' },
            { text: '第十一章 期约与异步函数', link: '/class/js/11' }
          ]
        },
        {
          text: '浏览器相关',
          collapsed: false,
          items: [
            { text: '第十二章 BOM', link: '/class/js/12' },
            { text: '第十三章 客户端检测', link: '/class/js/13' },
            { text: '第十四章 DOM', link: '/class/js/14' },
            { text: '第十五章 DOM 扩展', link: '/class/js/15' },
            { text: '第十六章 DOM2 和 DOM3', link: '/class/js/16' },
            { text: '第十七章 事件', link: '/class/js/17' }
          ]
        },
        {
          text: '高级特性',
          collapsed: false,
          items: [
            { text: '第十八章 动画与Canvas图形', link: '/class/js/18' },
            { text: '第十九章 表单脚本', link: '/class/js/19' },
            { text: '第二十章 JavaScript API', link: '/class/js/20' },
            { text: '第二十一章 错误处理与调试', link: '/class/js/21' },
            { text: '第二十二章 处理XML', link: '/class/js/22' },
            { text: '第二十三章 JSON', link: '/class/js/23' }
          ]
        },
        {
          text: '现代特性',
          collapsed: false,
          items: [
            { text: '第二十四章 网络请求与远程资源', link: '/class/js/24' },
            { text: '第二十五章 客户端存储', link: '/class/js/25' },
            { text: '第二十六章 模块', link: '/class/js/26' },
            { text: '第二十七章 工作者线程', link: '/class/js/27' },
            { text: '第二十八章 最佳实践', link: '/class/js/28' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2025-present FUNFE'
    },

    // 搜索配置
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },

    // 文档页脚文本配置
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    // 大纲配置
    outline: {
      level: [2, 3],
      label: '页面导航'
    },

    // 最后更新时间文本
    lastUpdatedText: '最后更新于',

    // 暗色模式开关文本
    darkModeSwitchLabel: '主题',
    
    // 移动端菜单文本
    sidebarMenuLabel: '菜单',

    // 返回顶部文本
    returnToTopLabel: '返回顶部',

    // 语言切换文本
    langMenuLabel: '切换语言'
  },
  markdown: {
    config: (md) => {
      md.use(container, 'playground', {
        validate: function(params) {
          return params.trim().match(/^playground/)
        },
        render: function(tokens, idx) {
          if (tokens[idx].nesting === 1) {
            const content = tokens[idx + 1].content
            // 对 HTML 结束标签进行转义
            const escapedContent = content.replace(/<\//g, '<\\/')
            return `<CodePlayground code="${encodeURIComponent(escapedContent)}">\n`
          } else {
            return '</CodePlayground>\n'
          }
        }
      })
    }
  }
})
