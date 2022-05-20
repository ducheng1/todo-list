import { createStore } from 'vuex'
// vuex持久化存储

export default createStore({
    state: {
        todoList: [
            {
                title: '此处显示你的待办项',
                completed: false
            }
        ],
        completedNum: 0,
        userInfo: [
            {
                username: 'test',
                password: 'test',
                email: 'test@test.com'
            },
        ],
        hasLogin: false,
        currentUser: [
            {
                username: '',
                password: '',
                email: ''
            },
        ],
        countdownList: [
            {
                title: '考研',
                time: new Date(2022,11,25)
            }
        ]
    },
})
