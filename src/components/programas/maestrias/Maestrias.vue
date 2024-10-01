<!-- diplomados.vue -->
<template>
  <div class="relative">
    <div class="bg-white py-2 px-4 sm:px-2 md:px-8 lg:px-20 mx-auto">
      <h2 class="text-center text-2xl sm:text-xl md:text-3xl font-bold mb-2 md:mb-0 text-[#0A8B37]">
        DIPLOMADOS EN OFERTA
      </h2>
    </div>
 <!-- Contenido de la tarjeta -->
<div class="flex flex-col md:flex-row sm:flex-row justify-center items-center bg-white py-2 px-4 sm:px-2 md:px-4 lg:px-20">
  <!-- Botón Izquierdo -->
  <button
    class="absolute top-60 px-4 py-4 z-10 sm:relative sm:top-0 left-4 sm:left-0 bg-[#f1efef] text-[#0A8B37] hover:bg-opacity-50 rounded-full"
    @click="setCurrentProgram((currentProgramIndex - 1 + programs.length) % programs.length)"
  >
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="-100 -960 960 960" width="24px" fill="#0A8B37">
      <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
    </svg>
  </button>

  <!-- Imagen del programa -->
  <div class="w-3/4 md:1/4 sm:w-1/4 flex justify-center items-center ml-0 relative">
    <div class="bg-white shadow-md rounded overflow-hidden w-64 sm:w-64">
      <img :src="currentImage" class="w-full h-full transition-opacity duration-700 ease-in-out" @mouseover="changeImage(currentProgram.image2)" @mouseleave="resetImage()" alt="Programa" />
      <div class="flex justify-center p-2 sm:p-4 mt-auto">
        <button class="relative flex items-center justify-center bg-gradient-to-r from-[#1c4d59] to-[#0A8B37] text-white py-2 px-8 sm:py-2 sm:px-4 rounded-full text-sm sm:text-sm transform transition-transform duration-200 hover:scale-110">
            <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-2xl text-white mr-2" />
            <span class="transform transition duration-300 hover:scale-100">INSCRÍBETE AHORA</span>
        </button>
      </div>
    </div>
  </div>

  <!-- Información del programa -->
  <div class="w-full sm:w-3/4 bg-white border border-[#0A8B37] rounded-3xl px-0 shadow-lg mt-4 sm:mt-0 sm:ml-4 sm:mr-6">
    <h2 class="bg-gradient-to-r from-[#1c4d59] to-[#0A8B37] text-[#ffffff] p-6 rounded-3xl rounded-b-none text-xl md:text-2xl sm:text-2xl font-bold text-center">
      {{ currentProgram.title }}
    </h2>
    <p class="mt-2 text-[#0A8B37] font-bold text-center">
      {{ currentProgram.description }}
    </p>

    <div class="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 sm:gap-4 sm:mt-4">
      <div v-for="(feature, index) in currentProgram.features" :key="feature.title" :class="index === 4 && currentProgram.features.length === 5 ? 'gap-4 mt-4 mb-4 sm:mt-0 sm:mb-0 sm:col-span-2 mx-auto  ' : ''" class="flex items-center space-x-2 px-6">
        <svg
          v-if="!(index === 4 && currentProgram.features.length === 5)"
          xmlns="http://www.w3.org/2000/svg"
          width="48px"
          height="48px"
          viewBox="0 -960 960 960"
          class="mr-4 transition-colors duration-100"
        >
          <defs>
            <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%">
              <stop offset="0%" stop-color="#203C61" />
              <stop offset="100%" stop-color="#0A8B37" />
            </linearGradient>
          </defs>
          <path
            :d="feature.icon"
            class="fill-[url(#iconGradient)] group-hover:fill-white transition-colors duration-200"
          />
        </svg>
        <div class="flex-1">
          <p class="text-[#0A8B37] font-bold text-center">{{ feature.text }}</p>
          <p class="text-gray-500 text-center">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Botón Derecho -->
  <button
    class="absolute top-60 sm:top-0 sm:relative right-4 sm:right-0 bg-[#f1efef] text-[#0A8B37] px-4 py-4 z-5 hover:bg-opacity-50 rounded-full"
    @click="setCurrentProgram((currentProgramIndex + 1 ) % programs.length)"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 -960 960 960"
      width="24px"
      fill="#0A8B37"
    >
      <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
    </svg>
  </button>
</div>



    <!-- Indicadores de carrusel (líneas pequeñas) -->
    <div class="flex justify-center space-x-2 mt-2 mb-4">
      <button
        v-for="(program, index) in programs"
        :key="index"
        @click="setCurrentProgram(index)"
        :class="{
          'bg-[#0A8B37] text-white': currentProgramIndex === index,
          'bg-gray-200': currentProgramIndex !== index
        }"
        class="w-10 h-1 rounded transition-colors duration-300"
      ></button>
    </div>
  </div>

  <!-- Footer -->
  <footer class="bg-gradient-to-r from-[#203C61] to-[#0A8B37] bg-opacity-100 text-white px-1 sm:px-8" >
    <div class="flex justify-center space-x-1 py-4 sm:space-x-4 sm:py-4 ">
      <div class="p-1 space-x-1 sm:space-x-2">
        <!-- Botón de Diplomados en Desarrollo -->
        <button
          @click="changeShowing('desarrollo'); scrollToSection('desarrollo-section')"
          :class="{
            'bg-white text-[#0A8B37]': showing === 'desarrollo',
            'text-white  hover:bg-white hover:text-[#0A8B37]': showing !== 'desarrollo'
          }"
          class="rounded-full border border-[#ffffff] inline-flex px-2 py-1 transition-colors duration-300 text-base sm:text-base"
        >
          Diplomados en Desarrollo
        </button>

        <!-- Botón de Diplomados Concluidos -->
        <button
          @click="changeShowing('concluidas');scrollToSection('desarrollo-section')"
          :class="{
            'bg-white text-[#0A8B37]': showing === 'concluidas',
            'text-white hover:bg-white hover:text-[#0A8B37]': showing !== 'concluidas'
          }"
          class="rounded-full border border-[#ffffff] inline-flex px-2 py-1 transition-colors duration-300 text-base sm:text-base"
        >
          Diplomados Concluidos
        </button>
      </div>
    </div>
    <!-- Mostrar el componente DiplomadoDesarrollo si showing es 'desarrollo' -->
     <div id="desarrollo-section">
      <diplomado_desarrollo v-if="showing === 'desarrollo'" />
     </div>
    <!-- Mostrar el componente DiplomadoConcluido si showing es 'concluidas' -->
     <div id="concluidas-section">
      <diplomado_concluido v-if="showing === 'concluidas'" />
     </div>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import diplomado_desarrollo from './Maestrias_desarrollo.vue'
import diplomado_concluido from './Maestrias_concluido.vue'

import img1 from '/src/assets/ofertas_academicas/doc1.jpg';
import img2 from '/src/assets/ofertas_academicas/doc3.png';

const showing = ref('')
const currentProgramIndex = ref(0)
const currentImage = ref('src/assets/ofertas_academicas/doc1.jpg')

const programs = [
  {
    title: 'Diplomado en Hematología y Hemoterapia',
    shortTitle: 'Hematología',
    image1: img1,
    image2: img2,
    description: 'Programa semipresencial con duración de 16 meses...',
    features: [
      {
        icon: 'm662-556 160-92-160-92-160 92 160 92Zm0 122 110-64v-84l-110 64-110-64v84l110 64ZM81-160v-104q41.67 0 70.83 30.33Q181-203.33 181-160H81Zm200 0q0-84.66-58-144.33Q165-364 81-364v-60q108.64 0 184.32 77.5Q341-269 341-160h-60Zm160 0q0-75-28-141.5t-77-116q-49-49.5-114.5-78T81-524v-60q87 0 163.5 33.5t133.5 91q57 57.5 90 135T501-160h-60Zm160 0q0-108-40.5-203.5t-111-167Q379-602 284.18-643T81-684v-56q0-24.75 17.63-42.38Q116.25-800 141-800h680q24.75 0 42.38 17.62Q881-764.75 881-740v520q0 24.75-17.62 42.37Q845.75-160 821-160H601Z',
        text: 'Modalidad y carga horaria',
        description: 'Virtual - 800 Horas Académicas, equivalentes a 20 Créditos Internacionales.'
      },
      {
        icon: 'M321-160q-24 0-42-18t-18-42v-100h124v-127q-38 3-76-10.5T241-500v-58h-50L60-689q36-34 86-55.5T248-766q30 0 68.5 9.5T385-726v-74h455v535q0 44-30.5 74.5T735-160H321Zm124-160h245v55q0 20 12.5 32.5T735-220q20 0 32.5-12.5T780-265v-475H445v57l241 241v43h-43L517-525l-17 20q-13 15-26 23t-29 15v147ZM218-618h83v89q17 11 33.5 16.5T368-507q25 0 51-13.5t38-27.5l17-20-69-69q-32-32-72-50.5T248-706q-27 0-49 6.5T154-682l64 64Z',
        text: 'Entrega de su Título',
        description:
          'Su Título será entregado en la sede de su Ciudad, nosotros nos hacemos cargo de su trámite en la Universidad.'
      },
      {
        icon: 'M860-283v-282L479-360 40-600l439-240 441 240v317h-60ZM479-120 189-279v-210l290 159 290-159v210L479-120Z',
        text: 'Dirigido',
        description:
          'A profesionales de todas las áreas (Técnicos Superiores y Licenciados), Diploma para habilitación como docente.'
      },
      {
        icon: 'M306-394q-17 0-28.5-11.5T266-434q0-17 11.5-28.5T306-474q17 0 28.5 11.5T346-434q0 17-11.5 28.5T306-394Zm177 0q-17 0-28.5-11.5T443-434q0-17 11.5-28.5T483-474q17 0 28.5 11.5T523-434q0 17-11.5 28.5T483-394Zm170 0q-17 0-28.5-11.5T613-434q0-17 11.5-28.5T653-474q17 0 28.5 11.5T693-434q0 17-11.5 28.5T653-394ZM180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600v-430H180v430Z',
        text: 'Duración',
        description: '5 meses Avance académico más desarrollo de monografía.'
      },
      {
        icon: 'M212-241v-339h60v339h-60Zm242 0v-339h60v339h-60ZM80-121v-60h800v60H80Zm608-120v-339h60v339h-60ZM80-640v-53l400-228 400 228v53H80Z',
        text: 'Titulación',
        description:
          'Universidad Autónoma del Beni José Ballivian. Universidad pública y parte del Comité Ejecutivo de la Universidad Boliviana C.E.U.B.'
      }
    ]
  },
  // Otros programas...
  {
    title: 'Diplomado en Hematología y Hemoterapia',
    shortTitle: 'Hematología',
    image1: img1,
    image2: img2,
    description: 'Programa semipresencial con duración de 16 meses...',
    features: [
      {
        icon: 'm662-556 160-92-160-92-160 92 160 92Zm0 122 110-64v-84l-110 64-110-64v84l110 64ZM81-160v-104q41.67 0 70.83 30.33Q181-203.33 181-160H81Zm200 0q0-84.66-58-144.33Q165-364 81-364v-60q108.64 0 184.32 77.5Q341-269 341-160h-60Zm160 0q0-75-28-141.5t-77-116q-49-49.5-114.5-78T81-524v-60q87 0 163.5 33.5t133.5 91q57 57.5 90 135T501-160h-60Zm160 0q0-108-40.5-203.5t-111-167Q379-602 284.18-643T81-684v-56q0-24.75 17.63-42.38Q116.25-800 141-800h680q24.75 0 42.38 17.62Q881-764.75 881-740v520q0 24.75-17.62 42.37Q845.75-160 821-160H601Z',
        text: 'Modalidad y carga horaria',
        description: 'Virtual - 800 Horas Académicas, equivalentes a 20 Créditos Internacionales.'
      },
      {
        icon: 'M321-160q-24 0-42-18t-18-42v-100h124v-127q-38 3-76-10.5T241-500v-58h-50L60-689q36-34 86-55.5T248-766q30 0 68.5 9.5T385-726v-74h455v535q0 44-30.5 74.5T735-160H321Zm124-160h245v55q0 20 12.5 32.5T735-220q20 0 32.5-12.5T780-265v-475H445v57l241 241v43h-43L517-525l-17 20q-13 15-26 23t-29 15v147ZM218-618h83v89q17 11 33.5 16.5T368-507q25 0 51-13.5t38-27.5l17-20-69-69q-32-32-72-50.5T248-706q-27 0-49 6.5T154-682l64 64Z',
        text: 'Entrega de su Título',
        description:
          'Su Título será entregado en la sede de su Ciudad, nosotros nos hacemos cargo de su trámite en la Universidad.'
      },
      {
        icon: 'M860-283v-282L479-360 40-600l439-240 441 240v317h-60ZM479-120 189-279v-210l290 159 290-159v210L479-120Z',
        text: 'Dirigido',
        description:
          'A profesionales de todas las áreas (Técnicos Superiores y Licenciados), Diploma para habilitación como docente.'
      },
      {
        icon: 'M306-394q-17 0-28.5-11.5T266-434q0-17 11.5-28.5T306-474q17 0 28.5 11.5T346-434q0 17-11.5 28.5T306-394Zm177 0q-17 0-28.5-11.5T443-434q0-17 11.5-28.5T483-474q17 0 28.5 11.5T523-434q0 17-11.5 28.5T483-394Zm170 0q-17 0-28.5-11.5T613-434q0-17 11.5-28.5T653-474q17 0 28.5 11.5T693-434q0 17-11.5 28.5T653-394ZM180-80q-24 0-42-18t-18-42v-620q0-24 18-42t42-18h65v-60h65v60h340v-60h65v60h65q24 0 42 18t18 42v620q0 24-18 42t-42 18H180Zm0-60h600v-430H180v430Z',
        text: 'Duración',
        description: '5 meses Avance académico más desarrollo de monografía.'
      },
      {
        icon: 'M212-241v-339h60v339h-60Zm242 0v-339h60v339h-60ZM80-121v-60h800v60H80Zm608-120v-339h60v339h-60ZM80-640v-53l400-228 400 228v53H80Z',
        text: 'Titulación',
        description:
          'Universidad Autónoma del Beni José Ballivian. Universidad pública y parte del Comité Ejecutivo de la Universidad Boliviana C.E.U.B.'
      }
    ]
  }
]

// Computar el programa actual basado en el índice
const currentProgram = computed(() => programs[currentProgramIndex.value])

// Cambiar imagen cuando se hace hover
const changeImage = (image) => {
  currentImage.value = image
}

// Restablecer la imagen cuando se quita el hover
const resetImage = () => {
  currentImage.value = currentProgram.value.image1
}

// Función para cambiar la opción mostrada
const changeShowing = (option) => {
  showing.value = option
}
// Función para hacer scroll a la sección con un offset
const scrollToSection = (sectionId, offset = -185) => {
  const section = document.getElementById(sectionId)
  if (section) {
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY
    window.scrollTo({
      top: sectionPosition + offset, // Aplica el offset
      behavior: 'smooth' // Scroll suave
    })
  }
};

let carouselInterval = null // Variable para guardar el intervalo

// Función para cambiar el programa actual
const setCurrentProgram = (index) => {
  currentProgramIndex.value = index
  currentImage.value = programs[index].image1
}

// Función para iniciar el cambio automático
const startCarousel = () => {
  carouselInterval = setInterval(() => {
    currentProgramIndex.value = (currentProgramIndex.value + 1) % programs.length
    setCurrentProgram(currentProgramIndex.value)
  }, 5000) // Cambia cada 5 segundos (5000 ms)
}

// Detener el intervalo cuando el componente se destruya
onBeforeUnmount(() => {
  clearInterval(carouselInterval)
})

// Iniciar el carrusel cuando se monte el componente
onMounted(() => {
  startCarousel()
})



</script>

<style scoped></style>
