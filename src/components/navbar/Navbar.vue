<template>
  <nav
    ref="navbar"
    class="fixed top-0 left-0 w-full bg-black bg-opacity-10 text-white p-4 z-50 flex items-center justify-between"
  >
    <!-- Logo (visible en todas las versiones) -->
    <div class="flex items-center">
      <img :src="logo" class="w-12 h-auto" alt="EBP" />
    </div>

    <!-- Menu  (solo en dispositivos grandes) -->
    <div
      class="hidden lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:flex lg:items-center lg:space-x-6"
    >
      <ul class="flex space-x-10 text-center">
        <li v-for="(link, index) in linksMenu" :key="index">
          <a
            href="#"
            class="text-sm text-white hover:underline hover:decoration-white hover:decoration-[1.5px] hover:[text-underline-offset:6px]"
            >{{ link }}</a
          >
        </li>
      </ul>
    </div>

    <!-- Aula Virtual Button (solo en dispositivos grandes) -->
    <div class="hidden lg:flex items-center">
      <button
        class="bg-white text-black text-sm rounded-2xl border border-transparent px-3 py-1 hover:border-white hover:bg-transparent hover:text-white transition-all duration-300"
      >
        AULA VIRTUAL
      </button>
    </div>

    <!-- Hamburguesa (aparece en pantallas menores a 768 px) -->
    <div class="block lg:hidden z-50">
      <button @click="toggleMenu" class="focus:outline-none">
        <svg
          class="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
    </div>
  </nav>

  <!-- Menu Responsive (aparece en pantallas menores a 768 px) -->
  <div
    :class="{
      block: isMenuOpen,
      hidden: !isMenuOpen,
    }"
    class="fixed inset-0 bg-gradient-to-r from-[#203C61] to-[#0A8B37] bg-opacity-100 z-40 lg:hidden flex flex-col transition-opacity duration-300 ease-in-out"
  >
    <!-- Logo -->
    <div class="flex justify-start p-4">
      <img :src="logo" class="w-12 h-auto" alt="EBP" />
    </div>

    <!-- Menu Links -->
    <div class="flex flex-col items-center justify-center flex-grow">
      <ul class="space-y-4 text-center text-white">
        <li v-for="(link, index) in linksMenu" :key="index">
          <a
            href="#"
            class="text-sm text-white hover:scale-150 hover:underline hover:decoration-white hover:decoration-[1.5px] hover:[text-underline-offset:6px] transition-all duration-300"
            >{{ link }}</a
          >
        </li>
      </ul>

      <!-- Aula Virtual Button -->
      <div class="mt-4">
        <button
          class="bg-white text-black text-sm rounded-2xl border border-transparent px-3 py-1 hover:border-white hover:bg-transparent hover:text-white transition-all duration-300"
        >
          AULA VIRTUAL
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import logo from "../../assets/logo/logo1.png";

const linksMenu = ref([
  "INICIO",
  "NOSOTROS",
  "NOTICIAS",
  "POSGRADOS",
  "SEDES",
  "CONTACTANOS",
]);
const navbar = ref(null);
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleScroll = () => {
  if (window.scrollY > 50) {
    navbar.value.classList.add("navbar-gradient");
  } else {
    navbar.value.classList.remove("navbar-gradient");
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style>
.navbar-gradient {
  @apply bg-gradient-to-r from-[#203C61] to-[#0A8B37] bg-opacity-100;
}

.transition-opacity {
  transition: opacity 0.3s ease;
}
</style>
