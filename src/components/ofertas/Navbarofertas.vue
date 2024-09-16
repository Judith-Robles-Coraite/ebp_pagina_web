<template>
    <!-- Navbar sección ofertas académicas -->
    <div class="bg-white py-4 px-4 md:px-8 lg:px-20">
      <div class="container mx-auto">
        <!-- Navbar -->
        <nav class="w-full flex justify-center">
          <ul
            id="menu"
            class="flex flex-wrap justify-center space-x-4 md:space-x-6 items-center text-center text-xs md:text-base"
          >
            <li v-for="(link, index) in linksNavbarOfertas" :key="index">
              <button @click="$emit('change-section', link)" class="block text-[#0A8B37] hover:text-[#07872E] hover:font-bold hover:underline hover:decoration-[#07872E] hover:decoration-[5px] hover:[text-underline-offset:14px] pb-3 transition duration-100">
          {{ link }}
        </button>
            </li>
          </ul>
        </nav>
  
        <!-- Línea verde -->
        <div class="w-full mt-0">
          <div class="border-b-2 border-[#0A8B37]"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    linksNavbarOfertas: {
      type: Array,
      default: () => [],
    },
  });
  </script>
  