# 从 VS Code 迁移到 Cursor

> **免责声明**：本文档是 [Cursor 官方文档中"从 VS Code 迁移"部分](https://docs.cursor.com/get-started/migrate-from-vs-code)的**第三方非官方中文翻译**，仅供学习参考。内容可能不完全反映最新的官方信息，请以 [Cursor 官方文档](https://docs.cursor.com) 为准。所有商标和版权归 Cursor/Anysphere 公司所有。

> 本文档旨在帮助习惯使用 VS Code 的开发者顺利过渡到 Cursor。

---

## Cursor 与 VS Code 的关系

Cursor 是 VS Code 的一个分支（fork）。这使我们能够专注于打造集成 AI 的最佳编码方式，同时提供熟悉的文本编辑体验。

## 为什么选择 Cursor

如果您是 VS Code 用户，迁移到 Cursor 将是一个无缝的体验，因为 Cursor 是基于 VS Code 构建的，继承了其几乎所有功能，同时增加了强大的 AI 辅助功能。

通过迁移到 Cursor，您将获得：

- 所有熟悉的 VS Code 功能和界面
- 强大的 AI 驱动编码功能
- 优化的工作流程和提高的生产力
- 持续更新的 AI 模型和功能

## 导入扩展、主题、设置和键盘绑定

### 一键迁移

Cursor 提供了一键迁移功能，可以轻松导入您的 VS Code 设置：

1. 首次启动 Cursor 时，系统会询问您是否要导入 VS Code 设置
2. 选择您想导入的设置（扩展、用户设置、键盘快捷键）
3. 点击确认，Cursor 将自动导入您选择的设置

如果您已经跳过了初始设置，仍然可以手动导入：
- 打开 Cursor 设置 (Cmd/Ctrl + Shift + J)
- 导航到"通用 > 账户"部分
- 选择"从 VS Code 导入设置"

### 可以导入的设置

#### 1. 扩展

Cursor 支持几乎所有 VS Code 扩展。导入后，您可以在 Cursor 中使用这些扩展，就像在 VS Code 中一样。

常见扩展的兼容性：
- 语言扩展（如 Python、Java、JavaScript 等）- 完全兼容
- 工具扩展（如 Git 集成、Linters）- 完全兼容
- UI 扩展（如主题、图标包）- 完全兼容
- 调试扩展 - 大部分兼容

#### 2. 用户设置

Cursor 支持导入所有 VS Code 用户设置，包括：
- 编辑器外观（字体、颜色、缩进等）
- 编辑器行为（自动保存、格式化等）
- 语言特定设置
- 工作区设置

#### 3. 键盘快捷键

Cursor 会导入您在 VS Code 中自定义的所有键盘快捷键，确保您可以立即使用熟悉的操作方式。

## 保持更新

Cursor 团队会定期将 Cursor 与最新版本的 VS Code 进行合并（rebase），确保您能够获得 VS Code 的最新功能和改进，同时享受 Cursor 的 AI 增强功能。

## 为什么不是一个扩展？

作为独立应用程序，Cursor 能够更好地控制编辑器的 UI，实现更深度的 AI 集成。一些功能，如 Cursor Tab 和 CMD-K，无法作为现有编码环境的插件实现。

## 设置

Cursor 有两种不同的设置面板：

### Cursor 设置

* 通过右上角的齿轮按钮、`Cmd/Ctrl + Shift + J` 或命令面板中输入 `Cursor Settings` 访问
* 配置 AI 功能和 Cursor 特定的首选项

### VS Code 设置

* 通过命令面板 (`Cmd/Ctrl + Shift + P`) 并输入 `VS Code Settings` 访问
* 调整编辑器行为和外观

## 界面差异

### 为什么 Cursor 中的活动栏是水平的？

Cursor 默认将活动栏设置为水平布局，目的是为聊天功能节省空间。如果您更喜欢传统的垂直活动栏，可以通过以下步骤进行更改：

1. 打开 VS Code 设置
2. 将 `workbench.activityBar.orientation` 设置为 `vertical`
3. 重启 Cursor

## 文件和工作区兼容性

Cursor 与 VS Code 工作区和项目文件完全兼容：

- `.vscode` 文件夹 - Cursor 可以读取和使用这些配置
- `settings.json` - 项目特定设置会被应用
- 任务和启动配置 - 可以正常工作
- 工作区文件 (`.code-workspace`) - 可以直接在 Cursor 中打开

## 区别和注意事项

虽然 Cursor 提供了与 VS Code 很高的兼容性，但仍然有一些区别需要注意：

1. **AI 功能**：Cursor 添加了额外的快捷键来触发 AI 功能，可能会与您的一些自定义快捷键冲突
2. **设置面板**：Cursor 有自己的设置面板，用于配置 AI 功能
3. **扩展更新**：某些扩展可能需要在 Cursor 中单独更新
4. **特定 VS Code 功能**：极少数 VS Code 特有功能可能不完全相同

## 最佳实践

为了确保顺利迁移，建议：

1. **备份设置**：在迁移前，备份您的 VS Code 设置（通常位于 `~/.config/Code/User` 或 `%APPDATA%\Code\User`）
2. **逐步适应**：花时间熟悉 Cursor 特有的 AI 功能
3. **保留 VS Code**：在完全适应 Cursor 之前，可以保留 VS Code 作为备用
4. **查看文档**：阅读 Cursor 的文档，了解如何充分利用新功能

## 常见问题

### 我的某些扩展在 Cursor 中不工作怎么办？

大多数情况下，重新安装扩展或查看是否有更新可以解决问题。如果仍然不工作，可以在 Cursor 社区论坛中寻求帮助。

### 我可以在同一台电脑上同时使用 VS Code 和 Cursor 吗？

是的，VS Code 和 Cursor 可以共存，不会相互干扰。

### Cursor 会自动与我的 VS Code 设置同步吗？

不会自动同步。导入是一次性操作，如果您在 VS Code 中更改了设置，需要重新导入或在 Cursor 中手动更改。

### 我的 VS Code 扩展授权在 Cursor 中有效吗？

大多数情况下是有效的，因为扩展通常识别用户而不是编辑器。对于少数例外情况，可能需要重新授权。

---

## 迁移示例

### 示例：导入 VS Code 设置

> **设置导入界面**：Cursor 提供了一个简洁的导入界面，让您可以选择要导入的 VS Code 设置组件，包括扩展、用户设置和键盘快捷键。您只需勾选想要导入的项目，然后点击确认按钮即可完成导入。

### 示例：使用熟悉的快捷键

Cursor 保留了所有 VS Code 的标准快捷键，例如：

- `Ctrl+P` / `Cmd+P`: 快速打开文件
- `Ctrl+Shift+P` / `Cmd+Shift+P`: 命令面板
- `Ctrl+` / `Cmd+`：终端
- `F5`: 启动调试
- `Ctrl+Shift+G` / `Cmd+Shift+G`: Git 面板

同时添加了新的 AI 功能快捷键：

- `Ctrl+L` / `Cmd+L`: 打开 AI 聊天面板
- `Ctrl+K` / `Cmd+K`: 内联编辑或生成代码
- `Ctrl+I` / `Cmd+I`: 打开 Composer 多文件编辑

---

完成从 VS Code 迁移到 Cursor 后，您可以开始探索 Cursor 提供的强大 AI 功能。请查看[入门介绍](/cursor-introduction)了解如何开始使用这些功能，大幅提升您的编码效率！ 
