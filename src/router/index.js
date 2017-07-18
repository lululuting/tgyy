import Vue from 'vue'
import Router from 'vue-router'

// import home from '@/pages/home'
import particulars from '@/pages/particulars'


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: home // 注册Hello组件
    //
    // },
    {
      path: '/',
      name: 'particulars',
      component: particulars // 注册Hello组件
    }
  ]
})
