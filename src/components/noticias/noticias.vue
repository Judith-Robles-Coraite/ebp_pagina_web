<template>
  <div class="max-w-7xl mx-auto px-4 py-8 pt-[82px] overflow-hidden">
    <div class="text-center">
      <h2 class="text-xl md:text-3xl font-bold text-[#0A8B37] mb-2">NOTICIAS</h2>
      <div class="border-t-2 border-[#0A8B37] w-full pb-4"></div>
    </div>
    
    <div class="flex flex-col md:flex-row gap-6">
      <!-- Noticia Principal -->
      <div class="md:w-2/3 bg-white rounded-lg overflow-hidden shadow-lg">
        <img :src="newsList[0].images[0]" alt="Noticia Principal" class="w-full h-64 object-cover" />
        <div class="p-6">
          <p class="text-sm text-gray-400 mb-2">{{ newsList[0].date }}</p>
          <h3 class="text-xl font-semibold mb-4">{{ newsList[0].title }}</h3>
          <p class="text-gray-600 mb-6 text-justify">{{ newsList[0].description }}</p>
          <!-- Botón "Leer más" -->
          <button @click="openModal(newsList[0])" class="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-green-700 focus:outline-none">
            Leer más →
          </button>
        </div>
      </div>
      
      <!-- Noticias Secundarias -->
      <div class="md:w-1/3 flex flex-col gap-6">
        <div v-for="(news, index) in newsList.slice(1, 3)" :key="index" class="bg-white rounded-lg overflow-hidden shadow-lg">
          <img :src="news.images[0]" :alt="news.title" class="w-full h-32 object-cover" />
          <div class="p-4">
            <p class="text-sm text-gray-400 mb-2">{{ news.date }}</p>
            <h4 class="text-lg font-semibold mb-2">{{ news.title }}</h4>
            <!-- Botón "Leer más" -->
            <button @click="openModal(news)" class="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-green-700 focus:outline-none">
              Leer más →
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Noticias adicionales (a partir de la 4ta) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
      <div v-for="(news, index) in newsList.slice(3)" :key="index" class="bg-white rounded-lg overflow-hidden shadow-lg">
        <img :src="news.images[0]" :alt="news.title" class="w-full h-40 object-cover" />
        <div class="p-4">
          <p class="text-sm text-gray-400 mb-2">{{ news.date }}</p>
          <h4 class="text-lg font-semibold mb-2">{{ news.title }}</h4>
          <p class="text-gray-600 mb-4 text-justify">{{ news.description }}</p>
          <!-- Botón "Leer más" -->
          <button @click="openModal(news)" class="bg-green-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-green-700 focus:outline-none">
            Leer más →
          </button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="isModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div class="bg-white p-6 rounded-lg max-w-lg w-full relative">
        <h3 class="text-xl font-semibold mb-4">{{ selectedNews.title }}</h3>
        <p class="text-gray-400 mb-2">{{ selectedNews.date }}</p>
        <!-- SIA HAY MAS IMAGENES-->
        <div v-if="selectedNews.images.length > 1" class="mb-6 relative">
          <div v-for="(image, index) in selectedNews.images" :key="index" v-show="currentImageIndex === index" class="relative">
            <button @click="prevImage" class="absolute left-4 w-8 h-8 md:w-10 md:h-10 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-10 rounded-full text-white flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 650 960" width="20px" fill="#e8eaed">
                <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z"/>
              </svg>
            </button>
            <img :src="image" alt="Imagen del carrusel" class="w-full h-64 object-cover mb-4" />
            <button @click="nextImage" class="absolute right-4 w-8 h-8 md:w-10 md:h-10 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-10 rounded-full text-white flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#e8eaed">
                <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
              </svg>
            </button>
          </div>
        </div>
        <!-- Si solo hay una imagen -->
        <div v-else class="mb-6">
          <img :src="selectedNews.images[0]" alt="Imagen del carrusel" class="w-full h-64 object-cover mb-4" />
        </div>

        <p class="text-gray-600 text-justify">{{ selectedNews.description }}</p>
        <button @click="closeModal" class="mx-auto mt-4 w-20 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-500 focus:outline-none">
          Cerrar
        </button>
      </div>
    </div>
  </div>
</template>




<script setup>
import { ref } from 'vue';
import img6 from "../../assets/carusel/img6.jpg";
import img5 from "../../assets/carusel/img8.jpg";
import img4 from "../../assets/carusel/img4.jpg";

const newsList = [
  {
    images: [img6, img5], // Aquí puedes agregar más imágenes
    date: '28 enero 2024 17:32',
    title: 'PRÁCTICAS EN MODALIDAD PRESENCIAL DE LA MAESTRÍA EN MICROBIOLOGÍA, PARASITOLOGÍA E INMUNODIAGNÓSTICO',
    description: 'El 26, 27 y 28 de Enero de 2024, en Santa Cruz (Urubó) en laboratorio propio de enseñanza de la Escuela Boliviana de Posgrado, se desarrolló las prácticas en modalidad presencial de la MAESTRÍA EN MICROBIOLOGÍA,PARASITOLOGÍA E INMUNODIAGNÓSTICO, de los Módulos: Parasitología General, Diagnóstico Parasitológico y Técnicas de Inmunodiagnóstico, bajo la dirección del docente M.SC. Carlos Eduardo Caballero Barrón',
  },
  {
    images: [img6, img5], // Aquí puedes agregar más imágenes
    date: '23 diciembre 2024 17:22',
    title: 'MINISTERIO PÚBLICO SOCIALIZA EL PROTOCOLO...',
    description: 'El 22 y 23 de Diciembre de 2023, en Santa Cruz (Urubó) en laboratorio propio de enseñanza de la Escuela Boliviana de Posgrado, se desarrolló la segunda fase de las prácticas en modalidad presencial del programa de MAESTRIA EN BIOLOGÍA Y GENÉTICA MOLECULAR, Docente MSc. Carmen Delgado Barrera.',
  },
  {
    images: [img6, img5], // Aquí puedes agregar más imágenes
    date: '10 octubre 2024 18:12',
    title: 'SENTENCIAN A 30 AÑOS DE CÁRCEL A ESPAÑOL...',
    description: 'Prensa FGE, Santa Cruz (10.10.2024)...',
  },
  {
    images: [img6, img5], // Aquí puedes agregar más imágenes
    date: '10 octubre 2024 18:12',
    title: 'SENTENCIAN A 30 AÑOS DE CÁRCEL A ESPAÑOL...',
    description: 'Prensa FGE, Santa Cruz (10.10.2024)...',
  },
  {
    images: [img6, img5], // Aquí puedes agregar más imágenes
    date: '10 octubre 2024 18:12',
    title: 'SENTENCIAN A 30 AÑOS DE CÁRCEL A ESPAÑOL...',
    description: 'Prensa FGE, Santa Cruz (10.10.2024)...',
  },
  {
    images: [img6, img5], // Aquí puedes agregar más imágenes
    date: '10 octubre 2024 18:12',
    title: 'SENTENCIAN A 30 AÑOS DE CÁRCEL A ESPAÑOL...',
    description: 'Prensa FGE, Santa Cruz (10.10.2024)...',
  },
  {
    images: [img6, img5], // Aquí puedes agregar más imágenes
    date: '10 octubre 2024 18:12',
    title: 'SENTENCIAN A 30 AÑOS DE CÁRCEL A ESPAÑOL...',
    description: 'Prensa FGE, Santa Cruz (10.10.2024)...',
  },
  {
    images: [img6, img5], // Aquí puedes agregar más imágenes
    date: '10 octubre 2024 18:12',
    title: 'SENTENCIAN A 30 AÑOS DE CÁRCEL A ESPAÑOL...',
    description: 'El 26, 27 y 28 de Enero de 2024, en Santa Cruz (Urubó) en laboratorio propio de enseñanza de la Escuela Boliviana de Posgrado, se desarrolló las prácticas en modalidad presencial de la MAESTRÍA EN MICROBIOLOGÍA,PARASITOLOGÍA E INMUNODIAGNÓSTICO, de los Módulos: Parasitología General, Diagnóstico Parasitológico y Técnicas de Inmunodiagnóstico, bajo la dirección del docente M.SC. Carlos Eduardo Caballero Barrón',
  },
  {
    images: [img6, img5], // Aquí puedes agregar más imágenes
    date: '10 octubre 2024 18:12',
    title: 'SENTENCIAN A 30 AÑOS DE CÁRCEL A ESPAÑOL...',
    description: 'El 26, 27 y 28 de Enero de 2024, en Santa Cruz (Urubó) en laboratorio propio de enseñanza de la Escuela Boliviana de Posgrado, se desarrolló las prácticas en modalidad presencial de la MAESTRÍA EN MICROBIOLOGÍA,PARASITOLOGÍA E INMUNODIAGNÓSTICO, de los Módulos: Parasitología General, Diagnóstico Parasitológico y Técnicas de Inmunodiagnóstico, bajo la dirección del docente M.SC. Carlos Eduardo Caballero Barrón',
  },
  {
    images: [img6, img5], // Aquí puedes agregar más imágenes
    date: '10 octubre 2024 18:12',
    title: 'SENTENCIAN A 30 AÑOS DE CÁRCEL A ESPAÑOL...',
    description: 'El 26, 27 y 28 de Enero de 2024, en Santa Cruz (Urubó) en laboratorio propio de enseñanza de la Escuela Boliviana de Posgrado, se desarrolló las prácticas en modalidad presencial de la MAESTRÍA EN MICROBIOLOGÍA,PARASITOLOGÍA E INMUNODIAGNÓSTICO, de los Módulos: Parasitología General, Diagnóstico Parasitológico y Técnicas de Inmunodiagnóstico, bajo la dirección del docente M.SC. Carlos Eduardo Caballero Barrón',
  },
  {
    images: [img6, img5], // Aquí puedes agregar más imágenes
    date: '10 octubre 2024 18:12',
    title: 'SENTENCIAN A 30 AÑOS DE CÁRCEL A ESPAÑOL...',
    description: 'El 26, 27 y 28 de Enero de 2024, en Santa Cruz (Urubó) en laboratorio propio de enseñanza de la Escuela Boliviana de Posgrado, se desarrolló las prácticas en modalidad presencial de la MAESTRÍA EN MICROBIOLOGÍA,PARASITOLOGÍA E INMUNODIAGNÓSTICO, de los Módulos: Parasitología General, Diagnóstico Parasitológico y Técnicas de Inmunodiagnóstico, bajo la dirección del docente M.SC. Carlos Eduardo Caballero Barrón',
  }
];


// Modal y carrusel
const isModalOpen = ref(false);
const selectedNews = ref(null);
const currentImageIndex = ref(0);

const openModal = (news) => {
  selectedNews.value = news;
  currentImageIndex.value = 0;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  }
};

const nextImage = () => {
  if (currentImageIndex.value < selectedNews.value.images.length - 1) {
    currentImageIndex.value++;
  }
};
</script>

<style scoped>
/* Estilos adicionales para el modal */
</style>
