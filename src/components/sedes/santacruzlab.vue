<template>
    <!-- Contenedor principal -->
    <div class="flex flex-col lg:flex-row justify-between items-start lg:items-center bg-white px-10 md:px-8 lg:px-15 py-2 lg:py-2 mx-auto">
      <!-- Información de Ubicación y Contacto -->
      <div class="location-info flex flex-col lg:w-1/2 p-4 space-y-4">
        <div class="flex items-center space-x-2">
          <div class="flex items-center justify-center w-8 h-8 min-w-8 min-h-8 border border-[#0A8B37] rounded-full transition duration-300 hover:bg-[#0A8B37] group flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" class="w-5 h-5 text-[#0A8B37] group-hover:text-white">
            <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
          </svg>
        </div><span>Urubo, Zona Villa Bonita Av. Marayau #65
        </span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="flex items-center justify-center w-8 h-8 min-w-8 min-h-8 border border-[#0A8B37] rounded-full transition duration-300 hover:bg-[#0A8B37] group">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" class="w-5 h-5 text-[#0A8B37] group-hover:text-white">
              <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm200 100q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM280-320h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z"/>
            </svg>
          </div>
          <span>73397817</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="flex items-center justify-center w-8 h-8 min-w-8 min-h-8 border border-[#0A8B37] rounded-full transition duration-300 hover:bg-[#0A8B37] group">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" class="w-5 h-5 text-[#0A8B37] group-hover:text-white">
              <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm200 100q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM280-320h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z"/>
            </svg>
          </div>
          <span>63549774</span>
        </div>
        <div class="flex items-center space-x-2">
          <div class="flex items-center justify-center w-8 h-8 min-w-8 min-h-8 border border-[#0A8B37] rounded-full transition duration-300 hover:bg-[#0A8B37] group">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor" class="w-5 h-5 text-[#0A8B37] group-hover:text-white">
              <path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm200 100q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM280-320h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z"/>
            </svg>
          </div>
          <span>73436444</span>
        </div>

      </div>
      
      <!-- Mapa de Google -->
      <div class="map-container lg:w-1/2 p-2">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d335.8588271184657!2d-63.22963327126785!3d-17.753642836971313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93f1dd6de12540c9%3A0xa408ff41291c6158!2sESCUELA%20BOLIVIANA%20DE%20POSGRADO!5e0!3m2!1ses!2sbo!4v1725310924175!5m2!1ses!2sbo" 
        width="300" height="250" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
      </div>
    </div>
  
    <!-- Botones de Redes Sociales -->
    <div class="flex justify-center items-center ">
      <!-- Botones de Redes Sociales -->
      <div class="social-buttons flex justify-center items-center p-2 bg-[#0A8B37] rounded-full w-auto h-10 space-x-2">
        <a href="#" class="group w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-[#0A8B37]">
          <font-awesome-icon :icon="['fab', 'facebook-f']" class="text-lg text-white group-hover:text-[#0A8B37]" />
        </a>
        <a href="#" class="group w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-[#0A8B37]">
          <font-awesome-icon :icon="['fab', 'instagram']" class="text-xl text-white group-hover:text-[#0A8B37]" />
        </a>
        <a href="#" class="group  w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-[#0A8B37]">
          <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-xl text-white group-hover:text-[#0A8B37]" />
        </a>
        <a href="#" class="group  w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-[#0A8B37]">
          <font-awesome-icon :icon="['fab', 'tiktok']" class="text-lg text-white group-hover:text-[#0A8B37]" />
        </a>
      </div>
    </div>
  </template>