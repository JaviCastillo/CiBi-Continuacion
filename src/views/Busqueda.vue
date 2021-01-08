<template>
  <div class="busqueda-box"> <!-- pt-5 -->
      <h1 class="busqueda">Busqueda</h1>
      <form class="caja-search">
        <p> <!-- class="container mb-4 ml-0" -->
          <input type="text" class="bg-white mx-4 campo" v-model="buscar">
          <button type="submit" class="btn btn-primary my-1" @click.prevent="busqueda(buscar, 1)">Buscar</button>
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
        <img v-if="index.poster_path" :src="`https://image.tmdb.org/t/p/w92${index.poster_path}`" :alt="index.title">
        <img v-else src="../assets/unavailable.jpg" class="poster-search" :alt="index.title">
        <span class="d-inline-block title-search text-truncate mx-2">{{index.title}}</span>
        <span v-if="index.release_date" class="year mobile">({{index.release_date.substring(0, 4)}})</span>
        <button class="btn btn-success boton-add" @click.prevent="agregar(index)"><!-- my-5 mr-5 -->
          <span class="mobile bg-transparent">Agregar a Watchlist</span>
          <font-awesome-icon class="mx-1 bg-transparent desktop" :icon="['fas','plus']" />
        </button>
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
        let payload = { pelicula: movie }
        this.$store.dispatch('addMovie', payload)
      }
    },
}
</script>

<style>

.poster-search{
  height: 130px;
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


.year{
  font-size: 15px;
  font-weight: normal;
}



/* ---- Mobile ---- */
.busqueda-box{
  margin: 70px auto 90px auto;;
}

h1.busqueda{
  display: block;
  text-align: center;
  font-family: 'Bebas Neue', cursive;
  font-size: 45px;
}

.caja-search{
  display: block;
  margin: 2px auto 2px auto;
}

a.page-link{
  font-size: 12px;
  padding: 5px 6px;
}

.movie-searchcard{
  display: flex;
  width: 85vw;
  text-align: left;
  border: 1px solid white;
  padding: 0;
  margin: 10px auto;
  font-size: 27px;
  font-weight: bold;
  vertical-align: top;
}

.title-search{
  width: 47vw; 
  font-size: 20px;
  margin: auto;
}

.boton-add{
  display: block;
  margin: auto 5px;
  height: 50px;
}
/* ---- Desktop ---- */
@media only screen and (min-width: 768px) {
  .busqueda-box{
    margin: 70px auto;
  }

  h1.busqueda{
    display: inline-block;
    margin-left: 200px;
    margin-right: 0;
    font-family: 'Bebas Neue', cursive;
    font-size: 45px;
  }

  .caja-search{
    display: inline-block;
    margin: 20px 70px 20px 70px;
  }

  a.page-link{
    font-size: 16px;
    padding: 8px 10px;
  }

  .movie-searchcard{
    display: block;
    width: 85vw;
    text-align: left;
    border: 1px solid white;
    padding: 0;
    margin: 10px 100px;
    font-size: 27px;
    font-weight: bold;
    vertical-align: top;
  }

  .title-search{
    width: 47vw; 
    font-size: 26px;
  }

  .boton-add{
    display: inline-block;
    margin: auto 0 auto 4vw;
  }
}
</style>