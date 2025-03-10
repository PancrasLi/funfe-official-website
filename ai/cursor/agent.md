# Cursor Agent 智能代理

> **免责声明**：本文档是 [Cursor 官方文档中的 Agent 智能代理页面](https://docs.cursor.com/agent)的**第三方非官方中文翻译**，仅供学习参考。内容可能不完全反映最新的官方信息，请以 [Cursor 官方文档](https://docs.cursor.com) 为准。所有商标和版权归 Cursor/Anysphere 公司所有。

> 本文档介绍 Cursor 的 Agent 智能代理功能，这是一个功能强大的 AI 结对编程助手，能够理解复杂的代码库并帮助实现更大规模的代码更改。

---

## 什么是 Agent？

Cursor Agent 是一个强大的 AI 结对编程助手，专为处理复杂的代码编写和修改任务而设计。与仅提供补全的传统 AI 编码工具不同，Agent 可以：

- 理解整个代码库及其结构
- 独立执行需要多个步骤的复杂任务
- 运行命令行程序获取所需信息
- 处理跨多个文件的大规模代码更改
- 根据您的反馈迭代改进解决方案

Agent 就像拥有自己的思维过程的高级开发者，能够从头开始构建功能，修复复杂错误，或者重构大型代码库。

## 如何启动 Agent

有多种方式可以启动 Agent：

1. **通过 Composer**：
   - 按下 `Ctrl+I` / `⌘+I` 打开 Composer
   - 选择 "Agent" 模式
   - 描述您希望 Agent 完成的任务

2. **通过 Agent 按钮**：
   - 在编辑器底部状态栏中点击 "Agent" 按钮
   - 在弹出的窗口中描述您的任务

3. **通过命令面板**：
   - 打开命令面板（`Ctrl+Shift+P` / `⌘+Shift+P`）
   - 搜索并选择 "Cursor: Start Agent"

## 与 Agent 协作

### 提供任务描述

启动 Agent 后，您需要简洁而具体地描述您希望它完成的任务。例如：

✅ 好的任务描述：
- "创建一个新的用户注册表单，带有电子邮件验证和密码强度检查"
- "修复导航栏在移动设备上不能正确折叠的问题"
- "重构 UserService 类，将数据库操作分离到单独的类中"

❌ 不太有效的任务描述：
- "修复代码" (太模糊)
- "做一个完整的电子商务网站" (范围太广)
- "提高性能" (没有具体目标)

### 监督与反馈

Agent 会以对话的形式工作，向您提出问题，提出建议，并让您知道它正在执行的操作。您可以：

- 回答 Agent 的问题，提供额外信息
- 批准或拒绝 Agent 建议的更改
- 提供反馈和修正，指导 Agent 朝正确的方向前进
- 在需要时暂停 Agent 并提供新的指令

## Agent 的核心功能

### 代码理解与生成

Agent 能够理解复杂的代码库，并生成符合项目风格和最佳实践的新代码。它特别擅长：

- 分析代码库的结构和组件之间的关系
- 理解现有代码的模式和约定
- 生成与项目风格一致的新代码
- 识别并应用适当的设计模式

### 代码库探索

Agent 可以探索您的代码库，找到相关文件和功能：

- 浏览目录结构，了解项目组织
- 搜索与任务相关的代码
- 识别需要修改的文件
- 分析依赖关系和导入/导出

### 终端命令执行

Agent 可以执行终端命令来获取信息或完成任务的一部分：

- 运行测试和验证更改
- 安装所需的依赖
- 执行构建和编译步骤
- 运行 linter 或其他代码质量工具

### 多文件编辑

Agent 可以在多个文件中进行协调一致的更改：

- 同时修改相关文件
- 确保更改在所有相关文件中保持一致
- 处理文件之间的依赖关系
- 创建新文件并集成到项目中

## 使用场景

Agent 适用于多种开发场景：

### 功能开发

Agent 可以帮助实现新功能，从设计到完整实现：

- 创建新的 UI 组件
- 实现后端服务和 API
- 添加新功能到现有系统
- 构建整个功能模块

### 调试与修复

Agent 能够诊断和修复复杂的问题：

- 分析错误消息和堆栈跟踪
- 定位并修复 bug
- 解决性能问题
- 修复兼容性问题

### 重构和优化

Agent 可以帮助改进现有代码：

- 重构大型类或函数
- 提取公共功能到共享组件
- 更新代码以使用新的库或模式
- 优化算法和性能瓶颈

### 代码研究与学习

Agent 可以帮助您理解陌生的代码：

- 解释复杂的代码部分
- 提供现有功能的概述
- 识别代码库中使用的模式
- 解释如何扩展现有功能

## 最佳实践

### 与 Agent 有效协作

1. **提供明确的上下文**：告诉 Agent 关于项目的背景和您的具体目标
2. **分解复杂任务**：将大型任务分解为更小的子任务
3. **耐心等待**：复杂任务可能需要几分钟的时间让 Agent 探索和思考
4. **提供建设性反馈**：如果 Agent 的方向不对，提供具体的指导
5. **使用自然语言**：使用简明的自然语言，就像与真人搭档交流一样

### 提高 Agent 效率

1. **保持良好的代码库结构**：组织良好的项目更容易被 Agent 理解
2. **提供相关资料**：参考文档、示例代码或设计要求可以帮助 Agent 更好地理解任务
3. **使用类型注释**：强类型使 Agent 更容易理解代码的预期行为
4. **明确范围**：指明任务的边界和预期输出
5. **启用代码库索引**：确保您的项目已被 Cursor 索引以获得最佳结果

## 故障排除

### 常见问题

1. **Agent 生成不正确的代码**
   - 提供更明确的指示和上下文
   - 指出具体问题并要求修正

2. **Agent 似乎被卡住或循环**
   - 停止当前任务并用更具体的说明重新开始
   - 将大型任务分解为更小的步骤

3. **Agent 对代码库的理解有限**
   - 确保代码库已被正确索引
   - 提供关键文件的明确路径
   - 简要解释代码库的结构

### 获取帮助

如果您在使用 Agent 时遇到问题：

- 查看 Cursor 的常见问题解答和故障排除指南
- 访问 [Cursor 社区论坛](https://forum.cursor.com) 寻求帮助
- 提交详细的反馈报告给 Cursor 团队

---

## 示例用法

### 示例 1：实现新功能

**任务**：添加一个用户注册表单到我们的 React 应用

**与 Agent 的交互**：

```
您：我需要在我们的 React 应用中添加一个新的用户注册表单。表单需要包含姓名、电子邮件和密码字段，并且在提交前验证所有字段。

Agent：我会帮您实现这个注册表单。首先，我需要了解您项目的一些情况：
1. 您使用的是哪种表单管理方式？是 React Hook Form、Formik 还是原生 React 状态？
2. 您使用的是哪种 UI 库？如 Material-UI、Ant Design 或纯 CSS？
3. 表单提交后应该执行什么操作？如 API 调用、状态更新等？

您：我们使用 React Hook Form 和 Material-UI。成功提交后，需要调用 /api/register 端点并在成功后重定向到登录页面。

Agent：明白了，我会开始实施该功能。让我首先创建一个新的 RegisterForm 组件...
```

### 示例 2：调试问题

**任务**：修复登录过程中的身份验证问题

**与 Agent 的交互**：

```
您：当用户尝试登录时，后端返回 401 错误，但日志中没有显示任何有用的信息。

Agent：我将帮助您排查这个登录认证问题。我需要查看几个关键部分：
1. 前端登录请求的代码
2. 后端的身份验证处理器
3. 任何相关的中间件或拦截器

让我先查看前端登录逻辑...

[Agent 分析代码后]

我注意到前端发送请求时 Authorization 标头的格式不正确。它使用的是 "Bearer token"，但您的后端中间件期望的格式是 "Token token"。这可能是导致 401 错误的原因。

我建议更改前端的认证标头格式或更新后端中间件以接受当前格式。您希望我采取哪种方法？
```

---

Agent 是 Cursor 最强大的功能之一，能够作为真正的编程伙伴帮助您完成从简单到复杂的各种编码任务。通过有效利用 Agent，您可以显著提高开发效率和代码质量。

如有任何问题，请参考[常见问题解答](/ai/cursor/faq)或访问[社区论坛](https://forum.cursor.com)寻求帮助。 
