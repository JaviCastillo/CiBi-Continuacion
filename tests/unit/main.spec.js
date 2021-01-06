import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import { firebaseConfig } from '../../src/config/firebaseConfig'
import Main from '@/views/Main.vue'
import Home from '@/views/Home.vue'
import routes from './mocks/router'
import store from './mocks/store'

const localVue = createLocalVue()
localVue.use(Vuex)
const router = new VueRouter(routes)

firebase.initializeApp(firebaseConfig);

describe('Testing Login', () => {

  it('Carga Main', () => {
    const wrapper = shallowMount(Main,{
      localVue,
      router,
      store,
      firebase,
    })
    expect(wrapper.vm.$router.history.current.path).toEqual('/')
    expect(wrapper.text()).toContain('Cinema Billboard')
  })

  it('Carga Home', () => {
    const wrapper = shallowMount(Home,{
      localVue,
      router,
      store,
      firebase,
    })
    wrapper.vm.$router.push('/home')
    expect(wrapper.vm.$router.history.current.path).toEqual('/home')
    expect(wrapper.html()).toContain('navbar','sidebar','router-view')
  })
})
