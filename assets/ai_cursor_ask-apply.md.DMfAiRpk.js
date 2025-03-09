import{_ as i,c as a,o as n,ag as l}from"./chunks/framework.ZWmXjvV8.js";const o=JSON.parse('{"title":"Cursor Ask 应用建议","description":"","frontmatter":{},"headers":[],"relativePath":"ai/cursor/ask-apply.md","filePath":"ai/cursor/ask-apply.md","lastUpdated":1741509637000}'),p={name:"ai/cursor/ask-apply.md"};function h(t,s,e,k,r,E){return n(),a("div",null,s[0]||(s[0]=[l(`<h1 id="cursor-ask-应用建议" tabindex="-1">Cursor Ask 应用建议 <a class="header-anchor" href="#cursor-ask-应用建议" aria-label="Permalink to &quot;Cursor Ask 应用建议&quot;">​</a></h1><blockquote><p><strong>免责声明</strong>：本文档是 <a href="https://docs.cursor.com/chat/apply" target="_blank" rel="noopener noreferrer">Cursor 官方文档中的 Ask 应用建议页面</a>的<strong>第三方非官方中文翻译</strong>，仅供学习参考。内容可能不完全反映最新的官方信息，请以 <a href="https://docs.cursor.com" target="_blank" rel="noopener noreferrer">Cursor 官方文档</a> 为准。所有商标和版权归 Cursor/Anysphere 公司所有。</p></blockquote><blockquote><p>本文档介绍如何在 Cursor Ask 中应用 AI 提出的代码建议，以及如何使用即时应用功能直接修改您的代码。</p></blockquote><hr><h2 id="即时应用功能" tabindex="-1">即时应用功能 <a class="header-anchor" href="#即时应用功能" aria-label="Permalink to &quot;即时应用功能&quot;">​</a></h2><p>Cursor 的 Ask 功能不仅能回答您的问题，还可以直接修改您的代码。通过即时应用功能，您可以直接将 AI 提出的代码建议应用到您的文件中，而无需手动复制粘贴。</p><p>当 Ask 响应包含代码块时，您可以通过以下方式应用这些代码：</p><ol><li>将鼠标悬停在代码块上，然后点击显示的 &quot;Apply&quot; 按钮</li><li>使用键盘快捷键应用代码建议</li><li>通过命令面板选择 &quot;Ask: Apply Last Suggestion&quot;</li></ol><p>这些应用选项可以帮助您快速实现 AI 建议的更改，提高编码效率。</p><h2 id="应用类型" tabindex="-1">应用类型 <a class="header-anchor" href="#应用类型" aria-label="Permalink to &quot;应用类型&quot;">​</a></h2><p>Ask 可以提供和应用多种类型的代码更改：</p><h3 id="_1-插入新代码" tabindex="-1">1. 插入新代码 <a class="header-anchor" href="#_1-插入新代码" aria-label="Permalink to &quot;1. 插入新代码&quot;">​</a></h3><p>当您询问如何实现特定功能时，Ask 可以生成完整的代码片段。例如：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 问题：如何创建一个简单的 React 组件？</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SimpleComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> className</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;simple-component&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Hello, {name}!&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">h1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;This is a simple React component.&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SimpleComponent;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>将鼠标悬停在此代码块上，点击 &quot;Apply&quot; 按钮，即可将整个组件添加到您的文件中。</p><h3 id="_2-修改现有代码" tabindex="-1">2. 修改现有代码 <a class="header-anchor" href="#_2-修改现有代码" aria-label="Permalink to &quot;2. 修改现有代码&quot;">​</a></h3><p>Ask 可以建议对现有代码的修改。这些修改会保留原始代码的结构，同时解决特定问题或添加新功能：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 原始代码</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> calculateTotal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> total </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> items.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    total </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> items[i].price;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> total;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 修改后的代码（含税计算）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> calculateTotal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">taxRate</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> subtotal </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> items.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">length</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    subtotal </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> items[i].price;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tax</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> subtotal </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> taxRate;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> subtotal </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> tax;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>应用此建议会用改进版本替换原始函数。</p><h3 id="_3-修复错误和问题" tabindex="-1">3. 修复错误和问题 <a class="header-anchor" href="#_3-修复错误和问题" aria-label="Permalink to &quot;3. 修复错误和问题&quot;">​</a></h3><p>Ask 可以帮助识别和修复代码中的错误和问题：</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 有错误的代码</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetchData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/api/data&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.json)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 修复后的代码</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetchData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fetch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/api/data&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">response</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> response.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">())  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 添加了括号</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(data);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>通过应用这些修复，您可以快速解决代码中的错误。</p><h2 id="智能应用与上下文感知" tabindex="-1">智能应用与上下文感知 <a class="header-anchor" href="#智能应用与上下文感知" aria-label="Permalink to &quot;智能应用与上下文感知&quot;">​</a></h2><p>Ask 的应用功能是上下文感知的，这意味着它会考虑：</p><ol><li><strong>当前文件内容</strong>：确保修改与文件的其余部分保持一致</li><li><strong>代码位置</strong>：知道将代码应用到哪个位置</li><li><strong>周围代码</strong>：确保应用的代码与周围的代码风格匹配</li></ol><p>这种上下文感知使得应用 AI 建议更加准确和无缝。</p><h2 id="应用多文件更改" tabindex="-1">应用多文件更改 <a class="header-anchor" href="#应用多文件更改" aria-label="Permalink to &quot;应用多文件更改&quot;">​</a></h2><p>虽然 Ask 的即时应用通常用于单个文件，但对于涉及多个文件的更复杂更改，您可以：</p><ol><li>使用 Ask 获取所有必要的代码片段</li><li>分别将这些片段应用到相应的文件中</li><li>或者使用 Cursor 的 Composer 功能进行更复杂的多文件编辑</li></ol><h2 id="应用建议的最佳实践" tabindex="-1">应用建议的最佳实践 <a class="header-anchor" href="#应用建议的最佳实践" aria-label="Permalink to &quot;应用建议的最佳实践&quot;">​</a></h2><p>为了获得最佳的应用建议体验，请遵循以下最佳实践：</p><ol><li><strong>仔细审查更改</strong>：在应用之前，仔细审查 AI 建议的更改</li><li><strong>逐步应用</strong>：对于大型更改，考虑分步骤应用它们</li><li><strong>结合人工编辑</strong>：根据需要将 AI 建议与您自己的编辑相结合</li><li><strong>使用版本控制</strong>：在应用重大更改之前，确保您的代码已提交到版本控制系统</li><li><strong>测试应用的更改</strong>：应用更改后，测试代码以确保其按预期工作</li></ol><h2 id="高级功能" tabindex="-1">高级功能 <a class="header-anchor" href="#高级功能" aria-label="Permalink to &quot;高级功能&quot;">​</a></h2><h3 id="自定义应用行为" tabindex="-1">自定义应用行为 <a class="header-anchor" href="#自定义应用行为" aria-label="Permalink to &quot;自定义应用行为&quot;">​</a></h3><p>您可以在 Cursor 设置中自定义应用行为：</p><ol><li>打开 Cursor 设置 (<code>Cmd/Ctrl + Shift + J</code>)</li><li>导航到 &quot;Ask&quot; 和 &quot;Apply&quot; 相关设置</li><li>调整自动应用设置和键盘快捷键</li></ol><h3 id="通过键盘快捷键应用" tabindex="-1">通过键盘快捷键应用 <a class="header-anchor" href="#通过键盘快捷键应用" aria-label="Permalink to &quot;通过键盘快捷键应用&quot;">​</a></h3><p>要使用键盘快捷键应用最近的建议，请在 Ask 回复后：</p><ol><li>将光标放在要应用代码的位置</li><li>按下配置的快捷键（默认未分配，您可以在设置中配置）</li><li>Cursor 将应用 Ask 最近的代码建议</li></ol><hr><p>通过结合 Ask 的强大问答能力和即时应用功能，您可以显著加快编码过程，从 AI 建议中获取最大价值，同时保持对代码更改的完全控制。</p><p>如有任何问题，请参考<a href="/ai/cursor/faq.html">常见问题解答</a>或访问<a href="https://forum.cursor.com" target="_blank" rel="noopener noreferrer">社区论坛</a>寻求帮助。</p>`,43)]))}const g=i(p,[["render",h]]);export{o as __pageData,g as default};
