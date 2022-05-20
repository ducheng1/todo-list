# 移动应用开发个人作业

## 项目简介

### 项目主题

待办事项，用户登录注册（Session实现）

### 项目简介

以vue3.x作为主要框架，使用element-plus+vant3美化界面，使用vue-router实现单页应用的构建，使用vuex与session实现状态管理，使用webpack实现模块管理与项目封装。

#### 主要前端框架

- vue3.x

#### 前端样式库

- Element Plus
- vant 3
- iconfont vant图标库

#### 其他组件

- vue-router
- vuex
- webpack
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

3. 等待构建完成

4. 进入项目目录

    ```shell
    cd todo-list
    ```

5. 使用npm运行项目到本地服务器

    ```shell
    npm run serve
    ```

### 项目初始化与导入

- 自动安装项目依赖

    ```shell
    npm i
    npm i -g
    ```

### 项目模块

| todo             | countdown      | user           | about    |
| ---------------- | -------------- | -------------- | -------- |
| 添加代办事项     | 添加倒计时事项 | 用户登录与注册 | 关于     |
| 待办事项操作面板 | 倒计时事项     | 一些功能设置   | 关于信息 |