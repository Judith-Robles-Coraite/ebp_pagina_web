<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/navbar.vue' // Importa el componente Navbar
import Navbar_num2 from './components/navbar_num2.vue';
export default {
  name: 'App',
  components: {
    Navbar, 
    Navbar_num2, 
  }
}
</script>

<template>
  <Navbar />

  <!--<Navbar_num2/>-->
  <RouterView />
</template>

<style>
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
