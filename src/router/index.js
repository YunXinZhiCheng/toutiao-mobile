import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由表
const routes = [
  {
    path: '/login',
    name: 'login',
    // 路由懒加载
    component: () => import('@/views/login')
  },
  {
    path: '/',
    component: () => import('@/views/layout/'),
    // 嵌套路由
    children: [
      {
        path: '', // 默认子路由(只能有一个)
        name: 'home',
        component: () => import('@/views/home/home.vue')
      },
      {
        path: '/qa', //
        name: 'qa',
        component: () => import('@/views/qa/qa.vue')
      },
      {
        path: '/video', //
        name: 'video',
        component: () => import('@/views/video/video.vue')
      },
      {
        path: '/my', //
        name: 'my',
        component: () => import('@/views/my/my.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
