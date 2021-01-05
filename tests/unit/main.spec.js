import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import Main from '@/views/Main.vue'
import routes from './mocks/router'
import store from './mocks/store'

const localVue = createLocalVue()
localVue.use(Vuex)
const router = new VueRouter(routes)

describe('Testing Login', () => {
  it('Se ve monito', () => {
    const wrapper = shallowMount(Main,{
      localVue,
      router,
      store,
      firebase,
      propsData: {
        user: {
          uid: '123',
          given_name: 'Nombre',
          family_name: 'Apellido',
          email: 'correo@mail.com'
        }
      },
    })
    console.log(wrapper.vm.$router.path)
  })
})
