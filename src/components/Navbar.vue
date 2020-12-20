<template>
  <nav class="navbar navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand main-title" href="#">Cinema Billboard</a>
      <form class="d-flex ml-auto">
        <input class="form-control me-2" type="search" placeholder="Pelicula">
        <button class="btn btn-outline-light mx-3" type="button">Buscar</button>
      </form>
      <router-link to="/" type="button" class="btn btn-danger ml-auto">Salir</router-link>
    </div>
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

.main-title{
  font-family: 'Pacifico', cursive;
  user-select: none;
}
nav{
  border-bottom: 1px solid gray;
}

</style>
