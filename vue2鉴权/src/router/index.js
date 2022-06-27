import Vue from 'vue'
import VueRouter from 'vue-router'
import routerBeforeEach from './routerBeforeEach'

Vue.use(VueRouter)

const routes = [
  {
    path: '/User',
    name: 'User',
    meta:{
      // 权限
      authority:['superAdmin','admin','member']
    },
    component: () => import(/* webpackChunkName: "a" */ '../views/User.vue')
  },
  {
    path: '/Admin',
    name: 'Admin',
    meta:{
      // 权限
      authority:['superAdmin','admin']
    },
    component: () => import(/* webpackChunkName: "b" */ '../views/Admin.vue')
  },
  {
    path: '/SuperAdmin',
    name: 'SuperAdmin',
    meta:{
      // 权限
      authority:['superAdmin']
    },
    component: () => import(/* webpackChunkName: "c" */ '../views/SuperAdmin.vue')
  },
//    权限不足
  {
    path: '/404',
    name: '404',
    meta:{
      // 权限
      authority:['superAdmin','admin','member']
    },
    component: () => import(/* webpackChunkName: "c" */ '../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

routerBeforeEach(router)

export default router
