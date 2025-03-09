# Cursor 键盘快捷键

> **免责声明**：本文档是 [Cursor 官方文档中的键盘快捷键页面](https://docs.cursor.com/kbd)的**第三方非官方中文翻译**，仅供学习参考。内容可能不完全反映最新的官方信息，请以 [Cursor 官方文档](https://docs.cursor.com) 为准。所有商标和版权归 Cursor/Anysphere 公司所有。

> 本文档提供了 Cursor 各功能的键盘快捷键全面指南，包括聊天、Composer、Tab 和 Agent 等功能的快捷键。

## 导航菜单

### 入门指南
* [欢迎使用 Cursor](/cursor-welcome)
* [安装指南](/cursor-install)
* [从 VS Code 迁移](/cursor-migrate-vscode)
* [入门介绍](/cursor-introduction)
* [常见问题解答](/cursor-faq)

### 编辑器功能
* [Tab 智能补全](/cursor-tab)
  * [概述](/cursor-tab)
  * [Tab vs GitHub Copilot](/cursor-tab-vs-copilot)
  * [自动导入](/cursor-auto-import)
  * [高级功能](/cursor-tab-advanced)
* [Agent 智能代理](/cursor-agent)
* [Composer 多文件编辑](/cursor-composer)
* [Ask 智能问答](/cursor-ask)
  * [概述](/cursor-ask)
  * [自定义设置](/cursor-ask-customize)
  * [代码库交互](/cursor-ask-with-codebase)
  * [应用建议](/cursor-ask-apply)
* [⌘K 内联编辑](/cursor-cmd-k)
  * [概述](/cursor-cmd-k)
  * [终端中的 ⌘K](/cursor-terminal-cmd-k)
* [AI 提交信息](/cursor-commit)
* [Beta 功能预览](/cursor-beta)
* [键盘快捷键](#cursor-键盘快捷键)

---

## 概述

本文提供了 Cursor 键盘快捷键和键位绑定的高级概览。您可以通过按下 `⌘R` 然后 `⌘S`（在 Windows 上为 `Ctrl+R` 然后 `Ctrl+S`）查看所有键盘快捷键。

Cursor 的键位绑定基于 VS Code 的键位绑定，因此如果您熟悉 VS Code，许多快捷键将是相似的。

所有 macOS 上的 `⌘` 键在 Windows 和 Linux 上可以替换为 `Ctrl` 键。

## 通用快捷键

以下是 Cursor 中最常用的通用快捷键：

| 快捷键 | 操作 |
| --- | --- |
| ⌘ + I | 打开 Composer |
| ⌘ + L | 打开聊天 |
| ⌘ + . | 在 Composer 中切换 Agent |
| ⌘ + / | 切换 AI 模型 |
| ⌘ + Alt + L | 打开聊天和 Composer 历史记录 |
| ⌘ + Shift + J | 打开 Cursor 设置 |
| ⌘ + Shift + P | 打开命令面板 |

## 聊天快捷键

使用 Ask 功能时的快捷键：

| 快捷键 | 操作 |
| --- | --- |
| ⌘ + Enter | 使用代码库提交 |
| Enter | 提交 |
| ↑ | 选择上一条消息 |
| 选择代码, ⌘ + L | 添加选中的代码作为上下文 |
| 选择代码, ⌘ + Shift + L | 添加选中的代码作为上下文 |

## Composer 快捷键

使用 Composer 多文件编辑时的快捷键：

| 快捷键 | 操作 |
| --- | --- |
| ⌘ + Backspace | 取消生成 |
| ⌘ + Enter | 接受所有更改 |
| ⌘ + Backspace | 拒绝所有更改 |
| Tab | 循环到下一条消息 |
| Shift + Tab | 循环到上一条消息 |
| ⌘ + Alt + / | 打开模型切换 |
| ⌘ + N | 创建新的 Composer |
| ⌘ + R | 创建新的 Composer |
| ⌘ + Shift + K | 以栏形式打开 Composer |
| ⌘ + \[ | 上一个 Composer |
| ⌘ + \] | 下一个 Composer |
| ⌘ + W | 关闭 Composer |
| ↑ | 选择上一条消息 |

## ⌘K 快捷键

使用内联编辑功能时的快捷键：

| 快捷键 | 操作 |
| --- | --- |
| ⌘ + K | 打开 |
| ⌘ + Shift + K | 切换输入焦点 |
| Enter | 提交 |
| Option + Enter | 快速提问 |

## 代码选择与上下文快捷键

处理代码选择和上下文时的快捷键：

| 快捷键 | 操作 |
| --- | --- |
| @ | [@符号引用](/context/@-symbols) |
| # | 文件 |
| ⌘ + Shift + L | 将选中内容添加到聊天 |
| ⌘ + Shift + K | 将选中内容添加到编辑 |
| ⌘ + L | 将选中内容添加到新聊天 |
| ⌘ + M | 切换文件读取策略 |
| ⌘ + → | 接受建议的下一个单词 |
| ⌘ + Enter | 在聊天中搜索代码库 |
| 选择代码, ⌘ + C, ⌘ + V | 添加复制的引用代码作为上下文 |
| 选择代码, ⌘ + C, ⌘ + Shift + V | 添加复制的代码作为文本上下文 |

## Tab 快捷键

使用代码自动补全功能时的快捷键：

| 快捷键 | 操作 |
| --- | --- |
| Tab | 接受建议 |
| ⌘ + → | 接受下一个单词 |

## 终端快捷键

在终端中使用 AI 功能时的快捷键：

| 快捷键 | 操作 |
| --- | --- |
| ⌘ + K | 打开终端提示栏 |
| ⌘ + Enter | 运行生成的命令 |
| Esc | 接受命令 |

## 自定义快捷键

您可以根据个人偏好自定义 Cursor 的键盘快捷键：

1. 打开命令面板（⌘ + Shift + P 或 Ctrl + Shift + P）
2. 搜索并选择 "Open Keyboard Shortcuts (JSON)"
3. 在打开的 JSON 文件中添加或修改键位绑定
4. 保存文件以应用更改

例如，添加生成 Git 提交信息的快捷键：

```json
{
  "key": "cmd+m",
  "command": "cursor.generateGitCommitMessage"
}
```

## VS Code 兼容性

由于 Cursor 基于 VS Code，大多数 VS Code 的快捷键在 Cursor 中也可以使用。常见的编辑操作、文件导航和窗口管理快捷键通常是相同的。

如果您熟悉 VS Code 的快捷键，您会发现在 Cursor 中使用它们非常自然。主要区别在于 Cursor 添加了特定于 AI 功能的额外快捷键。

## 快捷键冲突解决

如果您发现键盘快捷键之间有冲突，可以通过以下方式解决：

1. 打开键盘快捷键设置（⌘R ⌘S 或 Ctrl+R Ctrl+S）
2. 搜索冲突的命令
3. 右击冲突命令并选择"更改键位绑定"
4. 指定一个新的、未使用的键位组合

---

掌握这些键盘快捷键将显著提高您使用 Cursor 的效率。随着使用经验的积累，这些快捷操作将成为您工作流程的自然部分，让您能够更流畅地利用 Cursor 的 AI 辅助编码功能。

如有任何问题，请参考[常见问题解答](/cursor-faq)或访问[社区论坛](https://forum.cursor.com)寻求帮助。 