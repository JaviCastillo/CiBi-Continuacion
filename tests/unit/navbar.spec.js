import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import { firebaseConfig } from '../../src/config/firebaseConfig'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faStar, faFilm, faSearch, faChevronUp, faChevronDown, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Home from '@/views/Home.vue'
import Navbar from '@/components/Navbar.vue'
import routes from './mocks/router'
import store from './mocks/store'

library.add(faUser, faStar, faFilm, faSearch, faChevronUp, faChevronDown, faPlay)

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.component('font-awesome-icon', FontAwesomeIcon)
const router = new VueRouter(routes)

firebase.initializeApp(firebaseConfig);

describe('Testing Navbar', () => {

    it('Carga Home', () => {
        const wrapper = shallowMount(Home,{
          localVue,
          router,
          store,
          firebase,
        })
        wrapper.vm.$router.push('/home')
    })

    it('Navbar muestra usuario', () => {
        const wrapper = shallowMount(Navbar,{
            localVue,
            router,
            store,
            firebase,
        })
        expect(wrapper.html()).toContain('Nombre Apellido', 'correo@mail.com');
    })
  
})