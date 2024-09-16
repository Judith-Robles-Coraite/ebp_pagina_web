<template>
  <div v-if="isVisible" class="fixed inset-0 flex items-center justify-center z-50" @click.self="closeModal">
    <div class="bg-gradient-to-r from-[#203C61] to-[#0A8B37] p-4 w-11/12 sm:w-9/12 md:w-5/12 h-auto relative rounded-2xl">
      <!-- Carrusel -->
      <div class="relative w-full h-64 md:h-80 lg:h-full">
        <button @click="prevSlide" class="absolute left-2 w-8 h-8 md:w-10 md:h-10 top-1/2 bg-black bg-opacity-10 rounded-full text-white flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 650 960" width="20px" fill="#e8eaed">
            <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
          </svg>
        </button>
        <img :src="props.images[currentImageIndex].src" :alt="props.images[currentImageIndex].alt" class="w-full h-full object-contain rounded-2xl" />
        <button @click="nextSlide" class="absolute right-2 w-8 h-8 md:w-10 md:h-10 top-1/2 bg-black bg-opacity-10 rounded-full text-white flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed">
            <path d="M521.33-480.67 328-674l47.33-47.33L616-480.67 375.33-240 328-287.33l193.33-193.34Z"/>
          </svg>
        </button>

        <!-- Paginación -->
        <div class="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
          <span v-for="(image, index) in props.images" :key="index" @click="currentImageIndex = index"
                class="w-3 h-3 rounded-full cursor-pointer"
                :class="currentImageIndex === index ? 'bg-white' : 'bg-gray-300 opacity-50'"></span>
        </div>
      </div>

      <!-- Descripción y título -->
      <div class="text-center mt-4">
        <h2 class="text-white text-xl font-bold">{{ props.title }}</h2>
        <p class="text-white text-base">{{ props.description }}</p>
      </div>

      <!-- Botón para cerrar el modal -->
      <div class="text-center mt-6">
        <button @click="closeModal" class="bg-white text-black font-bold py-2 px-4 rounded">Cerrar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Props
const props = defineProps({
  isVisible: {
    type: Boolean,
    default: false,
  },
  images: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    default: 'Título del Carrusel',
  },
  description: {
    type: String,
    default: 'Descripción breve del carrusel',
  }
})

// Reactive variables
const currentImageIndex = ref(0)

// Emit event to close modal
const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}

// Methods to navigate the carousel
const nextSlide = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % props.images.length
}

const prevSlide = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + props.images.length) % props.images.length
}

// Carousel autoplay
let interval = null
onMounted(() => {
  interval = setInterval(nextSlide, 3000) // Cambia cada 3 segundos
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<style scoped>
/* Estilo del modal y carrusel */
.fixed {
  background-color: rgba(0, 0, 0, 0.50);
}
</style>
