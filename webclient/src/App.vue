<template>
  <div id="app">
    <Search/>
  </div>
</template>

<script>
import Search from '@/views/Search.vue'
import { ParticlesBg } from "particles-bg-vue";

export default {
  name: 'App',
  components: {
    Search
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
