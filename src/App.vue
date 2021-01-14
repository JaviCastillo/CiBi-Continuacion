<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  async created(){
    this.$store.dispatch('putDestacados')
  }
}
</script>

<style lang="scss">

*{
    background-color: #1c1f40;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

*::-webkit-scrollbar {
  display: none; // Chrome, Safari and Opera 
}

.swal2-header, .swal2-icon>*, .swal2-icon-show,.swal2-image, .swal2-success, .swal2-icon-content, .swal2-html-container, .swal2-content, .swal2-title, .swal2-actions{
  background-color: white !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

</style>
