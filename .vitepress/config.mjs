import { defineConfig } from "vitepress";


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FUNFE",
  description: "专注前端技术分享与少儿编程教育的在线学习平台，提供JavaScript教程、Vue开发、图形化编程等优质内容，以及Base64转换、URL编解码、JSON格式化等实用在线工具",
  lang: 'zh-CN',
  base: '/',
  lastUpdated: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'canonical', href: 'https://funfe.cn' }],
    ['meta', { name: 'theme-color', content: '#3451b2' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'format-detection', content: 'telephone=no,email=no' }],
    ['meta', { name: 'author', content: 'FUNFE Team' }],
    ['meta', { name: 'keywords', content: 'JavaScript教程,Vue3教程,前端开发,少儿编程,图形化编程,Scratch教程,Web开发,前端框架,编程思维,项目实战,Base64转换器,URL编解码工具,JSON格式化工具,HTML实体转换,图片转Base64,在线调色板,颜色转换器,渐变生成器' }],
    ['meta', { name: 'description', content: '专注前端技术分享与少儿编程教育的在线学习平台，提供JavaScript教程、Vue开发、图形化编程等优质内容，以及Base64转换、URL编解码、JSON格式化等实用在线工具' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    ['meta', { name: 'googlebot', content: 'index, follow' }],
    ['meta', { name: 'baidu-site-verification', content: '' }], // 百度站长验证，需要填入验证码
    ['meta', { name: 'google-site-verification', content: '' }], // Google站长验证，需要填入验证码
    
    // Open Graph tags for social media
    ['meta', { property: 'og:title', content: 'FUNFE - 探索前端技术，启发编程思维 | 在线工具集' }],
    ['meta', { property: 'og:description', content: '专注前端技术分享与少儿编程教育的在线学习平台，提供JavaScript教程、Vue开发、图形化编程等优质内容，以及Base64转换、URL编解码、JSON格式化等实用在线工具' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://funfe.cn' }],
    ['meta', { property: 'og:image', content: 'https://funfe.cn/images/og-image.jpg' }],
    ['meta', { property: 'og:site_name', content: 'FUNFE' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    
    // Twitter Card tags
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@funfe_cn' }],
    ['meta', { name: 'twitter:creator', content: '@funfe_cn' }],
    ['meta', { name: 'twitter:title', content: 'FUNFE - 探索前端技术，启发编程思维 | 在线工具集' }],
    ['meta', { name: 'twitter:description', content: '专注前端技术分享与少儿编程教育的在线学习平台，提供JavaScript教程、Vue开发、图形化编程等优质内容，以及Base64转换、URL编解码、JSON格式化等实用在线工具' }],
    ['meta', { name: 'twitter:image', content: 'https://funfe.cn/images/twitter-card.jpg' }],
    
    // PWA tags
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'application-name', content: 'FUNFE' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'FUNFE' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/images/icons/apple-touch-icon.png' }],
    ['link', { rel: 'mask-icon', href: '/images/icons/safari-pinned-tab.svg', color: '#3451b2' }],
    ['meta', { name: 'msapplication-TileColor', content: '#3451b2' }],
    ['meta', { name: 'msapplication-config', content: '/browserconfig.xml' }],

    // Analytics
    ['script', {
      async: true,
      src: 'https://cdn.counter.dev/script.js',
      'data-id': 'e5e1bf1c-e339-41ba-8502-dd9b7815447d',
      'data-utcoffset': '8'
    }],
   
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/logo.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: 'JS学习记录', link: '/class/js/index.md' },
     
      {
        text: '在线工具',
        items: [
          {
            text: '编码工具',
            items: [
              { text: 'Base64 转换', link: '/tools/encoding/base64' },
              { text: 'URL 编解码', link: '/tools/encoding/url' },
              { text: 'JSON 格式化', link: '/tools/encoding/json' },
              { text: 'HTML 实体转换', link: '/tools/encoding/html-entity' },
            ]
          },
          {
            text: '图片工具',
            items: [
              { text: '图片转 Base64', link: '/tools/image/to-base64' },
            ]
          },
          {
            text: '颜色工具',
            items: [
              { text: '调色板', link: '/tools/color/picker' },
              { text: '颜色转换', link: '/tools/color/converter' },
              { text: '渐变生成器', link: '/tools/color/gradient' },
            ]
          },
        ]
      },
      {
        text: '休闲一下',
        items: [
          {
            text: '小游戏',
            items: [
              { text: '贪吃蛇', link: '/games/snake' },
              { text: '俄罗斯方块', link: '/games/tetris' },
              { text: '2048', link: '/games/2048' },
              { text: '扫雷', link: '/games/minesweeper' },
              { text: '打砖块', link: '/games/breakout' },
              { text: '数独', link: '/games/sudoku' }
            ]
          },
        ]
      },
      {
        text: '少儿编程',
        link: '/kids/index.md'
      },
      {
        text: '问AI',
        link: 'https://yuanbao.tencent.com/chat/SdEAG1rI5fAw',
        class: 'nav-ai-link'
      },
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
      ],
      '/tools/': [
        {
          text: '编码工具',
          collapsed: false,
          items: [
            { text: 'Base64 转换', link: '/tools/encoding/base64' },
            { text: 'URL 编解码', link: '/tools/encoding/url' },
            { text: 'JSON 格式化', link: '/tools/encoding/json' },
            { text: 'HTML 实体转换', link: '/tools/encoding/html-entity' },
          ]
        },
        {
          text: '图片工具',
          collapsed: false,
          items: [
            { text: '图片转 Base64', link: '/tools/image/to-base64' },
          ]
        },
        {
          text: '颜色工具',
          collapsed: false,
          items: [
            { text: '调色板', link: '/tools/color/picker' },
            { text: '颜色转换', link: '/tools/color/converter' },
            { text: '渐变生成器', link: '/tools/color/gradient' },
          ]
        },
      ],
      '/games/': [
       {
          text:'小游戏',
          collapsed: false,
          items: [
            { text: '贪吃蛇', link: '/games/snake' },
            { text: '俄罗斯方块', link: '/games/tetris' },
            { text: '2048', link: '/games/2048' },
            { text: '扫雷', link: '/games/minesweeper' },
            { text: '打砖块', link: '/games/breakout' },
            { text: '数独', link: '/games/sudoku' }
          ]
        }
      ],
      '/kids/': [
        {
          text: '启蒙阶段 (3-6岁)',
          collapsed: false,
          items: [
            {
              text: '图形认知',
              link: '/kids/basic/shapes/index',
              items: [
                { text: '认识基本图形', link: '/kids/basic/shapes/basic' },
                { text: '图形组合', link: '/kids/basic/shapes/combine' },
                { text: '趣味拼图', link: '/kids/basic/shapes/puzzle' }
              ]
            },
            {
              text: '颜色世界',
              link: '/kids/basic/colors/index',
              items: [
                { text: '基本颜色', link: '/kids/basic/colors/primary' },
                { text: '颜色混合', link: '/kids/basic/colors/mixing' },
                { text: '绘画练习', link: '/kids/basic/colors/painting' }
              ]
            },
            {
              text: '数字游戏',
              link: '/kids/basic/numbers/index',
              items: [
                { text: '数字认知', link: '/kids/basic/numbers/counting' },
                { text: '简单计算', link: '/kids/basic/numbers/math' },
                { text: '数字序列', link: '/kids/basic/numbers/sequence' }
              ]
            },
            {
              text: '简单动画',
              link: '/kids/basic/simple-animation/index',
              items: [
                { text: '动画基础', link: '/kids/basic/simple-animation/basics' },
                { text: '角色动画', link: '/kids/basic/simple-animation/characters' },
                { text: '场景切换', link: '/kids/basic/simple-animation/scenes' }
              ]
            },
            {
              text: '趣味编程',
              link: '/kids/basic/fun-coding/index',
              items: [
                { text: '图形化编程入门', link: '/kids/basic/fun-coding/intro' },
                { text: '简单指令操作', link: '/kids/basic/fun-coding/commands' },
                { text: '趣味小项目', link: '/kids/basic/fun-coding/projects' }
              ]
            }
          ]
        },
        {
          text: '基础阶段 (7-9岁)',
          collapsed: false,
          items: [
            {
              text: '图形绘制',
              link: '/kids/intermediate/drawing/index',
              items: [
                { text: '基础绘图命令', link: '/kids/intermediate/drawing/commands' },
                { text: '图案设计', link: '/kids/intermediate/drawing/patterns' },
                { text: '动画制作', link: '/kids/intermediate/drawing/animation' }
              ]
            },
            {
              text: '序列与循环',
              link: '/kids/intermediate/loops',
              items: [
                { text: '程序流程', link: '/kids/intermediate/loops/flow' },
                { text: '循环结构', link: '/kids/intermediate/loops/repeat' },
                { text: '条件判断', link: '/kids/intermediate/loops/conditions' }
              ]
            },
            {
              text: '互动故事创作',
              link: '/kids/intermediate/interactive-stories',
              items: [
                { text: '故事构思', link: '/kids/intermediate/interactive-stories/planning' },
                { text: '场景设计', link: '/kids/intermediate/interactive-stories/scenes' },
                { text: '交互实现', link: '/kids/intermediate/interactive-stories/interaction' }
              ]
            }
          ]
        },
        {
          text: '进阶阶段 (10-12岁)',
          collapsed: false,
          items: [
            {
              text: '项目开发',
              link: '/kids/advanced/projects',
              items: [
                { text: '游戏设计', link: '/kids/advanced/projects/games' },
                { text: '动画制作', link: '/kids/advanced/projects/animations' },
                { text: '交互应用', link: '/kids/advanced/projects/interactive' }
              ]
            },
            {
              text: '算法思维',
              link: '/kids/advanced/algorithms',
              items: [
                { text: '基础算法', link: '/kids/advanced/algorithms/basics' },
                { text: '问题解决', link: '/kids/advanced/algorithms/problem-solving' },
                { text: '逻辑训练', link: '/kids/advanced/algorithms/logic' }
              ]
            },
            {
              text: '网页设计基础',
              link: '/kids/advanced/web-basics',
              items: [
                { text: 'HTML基础', link: '/kids/advanced/web-basics/html' },
                { text: 'CSS入门', link: '/kids/advanced/web-basics/css' },
                { text: '简单交互', link: '/kids/advanced/web-basics/interaction' }
              ]
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/funfe-dev' },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-1 17.93c-3.95-.49-7-3.85-7-7.93c0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2zM17.9 15.39A2 2 0 0 1 16 17h-1v-1c0-1.1-.9-2-2-2h-2v-2h2c1.1 0 2-.9 2-2V8h2c1.1 0 2-.9 2-2V4.59c2.93 1.19 5 4.06 5 7.41c0 2.08-.8 3.97-2.1 5.39"/></svg>'
        },
        link: '/license'
      }
    ],

    footer: {
      message: '本站内容采用 "署名-非商业性使用-禁止演绎 4.0 国际许可协议" 进行许可',
      copyright: `Copyright © ${new Date().getFullYear()} FUNFE. All Rights Reserved.`
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
  vite: {
    optimizeDeps: {
      include: ['three']
    },
    ssr: {
      noExternal: ['monaco-editor']
    },
    build: {
      chunkSizeWarningLimit: 1000 // 增加代码分割警告限制
    }
  },
  sitemap: {
    hostname: 'https://funfe.cn',
    changefreq: 'weekly'
  },
  markdown: {
    headers: {
      level: [0, 0] // 不自动生成标题链接
    },
    // 自动为外部链接添加 target="_blank" 和 rel="noopener noreferrer"
    externalLinks: {
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  }
})
