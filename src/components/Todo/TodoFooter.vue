<template>
    <div id="container">
        <div id="status">已完成 {{ completed }} 个 / 共 {{ all }} 个</div>
        <div id="completed-div" v-if="haveQuestCompleted">
            <el-button type="primary">清除已完成任务</el-button>
        </div>
    </div>
</template>

<script>
import {useStore} from "vuex";
import store from "@/store";

export default {
    name: 'navFooter',
    data() {
        return {
            completed: store.state.completedNum,
            all: store.state.todoList.length,
            haveQuestCompleted: true
        }
    },
    setup() {
        const store = useStore();
        let list = store.state.todoList;
        for (let i = 0; i < list.length; i++) {
            if (list[i].completed)
                store.state.completedNum++;
        }
        // console.log(store.state.todoList.length)
        return list;
    },
}
</script>

<style scoped>
#completed-div {
    margin: 1rem 0;
}
</style>

