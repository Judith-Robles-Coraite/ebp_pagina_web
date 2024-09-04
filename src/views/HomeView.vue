<template>
  <div class="relative h-screen w-full overflow-hidden">
    <!-- Carrusel -->
    <Carusel />
  </div>
  <!-- Nueva Sección para Programas Académicos -->
  <Ofertas/>
  <!-- Nueva Sección para Nuestra plataforma academica -->
  <Plataforma/>
  <!-- Nueva Sección para Sedes -->
  <Sedes/>
</template>

<script>
import Carusel from '../components/carusel.vue'
import Ofertas from '../components/ofertas.vue'
import Plataforma from '../components/plataforma.vue'
import Sedes from '../components/sedes.vue' // Importa el componente Navbar
export default {
  name: 'App',
  components: {
    Carusel,
    Ofertas,
    Plataforma,
    Sedes,
  }
}
</script>
