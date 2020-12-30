<template>
  <div class="ml-5 pt-5">
      <div class="container mt-5">
        <b-collapse id="collapse-2">
          <div class="jumbotron container mb-1 text-right bg-transparent py-4 featured"
              :style="{ 'backgroundImage' : `url( https://image.tmdb.org/t/p/w780${selected.backdrop_path})`}">
            <h1 class="font-weight-bold bg-transparent text-light text-left title">{{selected.title}}</h1>
            <p class="lead bg-transparent text-left">Resumen pelicula</p>
            <hr class="my-4 bg-light">
            <a class="btn btn-warning btn-lg mx-3">Quitar de Watchlist</a>
          </div>
        </b-collapse>

        <font-awesome-icon :icon="['fas', 'chevron-up']" size="2x" class="my-2 flechita" v-if="lista.length > 0 && chevron" v-b-toggle="'collapse-2'" @click="chevronMove"/>
        <font-awesome-icon :icon="['fas', 'chevron-down']" size="2x" class="my-2 flechita" v-if="lista.length > 0 && !chevron" v-b-toggle="'collapse-2'" @click="chevronMove"/>

        <div class="row row-cols-1 row-cols-md-5 g-4">
          <div class="col mb-3 p-0 text-dark" v-for="(movie) in lista" :key="movie.id">
            <!-- col sobrepone sidebar -->
            <div class="card carta h-100 mx-auto caja" @click.prevent="mostrar(movie)">
              <img :src="`https://image.tmdb.org/t/p/w185${movie.poster_path}`" class="card-img-top poster" alt="poster">
              <div class="card-body pt-2 pb-0 bg-warning">
                <p class="card-title bg-warning">{{movie.title}}</p>
              </div>
              <div class="card-footer">
                <small class="text-muted bg-light">Ver el 02/02/2021</small>
              </div>
            </div>
          </div>
          
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Watchlist',
    data() {
      return {
        selected: {},
        chevron: false
      }
    },
    computed:{
      lista(){
        return this.$store.getters.getListaUsuario
      }
    },
    methods: {
      mostrar(movie){
        this.selected = movie
      },
      chevronMove(){
        this.chevron = !this.chevron
      }
    },
    beforeMount() {
      if(this.lista.length > 0){
        this.selected = this.lista[0]
      }
    },
}
</script>

<style>
img.poster{
  height: 200px;
  width: 150px;
}
div.carta{
  width: 152px;
}
div.caja:focus{
  outline: none;
  border: none;
}
div.caja:hover{
  box-shadow: 2px 2px 4px white;
}
.flechita:focus{
  outline: none;
  border: none;
}
</style>