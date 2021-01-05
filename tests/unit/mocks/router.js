/* MOCK ROUTER */
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../mocks/store'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Main',
      component: () => import('../../../src/views/Main.vue'),
      meta: { requiresLogin: false }
    },
/* MOCK ROUTER */
    {
      path: '/home',
      name: 'Home',
      redirect: '/home/destacados',
      component: () => import('../../../src/views/Home.vue'),
      meta: { requiresLogin: true },
      children: [
        {
          path: 'destacados',
          name: 'Destacados',
          component: () => import('../../../src/views/Destacados.vue'),
        },
    /* MOCK ROUTER */
        {
          path: 'busqueda',
          name: 'Busqueda',
          component: () => import('../../../src/views/Busqueda.vue'),
        },
        {
          path: 'watchlist',
          name: 'Watchlist',
          component: () => import('../../../src/views/Watchlist.vue'),
        }
      ]
    }
  ]
  /* MOCK ROUTER */
  
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })

  /* MOCK ROUTER */
  router.beforeEach((to, from, next) => {
    let user = store.getters.getCurrentUser
    let authRequired = to.matched.some(record => record.meta.requiresLogin)
    if (authRequired && !user) {
      next("/")
    } else if (user && !authRequired) {
      next("home")
    } else {
      next()
    }
  })
  
  /* MOCK ROUTER */
  export default router