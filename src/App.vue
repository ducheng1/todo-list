<template>
    <el-container>
        <el-header></el-header>
        <el-main>
            <router-view/>
        </el-main>
        <el-footer>
            <van-tabbar v-model="active">
                <van-tabbar-item icon="certificate">
                    <router-link to="/">Todo</router-link>
                </van-tabbar-item>
                <van-tabbar-item icon="descending">
                    <router-link to="/countdown">Countdown</router-link>
                </van-tabbar-item>
                <van-tabbar-item icon="contact">
                    <router-link to="/user">User</router-link>
                </van-tabbar-item>
                <van-tabbar-item icon="info-o">
                    <router-link to="/about">About</router-link>
                </van-tabbar-item>
            </van-tabbar>

        </el-footer>
    </el-container>
</template>

<script>
export default {
    data() {
        return {
            active: true
        }
    },
}
</script>

<style>
* {
    margin: 0 auto;
    text-align: center;
}
</style>
