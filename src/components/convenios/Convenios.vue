<template>
    <div class="bg-white px-5 md:px-8 lg:px-10 py-2 lg:py-4 mx-auto">
      <!-- Título y descripción -->
      <div class="w-full text-center mb-0">
        <h2 class="text-xl md:text-3xl font-bold text-[#0A8B37] mt-2 md:mt-4">NUESTROS CONVENIOS</h2>
        <p class="hidden sm:block text-gray-700 mt-2 sm:mt-4 px-0 sm:px-12 md:px-36">
          En la Escuela Boliviana de Posgrado, establecemos alianzas estratégicas con instituciones y empresas líderes a nivel nacional. Estos convenios nos permiten brindar servicios de alta calidad, acceso a recursos de vanguardia y colaborar en proyectos innovadores que benefician a nuestra comunidad educativa.
        </p>
      </div>
    </div>
  
    <div class="py-5 overflow-hidden">
      <!-- Carrusel de imágenes -->
      <div class="relative w-96 h-full">
        <!-- Primera fila de imágenes - hacia la derecha -->
        <div class="flex space-x-12 animate-move-right">
          <div v-for="(image, index) in infiniteImages" :key="index" class="w-40 h-48 flex-shrink-0 flex flex-col items-center justify-end">
            <img :src="image.src" :alt="image.alt" class="w-full h-40 object-contain" />
            <button @click="openModal(index)" class="mt-2 w-3/4 bg-white text-[#0A8B37] border border-[#0A8B37] transition duration-300 hover:bg-[#0A8B37] hover:text-white py-1 rounded-2xl z-10">Ver más</button>
          </div>
        </div>
  
        <!-- Segunda fila de imágenes - hacia la izquierda -->
        <div class="flex space-x-12 animate-move-left mt-10">
          <div v-for="(image, index) in infiniteImages" :key="index" class="w-40 h-48 flex-shrink-0 flex flex-col items-center justify-end">
            <img :src="image.src" :alt="image.alt" class="w-full h-40 object-contain" />
            <button @click="openModal(index)" class="mt-2 w-3/4 bg-white text-[#0A8B37] border border-[#0A8B37] transition duration-300 hover:bg-[#0A8B37] hover:text-white py-1 rounded-2xl z-10">Ver más</button>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Modal -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
      <div  @click.stop>
        <carrusel :isVisible="isModalOpen" :images="selectedCarousel.images" :title="selectedCarousel.title" :description="selectedCarousel.description" @close="closeModal" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import Carrusel from './Carrusel.vue';
  import AMACH from '../../assets/logos_convenios/AMACH.png';
  import CADEB from '../../assets/logos_convenios/CADEB.png';
  import CADEBB from '../../assets/logos_convenios/CADEBB.png';
  import CADECH from '../../assets/logos_convenios/CADECH.png';
  import CDEC from '../../assets/logos_convenios/CDEC.png';
  import CIBO from '../../assets/logos_convenios/CIBO.png';
  import CIC_SANTA_CRUZ from '../../assets/logos_convenios/CIC_SANTA_CRUZ.png';
  import CIC from '../../assets/logos_convenios/CIC.png';
  import CIP from '../../assets/logos_convenios/CIP.png';
  import CICEE from '../../assets/logos_convenios/CICEE.png';
  import CIEEBB from '../../assets/logos_convenios/CIEEBB.png';
  import CISICH from '../../assets/logos_convenios/CISICH.png';
  import CISTRIB from '../../assets/logos_convenios/CISTRIB.png';
  import CISTRIP from '../../assets/logos_convenios/CISTRIP.png';
  import CITI_OR from '../../assets/logos_convenios/CITI_OR.png';
  import CITI_SC from '../../assets/logos_convenios/CITI_SC.png';
  import COLEGIO_DE_BIOLOGOS from '../../assets/logos_convenios/COLEGIO_DE_BIOLOGOS.png';
  import COLEGIO_DE_BIOQUIMICA from '../../assets/logos_convenios/COLEGIO_DE_BIOQUÍMICA.png';
  import CPCC from '../../assets/logos_convenios/CPCC.png';
  import ICAC from '../../assets/logos_convenios/ICAC.png';
  import LSC from '../../assets/logos_convenios/LSC.png';
  import SIB_ST from '../../assets/logos_convenios/SIB_ST.png';
  import SIBBENI from '../../assets/logos_convenios/SIBBENI.jpeg';
  import SIBC from '../../assets/logos_convenios/SIBC.png';
  import SIBCH from '../../assets/logos_convenios/SIBCH.png';
  import SIBO from '../../assets/logos_convenios/SIBO.png';
  
  import carouselsData from './Carrusel.json';

    const images = ref([
    { src: AMACH, alt: 'Imagen 1' },
    { src: CADEB, alt: 'Imagen 2' },
    { src: CADEBB, alt: 'Imagen 3' },
    { src: CADECH, alt: 'Imagen 4' },
    { src: CDEC, alt: 'Imagen 5' },
    { src: CIBO, alt: 'Imagen 6' },
    { src: CIC_SANTA_CRUZ, alt: 'Imagen 7' },
    { src: CIC, alt: 'Imagen 8' },
    { src: CICEE, alt: 'Imagen 9' },
    { src: CIEEBB, alt: 'Imagen 10' },
    { src: CIP, alt: 'Imagen 11' },
    { src: CISICH, alt: 'Imagen 12' },
    { src: CISTRIB, alt: 'Imagen 13' },
    { src: CISTRIP, alt: 'Imagen 14' },
    { src: CITI_OR, alt: 'Imagen 15' },
    { src: CITI_SC, alt: 'Imagen 16' },
    { src: COLEGIO_DE_BIOLOGOS, alt: 'Imagen 17' },
    { src: COLEGIO_DE_BIOQUIMICA, alt: 'Imagen 18' },
    { src: CPCC, alt: 'Imagen 19' },
    { src: ICAC, alt: 'Imagen 20' },
    { src: LSC, alt: 'Imagen 21' },
    { src: SIB_ST, alt: 'Imagen 22' },
    { src: SIBBENI, alt: 'Imagen 23' },
    { src: SIBC, alt: 'Imagen 24' },
    { src: SIBCH, alt: 'Imagen 25' },
    { src: SIBO, alt: 'Imagen 26' },
    ]);

    const carousels = ref(carouselsData.carousels); // Asignar datos directamente del JSON
const selectedCarousel = ref(null);
const isModalOpen = ref(false);

const infiniteImages = computed(() => [...images.value, ...images.value, ...images.value]);

const openModal = (index) => {
selectedCarousel.value = carousels.value[index];
isModalOpen.value = true;
};

const closeModal = () => {
isModalOpen.value = false;
};

onMounted(() => {

});
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
  
  .animate-move-left {
    animation: moveLeft 60s linear infinite;
  }
  
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    position: relative;
    max-width: 600px;
    width: 100%;
  }
  
  .close-modal {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 50%;
    padding: 5px;
    cursor: pointer;
  }
  </style>
  