# NodeSecCode

## 介绍

一个使用 JS 开发的前后端分离Web漏洞靶场，前端使用 Vue 开发（别喷界面丑，顶着延毕压力做的，有难处Orz），后端用 Egg 开发。用于测试黑白盒、IAST对于SPA类型的网站测试效果。

## 包含漏洞

* SQLi
* NoSQLi(MongoDB)
* XSS
* CSRF
* Path Traversal
* RCE
* SSRF
* URL Redirect
* BAC
* 原型链污染

## 安装和部署

### 部署前端

```bash
cd frontend
npm install
npm run dev
```

在hosts中加一个`frontend.nodeseccode.net`的记录

### 部署后端

1. 安装并启动MySQL
2. 安装并启动MongoDB
3. 用 `node_sec_code.sql` 建库建表
4. 启动后端服务
    ```bash
    cd backend
    npm i
    npm run dev
    ```

5. 在hosts中加一个`backend.nodeseccode.net`的记录

6. 访问`http://frontend.nodeseccode.net:8080/`看到靶场主页

## 相关项目

* https://github.com/JoyChou93/java-sec-code
* https://github.com/zhuifengshaonianhanlu/pikachu