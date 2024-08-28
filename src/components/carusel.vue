<template>
  <div class="relative h-screen w-full overflow-hidden">
    <div
      class="flex transition-transform duration-700"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="h-screen w-full flex-shrink-0 bg-cover bg-center relative"
        :style="{ backgroundImage: `url(${slide.image})` }"
      >
        <!-- Texto centrado -->
        <div
          class="absolute inset-0 flex flex-col items-center justify-center text-center text-white transform -translate-y-10"
        >
          <div class="bg-white bg-opacity-25 px-4 py-2 rounded-md mb-4">
            <span class="text-lg font-semibold text-white">{{ slide.cuadro }}</span>
          </div>
          <h1 class="text-5xl font-bold mb-4 font-bebas">{{ slide.text }}</h1>
          <p class="text-lg font-helvetica">
            {{ slide.textm }}
          </p>
        </div>
      </div>
    </div>

    <!-- Íconos estáticos -->
    <div class="absolute bottom-4 right-4 space-y-4 lg:top-1/2 lg:right-4 lg:bottom-auto lg:transform lg:-translate-y-1/2 lg:space-y-4">
      <a href="#" class="group block w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 hover:bg-white">
        <font-awesome-icon :icon="['fab', 'facebook-f']" class="text-lg text-white group-hover:text-gray-800" />
      </a>
      <a href="#" class="group block w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 hover:bg-white">
        <font-awesome-icon :icon="['fab', 'instagram']" class="text-lg text-white group-hover:text-gray-800" />
      </a>
      <a href="#" class="group block w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 hover:bg-white">
        <font-awesome-icon :icon="['fab', 'tiktok']" class="text-lg text-white group-hover:text-gray-800" />
      </a>
      <a href="#" class="group block w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 hover:bg-white">
        <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-lg text-white group-hover:text-gray-800" />
      </a>
    </div>
    <!-- Paginación del carrusel -->
    <div class="absolute bottom-0 left-0 w-full flex justify-center mb-4">
      <div
        v-for="(slide, index) in slides"
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
</template>

<script>
import img1 from '../assets/carusel/img1.jpg'
import img2 from '../assets/carusel/img2.jpg'
import img3 from '../assets/carusel/img3.jpg'

export default {
  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          image: img3,
          cuadro: 'BIENVENIDOS',
          text: 'ESCUELA BOLIVIANA DE POSGRADO',
          textm: 'FORMACIÓN DE EXCELENCIA E INNOVACIÓN "EBP" TU MEJOR OPCIÓN '
        },
        { image: img2, cuadro: 'BIENVENIDOS', text: 'TEXTO 2' },
        { image: img1, cuadro: 'BIENVENIDOS', text: 'TEXTO 3' }
      ],
      interval: null
    }
  },
  methods: {
    goToSlide(index) {
      this.currentSlide = index
    },
    startAutoSlide() {
      this.interval = setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length
      }, 5000)
    }
  },
  mounted() {
    this.startAutoSlide()
  },
  beforeUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
      this.interval = null
    }
  }
}
</script>
