<template>
  <!-- Contenedor principal -->
  <div
    class="relative flex flex-col lg:flex-row justify-between items-start lg:items-center bg-white px-10 md:px-8 lg:px-15 py-2 lg:py-2 mx-auto"
  >
    <!-- Carrusel -->
    <div class="relative lg:h-full overflow-hidden lg:w-full m-2 rounded-xl">
      <div
        class="flex transition-transform duration-700"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div
          v-for="(image, index) in images"
          :key="index"
          class="h-[250px] w-full flex-shrink-0 bg-cover bg-center relative"
          :style="{ backgroundImage: `url(${image})` }"
        ></div>
      </div>

      <!-- Paginación del carrusel -->
      <div class="absolute bottom-0 left-0 w-full flex justify-center mb-4">
        <div
          v-for="(image, index) in images"
          :key="index"
          @click="goToSlide(index)"
          class="cursor-pointer w-6 h-1 mx-1 rounded transition-all"
          :class="{
            'bg-white': currentSlide === index,
            'bg-gray-400': currentSlide !== index
          }"
        ></div>
      </div>
    </div>
  </div>
  <redessedes :facebook="facebook" :whatsapp="whatsapp" :instagram=" instagram" :tiktok="tiktok"></redessedes>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import redessedes from './Redessede.vue'
 

const props = defineProps({
  images: Array,
   facebook: Array,
  whatsapp: Array,
  instagram: Array,
  tiktok: Array
})

const currentSlide = ref(0)
let intervalId = null

const goToSlide = (index) => {
  currentSlide.value = index
}

onMounted(() => {
  intervalId = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % props.images.length
  }, 3000) // Cambia cada 3 segundos
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<style scoped>
/* Estilos adicionales si es necesario */
.carrusel-item img {
  width: 50%;
  height: 50%;
}
</style>
