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
/* (?) */
body, *{
    background-color: #1c1f40;
}

/* body{
  overflow: hidden;
} */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}

</style>
