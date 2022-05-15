<template>
    <el-container>

        <el-header>
            <van-notice-bar
                mode="closeable"
                left-icon="volume-o"
                speed="60"
                text="我也不知道说点什么，这一条消息通知栏只是拿来凑数的。"
            />
        </el-header>

        <el-main>
            <router-view v-slot="{ Component }">
                <transition name="fade" mode="out-in">
                    <component :is="Component"></component>
                </transition>
            </router-view>
        </el-main>

        <el-footer>
            <van-tabbar v-model="active" route>
                <!--todolist-->
                <van-tabbar-item replace to="/" name="todo" icon="certificate">
                    Todo
                </van-tabbar-item>
                <!--countdown-->
                <van-tabbar-item replace to="/countdown" name="countdown" icon="descending">
                    Countdown
                </van-tabbar-item>
                <!--user login and register-->
                <van-tabbar-item replace to="/user" name="user" icon="contact">
                    User
                </van-tabbar-item>
                <!--about me-->
                <van-tabbar-item replace to="/about" name="about" icon="info-o">
                    About
                </van-tabbar-item>
            </van-tabbar>
        </el-footer>
    </el-container>
</template>

<script>
import {ref} from "vue";

export default {
    name: "App",
    data() {
        return {
            active: ref('todo'),
        }
    }
}
</script>

<style scoped>
* {
    text-align: center;
    margin: 0;
    padding: 0;
}

.fade-enter-active {
    opacity: 0;
    transition: opacity .25s;
}

.fade-enter {
    opacity: 0;
}

.fade-enter-to {
    opacity: 1;
}

.fade-leave {
    opacity: 1;
}

.fade-leave-active {
    opacity: 0;
    transition: opacity .25s;
}

.fade-leave-to {
    opacity: 0;
}
</style>
