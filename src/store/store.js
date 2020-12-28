import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
    },
    putDestacados(state){
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=57de2a6f8ac0fd8de5cc5c192cac99fa&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
          .then(response => {
            state.listaDestacados.push(response.data.results[0])
            state.listaDestacados.push(response.data.results[1])
            state.listaDestacados.push(response.data.results[2])
          })
          .catch(error => {
            console.log(error.message);
          })
    }
  },
  actions: {
    updateUser({commit}, user){
      commit('updateUser', user)
    },
    putDestacados({commit}){
      commit('putDestacados')
    }
  }
})
