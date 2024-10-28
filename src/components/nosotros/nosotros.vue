<template>
  <div id="trayectoria-institucional" class="pt-[73px] overflow-hidden">
    <!-- Carrusel de imágenes -->
    <div class="relative w-96 h-40">
      <div class="flex animate-move-right h-40">
        <div v-for="(image, index) in infiniteImages" :key="index" class="flex-shrink-0 flex flex-col items-center justify-end relative">
          <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
      </div>
    </div>
    <h2 class="text-xl md:text-3xl font-bold text-[#0A8B37] md:py-4 text-center">SOBRE NOSOTROS</h2>
  </div>

  <div class="bg-white py-0 px-4 md:px-8 lg:px-20">
    <div class="bg-white">
      <div class="flex justify-center md:justify-start space-x-10 border-b-2 border-[#0A8B37]">
        <!-- Trayectoria Institucional -->
        <a href="#trayectoria-institucional"
          class="text-gray-500 hover:text-green-600 py-2 border-b-4 border-transparent hover:border-green-600"
          :class="{ 'text-green-600 border-green-600': activeSection === 'trayectoria-institucional' }"
          @click.prevent="goToTrayectoria">
          Trayectoria Institucional
        </a>
        
        <!-- Misión y Visión -->
        <a href="#mision-vision"
          class="text-gray-500 hover:text-green-600 py-2 border-b-4 border-transparent hover:border-green-600"
          :class="{ 'text-green-600 border-green-600': activeSection === 'mision-vision' }"
          @click.prevent="goToMisionVision">
          Misión y Visión
        </a>
      </div>
    </div>
  </div>

  <div class="bg-white py-0 px-4 md:px-8 lg:px-20">
    <div  class="flex flex-col md:flex-row items-center md:items-start mt-6 space-y-5 md:space-y-0 md:space-x-10 px-6">
      <!-- Video Section -->
      <div class="w-full md:w-1/2 p-5 flex justify-center items-center bg-white border border-[#0A8B37] rounded-3xl shadow-lg p-0">
        <div class="relative bg-gray-500 w-full h-60 md:h-72 flex items-center justify-center">
          <span class="text-white text-6xl">▶</span>
        </div>
      </div>

      <!-- Text Section -->
      <div class="w-full md:w-3/4 mx-auto rounded overflow-hidden shadow-lg flex flex-col pb-4">
        <div class="flex items-center justify-center bg-gradient-to-r py-4 from-[#203C61] to-[#0A8B37] bg-opacity-100 rounded-3xl rounded-b-none text-xl md:text-2xl sm:text-2xl font-bold text-center ">
          <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#e8eaed"><path class="bg-white" d="M200-280v-280h80v280h-80Zm240 0v-280h80v280h-80ZM80-120v-80h800v80H80Zm600-160v-280h80v280h-80ZM80-640v-80l400-200 400 200v80H80Zm178-80h444-444Zm0 0h444L480-830 258-720Z"/></svg>        </div>
        
        <p class="text-gray-700 text-lg leading-relaxed text-justify px-6 pt-6">
          La Escuela Boliviana de Posgrado, ha nacido a la vida jurídica en el mes de mayo del año
          2010, dedicada desde esta fecha al desarrollo posgradual. Ha establecido nexos en una
          primera instancia con la Universidad Amazónica de Pando, con quién ha desarrollado los
          primeros programas de diplomado en educación superior, posteriormente ha realizado una
          Alianza Estratégica con la Universidad Pública de El Alto, estructurando un único sistema
          de formularios del manejo administrativo académico en el desarrollo de los diferentes
          programas de diplomados y maestrías.
        </p>

        <div v-bind:class="{ 'max-h-0': !showMoreText, 'max-h-96': showMoreText }" class="overflow-hidden transition-all duration-1000 ease-in-out">
          <p class="text-gray-700 text-lg leading-relaxed text-justify px-6">
            Posteriormente se diversifica el proceso de gestión y desarrollo de programas
            posgraduales con el Convenio suscrito con la Universidad Nacional Siglo XX, abarcando a
            programas en ciencias jurídicas, ciencias de la educación y ciencias de la salud, con un
            gran avance a la investigación científica multidisciplinar como proceso formativo en
            posgrado. A partir del 2016 y en la actualidad, se consolida en nexo institucional con
            el convenio con la Universidad Autónoma del Beni José Ballivián desarrolla programas en
            todas las ciencias del saber humano, desde diplomado, especialidad, maestrías y
            doctorado, en las distintas modalidades y tomando en cuenta el avance de la ciencia
            hacia la transdisciplina. Incorpora Gabinetes propios de Laboratorios de Bioquímica y
            Ultrasonografía, con sus siete subsedes: Santa Cruz, Cochabamba, Oruro, La Paz, Potosí,
            Trinidad, Riberalta, y la sede central en la ciudad de Sucre. Tiene nexos también, con
            Colegios profesionales, Sociedades científicas nacionales y con la Asociación de
            Magistrados de Chuquisaca, con quienes interacciona para solventar la necesidad social
            profesional y ventajas a afiliados, haciendo singular el proceso que en la praxis se
            evidencia como, verdadero y real acceso a la educación superior, y no sea una expresión
            retórica que quede en anaqueles de la historia.
          </p>
        </div>

        <!-- Botón "Leer más" -->
        <div class="flex justify-center mt-4">
          <button
            @click="showMoreText = !showMoreText"
            class="bg-[#0A8B37] text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300 hover:bg-green-700 focus:outline-none"
          >
            {{ showMoreText ? 'Leer menos <<' : 'Leer más >>' }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white py-0 px-4 md:px-8 lg:px-20">
    <div id="mision-vision" class="flex flex-col md:flex-row items-center md:items-start mt-10 space-y-5 md:space-y-0 md:space-x-10 px-6 pb-8">
      <!-- Columna de Misión y Visión -->
      <div class="w-full md:w-3/4">
        <div class="flex items-center justify-center bg-gradient-to-r from-[#203C61] to-[#0A8B37] bg-opacity-100 py-2 rounded-3xl rounded-b-none text-xl md:text-2xl sm:text-2xl font-bold text-center ">
          <img :src="logo" alt="" class="w-16 h-16 justify-center">
        </div>
        <div class="flex flex-col content-center md:flex-row rounded overflow-hidden shadow-lg">
          <div class="px-10 py-10 w-full md:w-1/2">
            <div class="font-bold text-xl mb-2 text-center text-green-600 py-4">Misión</div>
            <p class="text-gray-700 text-lg leading-relaxed text-justify">
              Desarrollo de programas de posgrado, acorde a los cambios contextuales Socio-Económico y Culturales, brindando a los profesionales, competencias idóneas para la producción y aplicación de nuevos conocimientos con excelencia académica.
            </p>
          </div>

          <div class="md:w-px md:h-52 w-92 h-px bg-[#0A8B37] mx-4 my-auto"></div>

          <div class="px-10 py-10 w-full md:w-1/2">
            <div class="font-bold text-xl mb-2 text-center text-green-600 py-4">Visión</div>
            <p class="text-gray-700 text-lg leading-relaxed text-justify">
              Consolidarse en la mejor alternativa como Institución Académica de formación Posgradual en el Estado Plurinacional de Bolivia, acorde al avance de la ciencia y Tecnología.
            </p>
          </div>
        </div>
          <!-- Nueva Fila (sección debajo de Misión y Visión) -->
        <div class="w-full mt-8">
              <!-- Acordeón debajo de Misión y Visión -->
          <div class="w-full rounded overflow-hidden shadow-lg">
            <!-- Card 1: Unidades Municipales -->
            <div class="border-b">
              <button @click="toggle(1)" class="flex justify-between items-center w-full px-4 py-3 focus:outline-none">
                <span class="font-bold text-xl mb-2  text-green-600 ">Departamentos</span>
                <span>
                  <svg v-if="openCard === 1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              <div v-show="openCard === 1" class="px-4 py-2">
                <ul class="list-disc list-inside text-sm">
                  <li><a href="#" class="text hover:underline"></a></li>
                  <li><a href="#" class="text-gray-700 text-lg leading-relaxed text-justify hover:underline">adminitración</a></li>
                  <li><a href="#" class="text-gray-700 text-lg leading-relaxed text-justify hover:underline">Finaciera</a></li>
                  <li><a href="#" class="text-gray-700 text-lg leading-relaxed text-justify hover:underline">Desc</a></li>
                  <li><a href="#" class="text-gray-700 text-lg leading-relaxed text-justify hover:underline">Descentralizadas</a></li>
                  <li><a href="#" class="text-gray-700 text-lg leading-relaxed text-justify hover:underline">Marketing</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
       

      <!-- Columna de la Imagen -->
      <div class="flex items-center justify-center">
        <img :src="doctor" alt="doctor" class="w-[300px] h-[450px] md:w-[400px] md:h-[550px] object-cover rounded-lg" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Sucre2 from '../../assets/nosotros/sucre.jpg'
import santacruz from '../../assets/nosotros/santacruz.png'
import cochabamba from '../../assets/nosotros/cochabamba.png'
import lapaz1 from '../../assets/nosotros/lapaz1.png'
import lapaz2 from '../../assets/nosotros/lapaz2.png'
import lapaz3 from '../../assets/nosotros/lapaz3.png'
import oruro1 from '../../assets/nosotros/oruro1.png'
import potosi from '../../assets/nosotros/potosi.png'
import trinidad from '../../assets/nosotros/trinidad.png'
import santacruz2 from '../../assets/nosotros/santacruz2.png'
import doctor from '../../assets/director/doctor.png'
import sucre1 from '../../assets/nosotros/sucre1.png'
import logo from '../../assets/logo/logoEBP.svg'


const images = ref([
  { src: lapaz1, alt: 'Imagen 4' },
  { src: lapaz2, alt: 'Imagen 5' },
  { src: lapaz3, alt: 'Imagen 6' },
  { src: Sucre2, alt: 'Imagen 2' },
  { src: santacruz, alt: 'Imagen 2' },
  { src: santacruz2, alt: 'Imagen 10' },
  { src: cochabamba, alt: 'Imagen 3' },
  { src: oruro1, alt: 'Imagen 7' },
  { src: potosi, alt: 'Imagen 8' },
  { src: trinidad, alt: 'Imagen 9' }
])

const infiniteImages = computed(() => [...images.value, ...images.value, ...images.value])

// Mostrar más texto
const showMoreText = ref(false)

// Estado para saber qué sección está activa
const activeSection = ref('')

// Función para detectar la sección activa con scroll
const handleScroll = () => {
  const trayectoriaElement = document.getElementById('trayectoria-institucional')
  const misionVisionElement = document.getElementById('mision-vision')

  const trayectoriaOffset = trayectoriaElement?.getBoundingClientRect().top || 0
  const misionVisionOffset = misionVisionElement?.getBoundingClientRect().top || 0

  // Actualizar la sección activa al hacer scroll
  if (trayectoriaOffset < window.innerHeight && trayectoriaOffset >= 0) {
    activeSection.value = 'trayectoria-institucional'
  } else if (misionVisionOffset < window.innerHeight && misionVisionOffset >= 0) {
    activeSection.value = 'mision-vision'
  }
}

// Función para desplazarse a una sección y actualizar el estado
const scrollToSection = (sectionId, sectionName) => {
  const sectionElement = document.getElementById(sectionId)
  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  activeSection.value = sectionName // Actualizar manualmente la sección activa
}

const goToTrayectoria = () => {
  scrollToSection('trayectoria-institucional', 'trayectoria-institucional')
}

const goToMisionVision = () => {
  scrollToSection('mision-vision', 'mision-vision')
}
const openCard = ref(null)

const toggle = (cardNumber) => {
  openCard.value = openCard.value === cardNumber ? null : cardNumber
}

// Listener para el scroll
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>


<style scoped>
@keyframes moveRight {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-1000%);
  }
}

@keyframes moveLeft {
  0% {
    transform: translateX(-1000%);
  }
  100% {
    transform: translateX(0%);
  }
}

.animate-move-right {
  animation: moveRight 60s linear infinite;
}
html {
  scroll-behavior: smooth;
}
</style>
