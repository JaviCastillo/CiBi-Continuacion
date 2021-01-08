<template>
  <!-- ===================SIDEBAR DE PRUEBA ADAPTABLE=============== -->
  <aside class="sidebar" @mouseover="isBig = true" @mouseleave="isBig = false" :class="{ big : isBig, small : !isBig}">
    <div class="sidebar__icons">
      <div class="sidebar__card">
        <router-link to="destacados" class="enlace">
          <font-awesome-icon icon="star" size="2x"/>
          <VueSlideToggle class="mx-3 tag" :open="isBig" tag="section" :duration="300">Destacados</VueSlideToggle>
        </router-link>
      </div>
      <div class="sidebar__card">
        <router-link to="busqueda" class="enlace">
          <font-awesome-icon icon="search" size="2x" />
          <VueSlideToggle class="mx-3 tag" :open="isBig" tag="section" :duration="300">Busqueda</VueSlideToggle>
        </router-link>
      </div>
  <!-- ===================SIDEBAR DE PRUEBA ADAPTABLE=============== -->
      <div class="sidebar__card">
        <router-link to="watchlist" class="enlace">
          <font-awesome-icon icon="film" size="2x"/>
          <VueSlideToggle class="mx-3 tag" :open="isBig" tag="section" :duration="300">Watchlist</VueSlideToggle>
        </router-link>
      </div>
    </div>
  </aside>
</template>

<script>
import { VueSlideToggle } from 'vue-slide-toggle'
/* ===================SIDEBAR DE PRUEBA ADAPTABLE=============== */
export default {
  name: "Sidebar",
  data() {
      return {
          isBig: false
      }
  },
  components: {
    VueSlideToggle
  }
};
/* ===================SIDEBAR DE PRUEBA ADAPTABLE=============== */
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.tag{
    font-family: 'Bebas Neue', cursive;
    font-size: 0px;
    display: none;
}
/* ===================SIDEBAR DE PRUEBA ADAPTABLE=============== */


/* ---- Mobile ---- */
.sidebar{
  position: fixed;
  z-index: 4;
  bottom: 0;
  height: 10vh;
  width: 100vw;
  padding: 15px 20px !important;
  text-align: left;
  border-top: 1px solid gray;
}

.enlace:hover{
  color: #90C2E7;
  cursor: pointer;
}

.sidebar__card{
  display: inline;
  padding: 0;
}
.sidebar__card a{
  display: inline-flex;
  margin: 0 10vw;
  font-size: 16px;
  color: white;
  text-decoration: none;
}

/* ===================SIDEBAR DE PRUEBA ADAPTABLE=============== */

/* ---- Desktop ---- */
@media only screen and (min-width: 768px) {
  .tag{
    font-family: 'Bebas Neue', cursive;
    font-size: 22px;
    display: inline-block;
  }
  
  .sidebar{
    position: fixed;
    z-index: 4;
    left: 0;
    height: 100vh;
    padding: 50px 0!important;
    /* background-color: #0B5351; */
    transition-duration: 0.3s;
    text-align: left;
    border-right: 1px solid gray;
  }
  .big{
    width: 190px;
  }

  .small{
    width: 70px;
  }

  /* ---- Sidebar layout DESKTOP---- */

  .sidebar__icons{
    margin: 0 22px;
  }

  .sidebar__card a{
    display: flex;
    align-items: center;
    text-align: left;
    margin: 6vh 0;
    padding: 0;
    text-decoration: none;
    color: white;
  }
  /* ===================SIDEBAR DE PRUEBA ADAPTABLE=============== */
  /* ---- DESKTOP---- */
}
/* ===================SIDEBAR DE PRUEBA ADAPTABLE=============== */
</style>