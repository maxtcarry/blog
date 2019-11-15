// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/plugins/router/router'
import './assets/css/common.css' /*引入公共样式*/
// import axios from 'axios'
// axios.defaults.withCredentials=true;//让ajax携带cookie
//
// Vue.prototype.$axios = axios;
import store from './store/store'
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  // ...
  console.log(from.name+'———to———'+to.name)
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
