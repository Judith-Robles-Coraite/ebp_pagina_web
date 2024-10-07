<template>
  <div id="Carrusel" class="relative h-screen w-full overflow-hidden">
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
            <span class="text-lg font-semibold text-white">{{
              slide.cuadro
            }}</span>
          </div>
          <h1 class="text-5xl font-bold mb-4 font-bebas">{{ slide.text }}</h1>
          <p class="text-lg font-helvetica">
            {{ slide.textm }}
          </p>
        </div>
      </div>
    </div>

    <!-- Íconos estáticos -->
    <div
      class="absolute bottom-4 right-4 space-y-4 lg:top-1/2 lg:right-4 lg:bottom-auto lg:transform lg:-translate-y-1/2 lg:space-y-4"
    >
      <a
        href="https://www.facebook.com/people/Escuela-Boliviana-de-Posgrado-Sucre/100089375243421/"
        target="_blank"
        class="group block w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 hover:bg-white"
      >
        <font-awesome-icon
          :icon="['fab', 'facebook-f']"
          class="text-lg text-white group-hover:text-gray-800"
        />
      </a>
      <a
        href="https://www.instagram.com/ebpbolivia/"
        target="_blank"
        class="group block w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 hover:bg-white"
      >
        <font-awesome-icon
          :icon="['fab', 'instagram']"
          class="text-lg text-white group-hover:text-gray-800"
        />
      </a>
      <a
        href="https://www.tiktok.com/@escuelabolivianaposgrad0"
        target="_blank"
        class="group block w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 hover:bg-white"
      >
        <font-awesome-icon
          :icon="['fab', 'tiktok']"
          class="text-lg text-white group-hover:text-gray-800"
        />
      </a>
      <a
        href="https://wa.link/116w6u"
        target="_blank"
        class="group block w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 hover:bg-white"
      >
        <font-awesome-icon
          :icon="['fab', 'whatsapp']"
          class="text-lg text-white group-hover:text-gray-800"
        />
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
          'bg-gray-400': currentSlide !== index,
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import img6 from "../../assets/carusel/img6.jpg";
import img5 from "../../assets/carusel/img8.jpg";
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
  { index: 1, image: img5, cuadro: "MAESTRÍA EN:", text: "HEMATOLOGÍA Y HEMOTERAPIA", textm: 'TITULACIÓN OTORGADA POR  LA UNIVERSIDAD AUTÓNOMA DEL BENI "JOSE BALLIVIAN".   ', },
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
/* Agrega estilos específicos aquí si es necesario */
</style>
