// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import './assets/css/common.css' /*引入公共样式*/
// import axios from 'axios'
// axios.defaults.withCredentials=true;//让ajax携带cookie
//
// Vue.prototype.$axios = axios;
// import live2d4vue from 'live2d4vue'
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
