<template>
  <!-- Navbar sección ofertas académicas -->
  <div class="bg-white py-0 px-4 md:px-8 lg:px-20">
    <div class="container mx-auto">
      
      <!-- Navbar -->
      <nav class="w-full flex justify-center">
        <ul
          id="menu"
          class="flex flex-wrap md:justify-center space-x-2 md:space-x-6 items-center text-center text-sm md:text-base"
        >
          <li to="#" v-for="(link, index) in linksNavbarOfertas" :key="index">
            <button
              @click="
                setActive(index);
                $emit('change-section', link)
              "
              :class="[
                activeLink === index
                  ? 'font-bold text-[#07872E] underline decoration-[#07872E] decoration-[5px] [text-underline-offset:14px]'
                  : 'text-[#0A8B37] hover:bg-[#f0f0f0] hover:font-bold'
              ]"
              class="block md:pb-3 pb-3 transition duration-100 md:px-4 md:py-4 px-0 py-4"
            >
              {{ link }}
            </button>
          </li>
        </ul>
      </nav>

      <!-- Línea verde siempre visible -->
      <div class="w-full mt-0">
        <div class="border-b-2 border-[#0A8B37]"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed, watch } from 'vue'
import { ofertasStore } from '../../util/eventCurrentOferta'

const seccionSeleccionada = computed(() => ofertasStore.ofertas)

// Estado reactivo para el enlace activo, sin enlace activo al inicio
const activeLink = ref(null)

// Función para establecer el enlace activo
const setActive = (index) => {
  activeLink.value = index
}
const linksNavbarOfertas =  ['Doctorados', 'Maestrías', 'Especialidades', 'Diplomados']

//se ejecuta cuando seccionSeleccionada cambia de valor, en base a eso establecemos la posicion que queremos
watch(seccionSeleccionada, (newSection) => {
  const posicion = linksNavbarOfertas.indexOf(newSection)
  activeLink.value = posicion
})

</script>
