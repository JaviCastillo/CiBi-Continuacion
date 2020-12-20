<template>
  <div class="about">
    <Navbar />
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
/* (?) */
body{
    /* background-color: #2c3e50; */
    background-color: #1c1f40;
}
</style>