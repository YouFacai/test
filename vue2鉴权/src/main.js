import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 自定义鉴权指令
Vue.directive('limits', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el,binding) {
        console.log(binding)
        if(!binding.expression.includes(localStorage.getItem("authority"))){
            el.style.display = 'none'
        }
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
