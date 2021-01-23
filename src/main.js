import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faStar, faFilm, faSearch, faChevronUp, faChevronDown, faPlay, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Firebase from 'firebase/app'
import { firebaseConfig } from './config/firebaseConfig'

library.add(faUser, faStar, faFilm, faSearch, faChevronUp, faChevronDown, faPlay, faPlus, faTrashAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  Firebase,
  render: h => h(App)
}).$mount('#app')
