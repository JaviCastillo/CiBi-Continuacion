<template>
  <div class="ml-5 pt-5">
      <div class="container mt-5">
        <b-collapse id="collapse-2">
          <div class="jumbotron container mb-4 text-right bg-success py-4">
            <h1 class="font-weight-bold bg-success text-light text-left">Tu Pelicula</h1>
            <p class="lead bg-success text-left">Resumen pelicula</p>
            <hr class="my-4">
            <a class="btn btn-warning btn-lg mx-3">Agregar a Watchlist</a>
          </div>
        </b-collapse>
        <div class="row row-cols-1 row-cols-md-5 g-4">
          <div class="col mb-3 btn btn-info" v-b-toggle="'collapse-2'" v-for="index in 7" :key="index">
            <!-- col sobrepone sidebar -->
            <div class="card h-100">
              <img src="" class="card-img-top" alt="poster">
              <div class="card-body">
                <h5 class="card-title">Titulo Pelicula</h5>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Watchlist'
}
</script>

<style>

</style>