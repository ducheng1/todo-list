import {createStore} from 'vuex'

export default createStore({
    state: {
        todoList: [
            {
                title: '此处显示你的待办项',
                completed: false
            }
        ],
        completedNum: 0
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
})
