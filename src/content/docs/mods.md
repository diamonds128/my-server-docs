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

以下为服务器当前启用的模组（不包含禁用的模组）：

| 模组名称 | 用途 |
| --- | --- |
| Auto Log Remover | 自动删除旧的日志① |
| BanHammer | 管理员惩罚工具（封禁/禁言/踢出） |
| BlueMap | 生成 3D 网页地图 |
| C2ME | 并发区块管理引擎，优化性能 |
| Carpet | 原版技术控制模组 |
| Carpet AMS Addition | Carpet 附加包，假人 UI 高亮 |
| Carpet Extra | Carpet 扩展，增加更多功能② |
| Chunk Sending | 优化区块数据包分发 |
| Cupboard | 开发前置库（配置框架、崩溃追踪） |
| EasyAuth | 离线服务器认证模组 |
| Fabric API | Fabric 模组基础 API |
| Fabric Language Kotlin | Kotlin 语言支持库 |
| Fabric Permissions API | 权限 API |
| Floodgate | 基岩版账号接入 Java 版 |
| Forge Config API Port | Forge 配置系统移植到 Fabric |
| Geyser | Java/基岩版协议转换代理 |
| Gugle Carpet Addition | Carpet 附加包，增强假人管理 |
| Hurricane | Geyser 辅助模组，修复基岩版体验问题 |
| Inv View | 允许管理员查看或编辑玩家背包和末影箱 |
| Ivan Carpet Addition | Carpet 扩展，技术工具 |
| Jade | 显示方块/实体信息 |
| JEI (Just Enough Items) | 物品配方查看 |
| JLine4MCDSrv | 控制台增强（命令历史、自动补全） |
| Just Enough Resources | JEI 附属，查看资源分布 |
| Kiss | 在其他玩家附近快速蹲起时冒爱心，并允许通过指令 `/kiss` 亲吻其他玩家 |
| LazyDFU | 加速游戏启动 |
| Ledger | 行为记录与回滚 |
| Lithium | 性能优化模组 |
| LuckPerms | 权限管理 |
| MCPServer | 添加MCP允许AI Agent监控、管理服务器 |
| MemoryLeakFix | 修复内存泄漏 |
| MiniMOTD | 自定义 MOTD，支持 RGB 渐变 |
| No Chat Reports | 禁用聊天举报 |
| OtterLib | 前置库模组 |
| PacketFixer | 修复数据包问题 |
| Spark | 性能分析工具 |
| SkinRestorer | 皮肤管理 |
| Sit! | 允许玩家坐下 |
| Starlight | 光照引擎优化 |
| TAB | 多功能信息显示 |
| Text Placeholder API | 允许在字符串和 MC 的文本组件中创建和解析占位符 |
| TooFast | 移除速度限制 |
| Vanilla Permissions | 原版命令权限检查 |
| Vanish | 管理员隐身 |

**由衷的感谢以上所有Mod的作者**

**①** : 本服务器目前采用较为保守的配置以防万一，超过 **365** 天的日志即删除  
**②** : 在 **Carpet Extra** 提供的功能中，为了确保不破坏原版机制，我们只启用了 **精准方块放置协议** ，以便在使用 **Litematica** 的 **简单放置** 时的方块的朝向正确  