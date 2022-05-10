<template>
    <div class="home">
        <todo-header/>
        <todo-main/>
        <todo-footer/>
    </div>
</template>

<script>
import TodoHeader from '@/components/Todo/TodoHeader.vue'
import TodoMain from '@/components/Todo/TodoMain.vue'
import TodoFooter from '@/components/Todo/TodoFooter.vue'

export default {
    name: 'HomeView',
    data() {
        return {}
    },
    components: {
        TodoHeader,
        TodoMain,
        TodoFooter
    }
}
</script>
