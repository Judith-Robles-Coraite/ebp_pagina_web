<template>
  <div class="bg-white px-5 md:px-8 lg:px-10 py-2 lg:py-4 mx-auto">
    <!-- Título y descripción -->
    <div class="w-full text-center mb-0">
      <h2 class="text-xl md:text-3xl font-bold text-[#0A8B37] mt-2 md:mt-4">NUESTRAS SEDES</h2>
      <p class="text-gray-700 mt-2 sm:mt-4 px-0 sm:px-12 md:px-36">
        Contamos con múltiples sedes a nivel nacional, estratégicamente ubicadas para ofrecerte
        acceso a una educación de calidad sin importar dónde te encuentres. Conoce nuestras
        ubicaciones y elige la que mejor se adapte a tus necesidades.
      </p>
    </div>

    <!-- Contenedor principal -->
    <div class="flex flex-col lg:flex-row bg-white md:px-4 lg:px-10 lg:py-5 lg:pb-2 mx-auto max-w-screen-xl">
      <!-- Mapa de Bolivia -->
      <div class="lg:w-1/3 flex justify-center">
        <mapa :selectedSede="activeSede" @sedeSeleccionada="updateFromMap" />
      </div>

      <!-- Reseña de Sedes -->
      <div class="sedes-info w-full lg:w-2/3 bg-white border border-[#0A8B37] rounded-3xl shadow-lg p-0">
        <!-- Navbar de Sedes -->
        <div class="sedes-navbar flex justify-center  border-b border-[#0A8B37] mb-2">
          <a
            v-for="sede in sedes"
            :key="sede"
            :href="'#' + sede.toLowerCase()"
            class="py-1 px-4 text-base transition-colors duration-300"
            :class="{
              'text-white bg-[#0A8B37]': selectedSede === sede,
              'text-[#0A8B37]   hover:bg-[#d7d7d7ae]': selectedSede !== sede
            }"
            @click="updateTitle(sede)"
          >{{ sede }}</a>
        </div>

        <!-- Título -->
        <div class="">
          <h2 class="text-2xl font-bold text-center text-[#0A8B37]">{{ currentTitle }}</h2>
        </div>

        <!-- Botones -->
        <div class="flex justify-center">
          <div class="inline-flex rounded-full border border-[#0A8B37] p-1">
            <button
              @click="showGallery"
              :class="{
                'bg-[#0A8B37] text-white': showing === 'gallery',
                'hover:bg-[#d7d7d7ae] text-[#0A8B37]': showing !== 'gallery'
              }"
              class="rounded-full px-2 py-1 transition-colors duration-300 "
            >
              Galería de Fotos
            </button>
            <button
              @click="showLocation"
              :class="{
                'bg-[#0A8B37] text-white': showing === 'location',
                'hover:bg-[#d7d7d7ae] text-[#0A8B37]': showing !== 'location'
              }"
              class="rounded-full px-2 py-1 transition-colors duration-300"
            >
              Ubicación y Contacto
            </button>
            <button
              v-if="activeSede === 'Santa Cruz'"
              @click="showLab"
              :class="{
                'bg-[#0A8B37] text-white': showing === 'lab',
                'hover:bg-[#d7d7d7ae]  text-[#0A8B37]': showing !== 'lab'
              }"
              class="rounded-full px-2 py-1 transition-colors duration-300"
            >
              Laboratorio
            </button>
          </div>
        </div>

        <!-- Contenido dinámico -->



        <!------------ Información de Sedes---------->
        <!------------ LA PAZ---------->
        <div v-if="activeSede === 'La Paz'" class="sede-info">
        <div v-if="showing === 'gallery'">Contenido de Galería para La Paz</div>
        <div v-if="showing === 'location'"><lapaz/></div>
        </div>

        <!------------ LA ORURO---------->
        <div v-if="activeSede === 'Oruro'" class="sede-info">
          <div v-if="showing === 'gallery'">Contenido de Galería para O</div>
          <div v-if="showing === 'location'"><oruro/></div>
        </div>

        <!------------ POTOSÍ---------->
        <div v-if="activeSede === 'Potosí'" class="sede-info">
          <div v-if="showing === 'gallery'">Contenido de Galería para P</div>
          <div v-if="showing === 'location'"><potosi/></div>
        </div>

        <!------------ COCHABAMBA------->
        <div v-if="activeSede === 'Cochabamba'" class="sede-info">
          <div v-if="showing === 'gallery'">Contenido de Galería para C</div>
          <div v-if="showing === 'location'"><cochabamba/></div>
        </div>

        <!------------ SUCRE---------->
        <div v-if="activeSede === 'Sucre'" class="sede-info">
          <div v-if="showing === 'gallery'">Contenido de Galería para S</div>
          <div v-if="showing === 'location'"><sucre/></div>
        </div>

        <!------------ SANTA CRUZ---------->
        <div v-if="activeSede === 'Santa Cruz'" class="sede-info">
          <div v-if="showing === 'gallery'">Contenido de Galería para SC</div>
          <div v-if="showing === 'location'"><santacruz/></div>
          <div v-if="showing === 'lab'"><santacruzlab/></div>
        </div>

        <!------------ TRINIDAD---------->
        <div v-if="activeSede === 'Trinidad'" class="sede-info">
          <div v-if="showing === 'gallery'">Contenido de Galería para T</div>
          <div v-if="showing === 'location'"><trinidad/></div>
        </div>


        <!-- Iconos de Redes Sociales -->
        <div class="social-icons flex justify-center mt-8 space-x-4">
          <a href="#" class="text-green-700 hover:text-green-900"
            ><i class="fab fa-facebook-square fa-2x"></i
          ></a>
          <a href="#" class="text-green-700 hover:text-green-900"
            ><i class="fab fa-instagram-square fa-2x"></i
          ></a>
          <a href="#" class="text-green-700 hover:text-green-900"
            ><i class="fab fa-whatsapp-square fa-2x"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import lapaz from '../components/sedes/lapaz.vue'
import cochabamba from '../components/sedes/cochabamba.vue'
import oruro from '../components/sedes/oruro.vue'
import potosi from '../components/sedes/potosi.vue'
import santacruz from '../components/sedes/santacruz.vue'
import santacruzlab from '../components/sedes/santacruzlab.vue'
import sucre from '../components/sedes/sucre.vue'
import trinidad from '../components/sedes/trinidad.vue'
import mapa from '../components/sedes/mapa.vue'

export default {
  components: {
    lapaz,
    cochabamba,
    oruro,
    potosi,
    santacruz,
    santacruzlab,
    sucre,
    trinidad,
    mapa,
  },
  data() {
    return {
      sedes: ['La Paz', 'Oruro', 'Potosí', 'Cochabamba', 'Sucre', 'Santa Cruz', 'Trinidad'],
      currentTitle: 'Sucre',
      selectedSede: 'Sucre',
      activeSede: 'Sucre',
      showing: 'location',
    };
  },
  methods: {
    updateTitle(sede) {
      this.currentTitle = sede;
      this.selectedSede = sede;
      this.activeSede = sede;
      // Aquí puedes añadir código para actualizar el mapa si es necesario
    },
    updateFromMap(sede) {
      this.updateTitle(sede); // Mantén la lógica de actualización en un solo lugar
    },
    showGallery() {
      this.showing = 'gallery';
    },
    showLocation() {
      this.showing = 'location';
    },
    showLab() {
      this.showing = 'lab';
    },
  },
};
</script>
