---
title: 权限
description: 了解服务器的权限配置
---

> 本服安装了[LuckPerms](https://luckperms.net/)用于管理权限  

此页面包括：  
- 服务器的权限配置  

### default组

这个权限组是新玩家进入服务器后默认的分组，即使在非op（op即管理员）的情况下，也可以进行以下操作：
- 原版的 `teleport` 指令（即 `tp` ）
- `EasyAuth` 的玩家命令，如登录/注册、修改密码等  
- `Ledger` 的查询命令
- `Skin Restorer` 的皮肤设置命令（非op无法指定设置他人皮肤）  
以及更多

### server组

顾名思义，这个权限组拥有 **服主级别** 的权限，包括但不限于：
- 处罚与赦免（如 `/ban` 、 `/pardon` 等）
- 管理员的任免
- 服务器的管理（如 `/stop`、 `/save` 等）
- `EasyAuth` 玩家账号管理（如修改密码、注销账号等）
- `Melius Vanish` 隐身  
~~该权限组甚至就连一只猫都有“服主”头衔~~ (Minecraft早在很久之前就出现的Bug：宠物会继承主人名称的前缀)