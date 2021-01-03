<template>
  <div>
    <Navbar />
    <Sidebar />
    <transition name="fade">
      <router-view class="content"/>
    </transition>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
import firebase from 'firebase'

export default {
  name: 'Home',
  components: {
    Navbar,
    Sidebar
  },
  created() {
    let uid = firebase.auth().currentUser.uid;
    this.$store.dispatch('putMovies', uid)
  },
  beforeUpdate() {
    let uid = firebase.auth().currentUser.uid;
    this.$store.dispatch('putMovies', uid)
  },
}
</script>

<style lang="scss" scoped>

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