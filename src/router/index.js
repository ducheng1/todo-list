import {createRouter, createWebHistory} from 'vue-router'
import TodoView from '../views/TodoView.vue'
import CountdownView from '../views/CountdownView.vue'
import AboutView from "../views/AboutView.vue"
import UserView from "../views/UserView.vue"
import UserLogin from "@/components/User/UserLogin.vue"
import UserRegister from "@/components/User/UserRegister.vue"
import UserInfo from "../views/UserInfoView.vue"

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
    // 用户
    {
        path: '/user',
        name: 'user',
        component: UserView
    },
    // user登录注册路由
    {
        path: '/login',
        name: 'login',
        component: UserLogin
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
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
