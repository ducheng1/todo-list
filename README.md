# 移动应用开发个人作业

## 项目简介

### 项目主题

待办事项，倒计时，用户登录注册（Session实现）

### 项目简介

以vue3.x作为主要框架，使用element-plus+vant 3美化界面，使用vue-router实现单页应用的构建，使用vuex与session实现状态管理，使用webpack实现模块管理与项目封装。

#### 主要前端框架

- vue3.x 官方文档：https://v3.cn.vuejs.org/

#### 前端样式库

- Element Plus 官方文档：https://element-plus.gitee.io/#/zh-CN
- vant 3 官方文档：https://vant-contrib.gitee.io/vant/#/zh-CN
- iconfont vant图标库 地址：https://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=31945

#### 其他组件

- vue-router 官方文档：https://router.vuejs.org/zh/
- vuex 官方文档：https://vuex.vuejs.org/zh/
- babel.js 官方文档：https://www.babeljs.cn/
- webpack 官方文档：https://www.webpackjs.com/
- session-storage

### 项目构建

1. 全局安装vue-cli，方便快速构建项目

    ```shell
    npm install -g @vue/cli@4
    ```

2. 使用脚手架构建项目

    ```shell
    vue create online-store
    ```

4. 等待构建完成

5. 进入项目目录

    ```shell
    cd mobile-app-personal
    ```

6. 使用npm运行项目到本地服务器

    ```shell
    npm run serve
    ```

### 项目初始化与导入

- 自动安装项目依赖
   ```shell
   npm i
   ```

### 项目模块

|todo|countdown|user|about|
|----|----|----|----|
|添加代办事项|添加倒计时事项|用户登录与注册|关于|
|待办事项操作面板|倒计时事项九宫格|一些功能设置|关于信息|