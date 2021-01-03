<template>
  <nav class="navbar navbar-dark fixed-top">
    <div class="container-fluid">
      <router-link  class="navbar-brand main-title-nav" to="/home">Cinema Billboard</router-link >
      <router-link class="nav-link font-weight-bold ml-auto user" to="/home/watchlist"><font-awesome-icon class="mx-1" icon="user" />{{usuarioActivo.given_name}} {{usuarioActivo.family_name}} <span class="tiny">( {{usuarioActivo.email}} )</span></router-link>
      <button type="button" class="btn btn-danger" @click.prevent="logout">Salir</button>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Navbar',
  computed:{
    usuarioActivo(){
      return this.$store.getters.getCurrentUser
    }
  },
  methods: {
    logout(){
      let store = this.$store
      let router = this.$router
      let confirma = confirm('¿Seguro que deseas Cerrar Sesión?')

      if(confirma){
        firebase.auth().signOut().then(function() {
              let user = false
              store.dispatch('updateUser', user)
              router.push('/')
          }).catch(function(error) {
              console.log(error);
          });
      }
    }
  },
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
a.user{
  color: white;
}
a.user:hover{
  color: lightblue;
}
span.tiny{
  font-size: 12px;
  font-weight: normal;
}
</style>
