import{_ as o,c as a,o as e,ag as l}from"./chunks/framework.CPp4lspA.js";const u=JSON.parse('{"title":"Cursor ⌘K 内联编辑","description":"","frontmatter":{},"headers":[],"relativePath":"ai/cursor/cmd-k.md","filePath":"ai/cursor/cmd-k.md","lastUpdated":1741509101000}'),t={name:"ai/cursor/cmd-k.md"};function i(s,r,n,p,c,h){return e(),a("div",null,r[0]||(r[0]=[l('<h1 id="cursor-⌘k-内联编辑" tabindex="-1">Cursor ⌘K 内联编辑 <a class="header-anchor" href="#cursor-⌘k-内联编辑" aria-label="Permalink to &quot;Cursor ⌘K 内联编辑&quot;">​</a></h1><blockquote><p><strong>免责声明</strong>：本文档是 <a href="https://docs.cursor.com/cmdk/overview" target="_blank" rel="noopener noreferrer">Cursor 官方文档中的 ⌘K 功能页面</a>的<strong>第三方非官方中文翻译</strong>，仅供学习参考。内容可能不完全反映最新的官方信息，请以 <a href="https://docs.cursor.com" target="_blank" rel="noopener noreferrer">Cursor 官方文档</a> 为准。所有商标和版权归 Cursor/Anysphere 公司所有。</p></blockquote><blockquote><p>本文档介绍如何使用 Cursor 中的 ⌘K（在 Windows/Linux 上为 Ctrl+K）功能生成、编辑代码和使用提示栏询问问题。</p></blockquote><hr><h2 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h2><p>⌘K（在 Windows/Linux 上为 Ctrl+K）功能允许您在编辑器窗口中生成新代码或编辑现有代码。与 Ask 功能不同，⌘K 是设计用于直接在代码编辑区域内工作的内联 AI 工具。</p><h2 id="提示栏" tabindex="-1">提示栏 <a class="header-anchor" href="#提示栏" aria-label="Permalink to &quot;提示栏&quot;">​</a></h2><p>在 Cursor 中，当您按下 <code>Ctrl/⌘+K</code> 时出现的栏被称为&quot;提示栏&quot;（Prompt Bar）。它的工作方式类似于聊天的 AI 输入框，您可以在其中正常输入，或使用 @ 符号引用其他上下文。</p><p>提示栏是一个轻量级的界面，专为快速代码生成和编辑而设计，直接在您的编辑环境中工作，无需切换到单独的对话窗口。</p><h2 id="内联生成" tabindex="-1">内联生成 <a class="header-anchor" href="#内联生成" aria-label="Permalink to &quot;内联生成&quot;">​</a></h2><p>如果在按下 <code>Ctrl/⌘+K</code> 时没有选择任何代码，Cursor 将根据您在提示栏中输入的提示生成新代码。这对于以下场景特别有用：</p><ol><li>在当前位置快速生成新函数或方法</li><li>添加新的代码模块或组件</li><li>生成数据结构或配置代码</li><li>基于自然语言描述实现新功能</li></ol><p>生成的代码将直接插入到光标所在的位置，成为文件的一部分。</p><h2 id="内联编辑" tabindex="-1">内联编辑 <a class="header-anchor" href="#内联编辑" aria-label="Permalink to &quot;内联编辑&quot;">​</a></h2><p>对于就地编辑，只需选择要编辑的代码，然后在提示栏中输入您的指令。这样，您可以：</p><ol><li>重构或优化选定的代码</li><li>添加错误处理或日志记录</li><li>修复错误或调整逻辑</li><li>改进代码风格或格式</li><li>将一种编程语言转换为另一种</li></ol><p>内联编辑功能可以理解您选择的代码上下文，并根据您的自然语言指令进行智能修改。</p><h2 id="后续指令" tabindex="-1">后续指令 <a class="header-anchor" href="#后续指令" aria-label="Permalink to &quot;后续指令&quot;">​</a></h2><p>在每次生成之后，您可以通过在提示栏中添加更多指令来进一步完善您的要求，然后按下 <code>Enter</code> 让 AI 根据您的后续指令重新生成。</p><p>这种迭代方法允许您：</p><ol><li>细化或扩展初始生成的代码</li><li>纠正或调整 AI 的输出</li><li>分步骤处理复杂的代码更改</li><li>与 AI 进行连续对话以改进代码</li></ol><p>后续指令会保留之前的上下文，因此 AI 可以理解您希望如何改进之前的结果。</p><h2 id="默认上下文" tabindex="-1">默认上下文 <a class="header-anchor" href="#默认上下文" aria-label="Permalink to &quot;默认上下文&quot;">​</a></h2><p>默认情况下，除了您手动包含的 @ 符号引用，Cursor 会尝试查找不同类型的有用信息来改进代码生成。</p><p>额外的上下文可能包括相关文件、最近查看的文件等。收集后，Cursor 会根据与您的编辑/生成的相关性对上下文项进行排名，并为大型语言模型保留最相关的项。</p><p>这种智能上下文收集使 ⌘K 功能能够生成更相关、更集成的代码，减少了手动提供所有必要上下文的需要。</p><h2 id="快速问答" tabindex="-1">快速问答 <a class="header-anchor" href="#快速问答" aria-label="Permalink to &quot;快速问答&quot;">​</a></h2><p>如果您在提示栏中按下 <code>Option/Alt+Enter</code>，Cursor 将回答您对选择内容及附加上下文的任何问题。</p><p>此对话的内容可以在后续生成中继续使用，所以您可以在 Cursor 回复后简单地输入&quot;执行它&quot;来根据快速问答的结果生成代码。</p><p>这个功能特别适合：</p><ol><li>在编写或修改代码前先了解现有代码</li><li>询问特定实现的工作原理</li><li>了解最佳做法或可能的替代方案</li><li>在生成复杂代码前验证您的方法</li></ol><h2 id="使用技巧" tabindex="-1">使用技巧 <a class="header-anchor" href="#使用技巧" aria-label="Permalink to &quot;使用技巧&quot;">​</a></h2><p>为了充分利用 ⌘K 功能，请考虑以下技巧：</p><ol><li><strong>明确具体</strong>：提供清晰、具体的指令以获得更好的结果</li><li><strong>利用选择功能</strong>：精确选择要修改的代码可以提高准确性</li><li><strong>使用迭代</strong>：通过后续指令逐步完善复杂的生成或编辑</li><li><strong>结合快速问答</strong>：在生成代码前使用 <code>Option/Alt+Enter</code> 澄清您的疑问</li><li><strong>利用上下文引用</strong>：使用 @ 符号明确引用相关文件或符号</li></ol><h2 id="与其他功能的区别" tabindex="-1">与其他功能的区别 <a class="header-anchor" href="#与其他功能的区别" aria-label="Permalink to &quot;与其他功能的区别&quot;">​</a></h2><p>⌘K 功能与 Cursor 的其他 AI 功能有以下区别：</p><ol><li><strong>相对于 Ask</strong>：⌘K 专注于内联代码生成和编辑，而 Ask 更适合深入的对话式问答</li><li><strong>相对于 Tab</strong>：⌘K 用于完整的代码生成和复杂编辑，Tab 主要用于代码补全</li><li><strong>相对于 Agent</strong>：⌘K 是轻量级的内联工具，而 Agent 提供更全面的结对编程体验</li><li><strong>相对于 Composer</strong>：⌘K 主要用于单文件编辑，Composer 专门用于多文件编辑</li></ol><p>根据您的具体需求选择最合适的工具可以显著提高编码效率。</p><hr><p>⌘K 功能是 Cursor 中最灵活、最方便的 AI 驱动编码工具之一，它将强大的代码生成和编辑能力直接集成到您的编辑工作流程中。通过掌握这个工具，您可以显著提高编码速度，减少重复工作，并利用 AI 的能力解决复杂的编程挑战。</p><p>如有任何问题，请参考<a href="/ai/cursor/faq.html">常见问题解答</a>或访问<a href="https://forum.cursor.com" target="_blank" rel="noopener noreferrer">社区论坛</a>寻求帮助。</p>',41)]))}const m=o(t,[["render",i]]);export{u as __pageData,m as default};
