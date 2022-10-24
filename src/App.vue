<template>
  <div id="app">
    <the-nav/>
    <router-view />
  </div>
</template>

<script>
import TheNav from './components/TheNav.vue'
  export default {
  components: { TheNav },
    
  }
</script>

<style lang="scss" scoped>
@import "~@fortawesome/fontawesome-free/css/all.min.css";

#app {
  min-height: 100vh;
  background-color: #121212;
}
</style>

