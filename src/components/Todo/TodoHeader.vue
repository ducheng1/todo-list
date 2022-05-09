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
            if (this.list.title === "") {
                ElNotification({
                    title: "待办项不能为空",
                    message: "请重新输入",
                    type: "warning"
                });
                return;
            }
            store.state.todoList.push(this.list);
        }
    }
}
</script>

<style scoped>

</style>

