import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

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
  }
})
