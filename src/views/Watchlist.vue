<template>
  <div class="ml-5 pt-5">
      <div class="container mt-5">
        <h1 v-if="lista.length <= 0">Tu Watchlist</h1>
        <p class="my-4" v-if="lista.length <= 0">Busca peliculas para agregarlas aquí</p>
        <b-collapse id="collapse-2" v-if="lista.length > 0" v-model="visible">
          <div class="jumbotron container mb-1 text-right bg-transparent py-4 featured"
              :style="{ 'backgroundImage' : selected.backdrop_path ? `url( https://image.tmdb.org/t/p/w780${selected.backdrop_path})` : `url(https://www.culturewhisper.com/images/thumbs/cw-36141-620x352.jpg)`}">
            <h1 class="font-weight-bold bg-transparent text-light text-left title">{{selected.title}}</h1>
            <p class="lead bg-transparent text-left">
              <a class="btn btn-danger" :href="`https://www.youtube.com/results?search_query=${selected.title}+trailer`" target="_blank" rel="">
              <font-awesome-icon class="mx-1 bg-transparent" :icon="['fas','play']" />Trailer</a>
            </p>
            <hr class="my-4 bg-light">
            <p class="float-left bg-transparent">
              <font-awesome-icon v-for="i in 5" :key="i" icon="star" size="lg" class="bg-transparent mx-1 star-rating" 
                                  @click="valorar(i)" :style="{'color' : i <= parseInt(selected.user_rating)?  'yellow' : 'lightgrey'}" /></p>
            <a class="btn btn-warning btn-lg mx-3" @click.prevent="deleteMovie(selected)">Quitar de Watchlist</a>
          </div>
        </b-collapse>

        <font-awesome-icon :icon="['fas', 'chevron-up']" size="2x" class="my-2 flechita" 
          v-if="lista.length > 0 && chevron" v-b-toggle="'collapse-2'" @click="chevronMove"/>
        <font-awesome-icon :icon="['fas', 'chevron-down']" size="2x" class="my-2 flechita" 
          v-if="lista.length > 0 && !chevron" v-b-toggle="'collapse-2'" @click="chevronMove"/>

        <div class="row row-cols-2 row-cols-md-6 g-4">
          <div class="col mb-3 p-0 text-dark" v-for="(movie) in lista" :key="movie.id">
            <!-- col sobrepone sidebar -->
            <div class="card carta h-100 mx-auto caja" @click.prevent="mostrar(movie)" aria-controls="collapse-2">
              <img v-if="movie.poster_path" :src="`https://image.tmdb.org/t/p/w185${movie.poster_path}`" class="card-img-top poster" :alt="movie.title">
              <img v-else src="../assets/unavailable.jpg" class="card-img-top poster" :alt="movie.title">
              <div class="card-body pt-2 pb-0 bg-warning">
                <p class="card-title bg-warning">{{movie.title}}</p>
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
        chevron: false,
        visible: false
      }
    },
    computed:{
      lista(){
        return this.$store.getters.getListaUsuario
      },
      selected(){
        return this.$store.getters.getSelected
      }
    },
    methods: {
      mostrar(movie){
        this.$store.dispatch('setSelected', movie)
        window.scrollTo({ top: 0, behavior: 'smooth' });
        this.visible = true
        this.chevron = true
      },
      chevronMove(){
        this.chevron = !this.chevron
      },
      deleteMovie(movie){
        let payload = { pelicula: movie }
        this.$store.dispatch('deleteMovie', payload)
      },
      valorar(i){
        let ratedMovie = this.selected
        ratedMovie.user_rating = i
        let payload = { pelicula: ratedMovie }
        this.$store.dispatch('updateMovie', payload)
      },
    },
    beforeMount() {
      if(this.lista.length > 0){
        this.$store.dispatch('setSelected', this.lista[0])
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
.flechita{
  cursor: pointer;
}

.star-rating:hover{
  transform: rotate(-15deg) scale(1.3)
}
</style>