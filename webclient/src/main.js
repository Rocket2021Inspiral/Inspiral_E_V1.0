

import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import LeaderLine from 'leader-line-vue'
import VideoPlayer from 'vue-video-player'
import animated from 'animate.css'
import VueParticlesBg from "particles-bg-vue";

import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import 'lib-flexible'
 

import App from './App.vue'

axios.defaults.baseURL = 'http://127.0.0.1:3000'
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.withCredentials=true

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.prototype.$LeaderLine = LeaderLine

Vue.use(ElementUI)
Vue.use(VideoPlayer)
Vue.use(animated)
Vue.use(VueParticlesBg)




new Vue({
  render: h => h(App),
}).$mount('#app')

