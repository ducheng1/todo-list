<template>
    <div id="container">
        <van-nav-bar title="个人信息" left-text="返回" left-arrow @click-left="onClickLeft"></van-nav-bar>
        <van-cell-group>
            <van-cell title="用户名" :value="username"></van-cell>
            <van-cell title="密码" :value="password"></van-cell>
            <van-cell title="邮箱" :value="email"></van-cell>
        </van-cell-group>
    </div>
</template>

<script>
import sessionStorage from "@/assets/sessionStorage";

export default {
    name: "PersonalInfo",
    data() {
        return {
            username: sessionStorage.getCurrentUser().username,
            email: sessionStorage.getCurrentUser().email,
            password: sessionStorage.getCurrentUser().password
        }
    },
    methods: {
        onClickLeft: function () {
            this.$router.push("/userinfo");
        }
    },
    beforeCreate() {
        for (let i = 0; i < sessionStorage.getUser().length; i++) {
            if (sessionStorage.getUser()[i].username === sessionStorage.getCurrentUser().username) {
                sessionStorage.setCurrentUser(sessionStorage.getUser()[i]);
                break;
            }
        }
    }
}
</script>

<style scoped>
.van-cell {
    margin-left: -2rem;
}
</style>