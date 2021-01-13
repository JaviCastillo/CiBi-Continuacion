<template>
  <div class="home">
    <h1 class="main-title display-3">Cinema Billboard</h1>
    <hr class="mx-5 bg-light">
    <p class="main-sub">Guardas tus peliculas para ver en el futuro y crea tu propia Cartelera de Cine</p>
    <img class="mx-auto mt-2 entrada" src="../assets/Movie-and-Popcorn.png" alt="Cinema Billboard">
    <div class="mx-5 my-5">
      <button type="button" class="btn btn-info" @click.prevent="googleLogin">Entrar con Google</button>
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

        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(function() {
          return firebase.auth().signInWithPopup(provider).then(() => {
            let uid = firebase.auth().currentUser.uid
            let user = firebase.auth().currentUser.providerData[0]
            store.dispatch('updateUser', user)
            store.dispatch('setUserid', uid)
            router.push('/home')
          }).catch(function(error) {
            var errorMessage = error.message;
            console.log(errorMessage);
          });
        })
        .catch(function(error) {
          var errorMessage = error.message;
          console.log(errorMessage);
        });
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');


body{
    background-color: #1c1f40;
}

.main-title{
  font-family: 'Pacifico', cursive;
  user-select: none;
  margin-top: 5vh;
  font-size: 8vh;
}

.main-sub{
  font-size: 2.5vh;
}

.box-right{
  width: 500px;
  text-align: left;
}

img.entrada{
  height: 40vh;
}
</style>
