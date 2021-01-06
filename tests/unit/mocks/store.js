/* MOCK STORE */

import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

/* MOCK STORE */
export default new Vuex.Store({
    state: {
        listaUsuario: [],
        listaDestacados: [],
        apiKey: '57de2a6f8ac0fd8de5cc5c192cac99fa',
        currentUser: {
            given_name: 'Nombre',
            family_name: 'Apellido',
            email: 'correo@mail.com'
        },
        userid: '123abc'
    },
/* MOCK STORE */
    getters: {
        getListaUsuario(state){
            return state.listaUsuario
        },
        getListaDestacados(state){
            return state.listaDestacados
        },
        getApiKey(state){
            return state.apiKey
        },
        getCurrentUser(state){
            return state.currentUser
        },
        getUserid(state){
            return state.userid
        }
    },
/* MOCK STORE */
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
/* MOCK STORE */
        putMovies(state){
            if(state.userid){
                axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${state.apiKey}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
                    .then(response => {
                        state.listaUsuario.push(response.data.results[0])
                        state.listaUsuario.push(response.data.results[1])
                        state.listaUsuario.push(response.data.results[2])
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            }
        },
        addMovie(state, payload){
            state.listaUsuario.push(payload.pelicula)
        }
    },
/* MOCK STORE */
    actions: {
        updateUser({commit}, user){
            commit('updateUser', user)
        },
        putDestacados({commit}){
            commit('putDestacados')
        },
        putMovies({commit}){
            commit('putMovies');
        },
/* MOCK STORE */
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
/* MOCK STORE */