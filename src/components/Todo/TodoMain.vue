<template>
    <div id="container">
        <div v-for="(item, index) in list" :key="index" class="todo-item">
            <el-row>
                <el-col :span="2"></el-col>
                <el-col :span="12">
                    <span class="todo-index">{{ index + 1 }}</span>
                    <span class="todo-title">{{ item.title }}</span>
                </el-col>
                <el-col :span="4">
                    <el-button type="warning" v-if="item.completed">重做</el-button>
                    <el-button type="success" v-else>完成</el-button>
                </el-col>
                <el-col :span="1"></el-col>
                <el-col :span="4">
                    <el-button type="danger">删除</el-button>
                </el-col>
                <el-col :span="2"></el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import {useStore} from "vuex";
import store from "@/store";

export default {
    name: 'navMain',
    data() {
        return {
            list: store.state.todoList
        }
    },
    setup() {
        const store = useStore();
        // console.log(store.state.todoList);
        return store.state.todoList
    }
}
</script>

<style scoped>
#container {
    margin: 1rem 0;
}

.todo-item {
    padding: 1rem 0;
    text-align: left;
}

.todo-index {
    margin-right: 0.5rem;
    font-size: 2rem;
}
</style>

