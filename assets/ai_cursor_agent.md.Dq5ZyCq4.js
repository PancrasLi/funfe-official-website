import{_ as n,c as l,o as e,ag as s}from"./chunks/framework.ZWmXjvV8.js";const g=JSON.parse('{"title":"Cursor Agent 智能代理","description":"","frontmatter":{},"headers":[],"relativePath":"ai/cursor/agent.md","filePath":"ai/cursor/agent.md","lastUpdated":1741509637000}'),i={name:"ai/cursor/agent.md"};function r(t,a,o,p,u,c){return e(),l("div",null,a[0]||(a[0]=[s(`<h1 id="cursor-agent-智能代理" tabindex="-1">Cursor Agent 智能代理 <a class="header-anchor" href="#cursor-agent-智能代理" aria-label="Permalink to &quot;Cursor Agent 智能代理&quot;">​</a></h1><blockquote><p><strong>免责声明</strong>：本文档是 <a href="https://docs.cursor.com/agent" target="_blank" rel="noopener noreferrer">Cursor 官方文档中的 Agent 智能代理页面</a>的<strong>第三方非官方中文翻译</strong>，仅供学习参考。内容可能不完全反映最新的官方信息，请以 <a href="https://docs.cursor.com" target="_blank" rel="noopener noreferrer">Cursor 官方文档</a> 为准。所有商标和版权归 Cursor/Anysphere 公司所有。</p></blockquote><blockquote><p>本文档介绍 Cursor 的 Agent 智能代理功能，这是一个功能强大的 AI 结对编程助手，能够理解复杂的代码库并帮助实现更大规模的代码更改。</p></blockquote><hr><h2 id="什么是-agent" tabindex="-1">什么是 Agent？ <a class="header-anchor" href="#什么是-agent" aria-label="Permalink to &quot;什么是 Agent？&quot;">​</a></h2><p>Cursor Agent 是一个强大的 AI 结对编程助手，专为处理复杂的代码编写和修改任务而设计。与仅提供补全的传统 AI 编码工具不同，Agent 可以：</p><ul><li>理解整个代码库及其结构</li><li>独立执行需要多个步骤的复杂任务</li><li>运行命令行程序获取所需信息</li><li>处理跨多个文件的大规模代码更改</li><li>根据您的反馈迭代改进解决方案</li></ul><p>Agent 就像拥有自己的思维过程的高级开发者，能够从头开始构建功能，修复复杂错误，或者重构大型代码库。</p><h2 id="如何启动-agent" tabindex="-1">如何启动 Agent <a class="header-anchor" href="#如何启动-agent" aria-label="Permalink to &quot;如何启动 Agent&quot;">​</a></h2><p>有多种方式可以启动 Agent：</p><ol><li><p><strong>通过 Composer</strong>：</p><ul><li>按下 <code>Ctrl+I</code> / <code>⌘+I</code> 打开 Composer</li><li>选择 &quot;Agent&quot; 模式</li><li>描述您希望 Agent 完成的任务</li></ul></li><li><p><strong>通过 Agent 按钮</strong>：</p><ul><li>在编辑器底部状态栏中点击 &quot;Agent&quot; 按钮</li><li>在弹出的窗口中描述您的任务</li></ul></li><li><p><strong>通过命令面板</strong>：</p><ul><li>打开命令面板（<code>Ctrl+Shift+P</code> / <code>⌘+Shift+P</code>）</li><li>搜索并选择 &quot;Cursor: Start Agent&quot;</li></ul></li></ol><h2 id="与-agent-协作" tabindex="-1">与 Agent 协作 <a class="header-anchor" href="#与-agent-协作" aria-label="Permalink to &quot;与 Agent 协作&quot;">​</a></h2><h3 id="提供任务描述" tabindex="-1">提供任务描述 <a class="header-anchor" href="#提供任务描述" aria-label="Permalink to &quot;提供任务描述&quot;">​</a></h3><p>启动 Agent 后，您需要简洁而具体地描述您希望它完成的任务。例如：</p><p>✅ 好的任务描述：</p><ul><li>&quot;创建一个新的用户注册表单，带有电子邮件验证和密码强度检查&quot;</li><li>&quot;修复导航栏在移动设备上不能正确折叠的问题&quot;</li><li>&quot;重构 UserService 类，将数据库操作分离到单独的类中&quot;</li></ul><p>❌ 不太有效的任务描述：</p><ul><li>&quot;修复代码&quot; (太模糊)</li><li>&quot;做一个完整的电子商务网站&quot; (范围太广)</li><li>&quot;提高性能&quot; (没有具体目标)</li></ul><h3 id="监督与反馈" tabindex="-1">监督与反馈 <a class="header-anchor" href="#监督与反馈" aria-label="Permalink to &quot;监督与反馈&quot;">​</a></h3><p>Agent 会以对话的形式工作，向您提出问题，提出建议，并让您知道它正在执行的操作。您可以：</p><ul><li>回答 Agent 的问题，提供额外信息</li><li>批准或拒绝 Agent 建议的更改</li><li>提供反馈和修正，指导 Agent 朝正确的方向前进</li><li>在需要时暂停 Agent 并提供新的指令</li></ul><h2 id="agent-的核心功能" tabindex="-1">Agent 的核心功能 <a class="header-anchor" href="#agent-的核心功能" aria-label="Permalink to &quot;Agent 的核心功能&quot;">​</a></h2><h3 id="代码理解与生成" tabindex="-1">代码理解与生成 <a class="header-anchor" href="#代码理解与生成" aria-label="Permalink to &quot;代码理解与生成&quot;">​</a></h3><p>Agent 能够理解复杂的代码库，并生成符合项目风格和最佳实践的新代码。它特别擅长：</p><ul><li>分析代码库的结构和组件之间的关系</li><li>理解现有代码的模式和约定</li><li>生成与项目风格一致的新代码</li><li>识别并应用适当的设计模式</li></ul><h3 id="代码库探索" tabindex="-1">代码库探索 <a class="header-anchor" href="#代码库探索" aria-label="Permalink to &quot;代码库探索&quot;">​</a></h3><p>Agent 可以探索您的代码库，找到相关文件和功能：</p><ul><li>浏览目录结构，了解项目组织</li><li>搜索与任务相关的代码</li><li>识别需要修改的文件</li><li>分析依赖关系和导入/导出</li></ul><h3 id="终端命令执行" tabindex="-1">终端命令执行 <a class="header-anchor" href="#终端命令执行" aria-label="Permalink to &quot;终端命令执行&quot;">​</a></h3><p>Agent 可以执行终端命令来获取信息或完成任务的一部分：</p><ul><li>运行测试和验证更改</li><li>安装所需的依赖</li><li>执行构建和编译步骤</li><li>运行 linter 或其他代码质量工具</li></ul><h3 id="多文件编辑" tabindex="-1">多文件编辑 <a class="header-anchor" href="#多文件编辑" aria-label="Permalink to &quot;多文件编辑&quot;">​</a></h3><p>Agent 可以在多个文件中进行协调一致的更改：</p><ul><li>同时修改相关文件</li><li>确保更改在所有相关文件中保持一致</li><li>处理文件之间的依赖关系</li><li>创建新文件并集成到项目中</li></ul><h2 id="使用场景" tabindex="-1">使用场景 <a class="header-anchor" href="#使用场景" aria-label="Permalink to &quot;使用场景&quot;">​</a></h2><p>Agent 适用于多种开发场景：</p><h3 id="功能开发" tabindex="-1">功能开发 <a class="header-anchor" href="#功能开发" aria-label="Permalink to &quot;功能开发&quot;">​</a></h3><p>Agent 可以帮助实现新功能，从设计到完整实现：</p><ul><li>创建新的 UI 组件</li><li>实现后端服务和 API</li><li>添加新功能到现有系统</li><li>构建整个功能模块</li></ul><h3 id="调试与修复" tabindex="-1">调试与修复 <a class="header-anchor" href="#调试与修复" aria-label="Permalink to &quot;调试与修复&quot;">​</a></h3><p>Agent 能够诊断和修复复杂的问题：</p><ul><li>分析错误消息和堆栈跟踪</li><li>定位并修复 bug</li><li>解决性能问题</li><li>修复兼容性问题</li></ul><h3 id="重构和优化" tabindex="-1">重构和优化 <a class="header-anchor" href="#重构和优化" aria-label="Permalink to &quot;重构和优化&quot;">​</a></h3><p>Agent 可以帮助改进现有代码：</p><ul><li>重构大型类或函数</li><li>提取公共功能到共享组件</li><li>更新代码以使用新的库或模式</li><li>优化算法和性能瓶颈</li></ul><h3 id="代码研究与学习" tabindex="-1">代码研究与学习 <a class="header-anchor" href="#代码研究与学习" aria-label="Permalink to &quot;代码研究与学习&quot;">​</a></h3><p>Agent 可以帮助您理解陌生的代码：</p><ul><li>解释复杂的代码部分</li><li>提供现有功能的概述</li><li>识别代码库中使用的模式</li><li>解释如何扩展现有功能</li></ul><h2 id="最佳实践" tabindex="-1">最佳实践 <a class="header-anchor" href="#最佳实践" aria-label="Permalink to &quot;最佳实践&quot;">​</a></h2><h3 id="与-agent-有效协作" tabindex="-1">与 Agent 有效协作 <a class="header-anchor" href="#与-agent-有效协作" aria-label="Permalink to &quot;与 Agent 有效协作&quot;">​</a></h3><ol><li><strong>提供明确的上下文</strong>：告诉 Agent 关于项目的背景和您的具体目标</li><li><strong>分解复杂任务</strong>：将大型任务分解为更小的子任务</li><li><strong>耐心等待</strong>：复杂任务可能需要几分钟的时间让 Agent 探索和思考</li><li><strong>提供建设性反馈</strong>：如果 Agent 的方向不对，提供具体的指导</li><li><strong>使用自然语言</strong>：使用简明的自然语言，就像与真人搭档交流一样</li></ol><h3 id="提高-agent-效率" tabindex="-1">提高 Agent 效率 <a class="header-anchor" href="#提高-agent-效率" aria-label="Permalink to &quot;提高 Agent 效率&quot;">​</a></h3><ol><li><strong>保持良好的代码库结构</strong>：组织良好的项目更容易被 Agent 理解</li><li><strong>提供相关资料</strong>：参考文档、示例代码或设计要求可以帮助 Agent 更好地理解任务</li><li><strong>使用类型注释</strong>：强类型使 Agent 更容易理解代码的预期行为</li><li><strong>明确范围</strong>：指明任务的边界和预期输出</li><li><strong>启用代码库索引</strong>：确保您的项目已被 Cursor 索引以获得最佳结果</li></ol><h2 id="故障排除" tabindex="-1">故障排除 <a class="header-anchor" href="#故障排除" aria-label="Permalink to &quot;故障排除&quot;">​</a></h2><h3 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-label="Permalink to &quot;常见问题&quot;">​</a></h3><ol><li><p><strong>Agent 生成不正确的代码</strong></p><ul><li>提供更明确的指示和上下文</li><li>指出具体问题并要求修正</li></ul></li><li><p><strong>Agent 似乎被卡住或循环</strong></p><ul><li>停止当前任务并用更具体的说明重新开始</li><li>将大型任务分解为更小的步骤</li></ul></li><li><p><strong>Agent 对代码库的理解有限</strong></p><ul><li>确保代码库已被正确索引</li><li>提供关键文件的明确路径</li><li>简要解释代码库的结构</li></ul></li></ol><h3 id="获取帮助" tabindex="-1">获取帮助 <a class="header-anchor" href="#获取帮助" aria-label="Permalink to &quot;获取帮助&quot;">​</a></h3><p>如果您在使用 Agent 时遇到问题：</p><ul><li>查看 Cursor 的常见问题解答和故障排除指南</li><li>访问 <a href="https://forum.cursor.com" target="_blank" rel="noopener noreferrer">Cursor 社区论坛</a> 寻求帮助</li><li>提交详细的反馈报告给 Cursor 团队</li></ul><hr><h2 id="示例用法" tabindex="-1">示例用法 <a class="header-anchor" href="#示例用法" aria-label="Permalink to &quot;示例用法&quot;">​</a></h2><h3 id="示例-1-实现新功能" tabindex="-1">示例 1：实现新功能 <a class="header-anchor" href="#示例-1-实现新功能" aria-label="Permalink to &quot;示例 1：实现新功能&quot;">​</a></h3><p><strong>任务</strong>：添加一个用户注册表单到我们的 React 应用</p><p><strong>与 Agent 的交互</strong>：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>您：我需要在我们的 React 应用中添加一个新的用户注册表单。表单需要包含姓名、电子邮件和密码字段，并且在提交前验证所有字段。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Agent：我会帮您实现这个注册表单。首先，我需要了解您项目的一些情况：</span></span>
<span class="line"><span>1. 您使用的是哪种表单管理方式？是 React Hook Form、Formik 还是原生 React 状态？</span></span>
<span class="line"><span>2. 您使用的是哪种 UI 库？如 Material-UI、Ant Design 或纯 CSS？</span></span>
<span class="line"><span>3. 表单提交后应该执行什么操作？如 API 调用、状态更新等？</span></span>
<span class="line"><span></span></span>
<span class="line"><span>您：我们使用 React Hook Form 和 Material-UI。成功提交后，需要调用 /api/register 端点并在成功后重定向到登录页面。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Agent：明白了，我会开始实施该功能。让我首先创建一个新的 RegisterForm 组件...</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="示例-2-调试问题" tabindex="-1">示例 2：调试问题 <a class="header-anchor" href="#示例-2-调试问题" aria-label="Permalink to &quot;示例 2：调试问题&quot;">​</a></h3><p><strong>任务</strong>：修复登录过程中的身份验证问题</p><p><strong>与 Agent 的交互</strong>：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>您：当用户尝试登录时，后端返回 401 错误，但日志中没有显示任何有用的信息。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Agent：我将帮助您排查这个登录认证问题。我需要查看几个关键部分：</span></span>
<span class="line"><span>1. 前端登录请求的代码</span></span>
<span class="line"><span>2. 后端的身份验证处理器</span></span>
<span class="line"><span>3. 任何相关的中间件或拦截器</span></span>
<span class="line"><span></span></span>
<span class="line"><span>让我先查看前端登录逻辑...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[Agent 分析代码后]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我注意到前端发送请求时 Authorization 标头的格式不正确。它使用的是 &quot;Bearer token&quot;，但您的后端中间件期望的格式是 &quot;Token token&quot;。这可能是导致 401 错误的原因。</span></span>
<span class="line"><span></span></span>
<span class="line"><span>我建议更改前端的认证标头格式或更新后端中间件以接受当前格式。您希望我采取哪种方法？</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><hr><p>Agent 是 Cursor 最强大的功能之一，能够作为真正的编程伙伴帮助您完成从简单到复杂的各种编码任务。通过有效利用 Agent，您可以显著提高开发效率和代码质量。</p><p>如有任何问题，请参考<a href="/ai/cursor/faq.html">常见问题解答</a>或访问<a href="https://forum.cursor.com" target="_blank" rel="noopener noreferrer">社区论坛</a>寻求帮助。</p>`,72)]))}const d=n(i,[["render",r]]);export{g as __pageData,d as default};
