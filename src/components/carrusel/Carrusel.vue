<template>
  <div id="Carrusel" class="relative h-screen w-full overflow-hidden">
    <div class="flex transition-transform duration-700" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        class="h-screen w-full flex-shrink-0 relative"
        :style="{ backgroundImage: index < slides.length - 2 ? `url(${slide.image})` : '', backgroundPosition: 'center', backgroundSize: 'cover' }"
      >

        <!-- Imagen a la derecha para las dos últimas imágenes -->
        <div 
          v-if="index >= slides.length - 2"
          class="absolute right-0 top-0 h-full w-full"
          :style="{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover' }"
        >
        </div>    

        <!-- Para la primera imagen (o cualquier otra), texto centrado sin gradiente -->
        <div 
          v-if="index < slides.length - 2"
          class="absolute inset-0 flex items-center justify-center text-white"
        >
          <div class="flex flex-col text-center">
            <div class="px-4 py-2 rounded-md mb-4">
              <span class="text-2xl font-semibold text-white">{{ slide.cuadro }}</span>
            </div>
            <h1 class="text-5xl font-bold mb-4 font-bebas">{{ slide.text }}</h1>
            <p class="text-lg font-helvetica">{{ slide.textm }}</p>
          </div>
        </div>

      </div>
    </div>

    <!-- Íconos estáticos -->
    <div class="absolute bottom-4 right-4 space-y-4 lg:top-1/2 lg:right-4 lg:bottom-auto lg:transform lg:-translate-y-1/2 lg:space-y-4">
      <a href="https://www.facebook.com/people/Escuela-Boliviana-de-Posgrado-Sucre/100089375243421/" target="_blank"
        class="group block w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 hover:bg-white">
        <font-awesome-icon :icon="['fab', 'facebook-f']" class="text-lg text-white group-hover:text-gray-800" />
      </a>
      <a href="https://www.instagram.com/ebpbolivia/" target="_blank"
        class="group block w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 hover:bg-white">
        <font-awesome-icon :icon="['fab', 'instagram']" class="text-lg text-white group-hover:text-gray-800" />
      </a>
      <a href="https://www.tiktok.com/@escuelabolivianaposgrad0" target="_blank"
        class="group block w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 hover:bg-white">
        <font-awesome-icon :icon="['fab', 'tiktok']" class="text-lg text-white group-hover:text-gray-800" />
      </a>
      <a href="https://wa.link/116w6u" target="_blank"
        class="group block w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 hover:bg-white">
        <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-lg text-white group-hover:text-gray-800" />
      </a>
    </div>

    <!-- SVG en la parte inferior solo si no es la primera diapositiva -->
    <div v-if="currentSlide !== 0" class="absolute bottom-0 left-0 w-full ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="wave">
        <defs>
          <linearGradient id="gradiente" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" style="stop-color:#203C61; stop-opacity:0.65" />
            <stop offset="100%" style="stop-color:#0A8B37; stop-opacity:0.65" />
          </linearGradient>
        </defs>
        <g transform="scale(-1, 1) translate(-1440, 0)">
          <path fill="url(#gradiente)" d="M0,192L80,192C160,192,320,192,480,181.3C640,171,800,149,960,149.3C1120,149,1280,171,1360,181.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </g>      
      </svg>    
    </div>

    <div class="absolute bottom-0 left-0 w-full justify-center z-10">
      <!-- Texto centrado en el gradiente, cambiando con las diapositivas -->
      <transition
        name="slide"
        mode="out-in"
        enter-active-class="transition-transform duration-[700ms] ease-out"
        leave-active-class="transition-transform duration-[700ms] ease-in"
        enter-class="translate-x-full opacity-10"
        enter-to-class="translate-x-2 opacity-100 "
        leave-class="translate-x-0 opacity-100"
        leave-to-class="translate-x-full opacity-10"
        animate-fade-right
      >

      <!-- Solo mostrar si currentSlide > 0 -->
        <div
          v-if="currentSlide > 0"
          class="relative inset-x-0 bottom-12 z-10 text-white flex flex-col px-6 md:px-72"
          :key="currentSlide"
        >
          <!-- Línea decorativa -->
          <div class="flex justify-start w-full py-4 text-start">
            <div class="w-8 md:w-12 border-b-4 md:border-b-8 border-white"></div>
          </div>
          <!-- Título y descripción correspondientes a la diapositiva actual -->
          <h1 class="text-lg md:text-2xl font-bold mb-2 font-helvetica text-start">
            {{ slides[currentSlide].text }}
          </h1>
          <p class="text-xs md:text-sm font-helvetica text-start">
            {{ slides[currentSlide].textm }}
          </p>
        </div>
      </transition>
    </div>


    <!-- Paginación del carrusel -->
    <div class="absolute bottom-0 left-0 w-full flex justify-center mb-4 z-10">
      <div v-for="(slide, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        class="cursor-pointer w-6 h-1 mx-1 rounded transition-all"
        :class="{
          'bg-white': currentSlide === index,
          'bg-gray-400': currentSlide !== index,
        }">
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import img6 from "../../assets/carusel/degradado1.png";
import img5 from "../../assets/carusel/autoridades.jpg";
import img4 from "../../assets/carusel/img4.jpg";

const currentSlide = ref(0);

const slides = [
  {
    index: 0,
    image: img4,
    cuadro: "BIENVENIDOS",
    text: "ESCUELA BOLIVIANA DE POSGRADO",
    textm: 'FORMACIÓN DE EXCELENCIA E INNOVACIÓN "EBP" TU MEJOR OPCIÓN ',
  },
  { index: 1, image: img5, cuadro: "MAESTRÍA EN:", text: "PRÁCTICAS EN LABORATORIOS Y GABINETES PROPIOS", textm: 'TITULACIÓN OTORGADA POR  LA UNIVERSIDAD AUTÓNOMA DEL BENI "JOSE BALLIVIAN".   ', },
  { index: 2, image: img6, cuadro: "MAESTRÍA EN:", text: "HEMATOLOGÍA Y HEMOTERAPIA", textm: 'TITULACIÓN OTORGADA POR  LA UNIVERSIDAD AUTÓNOMA DEL BENI "JOSE BALLIVIAN".   ', },
];

const interval = ref(null);

const goToSlide = (index) => {
  currentSlide.value = index;
};

const startAutoSlide = () => {
  // Solo crea un nuevo intervalo si no hay uno activo
  if (interval.value) {
    clearInterval(interval.value);
  }

  interval.value = setInterval(() => {
    currentSlide.value = (currentSlide.value + 1) % slides.length;
  }, 7000);
};

onMounted(() => {
  startAutoSlide();
});

onBeforeUnmount(() => {
  if (interval.value) {
    clearInterval(interval.value);
    interval.value = null;
  }
});

</script>

<style scoped>
.wave {
  animation: waveAnimation 0.5s ease-in-out forwards;
  transform-origin: bottom; /* Para que la animación se inicie desde la parte inferior */
}

@keyframes waveAnimation {
  0% {
    transform: scaleY(0); /* Comienza desde una escala vertical de 0 */
    opacity: 0; /* Invisible al principio */
  }
  50% {
    opacity: 1; /* Se vuelve visible */
  }
  100% {
    transform: scaleY(1); /* Escala completamente */
  }
}


/* Agrega estilos específicos aquí si es necesario */
</style>
