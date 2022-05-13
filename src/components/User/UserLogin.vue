<template>
  <div id="container">
    <el-form :model="form" label-width="100px" class="loginForm">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import store from "@/store";
import { ElNotification } from "element-plus";

export default {
  name: "UserLogin",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit: function () {
      // 用户名登录逻辑
      // 用户名为空
      if (this.form.username == "") {
        ElNotification({
          type: "error",
          title: "用户名不能为空！",
          message: "请重新输入",
        });
        return;
      }
      // 用户名不存在
      let userExists = false;
      let userLoginIndex;
      let userInfo = store.state.userInfo;
      console.log(userInfo);
      for (let i = 0; i < userInfo.length; i++) {
        if (this.form.username === userInfo[i].username) {
          userExists = true;
          userLoginIndex = i;
          break;
        }
      }
      if (userExists == false) {
        ElNotification({
          type: "error",
          title: "用户名不存在！",
          message: "请重新输入",
        });
        return;
      }
      // 密码错误
      else {
        if (this.form.password !== userInfo[userLoginIndex].password) {
          ElNotification({
            type: "error",
            title: "密码错误！",
            message: "请重新输入",
          });
          return;
        }
      }
      // 登录成功
      ElNotification({
        type: "success",
        title: "登陆成功！",
      });
    },
  },
};
</script>

<style scoped>
.loginForm {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 2rem;
}
</style>