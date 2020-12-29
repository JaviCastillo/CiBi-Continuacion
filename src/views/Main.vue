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
        <button type="button" class="btn btn-primary">Entrar</button> 
      </form>
      <hr color="gray">
      <button type="button" class="btn btn-primary my-3" @click.prevent="facebookLogin">Entrar con Facebook</button>
      <br>
      <button type="button" class="btn btn-primary" @click.prevent="googleLogin">Entrar con Google</button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Main',
  methods: {
    googleLogin(){
      let store = this.$store
      let router = this.$router
      if(store.getters.getCurrentUser){
        alert('Usuario ya logueado')
      }else{
        let provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            let user = result.additionalUserInfo.profile
            store.dispatch('updateUser', user)
            router.push('/home')
        }).catch(function(error) {
            var errorMessage = error.message;
            console.log(errorMessage);
        });
      }
    },
    facebookLogin(){
      let store = this.$store
      /* let router = this.$router */
      if(store.getters.getCurrentUser){
        alert('Usuario ya logueado')
      }else{
        let provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
          var token = result.credential.accessToken;
          console.log(token);
          var user = result.user;
          console.log(user);
        }).catch(function(error) {
          let errorMessage = error.message;
          console.log(errorMessage);
        });
      }
    }
  }  
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
