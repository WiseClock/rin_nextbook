---
part: 功能
title: 群功能
updated: '2021-06-10'
---

 |
-|-
首次出现|2017年1月1日
支持指令|`/群功能`

---

## 简介

此功能是为帮助管理员更好地利用机器人而设。**群主或管理员**可以通过使用此功能开启或关闭小玲的其他功能。在某些场合下可有效控制机器人刷屏的概率。

在小玲v9.x以前，本功能被称为`/功能`，但因容易与[帮助](/feature/help)混淆故改名`/群功能`。小玲v9.x亦将本功能原本的简单切换功能开关拓展为可设置黑白名单模式、可独立控制功能的系统。

---

## 指令

指令|功能
---|---
/群功能|显示当前群功能模式。
/群功能 白名单|设置默认开启所有功能，当有需要禁止个别功能时可使用`关闭`子命令。
/群功能 黑名单|设置默认关闭所有功能，但仍有部分功能不会被关闭。
/群功能 默认|重设为小玲默认设置，部分功能默认处于关闭状态。
/群功能 开启 **`命令名`**|单独打开一个功能，将覆盖黑白名单模式设置。
/群功能 关闭 **`命令名`**|单独关闭一个功能，将覆盖黑白名单模式设置。
/群功能 重设 **`命令名`**|将一个功能重设至初始状态，遵循黑白名单默认设置。

---

## 趣事

- 有部分功能无法被群功能关闭。

- 虽然此功能无法关闭自身，但却可以关闭[帮助](/feature/help)，使其他玩家无法查阅功能帮助。