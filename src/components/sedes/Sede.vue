<template>
  <!-- Contenedor principal -->
 
  <div
    class="flex flex-col lg:flex-row justify-between items-start lg:items-center bg-white px-10 md:px-8 lg:px-15 py-2 lg:py-2 mx-auto"
  >
    <!-- Información de Ubicación y Contacto -->
    <div class="location-info flex flex-col lg:w-1/2 p-4 space-y-4">
      <div class="flex items-center space-x-2">
        <div
          class="flex items-center justify-center w-8 h-8 min-w-8 min-h-8 border border-[#0A8B37] rounded-full transition duration-300 hover:bg-[#0A8B37] group flex-shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
            class="w-5 h-5 text-[#0A8B37] group-hover:text-white"
          >
            <path
              d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"
            />
          </svg>
        </div>
        <span>{{ direction }} </span>
      </div>

      <div
        class="flex items-center space-x-2"
        v-for="(item, index) in telephone"
        :key="index"
      >
        <div
          class="flex items-center justify-center w-8 h-8 min-w-8 min-h-8 border border-[#0A8B37] rounded-full transition duration-300 hover:bg-[#0A8B37] group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
            class="w-5 h-5 text-[#0A8B37] group-hover:text-white"
          >
            <path
              d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"
            />
          </svg>
        </div>
        <span>{{ item }}</span>
      </div>
      <div
        class="flex items-center space-x-2"
        v-for="(item, index) in cellPhone"
        :key="index"
      >
        <div
          class="flex items-center justify-center w-8 h-8 min-w-8 min-h-8 border border-[#0A8B37] rounded-full transition duration-300 hover:bg-[#0A8B37] group"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
            class="w-5 h-5 text-[#0A8B37] group-hover:text-white"
          >
            <path
              d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm200 100q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM280-320h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z"
            />
          </svg>
        </div>
        <span>{{ item }}</span>
      </div>
    </div>

    <!-- Mapa de Google -->
    <div class="map-container lg:w-1/2 p-2">
      <iframe
        :src="mapLocation"
        width="300"
        height="250"
        style="border: 0"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>

  <!-- Botones de Redes Sociales -->
  <div class="flex justify-center items-center">
    <!-- Botones de Redes Sociales -->
    <div
      class="social-buttons flex justify-center items-center p-2 bg-[#0A8B37] rounded-full w-auto h-10 space-x-2"
    >
      <a
        v-if="socialMedia.includes('facebook')"
        href="#"
        class="group w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-[#0A8B37]"
      >
        <font-awesome-icon
          :icon="['fab', 'facebook-f']"
          class="text-lg text-white group-hover:text-[#0A8B37]"
        />
      </a>
      <a
        v-if="socialMedia.includes('instagram')"
        href="#"
        class="group w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-[#0A8B37]"
      >
        <font-awesome-icon
          :icon="['fab', 'instagram']"
          class="text-xl text-white group-hover:text-[#0A8B37]"
        />
      </a>
      <a
        v-if="socialMedia.includes('whatsapp')"
        href="#"
        class="group w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-[#0A8B37]"
      >
        <font-awesome-icon
          :icon="['fab', 'whatsapp']"
          class="text-xl text-white group-hover:text-[#0A8B37]"
        />
      </a>
      <a
        v-if="socialMedia.includes('tiktok')"
        href="#"
        class="group w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-[#0A8B37]"
      >
        <font-awesome-icon
          :icon="['fab', 'tiktok']"
          class="text-lg text-white group-hover:text-[#0A8B37]"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  direction: String,
  mapLocation: String,
  telephone: Array,
  cellPhone: Array,
  socialMedia: Array,
});
</script>
