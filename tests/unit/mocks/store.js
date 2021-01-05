/* MOCK STORE */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* MOCK STORE */
export default new Vuex.Store({
    state: {
        currentUser: false
    },
    getters: {
        getCurrentUser(state){
            return state.currentUser
        }
    },
/* MOCK STORE */
    mutations: {
        updateUser(state, user){
            state.currentUser = user
        },
    },
    actions: {
        updateUser({commit}, user){
            commit('updateUser', user)
        },
    }
})
/* MOCK STORE */