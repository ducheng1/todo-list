<template>
    <div id="container">
        <div v-for="(item, index) in list" :key="index" class="todo">
            <el-row>
                <el-col :span="1"></el-col>
                <el-col :span="2">
                    <div class="todo-index">{{ index + 1 }}</div>
                </el-col>
                <el-col :span="11">
                    <div class="todo-title" :class="{done:item.completed}">{{ item.title }}</div>
                </el-col>
                <el-col :span="4">
                    <el-button type="warning" v-if="item.completed" @click="redoItem(index)">重做</el-button>
                    <el-button type="success" v-else @click="checkItem(index)">完成</el-button>
                </el-col>
                <el-col :span="1"></el-col>
                <el-col :span="4">
                    <el-popconfirm title="确认删除待办项？" confirm-button-text="是" cancel-button-text="否"
                                   @confirm="deleteItem(index)">
                        <template #reference>
                            <el-button type="danger">删除</el-button>
                        </template>
                    </el-popconfirm>
                </el-col>
                <el-col :span="2"></el-col>
            </el-row>
        </div>
        <el-backtop :right="50" :bottom="60" :visibility-height="80" style="height: 40px;width: 40px;"/>
    </div>
</template>

<script>
import store from "@/store";
import {ElNotification} from "element-plus";
import sessionStorage from "@/assets/sessionStorage";

const todoList = store.state.todoList;
export default {
    name: 'navMain',
    data() {
        return {
            list: todoList,
        }
    },
    methods: {
        deleteItem: function (index) {
            ElNotification({
                title: "待办项已删除",
                type: "success",
                offset: 50,
                duration: 1000
            });
            todoList.splice(index, 1);
            let a = 0;
            for (let i = 0; i < todoList.length; i++) {
                if (todoList[i].completed)
                    a++;
            }
            store.state.completedNum = a;
            sessionStorage.setTodoList(todoList);
            sessionStorage.setCompletedNum(a);
        },
        checkItem: function (index) {
            ElNotification({
                title: "待办项已完成",
                type: "success",
                offset: 50,
                duration: 1000
            });
            todoList[index].completed = true;
            let a = 0;
            for (let i = 0; i < todoList.length; i++) {
                if (todoList[i].completed)
                    a++;
            }
            store.state.completedNum = a;
            sessionStorage.setTodoList(todoList);
            sessionStorage.setCompletedNum(a);
        },
        redoItem: function (index) {
            ElNotification({
                title: "待办项已重做",
                type: "warning",
                offset: 50,
                duration: 1000
            });
            todoList[index].completed = false;
            let a = 0;
            for (let i = 0; i < todoList.length; i++) {
                if (todoList[i].completed)
                    a++;
            }
            store.state.completedNum = a;
            sessionStorage.setTodoList(todoList);
            sessionStorage.setCompletedNum(a);
        }
    },
    setup() {
        if (sessionStorage.getCompletedNum() != null) {
            store.state.completedNum = sessionStorage.getCompletedNum();
        }
    }
}
</script>

<style scoped>
#container {
    margin: 1rem 0;
}

.todo {
    border-bottom: 1px solid #ccc;
    padding: 1rem 0;
    text-align: left;
}

.todo:first-child {
    border-top: 1px solid #ccc;
}

.todo-index {
    font-size: 2rem;
    color: cadetblue;
    text-shadow: 1px 1px 5px greenyellow;
}

.todo-title {
    /* border: 1px black solid; */
    /* margin-right: 1rem; */
    overflow: hidden;
    line-height: 2.2rem;
    display: inline;
    white-space: nowrap;
}

.done {
    text-decoration: line-through;
    color: darkgray;
}
</style>

