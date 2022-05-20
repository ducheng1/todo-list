import {createRouter, createWebHistory} from 'vue-router'
import TodoView from '../views/TodoView.vue'
import CountdownView from '../views/CountdownView.vue'
import AboutView from "../views/AboutView.vue"
import UserView from "../views/UserView.vue"
import UserRegister from "@/components/User/UserRegister.vue"
import UserInfo from "../views/UserInfoView.vue"
import PersonalInfo from "@/components/User/PersonalInfo";

const routes = [
    // 主页 todo
    {
        path: '/',
        name: 'todo',
        component: TodoView
    },
    // 倒计时
    {
        path: '/countdown',
        name: 'countdown',
        component: CountdownView
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
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
