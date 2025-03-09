# Cursor 使用手册

## 一、入门指南

### Cursor 简介

Cursor 是一款由人工智能驱动的集成开发环境（IDE），专为现代软件开发而设计。它是基于 VS Code 的分支，结合了传统 IDE 的功能与先进的 AI 技术，旨在提高开发者的生产力和代码质量。

Cursor 的核心优势包括：
- AI 辅助编码和代码自动补全
- 智能代码解释和重构
- 快速上下文相关的文档查询
- 集成的 AI 聊天功能，用于问答和问题解决
- 多文件编辑和生成功能
- 支持多种编程语言和框架

### 安装与配置

**下载安装步骤**

1. **下载**：访问 [Cursor 官网](https://www.cursor.com) 下载适合您操作系统的版本（Windows、macOS 或 Linux）。
2. **安装**：
   - **Windows**：运行下载的 .exe 文件并按照安装向导完成安装。
   - **macOS**：打开 .dmg 文件，将 Cursor 图标拖到 Applications 文件夹，然后启动它。
   - **Linux**：使终端中的 .AppImage 文件可执行，然后运行它。

**初始设置**

- 首次启动 Cursor 后，您可以选择导入您之前的 VS Code 设置和扩展。
- 配置您的 AI 设置，包括选择模型和设置隐私选项。
- 如果需要，设置自定义 API 密钥。

### 界面概览

Cursor 的界面包括以下主要组件：

- **编辑器区域**：中央的代码编辑区域，支持多标签页和分屏
- **侧边栏**：包含文件浏览器、搜索、源代码控制、调试工具等
- **状态栏**：底部显示当前文件和编辑器状态信息
- **命令面板**：通过 Ctrl+Shift+P (Windows/Linux) 或 Cmd+Shift+P (macOS) 访问
- **AI 聊天面板**：通过 Ctrl+L (Windows/Linux) 或 Cmd+L (macOS) 打开
- **终端**：集成的命令行终端

## 二、基本操作

### 创建与管理项目

- **打开项目**：通过 "文件 > 打开文件夹" 或使用欢迎页面上的选项
- **创建新项目**：可以直接创建新文件夹并打开，也可以通过 AI 功能快速生成项目结构
- **多项目工作区**：支持在一个窗口中管理多个项目

### 文件与目录操作

- **创建文件/文件夹**：右键菜单或使用快捷键 Ctrl+N (Windows/Linux) 或 Cmd+N (macOS)
- **文件导航**：使用文件浏览器或 Ctrl+P (Windows/Linux) 或 Cmd+P (macOS) 快速打开文件
- **搜索功能**：全文搜索和替换功能

### 编辑器使用技巧

- **多光标编辑**：按住 Alt 键并点击可添加多个光标
- **代码折叠**：使用左侧的折叠图标或 Ctrl+Shift+[ (Windows/Linux) 或 Cmd+Shift+[ (macOS)
- **拆分编辑器**：通过拖拽标签页或使用右键菜单中的"拆分编辑器"选项
- **Zen 模式**：通过 "查看 > 切换 Zen 模式" 进入专注编码的全屏模式

## 三、高级功能

### 代码智能提示 (Cursor Tab)

Cursor 提供了强大的 AI 驱动代码补全功能：

- **多行编辑**：能够同时建议多行代码，节省时间
- **智能重写**：自动修复拼写和语法错误
- **光标预测**：预测您的下一个光标位置，使代码导航更加流畅

快捷键：
- 接受建议：Tab
- 拒绝建议：Esc
- 部分接受：Ctrl/Cmd + 右箭头

### Composer (多文件编辑)

Composer 是 Cursor 的一个强大功能，允许您通过 AI 同时修改多个文件或生成整个应用程序。

- **打开方式**：
  - 浮动窗口：Ctrl+I (Windows/Linux) 或 Cmd+I (macOS)
  - 全屏模式：Ctrl+Shift+I (Windows/Linux) 或 Cmd+Shift+I (macOS)

- **使用技巧**：
  - 使用 @filename 引用文件
  - 使用 #filename 添加文件到 Composer
  - 在 Composer 中使用 Agent 模式可以完成端到端的任务

### AI 聊天功能 (Chat)

AI 聊天功能让您可以与了解您代码库的 AI 交流：

- **打开方式**：Ctrl+L (Windows/Linux) 或 Cmd+L (macOS)
- **选中代码后使用**：Ctrl+Shift+L (Windows/Linux) 或 Cmd+Shift+L (macOS)

功能特点：
- **代码库问答**：使用 @Codebase 或 Ctrl/Cmd+Enter 询问有关代码库的问题
- **即时应用**：通过点击聊天代码块顶部的播放按钮，将代码建议应用回代码库
- **引用代码**：使用 @ 符号引用代码，作为 AI 的上下文

### 调试与错误处理

- **AI 辅助调试**：可以询问 AI 关于代码中潜在问题的见解
- **自动循环修复错误**：Cursor 可以自动检测 lint 错误并应用修复
- **传统调试工具**：支持断点设置、变量监视和步进调试

### Ctrl+K (内联编辑)

Ctrl+K 功能让您可以使用 AI 编辑和编写代码：

- **编辑现有代码**：选择一些代码，按 Ctrl+K (Windows/Linux) 或 Cmd+K (macOS)，然后描述应如何更改代码
- **生成新代码**：不选择任何内容，直接按 Ctrl+K (Windows/Linux) 或 Cmd+K (macOS)
- **终端中使用**：在终端中按 Ctrl+K 可以用自然语言编写终端命令

### 版本控制集成

Cursor 继承了 VS Code 的 Git 集成功能，还添加了 AI 功能：

- **AI 提交信息**：自动生成有意义的提交消息
- **标准 Git 操作**：暂存、提交、拉取、推送等
- **差异查看器**：查看更改并解决合并冲突

## 四、扩展与插件

### 插件安装与管理

Cursor 支持 VS Code 扩展，让您可以自定义和扩展编辑器功能：

- **浏览扩展**：通过 Ctrl+Shift+X (Windows/Linux) 或 Cmd+Shift+X (macOS) 打开扩展视图
- **安装扩展**：搜索并点击"安装"按钮
- **管理扩展**：启用、禁用或卸载已安装的扩展

### 推荐插件列表

以下是一些与 Cursor 良好配合的插件：

- **GitLens**：增强 Git 功能和历史可视化
- **Prettier**：代码格式化工具
- **ESLint**：JavaScript/TypeScript 代码质量工具
- **Live Server**：本地开发服务器
- **Material Icon Theme**：美化文件图标
- **Remote Development**：远程开发支持

## 五、快捷键与效率提升

### 常用快捷键

**AI 功能快捷键**：
- **Ctrl+L / Cmd+L**：打开 AI 聊天面板
- **Ctrl+Shift+L / Cmd+Shift+L**：选中代码并添加到 AI 聊天
- **Ctrl+K / Cmd+K**：内联编辑或生成代码
- **Ctrl+I / Cmd+I**：打开 Composer（浮动窗口）
- **Ctrl+Shift+I / Cmd+Shift+I**：打开 Composer（全屏模式）

**通用编辑器快捷键**：
- **Ctrl+Shift+P / Cmd+Shift+P**：打开命令面板
- **Ctrl+P / Cmd+P**：快速打开文件
- **Ctrl+B / Cmd+B**：切换侧边栏
- **Ctrl+` / Cmd+`**：切换终端
- **Ctrl+, / Cmd+,**：打开设置
- **Ctrl+N / Cmd+N**：新建文件
- **Ctrl+S / Cmd+S**：保存文件

### 自定义快捷键

您可以通过以下步骤自定义键盘快捷键：

1. 打开命令面板（Ctrl+Shift+P / Cmd+Shift+P）
2. 搜索并选择"首选项：打开键盘快捷方式"
3. 搜索您想要更改的命令
4. 点击编辑图标并输入新的快捷键组合
5. 按 Enter 确认更改

## 六、常见问题与解决方案

### 常见问题汇总

1. **AI 功能响应慢或不工作**
   - 检查您的互联网连接
   - 确认 API 密钥设置正确
   - 尝试切换到不同的 AI 模型

2. **扩展冲突问题**
   - 识别导致冲突的扩展
   - 禁用一个或调整扩展设置

3. **高 CPU/内存使用率**
   - 关闭未使用的编辑器标签页
   - 减少打开的项目数量
   - 禁用不必要的扩展

### 故障排除指南

- **重新加载窗口**：有时简单地重新加载窗口可以解决临时问题（Ctrl+Shift+P / Cmd+Shift+P，然后搜索"重新加载窗口"）
- **清除缓存**：删除 Cursor 缓存可能会解决某些持久性问题
- **检查日志**：日志文件可能包含有助于诊断问题的信息
- **重置设置**：在极端情况下，重置为默认设置可能会有所帮助

## 七、附录

### 术语表

- **LLM**：大型语言模型，Cursor 使用的 AI 技术
- **Cursor Tab**：Cursor 的 AI 代码补全功能
- **Composer**：用于多文件编辑和生成的 AI 工具
- **Agent**：可以执行端到端任务的 AI 代理模式
- **@ 符号**：在 AI 聊天中引用文件或函数的标记

### 资源与链接

- [Cursor 官方网站](https://www.cursor.com)
- [Cursor 文档](https://docs.cursor.com)
- [Cursor 社区论坛](https://forum.cursor.com)
- [Cursor GitHub](https://github.com/getcursor)
- [Cursor Twitter](https://twitter.com/cursor)

---

欢迎使用 Cursor！本手册将帮助您快速掌握 Cursor 的各项功能，提升您的开发效率。如果您有任何问题或建议，请随时访问我们的社区论坛寻求帮助或贡献您的想法。 