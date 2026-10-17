---
title: 进入
description: 了解如何进入服务器并开始游玩
---

> 本服的注册/登录使用了[EasyAuth](https://modrinth.com/mod/easyauth)

> 我们JE/BE互通，BE请见[基岩版](/my-server-docs/bedrock)  

此页面包括  
- 如何进入服务器  
- 如何注册、登录  
- 从出生点到我们村庄的地图  

在开始之前，请 **查阅[服规](/my-server-docs/rules)**  

## 进入服务器
1. 首先，启动你的游戏  
如果还没有安装游戏，请查阅[开始](/my-server-docs/start)
![Minceraft](/my-server-docs/images/minceraft.png)
2. 点击 **多人游戏**  
![多人游戏页面](/my-server-docs/images/server_page.png)
3. 点击 **直接连接** 或 **添加服务器**  
![添加服务器](/my-server-docs/images/server_info.png)
4. 服务器名称并不影响连接，任意即可，输入在群内获取的IP（即服务器地址）  

若无法正常连接，请先查阅[FAQ](/my-server-docs/faq#连接相关)

## 注册与登录

**正版** 以及 **基岩版** 玩家可以免注册与登录  
**不要随意将你的密码告诉他人!**

<details>
<summary><strong>注册</strong></summary>

在我们服务器首次进入的玩家，需要注册账号  
![注册](/my-server-docs/images/auth/reg.png)
在我们服务器，密码至少需要 **4** 个字符，除此之外，我们建议在你的密码中添加符号或者数字，来增加密码强度  
推荐使用一个复杂的 **强密码** 以防万一，社区中对于离线服务器的攻击并不罕见  

只需要像进入游戏后的聊天栏提示一样输入指令就可以：  
按“ **T** ”键或“ **/** ”开始输入  
`/register <全局密码> <你自己的账户密码> <确认密码>`  
或缩写 `/reg <全局密码> <你的密码> <确认密码>`  

假设你打算设置密码为 `bili2333`，那么完整指令就是：  
`/register <全局密码> bili2333 bili2333`   

当注册完成后你应该会在聊天栏内看到“<font color="green">🎊 注册成功！已自动登录</font>”  

</details>

<details>
<summary><strong>登录</strong></summary>

注册以后，进入服务器需要输入密码登录  
![登录](/my-server-docs/images/auth/login.png)
按“ **T** ”或“ **/** ”键开始输入  
`/login <你的密码>`  
或缩写 `/l <你的密码>`  

有时可能会在输入时提示 **未知的指令** 或 **其他错误** ，不用担心， **不影响** ，打完直接回车  
当登录成功时，你应该会在聊天栏内看到“<font color="green">🎉 登录成功！欢迎回来</font>”，一个小时内可以免密登录（同IP下）  
如果忘记了密码，你可以联系服主重置密码，修改完成进入游戏后，你应该将临时密码修改为 **更复杂** 的强密码  

</details>

*注：即使是服主也无法得知玩家的密码，密码均被哈希加密保存在数据库，SHA-256几乎不可能被逆推出原文，具体可查看[知乎文章](https://zhuanlan.zhihu.com/p/380881406)*

## 地图

这张地图包括从出生点到我们定居点的范围，使用 **Xaero's World Map** 生成  


![地图](/my-server-docs/images/map.png)  

群内也有卫星 **3D** 地图  

---

<p style="text-align:center"><strong>🎉恭喜你正式成为我们的一员🎉</strong></p>