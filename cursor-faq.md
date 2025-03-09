# Cursor 常见问题解答

> **免责声明**：本文档是 [Cursor 官方常见问题解答](https://docs.cursor.com/faq)的**第三方非官方中文翻译**，仅供学习参考。内容可能不完全反映最新的官方信息，请以 [Cursor 官方文档](https://docs.cursor.com) 为准。所有商标和版权归 Cursor/Anysphere 公司所有。

> 本文档旨在回答用户关于 Cursor 功能、语言支持、模型和使用方面的常见问题。

## 导航菜单

### 入门指南
* [欢迎使用 Cursor](/cursor-welcome)
* [安装指南](/cursor-install)
* [从 VS Code 迁移](/cursor-migrate-vscode)
* [入门介绍](/cursor-introduction)
* [常见问题解答](#cursor-常见问题解答)

### 编辑器功能
* [Tab 智能补全](/cursor-tab)
* [Agent 智能代理](/cursor-agent)
* [Composer 多文件编辑](/cursor-composer)
* [Ask 智能问答](/cursor-ask)
* [⌘K 内联编辑](/cursor-cmd-k)
* [AI 提交信息](/cursor-commit)
* [Beta 功能预览](/cursor-beta)
* [键盘快捷键](/cursor-shortcuts)

---

## 编程语言支持

### Cursor 支持哪些编程语言？

虽然 Cursor 可以处理任何编程语言，但由于模型训练数据的广泛性，它在 Python 和 JavaScript/TypeScript 方面表现尤为出色。它在 Swift、C 和 Rust 等语言上也有良好的表现。您可以通过在项目中添加相关文档来增强对任何语言的支持。

## AI 模型与技术

### Cursor 如何保持 AI 模型与最新文档同步？

Cursor 利用强大的基础模型，如 Claude 3.5 和 GPT-4。对于最新的库信息，您可以使用我们的 @web 搜索功能。由于核心语言概念很少会发生剧烈变化，这些模型能够长期保持有效性。

### MCP 服务器的作用是什么？

MCP（模型上下文协议）服务器作为将外部上下文引入 Cursor 的桥梁。它使 Cursor 能够连接到 Google Drive 和 Notion 等服务，帮助您将这些来源的文档和需求纳入到您的工作流程中。

## 项目与代码库

### 项目索引有大小限制吗？

默认情况下，项目限制为 10,000 个文件，不过这个限制可以根据需要进行调整。为了优化索引性能，您可以使用 `.cursorignore` 来排除不必要的文件，使它们不参与索引过程。

### 如何在多个代码库之间共享上下文？

目前，最简单的方法是将相关代码库放在同一个目录中，并从那里启动 Cursor。我们正在积极开发对管理多个项目文件夹的改进支持。

## 更新与维护

### Cursor 的更新机制是怎样的？

Cursor 会频繁更新，添加新功能和改进。您可以在 [cursor.com/changelog](https://www.cursor.com/changelog) 查看最新的变更和更新。我们定期发布更新以提升用户体验并添加新功能。

### 为什么我还没有收到最新的版本更新？

我们会在多天内逐步推出新版本，以确保稳定性。如果您还没有收到更新，可以预计它很快就会显示。您也可以通过打开命令面板（Cmd/Ctrl + Shift + P）并输入"Attempt Update"来手动检查更新。

## 隐私与数据

### 如何删除我的数据？

您可以通过进入控制面板并点击"删除账户"按钮来删除您的账户和所有相关数据。

## 语言模型兼容性

### Cursor 使用哪些语言模型？

Cursor 支持多种先进的语言模型：

1. **Claude 3.5 Sonnet** - Anthropic 的最新模型，提供强大的代码理解和生成能力
2. **GPT-4** - OpenAI 的高级模型，适用于复杂的编程任务
3. **GPT-3.5 Turbo** - 更快速和经济的选项，适合简单任务

您可以在设置中根据您的需求选择和配置这些模型。

## 使用限制

### Cursor 的免费版与付费版有什么区别？

免费版提供基本的 AI 编码功能，但有每日使用限制。Pro 和团队版提供：

- 更高的每日使用额度
- 优先访问更强大的模型
- 更大项目的代码库索引支持
- 团队协作和管理功能（团队版）

详细的套餐对比可以在 [Cursor 价格页面](https://www.cursor.com/pricing) 查看。

## 系统要求

### Cursor 需要什么样的系统配置？

Cursor 的系统要求与 VS Code 类似：

- **操作系统**：
  - Windows 10/11 (64位)
  - macOS 10.15+ (Catalina 及更高版本)
  - 主流 Linux 发行版 (64位)

- **硬件**：
  - 最低 4GB RAM (推荐 8GB+)
  - 1GB 可用磁盘空间
  - 支持 OpenGL 2.0 的显卡

注意：虽然系统要求适中，但处理大型项目或使用高级 AI 功能时，建议有更强大的硬件配置。

## 键盘快捷键与导航

### 最重要的 Cursor 快捷键是什么？

Cursor 的核心快捷键包括：

- **AI 功能快捷键**：
  - **Ctrl+L / Cmd+L**：打开 AI 聊天面板
  - **Ctrl+K / Cmd+K**：内联编辑或生成代码
  - **Ctrl+I / Cmd+I**：打开 Composer 多文件编辑
  - **Ctrl+Shift+I / Cmd+Shift+I**：全屏 Composer

- **通用编辑器快捷键**（与 VS Code 相同）：
  - **Ctrl+P / Cmd+P**：快速打开文件
  - **Ctrl+Shift+P / Cmd+Shift+P**：命令面板
  - **Ctrl+B / Cmd+B**：切换侧边栏

完整的快捷键列表可在[键盘快捷键](/cursor-shortcuts)页面查看。

## 附加资源

- [常见问题](/cursor-issues) - 常见问题的解决方案
- [键盘快捷键](/cursor-shortcuts) - 完整的键绑定和快捷键列表
- [社区论坛](https://forum.cursor.com) - 与其他 Cursor 用户交流并获取帮助

---

还有其他问题？请访问我们的[社区论坛](https://forum.cursor.com)或[联系支持团队](https://www.cursor.com/support)获取帮助。 