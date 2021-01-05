/* MOCK ROUTER */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
      path: '/',
      name: 'Main',
      component: () => import('../../../src/views/Main.vue'),
    },
/* MOCK ROUTER */
    {
      path: '/home',
      name: 'Home',
      redirect: '/home/destacados',
      component: () => import('../../../src/views/Home.vue'),
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
  export default router