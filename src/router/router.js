import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue'),
    meta: { requiresLogin: false }
  },
  {
    path: '/home',
    name: 'Home',
    redirect: '/home/destacados',
    component: () => import('../views/Home.vue'),
    meta: { requiresLogin: true },
    children: [
      {
        path: 'destacados',
        name: 'Destacados',
        component: () => import('../views/Destacados.vue'),
      },
      {
        path: 'busqueda',
        name: 'Busqueda',
        component: () => import('../views/Busqueda.vue'),
      },
      {
        path: 'watchlist',
        name: 'Watchlist',
        component: () => import('../views/Watchlist.vue'),
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

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

export default router
