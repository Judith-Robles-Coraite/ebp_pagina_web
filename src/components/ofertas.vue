<template>
  <!-- Navbar sección ofertas académicas -->
  <div class="bg-white py-4 px-4 md:px-8 lg:px-20">
    <div class="container mx-auto">
      <!-- Navbar -->
      <nav class="w-full flex justify-center">
        <ul id="menu" class="flex flex-wrap justify-center space-x-4 md:space-x-6 items-center text-center text-xs md:text-base">
          <li>
            <a href="#" class="block text-[#0A8B37] hover:text-[#07872E] hover:font-bold hover:underline hover:decoration-[#07872E] hover:decoration-[5px] hover:[text-underline-offset:14px] pb-3 transition duration-100">Doctorados</a>
          </li>
          <li>
            <a href="#" class="block text-[#0A8B37] hover:text-[#07872E] hover:font-bold hover:underline hover:decoration-[#07872E] hover:decoration-[5px] hover:[text-underline-offset:14px] pb-3 transition duration-100">Maestrías</a>
          </li>
          <li>
            <a href="#" class="block text-[#0A8B37] hover:text-[#07872E] hover:font-bold hover:underline hover:decoration-[#07872E] hover:decoration-[5px] hover:[text-underline-offset:14px] pb-3 transition duration-100">Especialidades</a>
          </li>
          <li>
            <a href="#" class="block text-[#0A8B37] hover:text-[#07872E] hover:font-bold hover:underline hover:decoration-[#07872E] hover:decoration-[5px] hover:[text-underline-offset:14px] pb-3 transition duration-100">Diplomados</a>
          </li>
        </ul>
      </nav>
      <!-- Línea verde -->
      <div class="w-full mt-0">
        <div class="border-b-2 border-[#0A8B37]"></div> <!-- Línea verde ocupa el 100% -->
      </div>
    </div>
  </div>

  <!-- Sección ofertas académicas -->
<div class="bg-white py-2 px-4 md:px-8 lg:px-20 mx-auto">
  <h2 class="text-center text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-[#0A8B37]">OFERTAS ACADÉMICAS</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-items-center">
    <div class="bg-white shadow-md rounded overflow-hidden w-full max-w-sm flex flex-col">
      <img :src="ofimg1" alt="Programa 1" class="w-full h-100 object-cover" />
      <div class="flex justify-center p-4 mt-auto">
        <button class="flex items-center justify-center bg-green-600 text-white py-3 px-16 sm:py-2 sm:px-4 rounded-full text-lg sm:text-sm">
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-lg text-white mr-2" /> INSCRÍBETE AHORA
        </button>
      </div>
    </div>

    <!-- Repetir la estructura anterior para otros cards -->
    
    <div class="bg-white shadow-md rounded overflow-hidden w-full max-w-sm flex flex-col">
      <img :src="ofimg2" alt="Programa 1" class="w-full h-100 object-cover" />
      <div class="flex justify-center p-4 mt-auto">
        <button class="flex items-center justify-center bg-green-600 text-white py-3 px-16 sm:py-2 sm:px-4 rounded-full text-lg sm:text-sm">
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-lg text-white mr-2" /> INSCRÍBETE AHORA
        </button>
      </div>
    </div>

    <!-- Repetir la estructura anterior para otros cards -->
    <div class="bg-white shadow-md rounded overflow-hidden w-full max-w-sm flex flex-col">
      <img :src="ofimg1" alt="Programa 1" class="w-full h-100 object-cover" />
      <div class="flex justify-center p-4 mt-auto">
        <button class="flex items-center justify-center bg-green-600 text-white py-3 px-16 sm:py-2 sm:px-4 rounded-full text-lg sm:text-sm">
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-lg text-white mr-2" /> INSCRÍBETE AHORA
        </button>
      </div>
    </div>

    <!-- Repetir la estructura anterior para otros cards -->
    <div class="bg-white shadow-md rounded overflow-hidden w-full max-w-sm flex flex-col">
      <img :src="ofimg2" alt="Programa 1" class="w-full h-100 object-cover" />
      <div class="flex justify-center p-4 mt-auto">
        <button class="flex items-center justify-center bg-green-600 text-white py-3 px-16 sm:py-2 sm:px-4 rounded-full text-lg sm:text-sm">
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-lg text-white mr-2" /> INSCRÍBETE AHORA
        </button>
      </div>
    </div>

    <!-- Repetir la estructura anterior para otros cards -->
    <div class="bg-white shadow-md rounded overflow-hidden w-full max-w-sm flex flex-col">
      <img :src="ofimg1" alt="Programa 1" class="w-full h-100 object-cover" />
      <div class="flex justify-center p-4 mt-auto">
        <button class="flex items-center justify-center bg-green-600 text-white py-3 px-16 sm:py-2 sm:px-4 rounded-full text-lg sm:text-sm">
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-lg text-white mr-2" /> INSCRÍBETE AHORA
        </button>
      </div>
    </div>

    <!-- Repetir la estructura anterior para otros cards -->
    <div class="bg-white shadow-md rounded overflow-hidden w-full max-w-sm flex flex-col">
      <img :src="ofimg2" alt="Programa 1" class="w-full h-100 object-cover" />
      <div class="flex justify-center p-4 mt-auto">
        <button class="flex items-center justify-center bg-green-600 text-white py-3 px-16 sm:py-2 sm:px-4 rounded-full text-lg sm:text-sm">
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-lg text-white mr-2" /> INSCRÍBETE AHORA
        </button>
      </div>
    </div>

    <!-- Repetir la estructura anterior para otros cards -->
    <div class="bg-white shadow-md rounded overflow-hidden w-full max-w-sm flex flex-col">
      <img :src="ofimg1" alt="Programa 1" class="w-full h-100 object-cover" />
      <div class="flex justify-center p-4 mt-auto">
        <button class="flex items-center justify-center bg-green-600 text-white py-3 px-16 sm:py-2 sm:px-4 rounded-full text-lg sm:text-sm">
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-lg text-white mr-2" /> INSCRÍBETE AHORA
        </button>
      </div>
    </div>

    <!-- Repetir la estructura anterior para otros cards -->
    <div class="bg-white shadow-md rounded overflow-hidden w-full max-w-sm flex flex-col">
      <img :src="ofimg2" alt="Programa 1" class="w-full h-100 object-cover" />
      <div class="flex justify-center p-4 mt-auto">
        <button class="flex items-center justify-center bg-green-600 text-white py-3 px-16 sm:py-2 sm:px-4 rounded-full text-lg sm:text-sm">
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-lg text-white mr-2" /> INSCRÍBETE AHORA
        </button>
      </div>
    </div>

    <!-- Repetir la estructura anterior para otros cards -->
    <div class="bg-white shadow-md rounded overflow-hidden w-full max-w-sm flex flex-col">
      <img :src="ofimg1" alt="Programa 1" class="w-full h-100 object-cover" />
      <div class="flex justify-center p-4 mt-auto">
        <button class="flex items-center justify-center bg-green-600 text-white py-3 px-16 sm:py-2 sm:px-4 rounded-full text-lg sm:text-sm">
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-lg text-white mr-2" /> INSCRÍBETE AHORA
        </button>
      </div>
    </div>

    <!-- Repetir la estructura anterior para otros cards -->

  </div>
</div>
</template>

<script>
import ofimg1 from '../assets/ofertas_academicas/doc1.jpg'
import ofimg2 from '../assets/ofertas_academicas/doc2.jpg'


export default {
  data() {
    return {
      ofimg1,
      ofimg2, // Define la propiedad img7 aquí con la ruta de la imagen
    };
  },
};
</script>
