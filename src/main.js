// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'jquery'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import VueResource from 'vue-resource'

Vue.use(Mint)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.use(VueResource)


/* eslint-disable no-new */
new Vue({
  el: '#app', // 定义作用范围就是index.html里的id为app的范围内
  router, // 引入路由
  template: '<App/>', // 给Vue实例初始一个App组件作为template 相当于默认组件
  components: { App } // 注册引入的组件App.vue
})
