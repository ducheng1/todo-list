<template>
    <div id="container">
        <user-login v-if="!login"></user-login>
        <user-info-view v-else></user-info-view>
    </div>
</template>

<script>
import UserLogin from '@/components/User/UserLogin.vue'
import userInfoView from "@/views/UserInfoView";
import store from "@/store";
import sessionStorage from "@/assets/sessionStorage";

export default {
    name: 'UserView',
    components: {
        UserLogin,
        userInfoView
    },
    data() {
        return {
            login: store.state.hasLogin
        }
    },
    setup() {
        store.state.hasLogin = sessionStorage.getHasLogin();
    }
}
</script>

<style scoped>

</style>