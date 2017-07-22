import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import particulars from '@/pages/particulars'
import search from '@/pages/search'
import userCenter from '@/pages/user_center'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: home // 注册home组件

    },
    {
      path: '/particulars',
      component: particulars // 注册particulars组件
    },
    {
      path: '/search',
      component: search // 注册search组件

    },
    {
      path: '/userCenter',
      component: userCenter // 注册userCenter组件
    },

  ]
})
