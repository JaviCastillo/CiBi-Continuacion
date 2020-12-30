<template>
  <div class="pt-5">
      <h1 class="mt-5 float-left busqueda">Busqueda</h1>
      <form class="mt-5">
        <p class="container mb-4 ml-0">
          <input type="text" class="bg-white mx-4 campo" v-model="buscar">
          <button type="submit" class="btn btn-primary" @click.prevent="busqueda(buscar, 1)">Buscar</button>
        </p>
      </form>
      
      <nav>
        <ul class="pagination justify-content-center">
          <li class="page-item" v-for="i in paginas" :key="i">
            <a class="page-link" href="#" 
               @click.prevent="busqueda(buscar, i)" 
               :class="{activo : i == pagActual }"
               v-if="(i <= pagActual + 2  && i >= pagActual - 2) || i == 1 || i == paginas">
               {{i}}
            </a>
            <a class="page-link" href="#" v-if="(i == pagActual - 3 && i != 1) || (i == pagActual + 3 && i != paginas)">...</a>
          </li>
        </ul>
      </nav>

      <div class="movie-searchcard" v-for="index in respuesta" :key="index.id">
        <img v-if="index.poster_path" :src="`https://image.tmdb.org/t/p/w92${index.poster_path}`" alt="..">
        <img v-else src="http://www.montecristomedia.com/_images/thumbnails/unavailable.jpg" alt="..">
        {{index.title}}
        <span v-if="index.release_date" class="year">({{index.release_date.substring(0, 4)}})</span>
        <button class="btn btn-success float-right my-5 mr-5" @click.prevent="agregar(index)">Agregar a Watchlist</button>
      </div>

      <nav>
        <ul class="pagination justify-content-center">
          <li class="page-item" v-for="i in paginas" :key="i">
            <a class="page-link" href="#" 
               @click.prevent="busqueda(buscar, i)" 
               :class="{activo : i == pagActual }"
               v-if="(i <= pagActual + 2  && i >= pagActual - 2) || i == 1 || i == paginas">
               {{i}}
            </a>
            <a class="page-link" href="#" v-if="(i == pagActual - 3 && i != 1) || (i == pagActual + 3 && i != paginas)">...</a>
          </li>
        </ul>
      </nav>
  </div>
</template>

<script>
import axios from 'axios'
import firebase from 'firebase'

export default {
    name: 'Busqueda',
    data() {
      return {
        buscar: '',
        respuesta: [],
        paginas: '',
        pagActual: ''
      }
    },
    computed:{
      apiKey(){
        return this.$store.getters.getApiKey
      }
    },
    methods: {
      busqueda(entrada, page){
        
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${entrada}&page=${page}`)
          .then(response => {
            this.paginas = parseInt(response.data.total_pages)
            this.pagActual = parseInt(page)
            this.respuesta = response.data.results
          })
          .catch(error => {
            console.log(error.message);
          })
      },
      agregar(movie){
        let uid = firebase.auth().currentUser.uid;
        let payload = { userid: uid, pelicula: movie }
        this.$store.dispatch('addMovie', payload)
      }
    },
}
</script>

<style>
h1.busqueda{
  margin-left: 200px;
  margin-right: 0;
  font-family: 'Bebas Neue', cursive;
  font-size: 45px;
}

input.campo{
  width: 300px;
  border: none;
  border-radius: 2px;
  height: 35px;
  font-size: 20px;
  padding: 2px;
  border: 4px solid transparent;
}

input.campo:focus{
  outline: none;
  border: 4px solid lightblue;
}

.activo{
  background-color: lightblue;
}
.movie-searchcard{
  width: 85vw;
  text-align: left;
  border: 1px solid white;
  padding: 0;
  margin: 10px 100px;
  font-size: 27px;
  font-weight: bold;
  vertical-align: top;
}

.year{
  font-size: 15px;
  font-weight: normal;
}

</style>