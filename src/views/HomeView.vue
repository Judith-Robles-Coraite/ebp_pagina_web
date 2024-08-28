<template>
  <div class="relative h-screen w-full overflow-hidden">
    <!-- Carrusel -->
    <Carusel />
  </div>
  <!-- Nueva Sección para Programas Académicos -->
  <Ofertas/>
</template>

<script>
import Carusel from '../components/carusel.vue'
import Ofertas from '../components/ofertas.vue' // Importa el componente Navbar
export default {
  name: 'App',
  components: {
    Carusel,
    Ofertas
  }
}
</script>

<style>
/* Agrega estilos adicionales si es necesario */
</style>
