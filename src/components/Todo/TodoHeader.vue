<template>
    <div id="container">
        <el-row>
            <el-col :span="20">
                <el-input placeholder="请输入任务名称" type="text" v-model="list.title" id="todo-item"/>
            </el-col>
            <el-col :span="4">
                <el-button type="primary" @click="insert">添加</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import store from "@/store";

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

                return;
            }
            store.state.todoList.push(this.list);
        }
    }
}
</script>

<style scoped>

</style>

