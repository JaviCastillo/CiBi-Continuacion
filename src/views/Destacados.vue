<template>
  <div class="ml-5 pt-5">
      <div class="jumbotron container mb-2 mt-4 text-right py-4 featured" 
          :style="{ 'backgroundImage' : `url( https://image.tmdb.org/t/p/w780${peliculasDestacadas[0][0].backdrop_path})`}">
        <h1 class="font-weight-bold text-light bg-transparent text-left title">{{peliculasDestacadas[0][0].title}}</h1>
        <p class="bg-transparent text-left overview" >{{peliculasDestacadas[0][0].overview}}</p>
        <hr class="my-4 bg-light">
        <a class="btn btn-warning btn-lg mx-3">Agregar a Watchlist</a>
      </div>
      <div class="jumbotron container my-2 text-left bg-success py-4 featured" 
          :style="{ 'backgroundImage' : `url( https://image.tmdb.org/t/p/w780${peliculasDestacadas[0][1].backdrop_path})`}">
        <h1 class="font-weight-bold bg-transparent text-light text-right title">{{peliculasDestacadas[0][1].title}}</h1>
        <p class="bg-transparent text-right overview-right">{{peliculasDestacadas[0][1].overview}}</p>
        <hr class="my-4 bg-light">
        <a class="btn btn-warning btn-lg mx-3">Agregar a Watchlist</a>
      </div>
      <div class="jumbotron container my-2 text-right bg-success py-4 featured"
          :style="{ 'backgroundImage' : `url( https://image.tmdb.org/t/p/w780${peliculasDestacadas[0][2].backdrop_path})`}">
        <h1 class="font-weight-bold bg-transparent text-light text-left title">{{peliculasDestacadas[0][2].title}}</h1>
        <p class="bg-transparent text-left overview">{{peliculasDestacadas[0][2].overview}}</p>
        <hr class="my-4 bg-light">
        <a class="btn btn-warning btn-lg mx-3">Agregar a Watchlist</a>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Destacados',
    data() {
      return {
        peliculasDestacadas: []
      }
    },
    computed:{
      apiKey(){
        return this.$store.getters.getApiKey
      }
    },
    async created(){
      axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
          .then(response => {
            this.peliculasDestacadas.push(response.data.results.slice(0,3))
          })
          .catch(error => {
            console.log(error.message);
          })
    }
}
</script>

<style>
div.featured{
  background-size: cover;
}

p.overview{
  text-overflow: ellipsis; 
  width: 50vw; 
  overflow: hidden; 
  white-space: nowrap;
}

p.overview-right{
  text-overflow: ellipsis; 
  width: 50vw; 
  overflow: hidden; 
  white-space: nowrap;
  margin-left: auto;
}

h1.title{
  text-shadow: 2px 2px #000;
}
</style>