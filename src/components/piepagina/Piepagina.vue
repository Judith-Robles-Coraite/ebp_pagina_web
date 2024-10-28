<template>
  <!-- Pie de página -->
  <footer class="bg-gradient-to-r from-[#203C61] to-[#0A8B37] bg-opacity-100 text-white py-4 px-4">
    <div class="container mx-auto flex flex-col justify-center items-center text-center space-y-4">
      
      <div class="flex space-x-4 justify-center items-center">
        <!-- Botón de Facebook -->
        <a href="" target="_blank" rel="noopener noreferrer" class="group w-10 h-10 rounded-full border border-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-[#0A8B37]">
          <font-awesome-icon :icon="['fab', 'facebook-f']" class="text-base text-white group-hover:text-[#0A8B37]" />
        </a>
        <!-- Botón de Instagram -->
        <a href="" target="_blank" rel="noopener noreferrer" class="group w-10 h-10 rounded-full border border-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-[#0A8B37]">
          <font-awesome-icon :icon="['fab', 'instagram']" class="text-base text-white group-hover:text-[#0A8B37]" />
        </a>
        <!-- Botón de WhatsApp -->
        <a href="" target="_blank" rel="noopener noreferrer" class="group w-10 h-10 rounded-full border border-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-[#0A8B37]">
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-base text-white group-hover:text-[#0A8B37]" />
        </a>
        <!-- Botón de TikTok -->
        <a href="" target="_blank" rel="noopener noreferrer" class="group w-10 h-10 rounded-full border border-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-[#0A8B37]">
          <font-awesome-icon :icon="['fab', 'tiktok']" class="text-base text-white group-hover:text-[#0A8B37]" />
        </a>
      </div>

      <div class="flex justify-center w-full">
        <div class="w-full md:w-1/2 border-b border-white"></div>
      </div>

      <div class="flex justify-center">
        <ul class="flex flex-wrap justify-center space-x-6 text-sm">
          <li>Santa Cruz</li>
          <li>Potosí</li>
          <li>Cochabamba</li>
          <li>La Paz</li>
          <li>Trinidad</li>
          <li>Sucre</li>
          <li>Oruro</li>
        </ul>
      </div>

      <div class="text-sm text-center">
        © 2024 Escuela Boliviana de Posgrado. Todos los derechos reservados.
      </div>
    </div>
  </footer>
</template>

<script setup>
import logo from '../../assets/logo/logo1.png'
</script>
