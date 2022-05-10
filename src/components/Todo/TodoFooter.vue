<template>
    <div id="container">
        <div id="status">已完成 {{ completedNum }} 个 / 共 {{ totalNum }} 个</div>
        <div id="completed-div" v-if="haveQuestCompleted">
            <el-button type="primary" @click="clearDone">清除已完成任务</el-button>
        </div>
    </div>
</template>

<script>
import store from "@/store";

export default {
    name: 'navFooter',
    data() {
        return {
            haveQuestCompleted: true
        }
    },
    computed: {
        completedNum: function () {
            return this.$store.state.completedNum;
        },
        totalNum: function () {
            return this.$store.state.todoList.length;
        }
    },
    methods: {
        clearDone: function () {
            let completedNum = 0;
            let completedIndex = [];
            for (let i = 0; i < store.state.todoList.length; i++) {
                if (store.state.todoList[i].completed) {
                    completedIndex.push(i);
                    completedNum++;
                }
            }
            for (let i = completedIndex.length - 1; i >= 0; i--) {
                store.state.todoList.splice(completedIndex[i], 1);
            }
            store.state.completedNum -= completedNum;
        },
    }
}
</script>

<style scoped>
#completed-div {
    margin: 1rem 0;
}
</style>

