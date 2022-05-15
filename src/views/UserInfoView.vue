<template>
    <div id="container">
        <el-image :src="head" lazy @click="changeHead"></el-image>
        <div class="userInfo">您好，{{ username }}</div>
        <div class="userAction">
            <van-cell title="我的Todo" is-link to="/" icon="certificate"></van-cell>
            <van-cell title="我的CountDown" is-link to="/countdown" icon="descending"></van-cell>
            <van-cell title="设置" is-link @click="settings" icon="setting-o"></van-cell>
            <van-cell title="将APP分享给朋友" @click="showShare = true" is-link icon="share-o"/>
            <van-share-sheet
                v-model:show="showShare"
                title="立即分享给好友"
                :options="options"
                @select="onSelectShare"
            />
            <van-cell title="退出当前账号" is-link icon="cross" @click="confirm = true"></van-cell>
            <van-action-sheet v-model:show="confirm" :actions="actions" @select="onSelect" cancel-text="取消"
                              close-on-click-action></van-action-sheet>
        </div>
    </div>
</template>

<script>
import store from "@/store";
import sessionStorage from "@/assets/sessionStorage";
import {Dialog, Toast} from "vant";

export default {
    name: 'UserInfoView',
    data() {
        return {
            confirm: false,
            actions: [
                {
                    name: '确认'
                }
            ],
            head: require("/public/1.jpeg"),
            username: store.state.currentUser,
            showShare: false,
            options: [
                {name: '微信', icon: 'wechat'},
                {name: '微博', icon: 'weibo'},
                {name: '复制链接', icon: 'link'},
                {name: '分享海报', icon: 'poster'},
                {name: '二维码', icon: 'qrcode'},
            ],
        }
    },
    methods: {
        onSelect: function () {
            store.state.hasLogin = false;
            sessionStorage.setHasLogin(false);
            this.$router.push("/");
        },
        changeHead: function () {
            Dialog.alert({
                title: "提示",
                message: "目前暂时不支持修改头像。",
            }).then(() => {
            })
        },
        onSelectShare: function (option) {
            Toast(
                {
                    message: option.name,
                    duration: 1000
                }
            );
            this.showShare = false;
        },
        settings: function () {
            Dialog.alert({
                title: "提示",
                message: "功能正在完善中",
            }).then(() => {
            })
        }
    },
    setup() {
        store.state.currentUser = sessionStorage.getCurrentUser();
    }
}
</script>

<style scoped>
.el-image {
    height: 100px;
    width: 100px;
    border-radius: 80px;
}

.userAction {
    margin-top: 2rem;
}

.userInfo {
    margin-top: 2rem;
    font-size: 20px;
    font-family: Helvetica, "微软雅黑";
    color: cadetblue;
}
</style>