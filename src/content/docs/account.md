---
title: 账号管理
description: 了解如何管理自己的账号
---

> 本服使用[EasyAuth](https://github.com/NikitaCartes/EasyAuth)管理账号  

## 为什么需要注册账号？  

1. 防止被人盗号、顶号，在安装 `EasyAuth` 之前，我们是一个纯离线服务器，这导致只要ID相同，就可以顶别人的号  
2. 2026年1月14日，我们在网页地图上震撼的发现： **服务器被炸了** ，此后出于安全顾虑，开启全局密码功能，具体请查阅[炸服事件](./incident)  

## 玩家命令  

**以下内容（玩家命令与管理员命令）均来自于 [MC百科上的EasyAuth页面](https://www.mcmod.cn/class/6241.html)  ，根据 [`CC BY-NC-SA 3.0`](https://creativecommons.org/licenses/by-nc-sa/3.0/deed.zh-hans) 协议共享，并进行了一些修改， ~~更适合中国宝宝的体质~~**  
- /login <你的密码>, /l <你的密码> - 登陆账号;

- /logout - 退出登陆;

- /register <全局密码> <你的账户密码> <确认密码> - 注册账号;

- /account - 管理账号;

- /unregister <你的密码> - 注销账号;

- /changePassword <旧密码> <新的密码> - [旧密码/新密码]-更改密码;

- 注释： 允许玩家用以下字符组合作为密码：纯字母, 字母与下划线_, "引号与字母" 或者 "字母与&$@#"。

## 管理员命令
*仅[server权限组](./permissions#server组)可用*
- /auth - 管理员命令：

- /auth reload - 重新加载配置;

- /auth setGlobalPassword <password> - 设置服务器的全局密码;

- /auth setSpawn &lbrack;&lt;dimension id&gt; &lt;x&gt; &lt;y&gt; &lt;z&gt; &lt;yaw&gt; &lt;pitch&gt;&rbrack; - 设置出生点，玩家在登录过程中临时传送到的位置;

- /auth remove <username> - 从数据库中删除用户帐户;

- /auth update <username> <password> - 更新用户的密码;

- /auth register <username> <password> - 创建用户帐户;

- /auth list - 打印所有已注册的玩家;

- /auth getPlayerInfo <player> - 打印玩家信息;

- /auth getOnlinePlayers - 获取有关在线玩家的信息;

- /auth markAsOffline <player> - 将玩家标记为离线玩家;

- /auth markAsOnline <player> - 将玩家标记为在线玩家;