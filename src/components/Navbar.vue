<template>
  <nav class="navbar navbar-dark fixed-top">
    <div class="container-fluid">
      <router-link  class="navbar-brand main-title-nav" to="/home">Cinema Billboard</router-link >
      <router-link class="nav-link font-weight-bold ml-auto user mobile" to="/home/watchlist"><font-awesome-icon class="mx-1" icon="user" />{{usuarioActivo.given_name}} {{usuarioActivo.family_name}} <span class="tiny">( {{usuarioActivo.email}} )</span></router-link>
      <button type="button" class="btn btn-danger" @click.prevent="logout">Salir</button>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase'
import Swal from 'sweetalert2'

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

      Swal.fire({
        title: '¿Seguro que deseas salir?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'No, me quedo',
        confirmButtonText: 'Si, deseo salir'
      }).then((result) => {
        if (result.isConfirmed) {
          firebase.auth().signOut().then(function() {
              let user = false
              let uid = false
              store.dispatch('updateUser', user)
              store.dispatch('setUserid', uid)
              router.push('/')
          }).catch(function(error) {
              console.log(error);
          });
        }
      })
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

@media only screen and (max-width: 600px) {
  .mobile {
    display: none;
  }
}
</style>
