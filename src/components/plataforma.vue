<template>
  <div class="bg-white px-10 md:px-8 lg:px-15 py-2 lg:py-4 mx-auto">
    <div class="w-full text-center mb-0">
      <h2 class="text-xl md:text-3xl font-bold text-[#0A8B37] mt-2 md:mt-4">
        NUESTRA PLATAFORMA DE APRENDIZAJE
      </h2>
      <p class="text-gray-700 mt-2 sm:mt-4 px-0 sm:px-12 md:px-36">
        Brindamos un entorno educativo integral enfocado en el desarrollo profesional y académico de
        nuestros estudiantes, con servicios y recursos diseñados para optimizar su experiencia de
        aprendizaje.
      </p>
    </div>

    <div class="flex flex-col lg:flex-row bg-white md:px-4 lg:px-10 mx-auto max-w-screen-xl">
      <!-- Imagen - Colocada arriba en dispositivos móviles -->
      <div class="lg:w-1/2 flex py-0 lg:py-5 justify-center order-1 lg:order-2">
        <img :src="currentImage" alt="Imagen de plataforma" class="w-3/4 h-auto object-cover" />
      </div>

      <!-- Lista - Colocada abajo en dispositivos móviles -->
      <div
        class="lg:w-1/2 flex flex-col lg:flex-row items-center lg:items-start py-0 lg:py-10 lg:pb-4 justify-center order-2 lg:order-1"
      >
        <div class="flex items-center">
          <div class="hidden lg:block w-1 h-32 lg:h-96 bg-[#0A8B37] lg:mr-6 mr-4"></div>
          <!-- Línea verde oculta en móviles -->
          <ul class="flex flex-col items-start">
            <li
              @mouseover="hoverImage('moodle')"
              class="relative cursor-pointer mb-4 text-gray-700 hover:text-green-700 flex items-start"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                fill="#0A8B37"
                class="mr-4"
              >
                <path
                  d="M0-160v-80h160v-40q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280v40h160v80H0Zm160-200h640v-400H160v400Zm0 0v-400 400Z"
                />
              </svg>
              <div>
                <span class="block font-bold">MOODLE</span>
                <span class="block text-green-700 text-sm hover:underline">
                  Aula Virtual disponible las 24 Horas.
                </span>
              </div>
            </li>
            <li
              @mouseover="hoverImage('zoom')"
              class="relative cursor-pointer mb-4 text-gray-700 hover:text-green-700 flex items-center"
            >
              <!-- Ícono -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                fill="#0A8B37"
                class="mr-4"
              >
                <path
                  d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h480q33 0 56.5 23.5T720-720v180l160-160v440L720-420v180q0 33-23.5 56.5T640-160H160Z"
                />
              </svg>
              <!-- Contenido -->
              <div>
                <span class="block font-bold">ZOOM</span>
                <span class="block text-green-700 text-sm hover:underline">
                  Interacción directa con el Docente.
                </span>
              </div>
            </li>
            <li
              @mouseover="hoverImage('activities')"
              class="relative cursor-pointer mb-4 text-gray-700 hover:text-green-700 flex items-center"
            >
              <!-- Ícono -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                fill="#0A8B37"
                class="mr-4"
              >
                <path
                  d="M439-82q-76-8-141.5-42.5t-113.5-88Q136-266 108.5-335T81-481q0-155 102.5-268.5T440-880v80q-121 17-200 107.5T161-481q0 121 79 211.5T439-162v80Zm40-198L278-482l57-57 104 104v-245h80v245l103-103 57 58-200 200Zm40 198v-80q43-6 82.5-23t73.5-43l58 58q-47 37-101 59.5T519-82Zm158-652q-35-26-74.5-43T520-800v-80q59 6 113 28.5T733-792l-56 58Zm112 506-56-57q26-34 42-73.5t22-82.5h82q-8 59-30 113.5T789-228Zm8-293q-6-43-22-82.5T733-677l56-57q38 45 61 99.5T879-521h-82Z"
                />
              </svg>
              <!-- Contenido -->
              <div>
                <span class="block font-bold">ACTIVIDADES Y RECURSOS ACADÉMICOS</span>
                <span class="block text-green-700 text-sm hover:underline">
                  Disponible las 24 Horas en Aula Virtual.
                </span>
              </div>
            </li>
            <li
              @mouseover="hoverImage('practices')"
              class="relative cursor-pointer mb-4 text-gray-700 hover:text-green-700 flex items-center"
            >
              <!-- Ícono -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                fill="#0A8B37"
                class="mr-4"
              >
                <path
                  d="M200-120v-80h200v-80q-83 0-141.5-58.5T200-480q0-61 33.5-111t90.5-73q8-34 35.5-55t62.5-21l-22-62 38-14-14-36 76-28 12 38 38-14 110 300-38 14 14 38-76 28-12-38-38 14-24-66q-15 14-34.5 21t-39.5 5q-22-2-41-13.5T338-582q-27 16-42.5 43T280-480q0 50 35 85t85 35h320v80H520v80h240v80H200Zm346-458 36-14-68-188-38 14 70 188Zm-126-22q17 0 28.5-11.5T460-640q0-17-11.5-28.5T420-680q-17 0-28.5 11.5T380-640q0 17 11.5 28.5T420-600Zm126 22Zm-126-62Zm0 0Z"
                />
              </svg>
              <!-- Contenido -->
              <div>
                <span class="block font-bold">PRÁCTICAS EN LABORATORIOS Y GABINETES PROPIOS</span>
                <span class="block text-green-700 text-sm hover:underline">
                  Laboratorio bioquímico, clínico, biología molecular y gabinete de ultrasonografía.
                </span>
              </div>
            </li>
            <li
              @mouseover="hoverImage('recordings')"
              class="relative cursor-pointer mb-4 text-gray-700 hover:text-green-700 flex items-center"
            >
              <!-- Ícono -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                fill="#0A8B37"
                class="mr-4"
              >
                <path
                  d="m480-420 240-160-240-160v320Zm28 220h224q-7 26-24 42t-44 20L228-85q-33 5-59.5-15.5T138-154L85-591q-4-33 16-59t53-30l46-6v80l-36 5 54 437 290-36Zm-148-80q-33 0-56.5-23.5T280-360v-440q0-33 23.5-56.5T360-880h440q33 0 56.5 23.5T880-800v440q0 33-23.5 56.5T800-280H360Zm0-80h440v-440H360v440Zm220-220ZM218-164Z"
                />
              </svg>
              <!-- Contenido -->
              <div>
                <span class="block font-bold">GRABACIONES DE CLASES</span>
                <span class="block text-green-700 text-sm hover:underline"> En Aula Virtual. </span>
              </div>
            </li>
            <li
              @mouseover="hoverImage('tracking')"
              class="relative cursor-pointer mb-4 text-gray-700 hover:text-green-700 flex items-center"
            >
              <!-- Ícono -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                fill="#0A8B37"
                class="mr-4"
              >
                <path
                  d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"
                />
              </svg>
              <!-- Contenido -->
              <div>
                <span class="block font-bold">SEGUIMIENTO ACADÉMICO</span>
                <span class="block text-green-700 text-sm hover:underline"> Personalizado. </span>
              </div>
            </li>
            <li
              @mouseover="hoverImage('tutorials')"
              class="relative cursor-pointer mb-4 text-gray-700 hover:text-green-700 flex items-center"
            >
              <!-- Ícono -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32px"
                viewBox="0 -960 960 960"
                width="32px"
                fill="#0A8B37"
                class="mr-4"
              >
                <path
                  d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"
                />
              </svg>
              <!-- Contenido -->
              <div>
                <span class="block font-bold">TUTORIAS</span>
                <span class="block text-green-700 text-sm hover:underline">
                  Acompañamiento del trabajo de investigación hasta su conclusión.
                </span>
              </div>
            </li>

            <!-- Otras listas -->
            <!-- Código anterior para las otras listas -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moodleImg from '../assets/plataformas/Blog post-bro.svg'
import zoomImg from '../assets/plataformas/Webinar-bro.svg'
import activitiesImg from '../assets/plataformas/Content-bro.svg'
import practicesImg from '../assets/plataformas/Laboratory-bro.svg'
import recordingsImg from '../assets/plataformas/Media player-amico.svg'
import trackingImg from '../assets/plataformas/Call center-pana.svg'
import tutorialsImg from '../assets/plataformas/Online learning-bro.svg'

export default {
  data() {
    return {
      images: {
        moodle: moodleImg,
        zoom: zoomImg,
        activities: activitiesImg,
        practices: practicesImg,
        recordings: recordingsImg,
        tracking: trackingImg,
        tutorials: tutorialsImg
      },
      currentImage: moodleImg // Default image
    }
  },
  methods: {
    hoverImage(imageKey) {
      this.currentImage = this.images[imageKey]
    }
  }
}
</script>
