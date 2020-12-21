<template>
  <aside class="sidebar pt-5" @mouseover="isBig = true" @mouseleave="isBig = false" :class="{ big : isBig, small : !isBig}">
    <div class="sidebar__icons">
      <div class="sidebar__card">
        <router-link to="destacados" href="">
          <font-awesome-icon icon="star" size="2x" />
          <VueSlideToggle class="mx-3 tag" :open="isBig" tag="section" :duration="300">Destacados</VueSlideToggle>
        </router-link>
      </div>
      <div class="sidebar__card">
        <router-link to="watchlist" href="">
          <font-awesome-icon icon="film" size="2x"/>
          <VueSlideToggle class="mx-3 tag" :open="isBig" tag="section" :duration="300">Watchlist</VueSlideToggle>
        </router-link>
      </div>
    </div>
  </aside>
</template>

<script>
import { VueSlideToggle } from 'vue-slide-toggle'

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
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

.tag{
    font-family: 'Bebas Neue', cursive;
    font-size: 22px;
}

.sidebar{
    position: fixed;
    left: 0;
    height: 100vh;
    padding-top: 10px;
    /* background-color: #0B5351; */
    transition-duration: 0.3s;
    text-align: left;
    border-right: 1px solid gray;
}

/* ---- toggle size ---- */

.big{
    width: 100vw;
}

@media only screen and (min-width: 900px) {
    .big{
        width: 190px;
    }
}

.small{
    width: 70px;
}

/* ---- Sidebar layout ---- */

#toggler{
    cursor: pointer;
}

.fa-bars{
    margin-left: 22px;
}

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

a:hover{
    color: #90C2E7;
}

.sidebar__card p{
    display: none;
    margin-left: 30px;
    transition-delay: 0.1s;
    font-size: 18px;
    font-weight: 600;
    color: white;
}
</style>
