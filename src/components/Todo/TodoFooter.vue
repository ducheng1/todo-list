<template>
    <div id="container">
        <div id="status">已完成 {{ completed }} 个 / 共 {{ all }} 个</div>
        <div id="completed-div" v-if="haveQuestCompleted">
            <el-button type="primary">清除已完成任务</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navFooter',
    data() {
        return {
            completed: 1,
            all: 3,
            haveQuestCompleted: true
        }
    }
}
</script>

<style scoped>
#completed-div {
    margin: 1rem 0;
}
</style>

