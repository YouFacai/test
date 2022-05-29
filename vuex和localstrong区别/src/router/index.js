import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/A',
    name: 'A',
    component: () => import(/* webpackChunkName: "about" */ '../views/A.vue')
  },
  {
    path: '/B',
    name: 'B',
    component: () => import(/* webpackChunkName: "about" */ '../views/B.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
