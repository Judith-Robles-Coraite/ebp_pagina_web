<template>
  <!-- Navbar sección ofertas académicas -->
  <div class="bg-white py-0 px-4 md:px-8 lg:px-20">
    <div class="container mx-auto">
      <!-- Navbar -->
      <nav class="w-full flex justify-center">
        <ul
          id="menu"
          class="flex flex-wrap justify-center space-x-4 md:space-x-6 items-center text-center text-xs md:text-base"
        >
          <li v-for="(link, index) in linksNavbarOfertas" :key="index">
            <button 
              @click="setActive(index); $emit('change-section', link)" 
              :class="[ 
                activeLink === index 
                  ? 'font-bold text-[#07872E] underline decoration-[#07872E] decoration-[5px] [text-underline-offset:14px]'
                  : 'text-[#0A8B37] hover:bg-[#f0f0f0] hover:font-bold'
              ]"
              class="block pb-3 transition duration-100 px-4 py-4"
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
import { ref } from 'vue';

// Estado reactivo para el enlace activo, sin enlace activo al inicio
const activeLink = ref(null);

// Función para establecer el enlace activo
const setActive = (index) => {
  activeLink.value = index;
};

// Recibir las props con los links del navbar
const props = defineProps({
  linksNavbarOfertas: {
    type: Array,
    default: () => [], // Array de links
  },
});
</script>
