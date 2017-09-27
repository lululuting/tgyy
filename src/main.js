// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import $ from 'jquery'
import App from './App'
import router from './router'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import VueResource from 'vue-resource'
import axios from 'axios'

Vue.use(Mint)
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.prototype.$axios = axios;






// 一些公共方法

//格式评论时间
Vue.prototype.formatCommentsTime = function (publishTime){
  let d_minutes,d_hours,d_days;
  let timeNow = parseInt(new Date().getTime()/1000);
  let d;
  d = timeNow - publishTime;
  d_days = parseInt(d/86400);
  d_hours = parseInt(d/3600);
  d_minutes = parseInt(d/60);
  if(d_days>0 && d_days<4){
    return d_days+"天前";
  }else if(d_days<=0 && d_hours>0){
    return d_hours+"小时前";
  }else if(d_hours<=0 && d_minutes>0){
    return d_minutes+"分钟前";
  }else{
    let date = new Date(publishTime*1000);
    let y = date.getFullYear();
    let m = date.getMonth() + 1;
    let d = date.getDate();
    m = m < 10 ? ('0' + m) : m;
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
  }
}
//格式播放时间
Vue.prototype.formatTime=function (second) {
  return [parseInt(second / 60 ), second% 60].join(":").replace(/\b(\d)\b/g, "0$1");
}
//格式播放播放量和弹幕量
Vue.prototype.formatPlayNum = function (num) {
  return (num>10000)?(Math.round(num) / 10000).toFixed(1)+'万':num;
}




/* eslint-disable no-new */
new Vue({
  el: '#app', // 定义作用范围就是index.html里的id为app的范围内
  router, // 引入路由
  template: '<App/>', // 给Vue实例初始一个App组件作为template 相当于默认组件
  components: { App } // 注册引入的组件App.vue
})
