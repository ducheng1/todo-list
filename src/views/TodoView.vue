<template>
    <div class="home">
        <nav-header/>
        <nav-main/>
        <nav-footer/>
    </div>
</template>

<script>
import NavHeader from '@/components/Todo/TodoHeader.vue'
import NavMain from '@/components/Todo/TodoMain.vue'
import NavFooter from '@/components/Todo/TodoFooter.vue'

export default {
    name: 'HomeView',
    data(){
        return {

        }
    },
    components: {
        NavHeader,
        NavMain,
        NavFooter
    },
    props: {},
}
</script>
