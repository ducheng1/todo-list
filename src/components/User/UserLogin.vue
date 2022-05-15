<template>
    <div id="container">
        <div class="title">账号密码登录</div>
        <el-form :model="form" label-width="100px" class="loginForm">
            <el-form-item>
                <el-input v-model="form.username" type="text" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="form.password" type="password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="inputVerifyCode" placeholder="验证码" style="width: 150px"></el-input>
                <verify-code ref="ref_verify-code" @change="changeCode"
                             style="height: 32px; margin-left: 1.5rem"></verify-code>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" style="width: 100%;height: 2.5rem">登录</el-button>
            </el-form-item>
            <el-form-item>
                <div @click="this.$router.push('/register')" class="register">账号注册</div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import store from "@/store";
import {ElNotification} from "element-plus";
import VerifyCode from "@/components/User/VerifyCode";
import sessionStorage from "@/assets/sessionStorage";

export default {
    name: "UserLogin",
    components: {
        VerifyCode
    },
    data() {
        return {
            form: {
                username: "",
                password: "",
            },
            inputVerifyCode: ""
        };
    },
    setup() {
        store.state.userInfo = sessionStorage.getUser();
    },
    methods: {
        onSubmit: function () {
            // 用户名登录逻辑
            // 验证码错误
            if (this.inputVerifyCode.toUpperCase() !== this.verifyCode) {
                ElNotification({
                    type: "error",
                    title: "验证码错误！",
                    message: "请重新输入",
                    offset: 50,
                    duration: 1000
                });
                this.inputVerifyCode = "";
                this.$refs["ref_verify-code"].draw();
                return;
            }
            // 用户名为空
            if (this.form.username === "") {
                ElNotification({
                    type: "error",
                    title: "用户名不能为空！",
                    message: "请重新输入",
                    offset: 50,
                    duration: 1000
                });
                this.inputVerifyCode = "";
                this.$refs["ref_verify-code"].draw();
                return;
            }
            let userExists = false;
            let userLoginIndex;
            let userInfo = store.state.userInfo;
            // console.log(userInfo);
            for (let i = 0; i < userInfo.length; i++) {
                if (this.form.username === userInfo[i].username) {
                    userExists = true;
                    userLoginIndex = i;
                    break;
                }
            }
            // 用户名不存在
            if (userExists === false) {
                ElNotification({
                    type: "error",
                    title: "用户名不存在！",
                    message: "请重新输入",
                    offset: 50,
                    duration: 1000
                });
                this.inputVerifyCode = "";
                this.$refs["ref_verify-code"].draw();
                return;
            }
            // 密码错误
            else {
                if (this.form.password !== userInfo[userLoginIndex].password) {
                    ElNotification({
                        type: "error",
                        title: "密码错误！",
                        message: "请重新输入",
                        offset: 50,
                        duration: 1000
                    });
                    this.inputVerifyCode = "";
                    this.$refs["ref_verify-code"].draw();
                    return;
                }
            }
            // 登录成功
            ElNotification({
                type: "success",
                title: "登陆成功！",
                offset: 50,
                duration: 1000
            });
            store.state.hasLogin = true;
            sessionStorage.setHasLogin(store.state.hasLogin);
            store.state.currentUser = this.form.username;
            sessionStorage.setCurrentUser(store.state.currentUser);
            this.$router.push("/");
        },
        changeCode: function (val) {
            this.verifyCode = val;
        },
    },
};
</script>

<style scoped>
.loginForm {
    clear: both;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 3rem;
    margin-left: -4rem;
}

.title {
    font-size: 30px;
    font-weight: bold;
    display: flex;
    margin-bottom: 2rem;
    margin-left: 1rem;
}

.el-input {
    height: 2.5rem;
}

.register {
    margin-top: -10px;
    color: slategray;
}
</style>