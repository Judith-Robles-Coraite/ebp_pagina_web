<template>
  <div id="sedes" class="bg-white px-5 md:px-8 lg:px-10 py-2 lg:py-4 mx-auto">
    <div class="w-full text-center mb-0">
      <h2 class="text-xl md:text-3xl font-bold text-[#0A8B37] mt-2 md:mt-4">NUESTRAS SEDES</h2>
      <p class="text-gray-700 mt-2 sm:mt-4 px-0 sm:px-12 md:px-36">
        Contamos con múltiples sedes a nivel nacional, estratégicamente ubicadas para ofrecerte
        acceso a una educación de calidad sin importar dónde te encuentres. Conoce nuestras
        ubicaciones y elige la que mejor se adapte a tus necesidades.
      </p>
    </div>
    <div
      class="flex flex-col lg:flex-row bg-white md:px-4 lg:px-10 lg:py-5 lg:pb-2 mx-auto max-w-screen-xl"
    >
      <!-- Mapa de Bolivia -->
      <div class="lg:w-1/3 flex justify-center">
        <MapaBolivia :selectedSede="selectedSede" @sedeSeleccionada="updateFromMap" />
      </div>

      <!-- Reseña de Sedes -->
      <div
        class="sedes-info w-full lg:w-2/3 bg-white border border-[#0A8B37] rounded-3xl shadow-lg p-0"
      >
        <!-- Navbar de Sedes -->
        <div class="sedes-navbar hidden md:flex justify-center border-b border-[#0A8B37] mb-2">
          <a
            v-for="sede in sedes"
            :key="sede.nombre"
            class="py-1 px-4 text-base transition-colors duration-300 cursor-pointer"
            :class="{
              'text-white bg-[#0A8B37]': selectedSede === sede.nombre,
              'text-[#0A8B37] hover:bg-[#d7d7d7ae]': selectedSede !== sede.nombre
            }"
            @click="
              () => {
                changeSede(sede.nombre)
                sede.tipo === 'lab' ? changeShowing('location') : ''
                showing === 'lab' && !sede.botones.some((boton) => boton.tipo === 'lab')
                  ? changeShowing('location')
                  : ''
              }
            "
          >
            {{ sede.titulo }}
          </a>
        </div>

        <!-- Título -->
        <div v-for="sede in sedes" :key="sede.nombre">
          <h2
            v-if="selectedSede === sede.nombre"
            class="text-2xl font-bold text-center text-[#0A8B37] mb-2 py-4 md:py-0"
          >
            {{ sede.titulo }}
          </h2>
        </div>

        <!-- Botones de las sedes en base al valor de selectedSede-->
        <div class="flex justify-center" v-for="sede in sedes" :key="sede.nombre">
          <div
            v-if="selectedSede === sede.nombre"
            class="inline-flex rounded-full border border-[#0A8B37] p-1"
          >
            <button
              v-for="boton in sede.botones"
              :key="boton.tipo"
              @click="changeShowing(boton.tipo)"
              :class="{
                'bg-[#0A8B37] text-white': showing === boton.tipo,
                'hover:bg-[#d7d7d7ae] text-[#0A8B37]': showing !== boton.tipo
              }"
              class="rounded-full px-2 py-1 transition-colors duration-300"
            >
              {{ boton.texto }}
            </button>
          </div>
        </div>

        <!-- Contenido SEDE -->
        <div v-for="sede in sedes" :key="sede.nombre">
          <div v-if="selectedSede === sede.nombre" class="sede-info">
            <!-- Galería de Fotos -->
            <div v-if="showing === 'gallery'">
              <carruselsede
                :images="sede.galeria.images"
                :facebook="sede.socialMedia.facebook"
                :whatsapp="sede.socialMedia.whatsapp"
                :instagram="sede.socialMedia.instagram"
                :tiktok="sede.socialMedia.tiktok"
              />
            </div>
            <div v-if="showing === 'location'">
              <!-- aqui esta la sede, solo recibe los parametros-->
              <Sede
                :direction="sede.location.direction"
                :cellPhone="sede.location.cellPhone"
                :telephone="sede.location.telephone"
                :mapLocation="sede.location.mapLocation"
                :facebook="sede.socialMedia.facebook"
                :whatsapp="sede.socialMedia.whatsapp"
                :instagram="sede.socialMedia.instagram"
                :tiktok="sede.socialMedia.tiktok"
              />
            </div>
            <div v-if="showing === 'lab'">
              <laboratoriosede
                :direction="sede.lab.direction"
                :cellPhone="sede.lab.cellPhone"
                :telephone="sede.lab.telephone"
                :mapLocation="sede.lab.mapLocation"
                :facebook="sede.socialMedia.facebook"
                :whatsapp="sede.socialMedia.whatsapp"
                :instagram="sede.socialMedia.instagram"
                :tiktok="sede.socialMedia.tiktok"
              />
            </div>
          </div>
        </div>

        <!-- Iconos de Redes Sociales -->
        <div class="social-icons flex justify-center mt-8 space-x-4">
          <a href="#" class="text-green-700 hover:text-green-900">
            <i class="fab fa-facebook-square fa-2x"></i>
          </a>
          <a href="#" class="text-green-700 hover:text-green-900">
            <i class="fab fa-instagram-square fa-2x"></i>
          </a>
          <a href="#" class="text-green-700 hover:text-green-900">
            <i class="fab fa-whatsapp-square fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Sede from './Sede.vue'

import carruselsede from './Carruselsede.vue'
import laboratoriosede from './Laboratoriosede.vue'
import { ref } from 'vue'
import MapaBolivia from './MapaBolivia.vue';



/* info de las sedes ddd */
const sedes = ref([
  {
    nombre: 'lapaz',
    titulo: 'La Paz',
    galeria: {
      images: [
        'src/assets/carusel/img4.jpg',
        'src/assets/carusel/img4.jpg',
        'src/assets/carusel/img4.jpg'
      ]
    },
    location: {
      direction: 'Av. 16de Julio N°1800 (Edificio Cosmos: Piso 11- OF.4) ',
      mapLocation:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.451788458943!2d-68.1344499258197!3d-16.50327388424095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f2156c08425bb%3A0x6d0b6ee98fa7d427!2sEscuela%20Boliviana%20de%20Posgrado%20-%20Sede%20La%20Paz!5e0!3m2!1ses!2sbo!4v1725116089305!5m2!1ses!2sbo',
      telephone: ['(4)64-65495 - (4)64-67463'],
      cellPhone: ['68016406']
    },
    socialMedia: {
      facebook: ['https://www.facebook.com/ESCUELABOLIVIANADEPOSGRADO.EBP'],
      instagram: ['https://www.instagram.com/ebpbolivia/'],
      whatsapp: ['https://wa.link/e95z46'],
      tiktok: ['https://www.tiktok.com/@escuelabolivianaposgrad0']
    },
    botones: [
      { tipo: 'gallery', texto: 'Galería de Fotos' },
      { tipo: 'location', texto: 'Ubicación y Contacto' }
    ]
  },
  {
    nombre: 'oruro',
    titulo: 'Oruro',
    galeria: {
      images: [
        'src/assets/carusel/img4.jpg',
        'src/assets/carusel/img4.jpg',
        'src/assets/carusel/img4.jpg'
      ]
    },
    location: {
      direction: 'Calle Junín, (entre Pagador y Potosí) Edif. Divina Providencia 1er piso Of. 18',
      mapLocation:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.1974315178036!2d-67.11332962505104!3d-17.969549283020278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e2b1ed4a730663%3A0xd647a8af499b657a!2sEscuela%20Boliviana%20de%20Posgrado%20-%20Sede%20Oruro!5e0!3m2!1ses!2sbo!4v1725309411569!5m2!1ses!2sbo',
      telephone: [],
      cellPhone: ['73316179']
    },
    socialMedia: {
      facebook: [
        'https://www.facebook.com/people/Escuela-Boliviana-de-Posgrado-Oruro/100089185007920/'
      ],
      instagram: ['https://www.instagram.com/ebpbolivia/'],
      whatsapp: ['https://wa.link/v81pta'],
      tiktok: ['https://www.tiktok.com/@escuelabolivianaposgrad0']
    },
    botones: [
      { tipo: 'gallery', texto: 'Galería de Fotos' },
      { tipo: 'location', texto: 'Ubicación y Contacto' }
    ]
  },
  {
    nombre: 'potosi',
    titulo: 'Potosí',
    galeria: {
      images: [
        'src/assets/carusel/img4.jpg',
        'src/assets/carusel/img4.jpg',
        'src/assets/carusel/img4.jpg'
      ]
    },
    location: {
      direction: 'Calle Bolivar #701 Galería Matilde Of. 19',
      mapLocation:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481142.93871186755!2d-66.36410421093753!3d-19.5875333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f94fa435cf71c7%3A0xbf8f6717bc5b1f38!2sEscuela%20Boliviana%20de%20Posgrado%20-%20Sede%20Potos%C3%AD!5e0!3m2!1ses!2sbo!4v1725309364248!5m2!1ses!2sbo',
      telephone: ['62-31100'],
      cellPhone: ['74401235']
    },
    socialMedia: {
      facebook: [
        'https://www.facebook.com/people/Escuela-Boliviana-de-Posgrado-Potos%C3%AD/100089271733421/'
      ],
      instagram: ['https://www.instagram.com/ebpbolivia/'],
      whatsapp: ['https://wa.link/ikv9lh'],
      tiktok: ['https://www.tiktok.com/@escuelabolivianaposgrad0']
    },
    botones: [
      { tipo: 'gallery', texto: 'Galería de Fotos' },
      { tipo: 'location', texto: 'Ubicación y Contacto' }
    ]
  },
  {
    nombre: 'cochabamba',
    titulo: 'Cochabamba',
    galeria: {
      images: [
        'src/assets/carusel/img4.jpg',
        'src/assets/carusel/img4.jpg',
        'src/assets/carusel/img4.jpg'
      ]
    },
    location: {
      direction: 'Av. Heroínas #518 y San Martín Edif. Centrum Piso 2 Of. 2 ',
      mapLocation:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.4175916391214!2d-66.15729132483489!3d-17.39173608349616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e373a1e890ca25%3A0x5f9353a3809a2097!2sEscuela%20Boliviana%20de%20Posgrado%20-%20Sede%20Cochabamba!5e0!3m2!1ses!2sbo!4v1725309273004!5m2!1ses!2sbo',
      telephone: [],
      cellPhone: ['73962839']
    },
    socialMedia: {
      facebook: [
        'https://www.facebook.com/p/Escuela-Boliviana-de-Posgrado-Cochabamba-100089319011365/'
      ],
      instagram: ['https://www.instagram.com/ebpbolivia/'],
      whatsapp: ['https://wa.link/oayotu'],
      tiktok: ['https://www.tiktok.com/@escuelabolivianaposgrad0']
    },
    botones: [
      { tipo: 'gallery', texto: 'Galería de Fotos' },
      { tipo: 'location', texto: 'Ubicación y Contacto' }
    ]
  },
  {
    nombre: 'sucre',
    titulo: 'Sucre',
    galeria: {
      images: [
        'src/assets/carusel/img4.jpg',
        'src/assets/carusel/img4.jpg',
        'src/assets/carusel/img4.jpg'
      ]
    },
    location: {
      direction: 'Calle Casimiro Olañeta #105 y 101 (entre Junín y Loa)',
      mapLocation:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.357755121845!2d-65.26706722114608!3d-19.04800193612789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93fbcf1258a13095%3A0x8608ca6664b7ebd0!2sEscuela%20Boliviana%20de%20Posgrado!5e0!3m2!1ses!2sbo!4v1725309460187!5m2!1ses!2sbo',
      telephone: ['64-65495'],
      cellPhone: ['73479522', '73478556']
    },
    socialMedia: {
      facebook: [
        'https://www.facebook.com/people/Escuela-Boliviana-de-Posgrado-Sucre/100089375243421/'
      ],
      instagram: ['https://www.instagram.com/ebpbolivia/'],
      whatsapp: ['https://wa.link/116w6u'],
      tiktok: ['https://www.tiktok.com/@escuelabolivianaposgrad0']
    },
    botones: [
      { tipo: 'gallery', texto: 'Galería de Fotos' },
      { tipo: 'location', texto: 'Ubicación y Contacto' }
    ]
  },
  {
    nombre: 'santacruz',
    titulo: 'Santa Cruz',
    galeria: {
      images: [
        'src/assets/carusel/img4.jpg',
        'src/assets/carusel/img4.jpg',
        'src/assets/carusel/img4.jpg'
      ]
    },
    location: {
      direction: 'Calle las piñas # 16 (Radial 26,entre 4to y 5to anillo) ',
      mapLocation:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.034884822639!2d-63.19355822505659!3d-17.742995383206125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1e911cb4c1b87%3A0xc3b666cf2954cf29!2sEscuela%20Boliviana%20de%20Posgrado%20-%20Sede%20Santa%20Cruz!5e0!3m2!1ses!2sbo!4v1725309673735!5m2!1ses!2sbo',
      telephone: [],
      cellPhone: ['73397817', '63549774', '73436444']
    },
    socialMedia: {
      facebook: [
        'https://www.facebook.com/p/Escuela-Boliviana-de-Posgrado-Santa-Cruz-de-la-Sierra-100087396728816/?_rdr'
      ],
      instagram: ['https://www.instagram.com/ebpbolivia/'],
      whatsapp: ['https://wa.link/4c1yqz'],
      tiktok: ['https://www.tiktok.com/@escuelabolivianaposgrad0']
    },
    botones: [
      { tipo: 'gallery', texto: 'Galería de Fotos' },
      { tipo: 'location', texto: 'Ubicación y Contacto' },
      { tipo: 'lab', texto: 'Laboratorio' }
    ],

    lab: {
      direction: 'Urubo, Zona Villa Bonita Av. Marayau #65 ',
      mapLocation:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d335.8588271184657!2d-63.22963327126785!3d-17.753642836971313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1dd6de12540c9%3A0xa408ff41291c6158!2sESCUELA%20BOLIVIANA%20DE%20POSGRADO!5e0!3m2!1ses!2sbo!4v1725310924175!5m2!1ses!2sbo',
      telephone: [],
      cellPhone: ['73397817', '63549774', '73436444']
    },
    socialMedia: {
      facebook: [
        'https://www.facebook.com/p/Escuela-Boliviana-de-Posgrado-Santa-Cruz-de-la-Sierra-100087396728816/?_rdr'
      ],
      instagram: ['https://www.instagram.com/ebpbolivia/'],
      whatsapp: ['https://wa.link/4c1yqz'],
      tiktok: ['https://www.tiktok.com/@escuelabolivianaposgrad0']
    }
  },
  {
    nombre: 'trinidad',
    titulo: 'Trinidad',
    galeria: {
      images: [
        'src/assets/carusel/img4.jpg',
        'src/assets/carusel/img4.jpg',
        'src/assets/carusel/img4.jpg'
      ]
    },
    location: {
      direction: 'Calle La paz. (frente a la Fiscalía Departamental del Beni) ',
      mapLocation:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.7980428338306!2d-64.90792372512244!3d-14.836588485678254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93dd6f8e192fea6d%3A0xcaf0ec36e3b895bc!2sEscuela%20Boliviana%20de%20Posgrado%20-%20Sede%20Trinidad!5e0!3m2!1ses!2sbo!4v1725309510358!5m2!1ses!2sbo',
      telephone: [],
      cellPhone: ['67357779', '63054794']
    },
    socialMedia: {
      facebook: [
        'https://www.facebook.com/p/Escuela-Boliviana-de-Posgrado-Sucre-100089375243421/?locale=es_LA'
      ],
      instagram: ['https://www.instagram.com/ebpbolivia/'],
      whatsapp: ['https://wa.me/tu-numero'],
      tiktok: ['https://www.tiktok.com/@tu-pagina']
    },
    botones: [
      { tipo: 'gallery', texto: 'Galería de Fotos' },
      { tipo: 'location', texto: 'Ubicación y Contacto' }
    ]
  }
])

//seleccion inicial por defecto
const selectedSede = ref('sucre')

const showing = ref('location')
//modifica la sede actual seleccionada
function changeSede(sede) {
  selectedSede.value = sede
}
//funcion para manejar lo que emite el componente mapa, en este caso emite un campio de sede al hacer click en el depto del mapa
function updateFromMap(sede) {
  changeSede(sede)
}
//controla que se muestra , contenido de galeria lab o location
function changeShowing(show) {
  showing.value = show
}
</script>

<style scoped>
/* Aquí puedes agregar estilos específicos del componente */
</style>
