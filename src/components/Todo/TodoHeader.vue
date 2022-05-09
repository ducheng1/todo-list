<template>
    <div id="container">
        <el-input placeholder="请输入任务名称" type="text" v-model="value"/>
    </div>
</template>

<script>
export default {
    name: 'navHeader',
    data() {
        return {
            value: ""
        }
    },
}
</script>

<style scoped>
#container {
    text-align: center;
}
</style>

