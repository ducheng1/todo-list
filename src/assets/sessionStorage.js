const sessionStorage = window.sessionStorage;
export default {
    getTodoList() {
        try {
            return JSON.parse(sessionStorage.getItem('todoList'));
        } catch (err) {
            return null;
        }
    },
    setTodoList(val) {
        sessionStorage.setItem('todoList', JSON.stringify(val));
    },
    getCompletedNum() {
        try {
            return JSON.parse(sessionStorage.getItem('todoDoneNum').toString());
        } catch (err) {
            return null;
        }
    },
    setCompletedNum(val) {
        sessionStorage.setItem('todoDoneNum', JSON.stringify(val));
    }
}