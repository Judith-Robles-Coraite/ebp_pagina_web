<template>
<div class="pt-[73px] overflow-hidden">
  <!-- Carrusel de imágenes -->
  <div class="relative w-96 h-44 "> <!-- Altura fija de 64 -->
    <!-- Primera fila de imágenes - hacia la derecha -->
    <div class="flex animate-move-right h-44">
      <div v-for="(image, index) in infiniteImages" :key="index" class="flex-shrink-0 flex flex-col items-center justify-end relative">
        <img :src="image.src" :alt="image.alt" class="w-full h-full object-cover" />
        <!-- Capa semitransparente sobre la imagen -->
        <div class="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>
    </div>
  </div>
  <h2 class="text-xl md:text-3xl font-bold text-[#0A8B37]  md:py-4 text-center">
        SOBRE NOSOTROS
  </h2>
</div>

<div class="bg-white py-0 px-4 md:px-8 lg:px-20">
    <div class="bg-white ">
        <div class="flex justify-normal space-x-10 border-b-2 border-[#0A8B37]">
        <a href="#" class="text-gray-500 hover:text-green-600 py-2 border-b-4 border-transparent hover:border-green-600">Trayectoria Institucional</a>
        <a href="#" class="text-gray-500 hover:text-green-600 py-2 border-b-4 border-transparent hover:border-green-600">Misión y Visión</a>
        </div>
    </div>
    <div class="flex flex-col md:flex-row items-center md:items-start mt-10 space-y-5 md:space-y-0 md:space-x-10 px-6">
        <!-- Video Section -->
        <div class="w-full md:w-1/2 p-5 flex justify-center items-center bg-white border border-[#0A8B37] rounded-3xl shadow-lg p-0">
        <div class="relative bg-gray-500 w-full h-64 md:h-80 flex items-center justify-center">
            <span class="text-white text-6xl">▶</span> <!-- Icono de Play -->
        </div>
        </div>

        <!-- Text Section -->
        <div class="w-full md:w-3/4 text-center md:text-left mx-auto">
          <div class="flex items-center justify-center md:justify-start mb-4">
            <span class="text-green-600 text-4xl text-center">🏛</span> <!-- Icono del edificio -->
          </div>
         <!-- Texto visible -->
          <p class="text-gray-700 text-lg leading-relaxed text-justify">
          La Escuela Boliviana de Posgrado, ha nacido a la vida jurídica en el mes de mayo del año 2010, dedicada desde esta fecha al desarrollo posgradual. Ha establecido nexos en una primera instancia con la Universidad Amazónica de Pando, con quién ha desarrollado los primeros programas de diplomado en educación superior, posteriormente ha realizado una Alianza Estratégica con la Universidad Pública de El Alto, estructurando un único sistema de formularios del manejo administrativo académico en el desarrollo de los diferentes programas de diplomados y maestrías.    </p>
          <div v-bind:class="{'max-h-0': !showMoreText, 'max-h-96': showMoreText}" class="overflow-hidden transition-all duration-1000 ease-in-out">
            <p class="text-gray-700 text-lg leading-relaxed text-justify">
              Posteriormente se diversifica el proceso de gestión y desarrollo de programas posgraduales con el Convenio suscrito con la Universidad Nacional Siglo XX, abarcando a programas en ciencias jurídicas, ciencias de la educación y ciencias de la salud, con un gran avance a la investigación científica multidisciplinar como proceso formativo en posgrado. 
              A partir del 2016 y en la actualidad, se consolida en nexo institucional con el convenio  con  la Universidad Autónoma del Beni José Ballivián desarrolla programas en todas las ciencias del saber humano, desde diplomado, especialidad, maestrías y doctorado, en las distintas modalidades y tomando en cuenta el avance de la ciencia hacia la transdisciplina. Incorpora Gabinetes propios de Laboratorios de Bioquímica y Ultrasonografía, con sus siete subsedes: Santa Cruz, Cochabamba, Oruro, La Paz, Potosí, Trinidad, Riberalta, y la sede central en la ciudad de Sucre.
              Tiene nexos también, con Colegios profesionales, Sociedades científicas nacionales y con la Asociación de Magistrados de Chuquisaca, con quienes interacciona para solventar la necesidad social profesional y ventajas a afiliados, haciendo singular el proceso que en la praxis se evidencia como, verdadero y real acceso a la educación superior, y no sea una expresión retórica que quede en anaqueles de la historia.      </p>
          </div>
          <!-- Botón "Leer más" centrado y con bordes redondeados -->
          <div class="flex justify-center mt-4">
            <button @click="showMoreText = !showMoreText" 
              class="bg-green-600 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300 hover:bg-green-700 focus:outline-none"
            >
              {{ showMoreText ? 'Leer menos <<' : 'Leer más >>' }}
            </button>
          </div>
        </div>
    </div>
</div>
</template>

<script setup>
  import { ref, computed, onMounted } from 'vue';
  import Sucre2 from '../../assets/nosotros/sucre.jpg';
  import santacruz from '../../assets/nosotros/santacruz.png';
  import cochabamba from '../../assets/nosotros/cochabamba.png';
  import lapaz1 from '../../assets/nosotros/lapaz1.png';
  import lapaz2 from '../../assets/nosotros/lapaz2.png';
  import lapaz3 from '../../assets/nosotros/lapaz3.png';
  import oruro1 from '../../assets/nosotros/oruro1.png';
  import potosi from '../../assets/nosotros/potosi.png';
  import trinidad from '../../assets/nosotros/trinidad.png';
  import santacruz2 from '../../assets/nosotros/santacruz2.png';
  import sucre1 from '../../assets/nosotros/sucre1.png';


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
    { src: trinidad, alt: 'Imagen 9' },
    ]);

const infiniteImages = computed(() => [...images.value, ...images.value, ...images.value]);

onMounted(() => {

});

// Estado para controlar si se muestra o no el texto adicional
const showMoreText = ref(false);
</script>
  
<style scoped>
@keyframes moveRight {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-1000%); }
}

@keyframes moveLeft {
  0% { transform: translateX(-1000%); }
  100% { transform: translateX(0%); }
}

.animate-move-right {
  animation: moveRight 60s linear infinite;
}
  </style>
