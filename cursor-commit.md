# Cursor AI 提交信息

> **免责声明**：本文档是 [Cursor 官方文档中的 AI 提交信息功能页面](https://docs.cursor.com/more/ai-commit-message)的**第三方非官方中文翻译**，仅供学习参考。内容可能不完全反映最新的官方信息，请以 [Cursor 官方文档](https://docs.cursor.com) 为准。所有商标和版权归 Cursor/Anysphere 公司所有。

> 本文档介绍如何在 Cursor 中使用闪光图标或快捷键自动生成 Git 提交信息。

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
* [AI 提交信息](#cursor-ai-提交信息)
* [Beta 功能预览](/cursor-beta)
* [键盘快捷键](/cursor-shortcuts)

---

## 自动生成提交信息

Cursor 可以帮助您只需一次点击就为您的更改生成有意义的提交信息。以下是使用此功能的方法：

1. 暂存您想要提交的文件
2. 在侧边栏中打开 Git 标签页
3. 在提交信息输入字段旁边寻找闪光（✨）图标
4. 点击闪光图标，根据您的暂存更改生成提交信息

生成的提交信息将基于您的暂存文件中的更改和您的代码库的 Git 历史记录。这意味着 Cursor 会分析您当前的更改和以前的提交信息，以生成上下文相关的消息。Cursor 会从您的提交历史中学习，这意味着如果您使用诸如 Conventional Commits 之类的约定，生成的消息将遵循相同的模式。

## 快捷键设置

您可以为生成提交信息功能绑定键盘快捷键。

1. 转到键盘快捷键 `⌘R ⌘S` 或 `⌘⇧P` 并搜索 "Open Keyboard Shortcuts (JSON)"
2. 添加以下内容到文件中，将其绑定到 `⌘M`：  
```json  
{  
  "key": "cmd+m",  
  "command": "cursor.generateGitCommitMessage"  
}  
```
3. 保存文件，设置完成！

在 Windows 和 Linux 系统上，您可以使用 `ctrl` 替代 `cmd`：
```json  
{  
  "key": "ctrl+m",  
  "command": "cursor.generateGitCommitMessage"  
}  
```

## 提交信息生成的工作原理

当您点击闪光图标或使用快捷键时，Cursor 会：

1. **分析暂存更改**：检查暂存文件中的所有更改，包括新增、修改和删除的代码
2. **参考历史记录**：查看您的存储库中之前的提交信息，以了解您的提交风格和约定
3. **生成上下文相关信息**：创建简洁、描述性的提交信息，准确反映您所做的更改
4. **自动填充**：将生成的信息自动填充到提交信息输入字段中

## 优化提交信息效果的方法

为了获得最佳的自动生成提交信息，可以考虑以下几点：

1. **保持一致的提交风格**：Cursor 会学习您现有的提交信息风格，因此保持一致会使生成的内容更符合您的偏好
2. **合理分组更改**：将相关更改一起暂存，这样 AI 可以更好地理解整体目的
3. **检查并编辑**：生成后，您可以根据需要编辑信息，以添加额外的上下文或细节
4. **定期使用**：随着时间的推移，Cursor 会更好地了解您的项目和偏好

## 使用场景

AI 提交信息功能在以下场景特别有用：

1. **常规开发工作**：快速为日常代码更改生成描述性提交
2. **团队协作**：确保提交信息风格在团队成员之间保持一致
3. **大型提交**：为包含多个更改的复杂提交生成全面的描述
4. **保持提交历史整洁**：避免琐碎或不具描述性的提交信息

## 注意事项

目前，没有办法自定义或提供特定说明来指导提交信息的生成方式。Cursor 会自动适应您现有的提交信息风格。

对于特定的项目，如果您已经在使用例如 Conventional Commits 或其他提交格式约定，Cursor 将尝试识别和遵循这些模式。

---

AI 提交信息功能是 Cursor 提供的一项便捷工具，可以帮助您保持清晰、有用的 Git 提交历史，同时减少在构思提交信息上花费的时间。通过智能分析您的代码更改和历史提交模式，它可以生成准确反映您工作的提交信息。

如有任何问题，请参考[常见问题解答](/cursor-faq)或访问[社区论坛](https://forum.cursor.com)寻求帮助。 