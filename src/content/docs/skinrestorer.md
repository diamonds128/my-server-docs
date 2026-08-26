---
title: Skin Restorer
description: 了解Skin Restorer皮肤设置
---

> 这不是 `SkinsRestorer` 而是 `Skin Restorer` ，后者的“skin”是单数  

此页面包括：  
- 设置皮肤的方式
- 重新加载皮肤  
- 删除皮肤  
以及更多……  

## 什么是Skin Restorer？

这个模组让你可以在服务器内通过命令设置皮肤，解决了离线玩家皮肤无法显示的问题  
详细请看[官方GitHub页面](https://github.com/Suiranoil/SkinRestorer)或[MC百科](https://www.mcmod.cn/class/6867.html)

## 如何使用?  

通过 `/skin set` 命令设置皮肤
`<目标玩家名>` 是可以省略的，默认指向自己，同时也只有管理员可以设置他人的皮肤  

<details>
<summary><strong>Mojang</strong></summary>

从有效的正版玩家账号上获取皮肤并应用  
`/skin set mojang <用户名>  <目标玩家名>`  
目前只有这种方式拥有披风  

</details>

<details>
<summary><strong>Web</strong></summary>

从有效的图片URL中获取皮肤并应用  

**URL必须被双引号包裹**    
什么是URL？请查阅[常用术语](/my-server-docs/term#url)
 
`/skin set web <classic或slim> "<URL>" <目标玩家名>`

`classic` :经典的，Steve模型  
`slim` ：瘦手的，Alex模型，大部分女性皮肤都是Alex模型  

</details>

<details>
<summary><strong>LittleSkin</strong></summary>

*注：服主当时调配置允许获取LittlesSkin皮肤用了大半天*  

从有效的[LittleSkin](https://littleskin.cn)角色获取皮肤并应用  
`/skin set littleskin <角色名> <目标玩家名>`  

</details>

</details>

<details>
<summary><strong>ely.by</strong></summary>

我们已经弃用了ely.by ：）  

</details>

## 其他命令

### `/skin refresh`  

---

重新获取并应用当前皮肤  
### `/skin clear`  

---

删除当前应用的皮肤  
### `/skin reset`  

---

重置为默认皮肤或删除任何自定义皮肤  
**注意：我们在服务器配置文件中开启了玩家进入自动获取皮肤，所以即使已经运行此命令，第二次也会自动获取你的皮肤**  
### `/skin config reload` <em>*仅管理员</em>  

---

重新加载配置