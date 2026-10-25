---
title: 服务端模组列表
description: 本服务器的服务端安装的模组列表
---

> ### 注意
>
> 这是服务端模组列表，客户端不需要完全一致，你可以不安装任何模组，也可以安装一些仅客户端的模组  

我们在服务端安装模组的原则：  
1. 不破坏任何可能致使生电机器失效的原版机制  
2. 客户端不安装也能正常进入游戏  

当然，这里也有一些客户端也可以安装的模组，例如 Lithium 可以带来性能优化， Jade 可以提供物品信息显示，如果在客户端安装它们，可以带来更好的体验。这是 **可选** 的  

以下为服务器当前启用的模组（不包含已禁用的模组）：

### 性能优化与修复
尽可能不改变原版机制，保障生电机器稳定与服务器流畅

| 模组名称 | 用途 |
| --- | --- |
| C2ME | 并发区块管理引擎，优化性能 |
| Chunk Sending | 优化区块数据包分发 |
| Lithium | 优化实体与红石计算 |
| Starlight | 光照引擎优化 |
| MemoryLeakFix | 修复内存泄漏 |
| TooFast | 移除服务端速度检测 |
| LazyDFU | 加速游戏启动 |
| Spark | 性能分析工具 |
| PacketFixer | 修复数据包问题 |

### 生电与技术支持
为生电玩家提供便利

| 模组名称 | 用途 |
| --- | --- |
| Carpet | 原版技术控制模组 |
| Carpet Extra | Carpet 扩展 [^2] |
| Carpet AS Addition | Carpet 附加包，假人 UI 高亮 |
| Gugle Carpet Addition | Carpet 附加包，增强假人管理 |
| Ivan Carpet Addition | Carpet 扩展，技术工具 |
| No Chat Reports | 禁用聊天举报 |

### 安全与管理系统
服务器基础运维、权限与反作弊

| 模组名称 | 用途 |
| --- | --- |
| EasyAuth | 离线服务器认证模组 |
| LuckPerms | 权限管理 |
| BanHammer | 管理员惩罚工具（封禁/禁言/踢出） |
| Ledger | 行为记录与回滚 |
| Vanish | 管理员隐身 |
| Auto Log Remover | 自动删除旧的日志 [^1] |
| JLine4MCDSrv | 控制台增强（命令历史、自动补全） |
| MCPServer | 允许 AI Agent 监控、管理服务器 |
| Inv View | 允许管理员查看或编辑玩家背包以及末影箱 |

### JE/BE 互通
实现 Java 版与基岩版互通

| 模组名称 | 用途 |
| --- | --- |
| Geyser | Java/基岩版协议转换代理 |
| Floodgate | 基岩版账号接入 Java 版 |
| Hurricane | Geyser 辅助模组，修复基岩版体验问题 |

### 显示与信息交互
提供更丰富的信息显示

| 模组名称 | 用途 |
| --- | --- |
| BlueMap | 生成 3D 网页地图 |
| Jade | 显示方块/实体信息 |
| JEI (Just Enough Items) | 物品配方查看 |
| Just Enough Resources | JEI 附属，查看资源分布 |
| MiniMOTD | 自定义 MOTD |
| TAB | 多功能信息显示（Tab 列表/计分板） |
| SkinRestorer | 皮肤管理 |
| Text Placeholder API | 文本占位符解析库 |

### 前置库与基础 API
其他模组的前置模组

| 模组名称 | 用途 |
| --- | --- |
| Fabric API | Fabric 模组基础 API |
| Fabric Permissions API | 权限 API |
| Fabric Language Kotlin | Kotlin 语言支持库 |
| Cupboard | 开发前置库（配置框架、崩溃追踪） |
| Forge Config API Port | 将 Forge 配置系统移植到 Fabric |
| OtterLib | 前置库模组 |
| Vanilla Permissions | 原版命令权限检查 |

### 社交与娱乐
不破坏原版数值和规则，仅增加互动乐趣

| 模组名称 | 用途 |
| --- | --- |
| Kiss | 在其他玩家附近快速蹲起时冒爱心，或通过 `/kiss` 亲吻其他玩家 |
| Sit! | 允许玩家坐下 |

---
**由衷的感谢以上所有Mod的开发者**

## 注释

[^1]: 本服务器目前采用较为保守的配置以防万一，超过 **365** 天的日志即删除  
[^2]: 在 **Carpet Extra** 提供的功能中，为了确保不破坏原版机制，我们只启用了 **精准方块放置协议** ，以便在使用 **Litematica** 的 **简单放置** 时的方块的朝向正确