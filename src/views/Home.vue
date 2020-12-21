<template>
  <div class="about">
    <Navbar />
    <Sidebar />
    <transition name="fade">
      <router-view/>
    </transition>
    
    
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

.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  transition: all 0.5s ease-in-out;
}

.fade-enter,
.fade-leave {
  opacity: 0;
}

.fade-enter-active {
  animation: fade 0.6s ease-in-out;
}

@keyframes fade {
  from {
    opacity: 0;
  }
  50% {
    opacity: 50%;
  }
  to {
    opacity: 1;
  }
}

.fade-leave-active {
  animation: slide 0.2s ease-in-out;
}

@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-300px);
  }
}
</style>