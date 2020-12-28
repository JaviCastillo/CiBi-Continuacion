import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listaUsuario: [],
    listaDestacados: [],
    listaBusqueda: [],
    apiKey: '57de2a6f8ac0fd8de5cc5c192cac99fa',
    currentUser: false
  },
  getters: {
    getListaUsuario(state){
      return state.listaUsuario
    },
    getListaDestacados(state){
      return state.listaDestacados
    },
    getListaBusqueda(state){
      return state.listaBusqueda
    },
    getApiKey(state){
      return state.apiKey
    },
    getCurrentUser(state){
      return state.currentUser
    }
  },
  mutations: {
    updateUser(state, user){
      state.currentUser = user
    }
  },
  actions: {
    updateUser({commit}, user){
      commit('updateUser', user)
    }
  }
})
