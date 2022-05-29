import Vue from 'vue'
import Vuex from 'vuex'
import c from './C/index.js'

Vue.use(Vuex)

const myPlugin = store => {
  // 当 store 初始化后调用
  store.subscribe((mutation, state) => {
    console.log(mutation,state,'@@@')
  })
}

export default new Vuex.Store({
  state: {
    name:"yzl",
    list: '' || JSON.parse(sessionStorage.getItem("list"))
  },
  getters: {
  },
  mutations: {
    setName(state,val){
      state.name = val
    },
    setlist(state){
      state.list = [1,23,4]
      sessionStorage.setItem('list',JSON.stringify([1,23,4]))
    }
  },
  actions: {
  },
  modules: {
    c:c
  },
  plugins:[myPlugin]
})
