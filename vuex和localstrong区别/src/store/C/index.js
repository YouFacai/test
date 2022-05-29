export default {
    namespaced: true,
    state: {
        ccc: "ccc"
    },
    mutations: {
        setCC(state, val) {
            state.ccc = val
            console.log("cccc")
        }
    },
    getters: {
        doubleCount(state) {
            return state.count * 2
        }
    },
    actions: {}
}