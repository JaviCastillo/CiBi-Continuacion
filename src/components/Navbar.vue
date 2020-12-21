<template>
  <nav class="navbar navbar-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand main-title-nav" href="#">Cinema Billboard</a>
      <button class="btn btn-outline-light mx-3" type="button" v-b-modal.modal-lg>Buscar Peliculas</button>
      <router-link to="/" type="button" class="btn btn-danger ml-auto">Salir</router-link>
    </div>
    <b-modal id="modal-lg" size="lg" hide-footer hide-header>
      <div class="container bg-info">
        <h1 class="bg-info">WENA</h1>
      </div>
    </b-modal>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.main-title-nav{
  font-family: 'Pacifico', cursive;
  user-select: none;
}
nav{
  border-bottom: 1px solid gray;
}

</style>
