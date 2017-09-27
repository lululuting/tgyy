import Vue from 'vue'
import Router from 'vue-router'

import home from '@/pages/home'
import particulars from '@/pages/particulars'
import search from '@/pages/search'
import userCenter from '@/pages/user_center'
import login from '@/pages/login'
import register from '@/pages/register'
import picture from '@/pages/picture'
import ranking from '@/pages/ranking'
import music from '@/pages/music'



Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'home',
      path: '/',
      component: home // 注册home

    },
    {
      name:'particulars',
      path: '/particulars',
      component: particulars // 注册particulars
    },
    {
      name:'search',
      path: '/search',
      component: search // 注册search

    },
    {
      name:'userCenter',
      path: '/userCenter',
      component: userCenter // 注册userCenter
    },
    {
      name:'login',
      path: '/login',
      component: login // 注册login
    },
    {
      name:'register',
      path: '/register',
      component: register // 注册register
    },
    {
      name:'picture',
      path: '/picture',
      component: picture //注册 picture
    },
    {
      name:'music',
      path: '/music',
      component: music // 注册music

    },
    {
      name:'ranking',
      path: '/ranking',
      component: ranking //注册 ranking
    },


  ]
})
