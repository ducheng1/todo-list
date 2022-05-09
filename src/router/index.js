import {createRouter, createWebHistory} from 'vue-router'
import TodoView from '../views/TodoView.vue'
import CountdownView from '../views/CountdownView.vue'
import AboutView from "../views/AboutView.vue"
import UserView from "../views/UserView.vue"

const routes = [
    {
        path: '/',
        name: 'todo',
        component: TodoView
    },
    {
        path: '/countdown',
        name: 'countdown',
        component: CountdownView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/user',
        name: 'user',
        component: UserView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
