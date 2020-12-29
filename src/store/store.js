import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import firebase from 'firebase'

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
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${state.apiKey}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
          .then(response => {
            state.listaDestacados.push(response.data.results[0])
            state.listaDestacados.push(response.data.results[1])
            state.listaDestacados.push(response.data.results[2])
          })
          .catch(error => {
            console.log(error.message);
          })
    },
    putMovies(state, userid){
      firebase.firestore().collection(userid).orderBy('title').onSnapshot(resp => {
        console.log(resp);
        /* let arreglo = [];
        resp.forEach(element => {
          arreglo.push(element)
        });
        console.log(arreglo); */
        /* state.listaUsuario = arreglo; */
      })
    },
    async addMovie(state, payload){
      await firebase.firestore().collection(payload.userid).add(payload.pelicula)
    }
  },
  actions: {
    updateUser({commit}, user){
      commit('updateUser', user)
    },
    putDestacados({commit}){
      commit('putDestacados')
    },
    putMovies({commit}, userid){
      commit('putMovies', userid);
    },
    addMovie({commit}, payload){
      commit('addMovie', payload);
    },
    updateMovie({commit},movie){
      commit('updateMovie',movie);
    },
    deleteMovie({commit},movieid){
      commit('deleteMovie',movieid);
    },
  }
})
