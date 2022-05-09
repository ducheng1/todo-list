import {createStore} from 'vuex'

export default createStore({
    state: {
        todoList: [
            {
                title: '吃饭',
                completed: false
            },
            {
                title: '睡觉',
                completed: false
            }
        ]
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
})
