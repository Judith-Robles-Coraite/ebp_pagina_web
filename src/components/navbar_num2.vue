<script setup>
import { ref } from 'vue'
import logo from '../assets/logo/logo.png'
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  console.log(isMenuOpen.value) // Verifica el estado en la consola
}
</script>

<template>
  <header
    class="flex h-16 w-full items-center justify-between bg-[#0A8B37] px-4 md:px-6 text-white"
  >
    <nav
      ref="navbar"
      class="fixed top-0 left-0 w-full bg-black bg-opacity-10 text-white p-4 z-50 flex items-center justify-between"
    >


</nav>
    <div>
      <img :src="logo" class="w-12 h-auto" alt="EBP" />
    </div>

    <!-- Navigation Links (Desktop) -->
    <nav class="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
      <a
        href="#"
        class="text-xs text-white hover:underline hover:decoration-white hover:decoration-[1.5px] hover:[text-underline-offset:6px]"
        >Inicio</a
      >
      <a
        href="#"
        class="text-xs text-white hover:underline hover:decoration-white hover:decoration-[1.5px] hover:[text-underline-offset:6px]"
        >Nosotros</a
      >
      <a
        href="#"
        class="text-xs text-white hover:underline hover:decoration-white hover:decoration-[1.5px] hover:[text-underline-offset:6px]"
        >Noticias</a
      >
      <a
        href="#"
        class="text-xs text-white hover:underline hover:decoration-white hover:decoration-[1.5px] hover:[text-underline-offset:6px]"
        >Posgrados</a
      >
      <a
        href="#"
        class="text-xs text-white hover:underline hover:decoration-white hover:decoration-[1.5px] hover:[text-underline-offset:6px]"
        >Sedes</a
      >
      <a
        href="#"
        class="text-xs text-white hover:underline hover:decoration-white hover:decoration-[1.5px] hover:[text-underline-offset:6px]"
        >Contactanos</a
      >
      <div>
        <button
          class="bg-white text-black text-sm rounded-xl border border-transparent px-3 py-1 hover:border-white hover:bg-transparent hover:text-white transition-all duration-300"
        >
          AULA VIRTUAL
        </button>
      </div>
    </nav>

    <!-- Botón para activar el menú -->
    <button @click="toggleMenu" class="md:hidden">
      <span>Menu</span>
    </button>

    <!-- Div con opciones -->
    <div
      v-if="isMenuOpen"
      class="fixed inset-0 flex flex-col items-center justify-center bg-[#0A8B37] md:hidden z-50 text-white"
    >
      <div class="grid gap-4 text-center pt-10">
        <button @click="toggleMenu">
          <span>Cerrar</span>
        </button>
        <a
          href="#"
          class="text-xs text-white hover:underline hover:decoration-white hover:decoration-[1.5px] hover:[text-underline-offset:6px]"
          >Inicio</a
        >
        <a
          href="#"
          class="text-xs text-white hover:underline hover:decoration-white hover:decoration-[1.5px] hover:[text-underline-offset:6px]"
          >Nosotros</a
        >
        <a
          href="#"
          class="text-xs text-white hover:underline hover:decoration-white hover:decoration-[1.5px] hover:[text-underline-offset:6px]"
          >Noticias</a
        >
        <a
          href="#"
          class="text-xs text-white hover:underline hover:decoration-white hover:decoration-[1.5px] hover:[text-underline-offset:6px]"
          >Posgrados</a
        >
        <a
          href="#"
          class="text-xs text-white hover:underline hover:decoration-white hover:decoration-[1.5px] hover:[text-underline-offset:6px]"
          >Sedes</a
        >
        <a
          href="#"
          class="text-xs text-white hover:underline hover:decoration-white hover:decoration-[1.5px] hover:[text-underline-offset:6px]"
          >Contactanos</a
        >
      </div>
      <div>
        <button
          class="bg-white text-black text-sm rounded-xl border border-transparent px-3 py-1 hover:border-white hover:bg-transparent hover:text-white transition-all duration-300"
        >
          AULA VIRTUAL
        </button>
      </div>
    </div>
  </header>
</template>

<style></style>
