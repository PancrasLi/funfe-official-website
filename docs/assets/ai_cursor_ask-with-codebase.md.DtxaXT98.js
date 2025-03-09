import{_ as e,c as s,o as r,ag as o}from"./chunks/framework.CPp4lspA.js";const u=JSON.parse('{"title":"Cursor Ask 代码库交互","description":"","frontmatter":{},"headers":[],"relativePath":"ai/cursor/ask-with-codebase.md","filePath":"ai/cursor/ask-with-codebase.md","lastUpdated":1741509101000}'),i={name:"ai/cursor/ask-with-codebase.md"};function n(t,a,l,p,d,c){return r(),s("div",null,a[0]||(a[0]=[o('<h1 id="cursor-ask-代码库交互" tabindex="-1">Cursor Ask 代码库交互 <a class="header-anchor" href="#cursor-ask-代码库交互" aria-label="Permalink to &quot;Cursor Ask 代码库交互&quot;">​</a></h1><blockquote><p><strong>免责声明</strong>：本文档是 <a href="https://docs.cursor.com/chat/with-codebase" target="_blank" rel="noopener noreferrer">Cursor 官方文档中的 Ask 代码库交互页面</a>的<strong>第三方非官方中文翻译</strong>，仅供学习参考。内容可能不完全反映最新的官方信息，请以 <a href="https://docs.cursor.com" target="_blank" rel="noopener noreferrer">Cursor 官方文档</a> 为准。所有商标和版权归 Cursor/Anysphere 公司所有。</p></blockquote><blockquote><p>本文档介绍如何在 Cursor Ask 功能中使用代码库上下文，包括自动提供的上下文和用户指定的上下文。</p></blockquote><hr><h2 id="使用代码库上下文" tabindex="-1">使用代码库上下文 <a class="header-anchor" href="#使用代码库上下文" aria-label="Permalink to &quot;使用代码库上下文&quot;">​</a></h2><p>Ask 功能的一个主要优势是它能够理解和利用您的代码库上下文。在这个页面上，我们将介绍如何在 Ask 中使用代码库上下文来获得最佳结果。</p><h3 id="代码库索引" tabindex="-1">代码库索引 <a class="header-anchor" href="#代码库索引" aria-label="Permalink to &quot;代码库索引&quot;">​</a></h3><p>Ask 功能默认会使用索引的代码库作为上下文来源。这意味着：</p><ol><li>Cursor 会自动索引您的代码库</li><li>提问时，Ask 可以在需要时自动搜索整个代码库</li><li>您无需手动指定代码文件即可获得相关回答</li></ol><p>要检查您的代码库是否已被索引，可以查看状态栏上的索引状态图标。完成索引后，您的问题将能够获得更准确、更相关的回答。</p><h2 id="自动和手动上下文" tabindex="-1">自动和手动上下文 <a class="header-anchor" href="#自动和手动上下文" aria-label="Permalink to &quot;自动和手动上下文&quot;">​</a></h2><p>Ask 提供了两种获取代码库上下文的方式：</p><h3 id="自动上下文" tabindex="-1">自动上下文 <a class="header-anchor" href="#自动上下文" aria-label="Permalink to &quot;自动上下文&quot;">​</a></h3><p>当您提问时，Ask 会自动包含以下上下文：</p><ol><li><strong>当前文件</strong>：默认情况下，您当前正在编辑的文件会被自动包含在上下文中</li><li><strong>相关代码</strong>：在需要时，Ask 会自动在代码库中搜索相关代码片段</li></ol><p>自动上下文让您无需手动指定就能获得有关当前代码的回答。</p><h3 id="手动上下文指定" tabindex="-1">手动上下文指定 <a class="header-anchor" href="#手动上下文指定" aria-label="Permalink to &quot;手动上下文指定&quot;">​</a></h3><p>您可以使用 <code>@</code> 符号来手动指定特定的上下文：</p><ol><li><p><strong>文件引用</strong>：使用 <code>@filename</code> 来引用特定文件</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@src/components/Button.js 这个组件如何处理点击事件？</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p><strong>代码库搜索</strong>：使用 <code>@codebase</code> 来搜索整个代码库</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@codebase 在项目中我们如何处理用户认证？</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p><strong>文件夹引用</strong>：使用 <code>@folder</code> 来引用文件夹中的所有文件</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@src/utils 我们有哪些工具函数？</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p><strong>符号引用</strong>：使用 <code>@symbol</code> 来引用特定函数或类</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@AuthService 这个服务如何验证用户令牌？</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ol><h2 id="代码引用与链接" tabindex="-1">代码引用与链接 <a class="header-anchor" href="#代码引用与链接" aria-label="Permalink to &quot;代码引用与链接&quot;">​</a></h2><p>当 Ask 在回答中引用您代码库中的代码时，它会创建指向原始文件的链接。这些链接允许您：</p><ol><li>快速查看被引用的代码</li><li>通过点击链接直接跳转到原始文件中的相应位置</li><li>更轻松地理解 AI 回答中引用的代码片段</li></ol><p>这种代码引用和链接功能使得理解复杂代码和在大型代码库中导航变得更加容易。</p><h2 id="智能搜索与上下文组合" tabindex="-1">智能搜索与上下文组合 <a class="header-anchor" href="#智能搜索与上下文组合" aria-label="Permalink to &quot;智能搜索与上下文组合&quot;">​</a></h2><p>Ask 使用智能搜索算法来组合不同的上下文源：</p><ol><li><strong>语义搜索</strong>：Ask 可以根据问题的语义找到相关的代码</li><li><strong>精确匹配</strong>：对于特定符号或术语，Ask 会搜索精确匹配</li><li><strong>上下文组合</strong>：Ask 会智能组合多个来源的上下文，以提供完整的答案</li></ol><p>这种组合方法使 Ask 能够回答广泛的代码问题，从具体的函数行为到整个系统的架构设计。</p><h2 id="最佳实践" tabindex="-1">最佳实践 <a class="header-anchor" href="#最佳实践" aria-label="Permalink to &quot;最佳实践&quot;">​</a></h2><p>要获得最佳的代码库交互体验，请遵循以下最佳实践：</p><ol><li><p><strong>等待索引完成</strong>：在大型代码库中提问前，等待索引完成</p></li><li><p><strong>具体明确</strong>：提出具体的问题以获得更精确的上下文和回答</p></li><li><p><strong>逐步引导</strong>：对于复杂问题，从大概的问题开始，然后逐步深入细节</p></li><li><p><strong>组合引用</strong>：对于复杂问题，组合使用不同类型的引用</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@models/User.js 和 @controllers/AuthController.js 这两个文件如何协同工作？</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p><strong>利用自动上下文</strong>：在当前文件中工作时，利用自动包含的上下文来提问</p></li></ol><p>通过有效利用代码库上下文，Ask 可以成为理解和导航复杂代码库的强大工具，帮助您更快地解决问题，并提高开发效率。</p><hr><p>如有任何问题，请参考<a href="/ai/cursor/faq.html">常见问题解答</a>或访问<a href="https://forum.cursor.com" target="_blank" rel="noopener noreferrer">社区论坛</a>寻求帮助。</p>',33)]))}const b=e(i,[["render",n]]);export{u as __pageData,b as default};
