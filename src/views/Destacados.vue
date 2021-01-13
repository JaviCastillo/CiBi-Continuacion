<template>
  <div class="destacados-box"><!-- ml-5 pt-5 -->
      <div v-for="(movie, i) in peliculasDestacadas" :key="movie.id">
        <div class="jumbotron container mb-2 text-right py-4 featured" v-if="i%2 ==0"
            :style="{ 'backgroundImage' : movie.backdrop_path ? `url( https://image.tmdb.org/t/p/w780${movie.backdrop_path})` : `url(https://www.culturewhisper.com/images/thumbs/cw-36141-620x352.jpg)`}">
          <h1 class="text-light bg-transparent text-left title">{{movie.title}}</h1>
          <p class="bg-transparent text-left overview" >{{movie.overview}}</p>
          <hr class="my-4 bg-light line">
          <a class="btn btn-warning btn-lg mx-3" @click.prevent="agregar(movie)">
            <span class="mobile bg-transparent">Agregar a Watchlist</span>
            <font-awesome-icon class="mx-1 bg-transparent desktop" :icon="['fas','plus']" />
          </a>
        </div>
        <div class="jumbotron container my-2 text-left bg-success py-4 featured" v-else
            :style="{ 'backgroundImage' : movie.backdrop_path ? `url( https://image.tmdb.org/t/p/w780${movie.backdrop_path})` : `url(https://www.culturewhisper.com/images/thumbs/cw-36141-620x352.jpg)`}">
          <h1 class="bg-transparent text-light text-right title">{{movie.title}}</h1>
          <p class="bg-transparent text-right overview-right">{{movie.overview}}</p>
          <hr class="my-4 bg-light line">
          <a class="btn btn-warning btn-lg mx-3" @click.prevent="agregar(movie)">
            <span class="mobile bg-transparent">Agregar a Watchlist</span>
            <font-awesome-icon class="mx-1 bg-transparent desktop" :icon="['fas','plus']" />
          </a>
        </div>
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
.repite{
  margin: 0;
  padding: 0;
}

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
  margin: 70px auto 80px auto;
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