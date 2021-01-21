import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import firebase from 'firebase'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listaUsuario: [],
    listaDestacados: [],
    listaBusqueda: [],
    apiKey: '57de2a6f8ac0fd8de5cc5c192cac99fa',
    currentUser: false,
    userid: false,
    selected: {}
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
    },
    getUserid(state){
      return state.userid
    },
    getSelected(state){
      return state.selected
    }
  },
  mutations: {
    updateUser(state, user){
      state.currentUser = user
    },
    setUserid(state, newuserid){
      state.userid = newuserid
    },
    setSelected(state, newmovie){
      state.selected = newmovie
    },
    putDestacados(state){
      let userLang = navigator.language || navigator.userLanguage;
      let user_iso639 = userLang.substring(0,2)
      let user_iso3166 = userLang.substring(3,5)

      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${state.apiKey}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
          .then(response => {
            response.data.results.forEach(e => {
              axios.get(`https://api.themoviedb.org/3/movie/${e.id}/translations?api_key=${state.apiKey}`)
                .then(response => {
                  let coso = response.data.translations.find(e => (e.iso_639_1 == user_iso639) || (e.iso_3166_1 == user_iso3166))
                  let lang_overview = coso.data.overview;
                  e.userlang_overview = lang_overview
                  state.listaDestacados.push(e);
                })
            })
          })
          .catch(error => {
            console.log(error.message);
          })
    },
    putMovies(state){
      firebase.firestore().collection(state.userid).orderBy("user_add", "desc").onSnapshot(resp => {
        let lista = []
        resp.forEach(element => {
          lista.push(element.data())
        });
        state.listaUsuario = lista
      })
    },
    addMovie(state, payload){

      let libre = true
      state.listaUsuario.forEach(element => {
          if (element.id == payload.pelicula.id) {
              libre = false
          }
      })

      if (libre) {
        let today = new Date()
        payload.pelicula.user_add = today
        payload.pelicula.user_seen = false

        Swal.fire({
          title: `${payload.pelicula.title}`,
          text: `¿Deseas agregar esta película a tu Watchlist?`,
          icon: 'question',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          cancelButtonText: 'No',
          confirmButtonText: 'Si'
        }).then((result) => {
          if (result.isConfirmed) {
            firebase.firestore().collection(state.userid).add(payload.pelicula).then(()=>{
              Swal.fire({
                icon: 'success',
                title: 'Agregada',
                showConfirmButton: false,
                timer: 1500
              })
            })
          }
        })
        

      } else {
        Swal.fire({
          icon: 'warning',
          title: `${payload.pelicula.title}`,
          text: `Esta película ya se encuentra en tu Watchlist`,
        })
      }
    },

    deleteMovie(state, payload){
      let indice = 0
      let sumar = 0
      state.listaUsuario.forEach(element => {
          sumar++
          if (element.id == payload.pelicula.id) {
              indice = sumar-1
          }
      })

      firebase.firestore().collection(state.userid).onSnapshot(resp => {
        resp.forEach(element => {
          if(element.data().id == payload.pelicula.id){
            Swal.fire({
              title: `${payload.pelicula.title}`,
              text: `¿Deseas eliminar esta película de tu Watchlist?`,
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              cancelButtonText: 'No',
              confirmButtonText: 'Si'
            }).then((result) => {
              if (result.isConfirmed) {
                firebase.firestore().collection(state.userid).doc(element.id).delete().then(()=>{
                  Swal.fire({
                    icon: 'success',
                    title: 'Eliminada',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  state.selected = state.listaUsuario[indice]
                })
              }
            })
          }
        })
      })

    },
    updateMovie(state, payload){
      firebase.firestore().collection(state.userid).onSnapshot(resp => {
        resp.forEach(element => {
          if(element.data().id == payload.pelicula.id){
            firebase.firestore().collection(state.userid).doc(element.id).update(payload.pelicula)
          }
        })
      })    
    }
  },
  actions: {
    updateUser({commit}, user){
      commit('updateUser', user)
    },
    setUserid({commit}, newuserid){
      commit('setUserid', newuserid)
    },
    setSelected({commit}, newmovie){
      commit('setSelected', newmovie)
    },
    putDestacados({commit}){
      commit('putDestacados')
    },
    putMovies({commit}){
      commit('putMovies');
    },
    addMovie({commit}, payload){
      commit('addMovie', payload);
    },
    updateMovie({commit}, payload){
      commit('updateMovie', payload);
    },
    deleteMovie({commit}, payload){
      commit('deleteMovie', payload);
    },
  }
})
