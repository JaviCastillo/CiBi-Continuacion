<template>
  <div class="pt-5">
      <h1 class="my-5">Busqueda</h1>
      <form>
        <p class="justify-content-center container mb-4">
          <input type="text" class="bg-white mx-4" v-model="buscar">
          <button type="submit" class="btn btn-primary" @click.prevent="busqueda(buscar)">Buscar</button>
        </p>
      </form>
      
      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">

          <li class="page-item" v-for="i in paginas" :key="i">
            <a class="page-link" href="#">{{i}}</a>
          </li>

        </ul>
      </nav>
      <p class="text-left container ml-5 pl-5" v-for="index in respuesta" :key="index.id">
        <img v-if="index.poster_path" :src="`https://image.tmdb.org/t/p/w92${index.poster_path}`" alt="..">
        <img v-else src="http://www.montecristomedia.com/_images/thumbnails/unavailable.jpg" alt="..">
        {{index.title}} 
        <span v-if="index.release_date">({{index.release_date.substring(0, 4)}})</span>
        
      </p>
      
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Busqueda',
    data() {
      return {
        buscar: '',
        respuesta: [],
        paginas: ''
      }
    },
    computed:{
      apiKey(){
        return this.$store.getters.getApiKey
      }
    },
    methods: {
      busqueda(entrada){
        
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${entrada}`)
          .then(response => {
            this.paginas = parseInt(response.data.total_pages)
            this.respuesta = response.data.results
          })
          .catch(error => {
            console.log(error.message);
          })
      }
    },
}
</script>

<style>

</style>