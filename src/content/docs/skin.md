---
title: Skin Restorer
description: 了解Skin Restorer皮肤设置
---

> 这不是 **SkinsRestorer 插件** 而是 **Skin Restorer 模组** ，后者的“skin”是单数  

此页面包括：  
- 设置皮肤的方式
- 重新加载皮肤  
- 删除皮肤  
以及更多……  

## 什么是 Skin Restorer？

这个模组让你可以在服务器内通过命令设置皮肤，解决了离线玩家皮肤无法显示的问题  
详细请看 [官方 GitHub 页面](https://github.com/Suiranoil/SkinRestorer)或 [MC百科](https://www.mcmod.cn/class/6867.html)

## 如何使用?  

通过 `/skin set` 命令设置皮肤  
`<目标玩家名>` 是可以省略的，默认指向自己，同时也只有管理员可以设置他人的皮肤  

<details>
<summary><strong>Mojang</strong></summary>

从有效的正版玩家账号上获取皮肤并应用  
`/skin set mojang <用户名>  <目标玩家名>`  
目前只有这种方式可以加载出披风  

</details>

<details>
<summary><strong>Web</strong></summary>

从有效的图片 URL 中获取皮肤并应用  

**URL 必须被双引号包裹**    
什么是 URL？请查阅 [常用术语](/my-server-docs/term#url)
 
`/skin set web <classic或slim> "<URL>" <目标玩家名>`

`classic` :经典的，Steve 模型  
`slim` ：瘦手的，Alex 模型，大部分女性皮肤都是 Alex 模型  

</details>

<details>
<summary><strong>LittleSkin</strong></summary>

*注：服主当时调配置允许获取 LittlesSkin 皮肤调了大半天*  

从有效的 [LittleSkin](https://littleskin.cn) 角色获取皮肤并应用  
`/skin set littleskin <角色名> <目标玩家名>`  

</details>

</details>

<details>
<summary><strong>ely.by</strong></summary>

因为 ely.by 在国内使用者过于稀少，在本服更是毫无一人，因此我们已经弃用了ely.by ：）  

</details>

## 关于披风

很遗憾的是，由于 Skin Restorer 的限制，我们暂时无法通过除 Mojang 之外的方式获取披风  

## 其他命令

- `/skin refresh` — 重新获取并应用当前皮肤
- `/skin clear` — 删除当前应用的皮肤
- `/skin reset` — 重置为默认皮肤或删除任何自定义皮肤
- `/skin config reload` — 重新加载皮肤配置 ***仅管理员***

> **注意**：服务器配置已开启玩家进入自动获取皮肤，因此即使手动运行过上述命令，下次进入服务器时仍会自动获取皮肤。