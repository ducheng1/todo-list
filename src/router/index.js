import { createRouter, createWebHistory } from 'vue-router'
import TodoView from '../views/TodoView.vue'
import AboutView from "../views/AboutView.vue"
import UserView from "../views/UserView.vue"
import UserRegister from "@/components/User/UserRegister.vue"
import UserInfo from "../views/UserInfoView.vue"
import PersonalInfo from "@/components/User/PersonalInfo";
import store from '@/store';
import {ElNotification} from "element-plus";

const routes = [
    // 主页 todo
    {
        path: '/',
        name: 'todo',
        component: TodoView
    },
    // 关于
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    // user登录注册路由  
    {
        path: '/login',
        name: 'login',
        component: UserView
    },
    {
        path: '/register',
        name: 'register',
        component: UserRegister
    },
    // 用户信息
    {
        path: '/userinfo',
        name: 'userinfo',
        component: UserInfo
    },
    // 个人信息
    {
        path: '/personalinfo',
        name: 'personalinfo',
        component: PersonalInfo
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to) => {
    // 防止未登录跳转到其他页面
    if (!store.state.hasLogin && to.name !== 'login' && to.name !== "register") {
        ElNotification({
            type: "warning",
            title: "请先登录",
            offset: 50,
            duration: 1000
        });
        return { 
            name: 'login',
        }
    }
    if (store.state.hasLogin && to.name === "login") {
        return {
            name: "userinfo"
        }
    }
});

export default router
