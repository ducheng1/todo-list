<template>
    <div id="container">
        <div class="title">用户注册</div>
        <el-form :model="form" label-width="100px" class="registerForm">
            <el-form-item>
                <el-input v-model="form.username" type="text" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="form.password" type="password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="form.email" type="text" placeholder="邮箱"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="inputVerifyCode" placeholder="验证码" style="width: 150px"></el-input>
                <verify-code ref="ref_verify-code" @change="changeCode"
                             style="height: 32px; margin-left: 1.5rem"></verify-code>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit" style="width: 100%;height:2.5rem">注册</el-button>
            </el-form-item>
            <el-form-item>
                <div @click="this.$router.push('/login')" class="hasAccount">已有账号，去登录</div>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import VerifyCode from "@/components/User/VerifyCode";
import {ElNotification} from "element-plus";
import sessionStorage from "@/assets/sessionStorage";
import store from "@/store";

export default {
    name: "userRegister",
    components: {
        VerifyCode
    },
    data() {
        return {
            form: {
                username: "",
                password: "",
                email: "",
            },
            inputVerifyCode: "",
            verifyCode: "",
        }
    },
    methods: {
        onSubmit: function () {
            console.log(store.state.userInfo);
            console.log(store.state);
            // 注册逻辑
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
            // 用户名已存在
            for (let i = 0; i < store.state.userInfo.length; i++) {
                if (this.form.username === store.state.userInfo[i].username) {
                    ElNotification({
                        type: "error",
                        title: "用户名已存在！",
                        message: "请重新输入",
                        offset: 50,
                        duration: 1000
                    });
                    this.inputVerifyCode = "";
                    this.$refs["ref_verify-code"].draw();
                    return;
                }
            }
            // 邮箱验证
            if (this.form.email === "") {
                ElNotification({
                    type: "error",
                    title: "请输入邮箱！！",
                    message: "请重新输入",
                    offset: 50,
                    duration: 1000
                });
                this.inputVerifyCode = "";
                this.$refs["ref_verify-code"].draw();
                return;
            } else if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(this.form.email)) {
                ElNotification({
                    type: "warning",
                    title: "邮箱格式有误！",
                    message: "请重新输入",
                    offset: 50,
                    duration: 1000
                });
                this.inputVerifyCode = "";
                this.$refs["ref_verify-code"].draw();
                return;
            }
            ElNotification({
                type: "success",
                title: "注册成功！",
                message: "跳转至登录界面",
                offset: 50,
                duration: 1000
            });
            let user = store.state.userInfo;
            user.push({username: this.form.username, password: this.form.password, email: this.form.email});
            // console.log(user);
            sessionStorage.setUser(user);
            this.$router.push("/login");
        },
        changeCode: function (val) {
            this.verifyCode = val;
        },
    }
}
</script>

<style scoped>
.registerForm {
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

.hasAccount {
    margin-top: -10px;
    color: slategray;
}
</style>