import{_ as a,c as i,o as n,ag as e}from"./chunks/framework.CPp4lspA.js";const c=JSON.parse('{"title":"Cursor AI 规则","description":"","frontmatter":{},"headers":[],"relativePath":"ai/cursor/rules-for-ai.md","filePath":"ai/cursor/rules-for-ai.md","lastUpdated":1741509101000}'),l={name:"ai/cursor/rules-for-ai.md"};function p(t,s,h,r,k,d){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="cursor-ai-规则" tabindex="-1">Cursor AI 规则 <a class="header-anchor" href="#cursor-ai-规则" aria-label="Permalink to &quot;Cursor AI 规则&quot;">​</a></h1><blockquote><p><strong>免责声明</strong>：本文档是关于 Cursor AI 规则功能的<strong>第三方非官方中文文档</strong>，仅供学习参考。内容可能不完全反映最新的官方信息，请以 <a href="https://docs.cursor.com" target="_blank" rel="noopener noreferrer">Cursor 官方文档</a> 为准。所有商标和版权归 Cursor/Anysphere 公司所有。</p></blockquote><blockquote><p>本文档介绍如何在 Cursor 中设置 AI 规则，以便更好地控制和引导 AI 的行为与输出风格。</p></blockquote><hr><h2 id="什么是-ai-规则" tabindex="-1">什么是 AI 规则？ <a class="header-anchor" href="#什么是-ai-规则" aria-label="Permalink to &quot;什么是 AI 规则？&quot;">​</a></h2><p>AI 规则是一组指令，告诉 Cursor 的 AI 如何响应您的查询和请求。通过设置这些规则，您可以指导 AI 以特定的风格、格式或方法来回答问题或生成代码，使其输出更加符合您的期望和项目需求。</p><h2 id="创建和使用-ai-规则" tabindex="-1">创建和使用 AI 规则 <a class="header-anchor" href="#创建和使用-ai-规则" aria-label="Permalink to &quot;创建和使用 AI 规则&quot;">​</a></h2><p>在 Cursor 中，您可以通过以下方式创建和使用 AI 规则：</p><h3 id="_1-全局规则设置" tabindex="-1">1. 全局规则设置 <a class="header-anchor" href="#_1-全局规则设置" aria-label="Permalink to &quot;1. 全局规则设置&quot;">​</a></h3><p>全局 AI 规则适用于您与 Cursor AI 的所有交互：</p><ol><li>打开 Cursor 设置（⌘ + , 或 Ctrl + ,）</li><li>导航至 &quot;AI&quot; 或 &quot;AI 设置&quot; 部分</li><li>找到 &quot;AI 规则&quot; 或类似设置</li><li>添加您希望 AI 始终遵循的指导原则</li></ol><h3 id="_2-项目特定规则" tabindex="-1">2. 项目特定规则 <a class="header-anchor" href="#_2-项目特定规则" aria-label="Permalink to &quot;2. 项目特定规则&quot;">​</a></h3><p>对于特定项目或代码库，您可以创建专门的规则：</p><ol><li>在项目根目录创建 <code>.cursor</code> 文件夹（如果尚不存在）</li><li>在该文件夹中创建 <code>rules.md</code> 或 <code>ai-rules.md</code> 文件</li><li>在此文件中定义项目特定的 AI 规则</li></ol><h3 id="_3-会话级规则" tabindex="-1">3. 会话级规则 <a class="header-anchor" href="#_3-会话级规则" aria-label="Permalink to &quot;3. 会话级规则&quot;">​</a></h3><p>在单个对话或会话中，您可以临时设定规则：</p><ol><li>在 Ask 或 Agent 对话开始时，明确声明规则</li><li>例如：&quot;请在接下来的对话中，生成的所有代码都应当包含详细注释，并遵循 PEP 8 风格指南&quot;</li></ol><h2 id="规则编写指南" tabindex="-1">规则编写指南 <a class="header-anchor" href="#规则编写指南" aria-label="Permalink to &quot;规则编写指南&quot;">​</a></h2><p>编写有效的 AI 规则时，考虑以下几点：</p><h3 id="_1-明确具体" tabindex="-1">1. 明确具体 <a class="header-anchor" href="#_1-明确具体" aria-label="Permalink to &quot;1. 明确具体&quot;">​</a></h3><p>使用清晰、具体的指令，避免模糊的表述：</p><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">✅ 好的规则：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 生成的所有函数必须包含参数类型注释和返回类型</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 每个函数都应当有描述功能、参数和返回值的文档字符串</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">❌ 不太有效的规则：</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 写好代码</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 使代码更易读</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="_2-设定优先级" tabindex="-1">2. 设定优先级 <a class="header-anchor" href="#_2-设定优先级" aria-label="Permalink to &quot;2. 设定优先级&quot;">​</a></h3><p>当规则可能冲突时，明确指出优先级：</p><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># AI 规则优先级</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 安全性和错误处理优先于性能优化</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 代码简洁性优先于详尽的文档（当空间有限时）</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 遵循项目现有的命名惯例，即使与一般最佳实践不同</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_3-提供示例" tabindex="-1">3. 提供示例 <a class="header-anchor" href="#_3-提供示例" aria-label="Permalink to &quot;3. 提供示例&quot;">​</a></h3><p>通过具体示例来说明您期望的风格或模式：</p><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 命名惯例示例</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 类名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">使用 PascalCase：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`UserAccount\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`PaymentProcessor\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 函数名</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">使用 camelCase：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`getUserData()\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`validateInput()\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## 常量</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">使用大写下划线：</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`MAX_RETRY_COUNT\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">\`API_BASE_URL\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="_4-指定编码标准" tabindex="-1">4. 指定编码标准 <a class="header-anchor" href="#_4-指定编码标准" aria-label="Permalink to &quot;4. 指定编码标准&quot;">​</a></h3><p>明确您希望 AI 遵循的编码标准或风格指南：</p><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 编码标准</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> JavaScript/TypeScript：遵循 Airbnb 风格指南</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Python：遵循 PEP 8 和 Google Python 风格指南</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 所有注释应当使用完整的句子，并以句号结尾</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="常见规则示例" tabindex="-1">常见规则示例 <a class="header-anchor" href="#常见规则示例" aria-label="Permalink to &quot;常见规则示例&quot;">​</a></h2><p>以下是一些常见的 AI 规则示例，您可以根据需要进行调整：</p><h3 id="代码风格规则" tabindex="-1">代码风格规则 <a class="header-anchor" href="#代码风格规则" aria-label="Permalink to &quot;代码风格规则&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 代码风格规则</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 使用空格而非制表符进行缩进</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 每个函数不应超过 30 行代码</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 每行代码不超过 80 个字符</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 相关函数应分组在一起</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">5.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 导入语句应按标准库、第三方库、本地模块的顺序排列</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="文档规则" tabindex="-1">文档规则 <a class="header-anchor" href="#文档规则" aria-label="Permalink to &quot;文档规则&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 文档规则</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 所有公共 API 函数必须有文档字符串</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 复杂算法应包含描述其工作原理的注释</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 在存在多种方案时，注释中应解释为何选择特定实现</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 任何非显而易见的代码都应有解释性注释</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="安全性规则" tabindex="-1">安全性规则 <a class="header-anchor" href="#安全性规则" aria-label="Permalink to &quot;安全性规则&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 安全性规则</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 永远不要生成明文存储密码或密钥的代码</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 所有用户输入必须经过验证和清洁</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 提供针对 SQL 注入、XSS 和 CSRF 的保护</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 默认使用参数化查询而非字符串拼接处理 SQL</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="性能规则" tabindex="-1">性能规则 <a class="header-anchor" href="#性能规则" aria-label="Permalink to &quot;性能规则&quot;">​</a></h3><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 性能规则</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 优先考虑时间复杂度而非微优化</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 对可能大规模增长的数据集，避免 O(n²) 或更高复杂度的算法</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 考虑内存使用和垃圾收集影响</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">4.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 大型循环内避免频繁内存分配</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="规则的组织与维护" tabindex="-1">规则的组织与维护 <a class="header-anchor" href="#规则的组织与维护" aria-label="Permalink to &quot;规则的组织与维护&quot;">​</a></h2><p>随着项目的发展，定期审查和更新您的 AI 规则很重要：</p><ol><li><strong>版本控制</strong>：将 AI 规则纳入版本控制，跟踪其变化</li><li><strong>团队共享</strong>：确保所有团队成员了解并使用统一的 AI 规则</li><li><strong>定期审查</strong>：随着项目的发展和新模式的出现，更新规则</li><li><strong>从反馈中学习</strong>：根据 AI 生成的代码质量，调整和改进规则</li></ol><h2 id="高级应用场景" tabindex="-1">高级应用场景 <a class="header-anchor" href="#高级应用场景" aria-label="Permalink to &quot;高级应用场景&quot;">​</a></h2><h3 id="_1-特定于领域的规则" tabindex="-1">1. 特定于领域的规则 <a class="header-anchor" href="#_1-特定于领域的规则" aria-label="Permalink to &quot;1. 特定于领域的规则&quot;">​</a></h3><p>针对特定领域或行业制定规则：</p><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 医疗应用规则</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 所有与患者数据相关的操作必须记录审计日志</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 遵循 HIPAA 合规性指南</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 使用特定的医疗术语字典和标准</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_2-整合项目标准" tabindex="-1">2. 整合项目标准 <a class="header-anchor" href="#_2-整合项目标准" aria-label="Permalink to &quot;2. 整合项目标准&quot;">​</a></h3><p>将现有的团队编码标准整合到 AI 规则中：</p><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 公司编码标准集成</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 遵循公司版本控制提交消息格式：[</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">类型</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]: [</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">描述</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">] (#票号)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 使用内部组件库而非自定义实现</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 遵循公司架构模式和依赖注入方法</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="_3-学习曲线辅助" tabindex="-1">3. 学习曲线辅助 <a class="header-anchor" href="#_3-学习曲线辅助" aria-label="Permalink to &quot;3. 学习曲线辅助&quot;">​</a></h3><p>利用 AI 规则帮助新团队成员学习：</p><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;"># 新手友好规则</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 为复杂概念提供更详细的解释</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 建议阅读的文档和内部资源</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 生成示例性测试用例来展示代码如何被使用</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><hr><p>通过精心设计和应用 AI 规则，您可以将 Cursor 的 AI 功能塑造成您团队的高效协作伙伴。这些规则不仅提高了 AI 生成的代码质量和一致性，还确保了其输出符合项目的特定需求和标准。</p><p>如有任何问题，请参考<a href="/ai/cursor/faq.html">常见问题解答</a>或访问<a href="https://forum.cursor.com" target="_blank" rel="noopener noreferrer">社区论坛</a>寻求帮助。</p>`,57)]))}const b=a(l,[["render",p]]);export{c as __pageData,b as default};
