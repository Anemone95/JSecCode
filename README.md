# NodeSecCode

## 介绍

一个使用 JS 开发的前后端分离Web漏洞靶场，前端使用 Vue 开发（别喷界面丑，顶着延毕压力做的，有难处Orz），后端用 Egg 开发。用于测试黑百盒、IAST对于SPA类型的网站测试效果。

## 包含漏洞

* SQLi
* XSS
* CSRF
* Path Traversal
* RCE
* SSRF
* URL Redirect（TODO）
* BAC（TODO）

## 安装和部署

### 部署前端

```bash
cd frontend
npm install
npm run dev
```

在hosts中加一个`frontend.nodeseccode`的记录

### 部署后端

部署前先用 `node_sec_code.sql` 建库建表呀

```bash
cd backend
npm i
npm run dev
```

在hosts中加一个`backend.nodeseccode`的记录

访问`http://frontend.nodeseccode:8080/`看到靶场主页（登录目前还没做）

## 相关项目

* https://github.com/JoyChou93/java-sec-code
* https://github.com/zhuifengshaonianhanlu/pikachu