# Cursor 欢迎页面

> **免责声明**：本文档是 [Cursor 官方文档](https://docs.cursor.com/get-started/welcome)的**第三方非官方中文翻译**，仅供学习参考。内容可能不完全反映最新的官方信息，请以 [Cursor 官方文档](https://docs.cursor.com) 为准。所有商标和版权归 Cursor/Anysphere 公司所有。

> 本文档旨在帮助中文用户更好地了解和使用 Cursor 编辑器。

---

## 欢迎使用 Cursor

**Cursor 是一款集成 AI 功能的智能代码编辑器，提供智能代码开发的各种强大功能**

Cursor 是一个全新的智能 IDE，通过与 AI 的无缝集成提供强大功能。基于 VSCode 构建，Cursor 易于上手，同时能让您的工作效率得到显著提升。

### 快速入门

如果您是 Cursor 的新用户，可以通过以下指南快速开始：

- **[安装指南](/ai/cursor/install)** - 在几分钟内下载并安装适合您平台的 Cursor
- **[从 VS Code 迁移](/ai/cursor/migrate-vscode)** - 从其他编辑器迁移？使用我们的迁移指南快速上手

### 编辑器核心功能

Cursor 拥有多项核心功能，可以无缝融入您的工作流程。使用下面的链接了解 Cursor 的强大功能：

- **[Tab 智能补全](/ai/cursor/tab)** - 智能代码补全功能，能够从您的习惯中学习！支持多行编辑，自动修复错误，并预测您的下一步操作。
- **[Agent 智能代理](/ai/cursor/agent)** - 您的 AI 结对编程助手，用于复杂代码修改。支持大规模编辑，精确的上下文控制和自动修复。
- **[⌘K 内联编辑](/ai/cursor/cmd-k)** - 快速内联代码编辑和生成。完美支持在不打断工作流的情况下进行精确修改。
- **[Ask 智能问答](/ai/cursor/ask)** - 了解您代码库的 AI 助手。获取答案并直接在编辑器中应用代码更改。

### Cursor 的起源

代码本质上是文本，我们编写代码的工具已经从简单的文本编辑器演变为越来越智能的开发环境。

最初，我们有语法高亮功能，使代码更易读。然后，我们有了自动完成功能，使编码更高效。

这些功能长期以来一直是标准配置，但使用 Cursor，我们正在重新发明您与代码交互的方式。

### Cursor 如何工作？

Cursor 为用户提供了几个基本功能，这些功能只有在大型语言模型 (LLM) 的发展下才成为可能。

### 如何开始使用？

您可以从 [Cursor 官网](https://www.cursor.com) 下载适合您平台的 Cursor。由于基于 VS Code，入门非常简单，所有 AI 功能都是可选的。

您还可以一键导入所有 VS Code 扩展和设置。为了帮助您尝试 Cursor，我们提供 14 天的 Pro 计划免费试用，无需信用卡！

- **[安装入门](/ai/cursor/install)**
- **团队管理** - 请参阅[Cursor官网](https://cursor.com)获取团队管理相关信息

---

## Cursor 使用实例

### 使用 Tab 智能补全

**示例场景**: 编写 React 组件时自动补全多行代码

```jsx
// 开始输入一个简单的 React 组件
function Button({ text, onClick }) {
  return (
    // Cursor 可能会自动建议以下代码
    <button 
      className="primary-button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
```

**效果**: 只需输入组件的开始部分，Cursor 就能理解您的意图并建议完整的实现。

### 使用 Agent 进行复杂重构

**示例场景**: 将普通函数转换为异步函数

```js
// 原代码
function fetchUserData(userId) {
  const response = fetchFromAPI(`/users/${userId}`);
  return processUserData(response);
}

// 使用 Agent 后，告诉它："将此函数转换为异步函数，使用 try-catch 处理错误"
```

**效果**: Agent 会理解您的请求，自动将函数转换为：

```js
async function fetchUserData(userId) {
  try {
    const response = await fetchFromAPI(`/users/${userId}`);
    return processUserData(response);
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error;
  }
}
```

### 使用 ⌘K 内联编辑

**示例场景**: 快速修改现有函数逻辑

1. 选中要修改的代码
2. 按下 ⌘K (macOS) 或 Ctrl+K (Windows/Linux)
3. 描述您的修改需求："添加缓存机制，避免重复请求同一用户数据"

**效果**: Cursor 会直接在编辑器中显示修改后的代码建议。

### 使用 Ask 智能问答

**示例场景**: 理解复杂代码库

1. 选择一段复杂代码
2. 按下 ⌘L (macOS) 或 Ctrl+L (Windows/Linux)
3. 询问："这段代码的目的是什么？有没有潜在的性能问题？"

**效果**: Cursor 会分析代码并提供详细的解释和改进建议。

---

欢迎使用 Cursor！本文档和相关资源将帮助您快速掌握 Cursor 的各项功能，显著提升您的开发效率。如果您有任何问题或建议，请随时访问我们的[社区论坛](https://forum.cursor.com)寻求帮助。 
