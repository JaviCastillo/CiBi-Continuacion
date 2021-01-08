<template>
  <div class="destacados-box"><!-- ml-5 pt-5 -->
      <div class="jumbotron container mb-2 mt-4 text-right py-4 featured" 
          :style="{ 'backgroundImage' : `url( https://image.tmdb.org/t/p/w780${peliculasDestacadas[0].backdrop_path})`}">
        <h1 class="text-light bg-transparent text-left title">{{peliculasDestacadas[0].title}}</h1>
        <p class="bg-transparent text-left overview" >{{peliculasDestacadas[0].overview}}</p>
        <hr class="my-4 bg-light line">
        <a class="btn btn-warning btn-lg mx-3" @click.prevent="agregar(peliculasDestacadas[0])">
          <span class="mobile bg-transparent">Agregar a Watchlist</span>
          <font-awesome-icon class="mx-1 bg-transparent desktop" :icon="['fas','plus']" />
        </a>
      </div>
      <div class="jumbotron container my-2 text-left bg-success py-4 featured" 
          :style="{ 'backgroundImage' : `url( https://image.tmdb.org/t/p/w780${peliculasDestacadas[1].backdrop_path})`}">
        <h1 class="bg-transparent text-light text-right title">{{peliculasDestacadas[1].title}}</h1>
        <p class="bg-transparent text-right overview-right">{{peliculasDestacadas[1].overview}}</p>
        <hr class="my-4 bg-light line">
        <a class="btn btn-warning btn-lg mx-3" @click.prevent="agregar(peliculasDestacadas[1])">
          <span class="mobile bg-transparent">Agregar a Watchlist</span>
          <font-awesome-icon class="mx-1 bg-transparent desktop" :icon="['fas','plus']" />
        </a>
      </div>
      <div class="jumbotron container my-2 text-right bg-success py-4 featured"
          :style="{ 'backgroundImage' : `url( https://image.tmdb.org/t/p/w780${peliculasDestacadas[2].backdrop_path})`}">
        <h1 class="bg-transparent text-light text-left title">{{peliculasDestacadas[2].title}}</h1>
        <p class="bg-transparent text-left overview">{{peliculasDestacadas[2].overview}}</p>
        <hr class="my-4 bg-light line">
        <a class="btn btn-warning btn-lg mx-3" @click.prevent="agregar(peliculasDestacadas[2])">
          <span class="mobile bg-transparent">Agregar a Watchlist</span>
          <font-awesome-icon class="mx-1 bg-transparent desktop" :icon="['fas','plus']" />
        </a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Destacados',
  computed:{
    peliculasDestacadas(){
      return this.$store.getters.getListaDestacados
    }
  },
  methods: {
    agregar(movie){
      let payload = { pelicula: movie }
      this.$store.dispatch('addMovie', payload)
    }
  },
}
</script>

<style>

h1.title{
  text-shadow: 2px 2px #000;
  font-weight: bold;
}

/* ---- Mobile ---- */
.mobile {
  display: none;
}

.desktop{
  display: inline-block;
}

.destacados-box{
  margin: 70px auto 50px auto;
}

div.featured{
  background-size: cover;
  background-position-y: 0px;
}

p.overview{
  display: none;
}

p.overview-right{
  display: none
}

hr.line{
  display: none;
}
/* ---- Desktop ---- */
@media only screen and (min-width: 768px) {
  .mobile{
    display: inline-block;
  }

  .desktop{
    display: none;
  }

  .destacados-box{
    margin: 70px auto;
  }

  div.featured{
    background-size: cover;
    background-position-y: -50px;
  }

  p.overview{
    display: block;
    text-overflow: ellipsis; 
    width: 50vw; 
    overflow: hidden; 
    white-space: nowrap;
    text-shadow: 1px 1px #000;
  }

  p.overview-right{
    display: block;
    text-overflow: ellipsis; 
    width: 50vw; 
    overflow: hidden; 
    white-space: nowrap;
    margin-left: auto;
    text-shadow: 1px 1px #000;
  }

  hr.line{
    display: block;
  }
}
</style>