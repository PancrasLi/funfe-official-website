# Cursor AI 编辑器

> Cursor 是由 Anysphere 开发的一款强大的 AI 驱动代码编辑器，基于 VS Code 构建，集成了先进的大型语言模型技术，为开发者提供智能编码体验。

::: info Cursor 是什么
Cursor 是一款革命性的 AI 代码编辑器，它能够理解您的代码库，提供智能代码补全、多文件编辑、代码解释和重构等功能，帮助开发者显著提高编码效率和质量。
:::

<div class="ai-topic-card">
  <div class="ai-topic-icon">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="100" height="100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
      <line x1="12" y1="2" x2="12" y2="22"></line>
    </svg>
  </div>
  <div class="ai-topic-content">
    <h3>Cursor 核心功能</h3>
    <p>Cursor 将 AI 的力量引入代码编辑器，提供多种革命性功能：</p>
    <ul>
      <li><strong>Tab 智能补全</strong> - 智能预测并补全多行代码，自动修复错误</li>
      <li><strong>Agent 智能代理</strong> - AI 结对编程助手，处理复杂代码变更</li>
      <li><strong>Composer 多文件编辑</strong> - 使用自然语言同时编辑多个文件</li>
      <li><strong>Ask 聊天功能</strong> - 与了解您代码库的 AI 交流，获取答案和建议</li>
      <li><strong>⌘K 内联编辑</strong> - 使用自然语言快速编辑和生成代码</li>
    </ul>
    <p>想了解更多详情？查看我们的 <a href="/ai/cursor/manual">完整使用手册</a> 和 <a href="/ai/cursor/welcome">官方文档翻译</a>。</p>
  </div>
</div>

## 为什么选择 Cursor？

Cursor 编辑器相比传统代码编辑器有诸多优势：

- **真正理解代码** - Cursor 不仅能看到当前文件，还能理解整个代码库的结构和关系
- **自然语言交互** - 使用日常语言描述您想要的更改，无需记忆复杂命令
- **多文件编辑** - 轻松实现跨多个文件的复杂变更
- **VS Code 兼容性** - 支持 VS Code 扩展和主题，迁移成本低
- **隐私选项** - 提供隐私模式，确保代码不会被远程存储

## 快速入门指南

### 1. 安装 Cursor

访问 [Cursor 官网](https://www.cursor.com) 下载适合您操作系统的版本：
- **Windows**: 运行 .exe 安装文件
- **macOS**: 打开 .dmg 文件并拖拽到应用程序文件夹
- **Linux**: 使 .AppImage 文件可执行并运行

### 2. 基本设置

首次启动 Cursor 后：
- 选择是否导入 VS Code 设置和扩展
- 配置 AI 设置和隐私选项
- 如需高级功能，可设置自定义 API 密钥

### 3. 必知快捷键

| 功能 | Windows/Linux | macOS |
|------|--------------|-------|
| 打开 AI 聊天 | Ctrl+L | ⌘+L |
| 内联编辑 | Ctrl+K | ⌘+K |
| Composer 多文件编辑 | Ctrl+I | ⌘+I |
| 全屏 Composer | Ctrl+Shift+I | ⌘+Shift+I |
| 接受 AI 建议 | Tab | Tab |
| 拒绝 AI 建议 | Esc | Esc |

## 使用实例展示

### 示例 1: 使用 Tab 智能补全

```javascript
// 只需输入函数声明和参数
function calculateTotal(items, taxRate) {
  // Cursor 会智能建议完整实现
  let subtotal = 0;
  for (const item of items) {
    subtotal += item.price * item.quantity;
  }
  const tax = subtotal * taxRate;
  return subtotal + tax;
}
```

### 示例 2: 使用 Agent 进行重构

选择一段代码，启动 Agent (Ctrl+I / ⌘+I)，然后描述：
> "将这个基于回调的函数重构为使用 Promise 和 async/await 的现代版本"

### 示例 3: 使用 ⌘K 内联编辑

选择一个函数，按下 Ctrl+K / ⌘+K，然后描述：
> "添加输入验证，确保所有参数都有效，并在无效时抛出适当的错误"

## 进阶技巧

### 代码库问答

使用 `@Codebase` 或 Ctrl+Enter 向 AI 询问有关您整个代码库的问题：
> "@Codebase 我们的用户认证流程是如何工作的？"

### 参考文档

使用 `@LibraryName` 快速查询流行库的官方文档：
> "@React 如何使用 useEffect 处理异步数据获取？"

### 网络搜索

使用 `@Web` 搜索最新信息：
> "@Web TypeScript 5.0 中的新特性有哪些？"

## 更多资源

- [详细使用手册](/ai/cursor/manual) - 从入门到精通的完整指南
- [官方文档翻译](/ai/cursor/welcome) - Cursor 官方文档的中文翻译
- [常见问题解答](/ai/cursor/faq) - 解答使用过程中的常见疑问
- [键盘快捷键](/ai/cursor/shortcuts) - 全面的快捷键列表

---

欢迎探索 Cursor 编辑器的强大功能！这款工具将帮助您显著提升编码效率和代码质量。如果您有任何问题或建议，请随时联系我们。 