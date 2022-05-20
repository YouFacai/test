import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default function createStore(){
    return new Vuex.Store({
        state: {
            count: 0,
            name:"yzl"
        },
        mutations: {
            increment (state) {
                state.count++
            }
        }
    })
}