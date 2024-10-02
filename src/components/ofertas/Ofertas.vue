<template>
  <!-- Navbar sección ofertas académicas -->
  <div id="posgrados">
    <Navbarofertas @change-section="changeSection" />
  
    <div v-if="currentSection === 'Doctorados'">
      <Doctorados />
    </div>
    <div v-else-if="currentSection === 'Maestrías'">
      <Maestrias />
    </div>
    <div v-else-if="currentSection === 'Especialidades'">
      <Especialidades />
    </div>
    <div v-else-if="currentSection === 'Diplomados'">
      <Diplomados />
    </div>
  </div>

  <!-- Sección ofertas académicas -->
  <div class="bg-white py-2 px-4 md:px-8 lg:px-20 mx-auto">
    <h2 class="text-center text-2xl md:text-3xl font-bold mb-6 mt-6 md:mb-3 text-[#0A8B37]">
      OFERTAS ACADÉMICAS
    </h2>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 row-gap-2 gap-x-6 justify-items-center"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="bg-white shadow-md rounded overflow-hidden w-full max-w-sm flex flex-col transform scale-90 mb-0"
      >
        <img :src="image" alt="Programa" class="w-full h-100 object-cover" />
        <div class="flex justify-center p-4 mt-auto">
          <button
            class="relative flex items-center justify-center bg-gradient-to-r from-[#1c4d59] to-[#0A8B37] text-white py-3 px-16 sm:py-2 sm:px-4 rounded-full text-lg sm:text-sm transform transition-transform duration-200 hover:scale-110"
          >
            <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-2xl text-white mr-2" />
            <span class="transform transition duration-300 hover:scale-100">INSCRÍBETE AHORA</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Navbarofertas from './Navbarofertas.vue'
import Doctorados from '../programas/doctorados/Doctorados.vue'
import Maestrias from '../programas/maestrias/Maestrias.vue'
import Especialidades from '../programas/especialidades/Especialidades.vue'
import Diplomados from '../programas/diplomados/Diplomados.vue'
import ofimg1 from '../../assets/ofertas_academicas/doc1.jpg'
import ofimg2 from '../../assets/ofertas_academicas/doc2.jpg'

import { ofertasStore } from '../../util/eventCurrentOferta'
import { computed, watch } from 'vue'

//para recibir el valor desde el navbar
const seccionSeleccionada = computed(() => ofertasStore.ofertas)

const currentSection = ref(null) // Componente por defecto

const changeSection = (section) => {
  currentSection.value = section
}

//se ejecuta cuando seccionSeleccionada cambia de valor
watch(seccionSeleccionada, (newSection) => {
  changeSection(newSection)
})

const images = ref([ofimg1, ofimg2, ofimg1, ofimg2, ofimg1, ofimg2, ofimg1, ofimg2, ofimg1, ofimg2])
</script>
