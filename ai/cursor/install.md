# Cursor 安装指南

> **免责声明**：本文档是 [Cursor 官方安装指南](https://docs.cursor.com/get-started/installation)的**第三方非官方中文翻译**，仅供学习参考。内容可能不完全反映最新的官方信息，请以 [Cursor 官方文档](https://docs.cursor.com) 为准。所有商标和版权归 Cursor/Anysphere 公司所有。

> 本文档旨在帮助中文用户快速安装和设置 Cursor 编辑器。

---

## 安装步骤

1. 访问 [cursor.com](https://www.cursor.com) 并点击"下载"按钮  
   安装程序将自动为您的操作系统下载适合的版本
2. 运行安装程序并等待安装完成
3. 通过桌面快捷方式或应用程序菜单启动 Cursor

## 基本设置

首次启动 Cursor 时，您将被提示配置一些设置，以确保您能够快速上手！

* **键盘快捷键** - 如果您来自其他编辑器，可以选择您想要使用的默认快捷键，使其尽可能地符合您的使用习惯。
* **语言** - 如果您希望 AI 使用不同的语言与您交流，可以输入您想使用的语言名称。这可以在 AI 规则中进一步配置。
* **代码库索引** - Cursor 会在本地索引您的代码库，以提供更好的 AI 建议。在[代码库索引](/cursor-indexing)中了解更多信息。
* **CLI 快捷方式** - 您可以选择安装 `cursor` 和 `code` 命令，以便从终端启动 Cursor。

配置完这些设置后，系统会提示您导入 VS Code 设置。如果您接受，Cursor 将导入您的扩展、主题、用户设置和键盘快捷键，让您可以立即开始使用。

接下来，系统会询问您的数据偏好。在我们的[隐私页面](/cursor-privacy)了解更多相关信息。

如果需要，您可以通过在终端中这样启动 Cursor 来触发此视图：

```sh
cursor --user-data-dir=/some/new/path
```

## 登录

1. 点击"注册"或"登录"后，系统会提示您设置账户。您可以选择使用电子邮件，或通过 Google 或 GitHub 注册。
2. 登录成功后，您将返回 Cursor，准备开始编码！

如果您是首次使用 Cursor，只要您注册，就会获得 14 天的 Cursor Pro 免费试用期。在[官网](https://www.cursor.com)了解更多关于 Cursor Pro 的信息。

## 从其他编辑器迁移

* VS Code - 导入您的设置、扩展、主题和键盘快捷键

我们将很快添加更多针对其他编辑器的迁移指南。

## 下一步

现在您已经安装了 Cursor，请前往[入门介绍](/cursor-introduction)了解 Cursor 的功能以及如何开始使用它们。

## 附加设置

Cursor 设计为灵活且可定制的，因此您可以根据自己的喜好进行配置。您可以通过以下方式访问所有设置：

### Cursor 设置

* 通过齿轮图标、`Cmd/Ctrl + Shift + J` 或命令面板 > `Cursor Settings` 访问
* 配置 AI 功能和 Cursor 特定的首选项

### 编辑器设置

* 通过命令面板 (`Cmd/Ctrl + Shift + P`) > `"首选项: 打开设置 (UI)"` 访问
* 调整编辑器行为和外观

---

## 设置实例展示

### 初始设置界面

> **初始设置界面**：Cursor 提供了一个直观的设置界面，让您可以配置键盘快捷键偏好、界面语言、代码库索引设置和终端命令行工具等选项。这个界面在首次启动 Cursor 时自动显示，帮助您快速完成基本配置。

### 导入 VS Code 设置

当您首次启动 Cursor 时，系统会询问您是否要导入 VS Code 设置：

```
[ ] 导入 VS Code 扩展
[ ] 导入 VS Code 用户设置
[ ] 导入 VS Code 键盘快捷键
```

勾选您想导入的设置，点击"确认"后，Cursor 将自动导入所选内容。

### 配置 AI 设置

Cursor 的 AI 功能可以通过设置面板进行自定义：

1. 打开 Cursor 设置 (Cmd/Ctrl + Shift + J)
2. 导航到"AI"部分
3. 配置模型、语言和其他 AI 相关选项

### 配置终端 CLI

要从命令行启动 Cursor，您可以设置 CLI 快捷方式：

1. 在 Cursor 中打开命令面板 (Cmd/Ctrl + Shift + P)
2. 搜索并选择"安装 'code' 命令"
3. 这将允许您使用 `cursor` 命令从终端打开 Cursor

示例用法：
```bash
# 打开当前目录
cursor .

# 打开特定文件
cursor path/to/file.js

# 打开新窗口
cursor -n
```

---

欢迎开始使用 Cursor！如果您在安装或设置过程中遇到任何问题，请查看我们的[故障排除指南](/cursor-troubleshooting)或访问[社区论坛](https://forum.cursor.com)寻求帮助。 
