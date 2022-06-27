import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/index',
        name: 'index',
        component: () => import(/* webpackChunkName: "Index" */ '../views/index.vue'),

    },
    {
        path: '/FirstBirthday',
        name: 'FirstBirthday',
        component: () => import(/* webpackChunkName: "FirstBirthday" */ '../views/20220531/FirstBirthday.vue')
    }, {
        path: '*', redirect: '/index'
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

export default router
