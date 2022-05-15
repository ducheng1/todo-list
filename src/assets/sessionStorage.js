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
            return JSON.parse(sessionStorage.getItem('completedNum').toString());
        } catch (err) {
            return null;
        }
    },
    setCompletedNum(val) {
        sessionStorage.setItem('completedNum', JSON.stringify(val));
    },
    setUser(val) {
        sessionStorage.setItem('userInfo', JSON.stringify(val));
    },
    getUser() {
        try {
            return JSON.parse(sessionStorage.getItem("userInfo"));
        } catch (err) {
            return null;
        }
    },
    setHasLogin(val) {
        sessionStorage.setItem('hasLogin', JSON.stringify(val));
    },
    getHasLogin() {
        try {
            return JSON.parse(sessionStorage.getItem("hasLogin"));
        } catch (err) {
            return null;
        }
    },
    getCurrentUser() {
        try {
            return JSON.parse(sessionStorage.getItem("currentUser"));
        } catch (err) {
            return null;
        }
    },
    setCurrentUser(val) {
        sessionStorage.setItem("currentUser", JSON.stringify(val));
    }
}