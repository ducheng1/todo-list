<template>
    <div id="container">
        <div class="title">用户注册</div>
        <el-form :model="form" label-width="100px" class="registerForm">
            <el-form-item>
                <el-input v-model="form.username" placeholder="用户名"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="form.password" placeholder="密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input v-model="form.email" placeholder="邮箱"></el-input>
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
                verifyCode: ""
            },
            inputVerifyCode: ""
        }
    },
    methods: {
        onSubmit: function () {
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
            ElNotification({
                type: "success",
                title: "注册成功！",
                message: "跳转至登录界面",
                offset: 50,
                duration: 1000
            });
            this.$router.push("/login")
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