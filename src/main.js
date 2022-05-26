// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';
import router from './router'
import store from './store'
import App from './App.vue'
import {createApp} from 'vue'

const app = createApp(App);
app.use(store);
app.use(router);
app.use(ElementPlus, {size: 'mini'});
app.use(Vant);
app.mount('#app');
