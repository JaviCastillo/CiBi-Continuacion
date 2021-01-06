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
        userid: '123abc',
        selected: {}
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
/* MOCK STORE */
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
/* MOCK STORE */
    mutations: {
        updateUser(state, user){
            state.currentUser = user
        },
        setSelected(state, newmovie){
            state.selected = newmovie
        },
        putDestacados(state){
            let movie1 = { id: 1, title: 'Pelicula Uno', backdrop_path: '/ocnHtipFZeiTjyToICFiKBWVnfC.jpg', 
                            poster_path: '/qgGh5d0IHAZRlHIdFS3XWVygumR.jpg', overview: 'bla bla bla', user_rating: '3'}
            let movie2 = { id: 2, title: 'Pelicula Dos', backdrop_path: '/ocnHtipFZeiTjyToICFiKBWVnfC.jpg', 
                            poster_path: '/qgGh5d0IHAZRlHIdFS3XWVygumR.jpg', overview: 'bla bla bla', user_rating: '3'}
            let movie3 = { id: 3, title: 'Pelicula Tres', backdrop_path: '/ocnHtipFZeiTjyToICFiKBWVnfC.jpg', 
                            poster_path: '/qgGh5d0IHAZRlHIdFS3XWVygumR.jpg', overview: 'bla bla bla', user_rating: '3'}
            state.listaDestacados.push(movie1)
            state.listaDestacados.push(movie2)
            state.listaDestacados.push(movie3)
        },
/* MOCK STORE */
        putMovies(state){
            if(state.userid){
                let movie1 = { id: 1, title: 'Pelicula Uno', backdrop_path: '/ocnHtipFZeiTjyToICFiKBWVnfC.jpg', 
                            poster_path: '/qgGh5d0IHAZRlHIdFS3XWVygumR.jpg', overview: 'bla bla bla', user_rating: '3'}
                let movie2 = { id: 2, title: 'Pelicula Dos', backdrop_path: '/ocnHtipFZeiTjyToICFiKBWVnfC.jpg', 
                                poster_path: '/qgGh5d0IHAZRlHIdFS3XWVygumR.jpg', overview: 'bla bla bla', user_rating: '3'}
                let movie3 = { id: 3, title: 'Pelicula Tres', backdrop_path: '/ocnHtipFZeiTjyToICFiKBWVnfC.jpg', 
                                poster_path: '/qgGh5d0IHAZRlHIdFS3XWVygumR.jpg', overview: 'bla bla bla', user_rating: '3'}
                state.listaUsuario.push(movie1)
                state.listaUsuario.push(movie2)
                state.listaUsuario.push(movie3)
                state.selected = state.listaUsuario[0]
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
        setSelected({commit}, newmovie){
            commit('setSelected', newmovie)
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