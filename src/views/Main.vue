<template>
  <div class="home">
    <h1 class="main-title display-3 my-5">Cinema Billboard</h1>
    <img class="float-left mx-5" src="../assets/Movie-and-Popcorn.png" alt="Cinema Billboard">
    <div class="box-right mx-5 my-5 float-right">
      <form>
        <div class="mb-3">
          <label  class="form-label">Correo Eletrónico</label>
          <input type="email" class="form-control">
        </div>
        <div class="mb-3">
          <label class="form-label">Contraseña</label>
          <input type="password" class="form-control">
        </div>
        <router-link to="home/destacados" type="button" class="btn btn-primary">Entrar</router-link> 
      </form>
      <hr color="gray">
      <button type="button" class="btn btn-primary my-3">Entrar con Facebook</button>
      <br>
      <button type="button" class="btn btn-primary">Entrar con Google</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Main',

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

/* (?) */
body{
    /* background-color: #2c3e50; */
    background-color: #1c1f40;
}

.main-title{
  font-family: 'Pacifico', cursive;
  user-select: none;
}

.box-right{
  width: 500px;
  text-align: left;
}
</style>
