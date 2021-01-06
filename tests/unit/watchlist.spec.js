import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import { firebaseConfig } from '../../src/config/firebaseConfig'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faStar, faFilm, faSearch, faChevronUp, faChevronDown, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
/* import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' */
import Main from '@/views/Main.vue'
import Watchlist from '@/views/Watchlist.vue'
import routes from './mocks/router'
import store from './mocks/store'

library.add(faUser, faStar, faFilm, faSearch, faChevronUp, faChevronDown, faPlay)

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.component('font-awesome-icon', FontAwesomeIcon)
const router = new VueRouter(routes)

localVue.use(BootstrapVue)
localVue.use(IconsPlugin)

firebase.initializeApp(firebaseConfig);

describe('Testing Watchlist', () => {

    

    it('Watchlist indica lista vacia', () => {
        const wrapper = shallowMount(Watchlist,{
            localVue,
            router,
            store,
            firebase,
        })
        expect(wrapper.html()).toContain('Tu Watchlist', 'Busca peliculas para agregarlas aquí')
        wrapper.vm.$store.dispatch('putMovies')
    })
  
    it('Watchlist muestra lista de usuario', () => {
        const wrapper = shallowMount(Watchlist,{
            localVue,
            router,
            store,
            firebase,
        })
        
        expect(wrapper.html()).toContain('Pelicula Uno', 'Pelicula Dos', 'Pelicula Tres')
    })
})