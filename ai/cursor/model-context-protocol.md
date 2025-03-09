# Cursor 模型上下文协议

> **免责声明**：本文档是关于 Cursor 模型上下文协议的**第三方非官方中文文档**，仅供学习参考。内容可能不完全反映最新的官方信息，请以 [Cursor 官方文档](https://docs.cursor.com) 为准。所有商标和版权归 Cursor/Anysphere 公司所有。

> 本文档介绍 Cursor 的模型上下文协议，这是一种高级技术，用于管理和优化发送给 AI 模型的上下文信息。

---

## 什么是模型上下文协议？

模型上下文协议（Model Context Protocol，MCP）是 Cursor 中用于管理发送给底层 AI 模型的上下文信息的高级系统。这个协议决定了在各种 AI 交互中如何收集、组织、优先排序和发送上下文信息。

简而言之，MCP 是连接用户请求与 AI 模型之间的桥梁，它确保所有相关信息都能被高效地传递给模型，同时避免传递过多不必要的数据。

## 为什么模型上下文协议很重要？

当使用 AI 辅助编程时，上下文的质量直接决定了 AI 回答的准确性和相关性。MCP 解决了几个关键问题：

1. **上下文窗口限制**：所有 AI 模型都有上下文窗口大小限制，MCP 帮助在这个限制内优化信息
2. **相关性排序**：确保最相关的信息被优先发送给模型
3. **信息格式化**：以模型能有效理解的方式结构化信息
4. **上下文管理**：平衡不同类型的上下文（代码、注释、文档等）

## 模型上下文协议的工作原理

### 1. 上下文收集

当您在 Cursor 中与 AI 交互时（如使用 Ask、Agent 或 ⌘K），MCP 会从多个来源收集上下文：

- 当前文件和光标位置
- 手动指定的引用（通过 @ 符号）
- 代码库索引中的相关文件
- 之前的对话历史
- 项目设置和配置
- AI 规则

### 2. 上下文加权和排序

收集的上下文经过加权和排序过程：

- **相关性评分**：计算每部分上下文与当前查询的相关性
- **重要性加权**：明确引用的文件获得更高权重
- **近期性考量**：最近访问的文件通常获得更高优先级
- **位置敏感性**：与光标位置接近的代码获得更高优先级

### 3. 上下文压缩

为了适应模型的上下文窗口限制，MCP 会执行上下文压缩：

- **选择性包含**：仅包含最相关部分，而非整个文件
- **内容摘要**：对某些内容创建摘要而非完整包含
- **冗余消除**：删除重复或高度相似的上下文部分
- **格式优化**：减少不必要的空白和格式，最大化有效内容

### 4. 格式化和传输

最后，上下文被格式化并传输给 AI 模型：

- **结构化标记**：添加标记以指示上下文部分的起始和结束
- **源标注**：标注每部分上下文的来源，帮助模型理解来源和重要性
- **顺序排列**：按最优顺序排列上下文（通常从最重要到次要）
- **传输优化**：分批传输大型上下文，确保效率和完整性

## 模型上下文协议的配置

虽然大多数 MCP 功能在后台自动工作，但有一些方式可以影响和优化它：

### 通过设置配置

某些 MCP 行为可以通过 Cursor 设置进行配置：

1. 打开 Cursor 设置（⌘ + , 或 Ctrl + ,）
2. 导航至 "高级" 或 "AI 设置" 部分
3. 寻找关于上下文管理的选项

可能的设置包括：
- 最大上下文窗口大小
- 上下文优先级规则
- 自动包含的上下文类型

### 通过 AI 规则

您可以通过 AI 规则影响 MCP 的行为：

```markdown
# 上下文处理规则
- 优先考虑接口和类型定义
- 当分析函数时包含其测试
- 排除注释中的 TODO 项
```

### 通过使用习惯

您的使用习惯也会影响 MCP 的工作方式：

- 频繁访问的文件可能获得更高的隐式优先级
- 之前查询模式会影响上下文收集策略
- 成功的交互会强化特定的上下文选择模式

## 高级 MCP 使用技巧

### 1. 精确控制上下文

通过明确的指令控制上下文：

```
仅使用 @src/core/ 中的文件作为上下文，忽略测试文件，解释这个模块的架构。
```

### 2. 上下文启发式调整

帮助 MCP 调整其启发式方法：

```
这个部分与数据库连接相关，请特别注意错误处理模式。
```

### 3. 利用会话状态

MCP 保持会话状态，利用这一点可以构建上下文：

```
让我们先了解数据模型，然后再看控制器如何使用它们。
```

### 4. 结合代码搜索

与代码搜索结合使用获得更好的上下文：

```
搜索所有使用 UserAuthentication 类的控制器，并解释调用模式。
```

## 自定义 MCP 详解

除了基本配置外，Cursor 还提供了多种途径来深度自定义 MCP 的行为，使其更好地适应您的特定工作流程和项目需求。

### MCP 配置文件

Cursor 支持通过项目根目录中的 `.cursor` 文件夹下的配置文件来自定义 MCP 行为。您可以创建以下文件来调整 MCP：

#### 1. 创建 MCP 配置文件

在项目根目录创建 `.cursor/mcp.json` 文件，使用以下基本结构：

```json
{
  "version": 1,
  "contextSettings": {
    "priorityPatterns": [
      {
        "pattern": "**/*.interface.ts",
        "priority": "very_high"
      },
      {
        "pattern": "**/*.test.js",
        "priority": "low"
      }
    ],
    "exclusionPatterns": [
      "**/*.min.js",
      "**/node_modules/**",
      "**/dist/**"
    ],
    "includeComments": true,
    "maxTokensPerFile": 2000,
    "contextWindow": {
      "size": "large",
      "prioritizeRecent": true
    }
  }
}
```

#### 2. 配置选项详解

- **priorityPatterns**: 定义文件模式的优先级
  - `pattern`: glob 模式匹配文件路径
  - `priority`: 优先级级别 (`very_high`, `high`, `normal`, `low`, `very_low`)

- **exclusionPatterns**: 从 MCP 处理中完全排除的文件模式

- **includeComments**: 是否在上下文中包含代码注释

- **maxTokensPerFile**: 每个文件贡献给上下文的最大标记数

- **contextWindow**: 
  - `size`: 上下文窗口大小 (`small`, `medium`, `large`, `very_large`)
  - `prioritizeRecent`: 是否优先考虑最近交互的文件

### 基于语言的 MCP 自定义

可以为不同编程语言创建特定的 MCP 规则，例如 `.cursor/mcp-typescript.json`：

```json
{
  "version": 1,
  "fileTypes": [".ts", ".tsx"],
  "contextSettings": {
    "importResolution": "deep",
    "includeTypes": true,
    "prioritizeInterfaces": true
  }
}
```

此配置将仅应用于 TypeScript 文件，确保类型定义得到适当的优先级处理。

### 会话特定的 MCP 指令

在与 AI 的对话中，您可以使用特殊的指令临时修改 MCP 行为：

```
#mcp-setting: prioritize_definitions=true
#mcp-setting: deep_context=false
#mcp-setting: code_only=true

请解释这个函数的作用和它如何与其他模块交互。
```

这些指令会在当前会话中临时覆盖默认的 MCP 设置。

## MCP 自定义示例场景

以下是在不同场景中自定义 MCP 的具体示例：

### 示例 1: 大型前端项目优化

对于有大量组件的 React 项目，以下 MCP 配置有助于优化组件分析：

```json
{
  "version": 1,
  "contextSettings": {
    "priorityPatterns": [
      {
        "pattern": "src/components/**/*.{jsx,tsx}",
        "priority": "high"
      },
      {
        "pattern": "src/hooks/**/*.{js,ts}",
        "priority": "high"
      },
      {
        "pattern": "src/store/**/*.{js,ts}",
        "priority": "medium"
      },
      {
        "pattern": "**/*.css",
        "priority": "low"
      }
    ],
    "componentResolution": {
      "includeStyles": true,
      "includeProps": true,
      "maxDepth": 2
    }
  }
}
```

使用此配置时，如果您询问有关组件的问题，MCP 会优先考虑组件文件、相关钩子和状态管理代码，同时降低样式文件的优先级，为更重要的逻辑代码腾出上下文空间。

**会话示例**：
```
@src/components/UserProfile.jsx 这个组件如何从 Redux 存储获取和更新用户数据？
```

MCP 会自动包含组件文件、相关的 Redux actions 和 reducers，以及使用的自定义钩子，使 AI 能够提供全面的回答。

### 示例 2: 微服务后端项目配置

对于微服务架构的后端项目，以下配置有助于跨服务分析：

```json
{
  "version": 1,
  "contextSettings": {
    "priorityPatterns": [
      {
        "pattern": "services/*/src/interfaces/**/*.ts",
        "priority": "very_high"
      },
      {
        "pattern": "services/*/src/controllers/**/*.ts",
        "priority": "high"
      },
      {
        "pattern": "services/*/src/models/**/*.ts",
        "priority": "high"
      },
      {
        "pattern": "services/*/src/repositories/**/*.ts",
        "priority": "medium"
      },
      {
        "pattern": "services/*/test/**/*.ts",
        "priority": "very_low"
      }
    ],
    "serviceIntegration": {
      "includeAPIDocs": true,
      "trackDependencies": true
    }
  }
}
```

**会话示例**：
```
我需要了解用户服务和订单服务是如何交互的，特别是当创建新订单时。请分析这两个服务之间的数据流。
```

使用此配置，MCP 会优先加载接口定义、控制器和模型，帮助 AI 理解服务间的交互模式，而测试文件则获得最低优先级。

### 示例 3: 机器学习项目配置

对于机器学习项目，以下配置关注数据处理和模型定义：

```json
{
  "version": 1,
  "contextSettings": {
    "priorityPatterns": [
      {
        "pattern": "src/models/**/*.py",
        "priority": "very_high"
      },
      {
        "pattern": "src/data/**/*.py",
        "priority": "high"
      },
      {
        "pattern": "notebooks/**/*.ipynb",
        "priority": "medium"
      }
    ],
    "mlSpecific": {
      "includeDataSchemas": true,
      "modelArchitectureFocus": true,
      "includeHyperparameters": true
    },
    "maxTokensPerFile": 3000
  }
}
```

**会话示例**：
```
@src/models/classifier.py 如何优化这个分类器模型来处理不平衡的数据集？
```

此配置使 MCP 优先考虑模型定义和数据处理代码，为每个文件分配更多的标记空间，并确保包含数据架构和超参数配置。

### 示例 4: 动态调整 MCP 行为

在对话过程中动态调整 MCP 的例子：

```
首先，我想了解这个项目的整体架构。

#mcp-setting: broad_context=true
#mcp-setting: depth=1
#mcp-setting: include_readmes=true

现在，我想深入了解认证模块的工作原理。

#mcp-setting: broad_context=false
#mcp-setting: focus_path=src/auth/**
#mcp-setting: depth=3
#mcp-setting: include_tests=true

@src/auth/AuthProvider.js 这个组件中的 token 刷新逻辑有什么潜在问题？
```

这个例子展示了如何在同一会话中针对不同的探索阶段调整 MCP 的行为：先是宽泛地了解项目结构，然后深入特定模块的细节。

## MCP 优化与调试

### MCP 性能指标监控

Cursor 提供了监控 MCP 性能的工具，可以通过以下方式访问：

1. 打开命令面板（⌘ + Shift + P 或 Ctrl + Shift + P）
2. 搜索并选择 "Show MCP Performance Metrics"

这将显示一个性能面板，包含以下信息：
- 上下文收集时间
- 上下文大小（标记数）
- 相关性排序效率
- 文件包含/排除统计

### MCP 自定义日志

要深入了解 MCP 的行为，可以启用详细日志：

1. 创建 `.cursor/mcp-debug.json` 文件：
```json
{
  "version": 1,
  "logging": {
    "enabled": true,
    "level": "verbose",
    "logToFile": true,
    "logFilePath": ".cursor/logs/mcp.log"
  }
}
```

2. 分析日志以优化 MCP 配置，识别模式如：
   - 频繁包含但从未使用的文件
   - 经常被截断的重要文件
   - 优先级设置不合理的文件类型

### MCP 测试工具

Cursor 提供了测试 MCP 配置的工具：

```bash
# 在终端中运行
cursor mcp-test --query "分析用户认证流程" --file src/auth/login.js
```

这将显示 MCP 如何处理特定查询和文件的详细信息，包括：
- 收集的上下文列表
- 每个上下文项的优先级和权重
- 最终包含/排除的内容

## MCP 与其他工具的集成

### MCP 与版本控制系统

MCP 可以与 Git 等版本控制系统集成，关注最近更改的文件：

```json
{
  "version": 1,
  "contextSettings": {
    "gitIntegration": {
      "prioritizeModifiedFiles": true,
      "includeRecentCommits": true,
      "branchAware": true
    }
  }
}
```

这使 MCP 能够优先考虑最近修改的文件和当前工作的分支相关内容。

### MCP 与项目管理工具

MCP 可以通过 Cursor 扩展与 JIRA、Trello 等项目管理工具集成：

```json
{
  "version": 1,
  "contextSettings": {
    "externalIntegrations": {
      "jira": {
        "enabled": true,
        "includeCurrentTicket": true
      }
    }
  }
}
```

这允许 MCP 将当前任务的上下文纳入考虑，提供更加任务相关的 AI 回答。

## MCP 性能考量

### 大型代码库的挑战

在大型代码库中，MCP 可能面临更大挑战：

- **索引规模**：需要索引和管理更多文件
- **相关性计算**：识别相关文件变得更复杂
- **上下文窗口压力**：更多潜在相关内容竞争有限的上下文窗口

解决方案包括：
- 更精确的 @ 符号引用
- 更有效的 `.cursorignore` 配置
- 分段处理和逐步引导AI

### 专业领域代码的优化

对于特定领域的代码（如医疗、金融或科学计算），可以优化 MCP：

- 强调领域特定术语和模式
- 确保包含关键的领域模型
- 通过 AI 规则提供领域背景

## 疑难解答

### 上下文不足

如果 AI 回答显示上下文不足（"我没有足够信息"），可能原因包括：

- 相关文件未被索引
- 上下文窗口太小无法包含所有必要信息
- 重要引用被忽略文件规则排除

解决方法：
- 使用更精确的 @ 引用
- 拆分复杂查询为多个简单查询
- 检查忽略规则是否排除了关键文件

### 上下文不相关

如果 AI 提供的答案引用了不相关代码：

- 尝试使用更具体的查询语言
- 明确排除不相关部分（"不要考虑测试代码"）
- 使用更精确的文件和符号引用

### 上下文传输延迟

对于大型上下文，您可能注意到：

- 初始响应较慢
- 模型需要更多时间"思考"
- 多轮交互后性能提升

这通常是因为完整上下文正在逐步构建和优化。保持耐心并继续对话通常会改善后续交互的性能。

### MCP 缓存问题

如果您修改了 MCP 配置但没有看到变化：

- 重启 Cursor 应用程序
- 清除 MCP 缓存：
  - 打开命令面板
  - 搜索并运行 "Clear MCP Cache"
- 确认配置文件格式正确且位于正确位置

## 结论与最佳实践

### MCP 自定义最佳实践

1. **渐进式自定义**：先使用默认设置，基于实际需求逐步调整
2. **项目特定配置**：为不同类型的项目创建不同的 MCP 配置
3. **配置版本控制**：将 MCP 配置加入版本控制，团队共享
4. **定期更新**：随着项目演变和 Cursor 更新，定期评估和调整 MCP 设置
5. **监控性能**：使用性能指标识别瓶颈和优化机会

### MCP 与 @ 符号引用的协同

MCP 与 @ 符号引用系统紧密结合，为获得最佳结果：

- 使用 @ 引用明确指定关键文件
- 通过 MCP 配置指示隐含相关性
- 建立分层的上下文策略：明确引用 → 高优先级模式 → 自动相关

## MCP 配置项功能与用法总结表

### 基本配置项 (.cursor/mcp.json)

| 配置项 | 功能描述 | 可选值 | 使用示例 |
|:------------|:------------|:------------|:------------|
| `version` | 配置文件版本号 | 整数值(通常为1) | `"version": 1` |
| `priorityPatterns` | 定义文件匹配模式优先级 | 对象数组 | `[{"pattern": "**/*.ts", "priority": "high"}]` |
| `priority` | 设置文件优先级等级 | `very_high`, `high`, `normal`, `low`, `very_low` | `"priority": "high"` |
| `exclusionPatterns` | 排除特定文件模式 | 字符串数组 | `["**/node_modules/**", "**/*.min.js"]` |
| `includeComments` | 是否包含代码注释 | `true`, `false` | `"includeComments": true` |
| `maxTokensPerFile` | 每个文件最大标记数 | 整数值 | `"maxTokensPerFile": 2000` |
| `contextWindow.size` | 上下文窗口大小 | `small`, `medium`, `large`, `very_large` | `"size": "large"` |
| `contextWindow.prioritizeRecent` | 优先考虑最近文件 | `true`, `false` | `"prioritizeRecent": true` |

### 语言特定配置项 (.cursor/mcp-[language].json)

| 配置项 | 功能描述 | 可选值 | 使用示例 |
|:------------|:------------|:------------|:------------|
| `fileTypes` | 适用的文件类型 | 字符串数组 | `[".ts", ".tsx"]` |
| `importResolution` | 导入解析深度 | `shallow`, `deep` | `"importResolution": "deep"` |
| `includeTypes` | 是否包含类型定义 | `true`, `false` | `"includeTypes": true` |
| `prioritizeInterfaces` | 优先处理接口 | `true`, `false` | `"prioritizeInterfaces": true` |
| `componentResolution` | 组件分析设置 | 对象 | `{"includeStyles": true, "maxDepth": 2}` |
| `mlSpecific` | 机器学习项目设置 | 对象 | `{"includeDataSchemas": true}` |

### 会话特定MCP指令 (在对话中使用)

| 指令 | 功能描述 | 可选值 | 使用示例 |
|:------------|:------------|:------------|:------------|
| `prioritize_definitions` | 优先考虑定义 | `true`, `false` | `#mcp-setting: prioritize_definitions=true` |
| `deep_context` | 使用深度上下文 | `true`, `false` | `#mcp-setting: deep_context=false` |
| `code_only` | 只包含代码 | `true`, `false` | `#mcp-setting: code_only=true` |
| `broad_context` | 使用广泛上下文 | `true`, `false` | `#mcp-setting: broad_context=true` |
| `depth` | 上下文深度级别 | 整数值 | `#mcp-setting: depth=3` |
| `focus_path` | 聚焦特定路径 | 字符串 | `#mcp-setting: focus_path=src/auth/**` |
| `include_tests` | 包含测试文件 | `true`, `false` | `#mcp-setting: include_tests=true` |
| `include_readmes` | 包含README文件 | `true`, `false` | `#mcp-setting: include_readmes=true` |

### 版本控制与工具集成配置

| 配置项 | 功能描述 | 可选值 | 使用示例 |
|:------------|:------------|:------------|:------------|
| `gitIntegration.prioritizeModifiedFiles` | 优先考虑已修改文件 | `true`, `false` | `"prioritizeModifiedFiles": true` |
| `gitIntegration.includeRecentCommits` | 包含最近提交信息 | `true`, `false` | `"includeRecentCommits": true` |
| `gitIntegration.branchAware` | 分支感知能力 | `true`, `false` | `"branchAware": true` |
| `externalIntegrations.jira.enabled` | 启用JIRA集成 | `true`, `false` | `"enabled": true` |
| `externalIntegrations.jira.includeCurrentTicket` | 包含当前JIRA工单 | `true`, `false` | `"includeCurrentTicket": true` |

### 调试与性能配置 (.cursor/mcp-debug.json)

| 配置项 | 功能描述 | 可选值 | 使用示例 |
|:------------|:------------|:------------|:------------|
| `logging.enabled` | 启用日志记录 | `true`, `false` | `"enabled": true` |
| `logging.level` | 日志详细程度 | `info`, `debug`, `verbose` | `"level": "verbose"` |
| `logging.logToFile` | 记录到文件 | `true`, `false` | `"logToFile": true` |
| `logging.logFilePath` | 日志文件路径 | 字符串 | `"logFilePath": ".cursor/logs/mcp.log"` |

---

理解并有效利用模型上下文协议可以显著提高您与 Cursor AI 功能的交互效果。虽然大部分工作在后台自动进行，但通过有意识地提供良好结构的查询和适当的引用，您可以帮助 MCP 更好地为您服务，从而获得更精确、更有用的 AI 辅助。

如有任何问题，请参考[常见问题解答](/ai/cursor/faq)或访问[社区论坛](https://forum.cursor.com)寻求帮助。 
