<template>
    <div id="container">
        <el-row>
            <el-col :span="20">
                <el-input
                    placeholder="此处输入你的待办项"
                    type="text"
                    v-model="list.title"
                    id="todo-item"
                />
            </el-col>
            <el-col :span="4">
                <el-button type="primary" @click="insert">添加</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import store from "@/store";
import {ElNotification} from "element-plus";
import sessionStorage from "@/assets/sessionStorage.js";

const todoList = store.state.todoList;
export default {
    name: "navHeader",
    data() {
        return {
            list: {
                title: "",
                completed: false,
            },
        };
    },
    methods: {
        insert() {
            // 判断待办项是否为空
            if (this.list.title === "") {
                ElNotification({
                    title: "待办项不能为空",
                    message: "请重新输入",
                    type: "warning",
                    offset: 50,
                    duration: 1000
                });
                return;
            }
            // 避免list双向绑定，仅传参不传原型
            todoList.push({title: this.list.title, completed: this.list.completed});
            sessionStorage.setTodoList(todoList);
            this.list.title = "";
            // console.log(todoList);
        },
    },
    beforeCreate() {
        // console.log(todoList);
        // 将当前todoList内容存到session中，防止刷新清空vuex状态
        sessionStorage.setTodoList(todoList);
    },
    setup() {
        // console.log(sessionStorage.getTodoList('todoList'));
        // console.log(todoList);
        // sessionStorage.setTodoList(todoList);
        if (sessionStorage.getTodoList() != null) {
            todoList.splice(0);
            for (let i = 0; i < sessionStorage.getTodoList().length; i++) {
                // console.log(sessionStorage.getTodoList()[i]);
                todoList.push(sessionStorage.getTodoList()[i]);
            }
        }
    },
};
</script>

<style scoped>
</style>

