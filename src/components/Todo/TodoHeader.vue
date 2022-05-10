<template>
    <div id="container">
        <el-row>
            <el-col :span="20">
                <el-input placeholder="此处输入你的待办项" type="text" v-model="list.title" id="todo-item"/>
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

export default {
    name: 'navHeader',
    data() {
        return {
            list: {
                title: '',
                completed: false,
            }
        }
    },
    methods: {
        insert() {
            // 判断待办项是否为空
            if (this.list.title === "") {
                ElNotification({
                    title: "待办项不能为空",
                    message: "请重新输入",
                    type: "warning"
                });
                return;
            }
            const todoList = store.state.todoList;
            // 避免list双向绑定，仅传参不传原型
            todoList.push({title: this.list.title, completed: this.list.completed});
            this.list.title = "";
            // console.log(todoList);
        }
    }
}
</script>

<style scoped>

</style>

