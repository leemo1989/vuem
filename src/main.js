import Vue from 'vue'
import './cube-ui'
import router from './router'
import App from './App.vue'
import Axios from "axios"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import 'font-awesome/css/font-awesome.min.css'
import store from './store/store'
import fastclick from 'fastclick' // 解决 移动端 300ms 延时点击的问题


Vue.use(MintUI)
fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.prototype.HOST="/baidumusic"
Vue.prototype.HOST1="/qqmusic"
Vue.prototype.$axios = Axios
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
