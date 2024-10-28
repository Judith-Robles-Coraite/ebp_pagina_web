<script setup>
import Navbar from "./components/navbar/Navbar.vue";
import Piepagina from "./components/piepagina/Piepagina.vue";

</script>

<template>
  <Navbar/>
  <router-view/>
  <Piepagina />
</template>

<style scoped></style>
