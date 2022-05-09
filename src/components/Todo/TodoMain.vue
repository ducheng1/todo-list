<template>
    <div id="container">
        <div v-for="(item, index) in list" :key="index" class="todo-item">
            <input type="checkbox" v-model="item.complete"/>
            {{ item.title }}
            <el-button type="primary">删除</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navMain',
    data() {
        return {
            list: [
                {
                    title: "吃饭",
                    complete: false
                },
                {
                    title: "睡觉",
                    complete: true
                }
            ],

        }
    },

}
</script>

<style scoped>
#container{
    margin: 1rem 0;
}
.todo-item{
    padding: 1rem 0;
    border: 1px solid black;
}
</style>

