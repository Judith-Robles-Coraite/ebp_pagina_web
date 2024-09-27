<template>
  <div class="flex justify-center items-center">
    <!-- Botones de Redes Sociales -->
    <div
      class="social-buttons flex justify-center items-center p-2 bg-[#0A8B37] rounded-full w-auto h-10 space-x-2"
    >
      <a
        v-for="(item, index) in facebook"
        :key="index"
        :href="item"
        target="_blank"
        rel="noopener noreferrer"
        class="group w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-[#0A8B37]"
      >
        <font-awesome-icon
          :icon="['fab', 'facebook-f']"
          class="text-lg text-white group-hover:text-[#0A8B37]"
        />
      </a>
      <a
        v-for="(item, index) in instagram"
        :key="index"
        :href="item"
        target="_blank"
        rel="noopener noreferrer"
        class="group w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-[#0A8B37]"
      >
        <font-awesome-icon
          :icon="['fab', 'instagram']"
          class="text-xl text-white group-hover:text-[#0A8B37]"
        />
      </a>
      <a
        v-for="(item, index) in whatsapp"
        :key="index"
        :href="item"
        target="_blank"
        rel="noopener noreferrer"
        class="group w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-[#0A8B37]"
      >
        <font-awesome-icon
          :icon="['fab', 'whatsapp']"
          class="text-xl text-white group-hover:text-[#0A8B37]"
        />
      </a>
      <a
        v-for="(item, index) in tiktok"
        :key="index"
        :href="item"
        target="_blank"
        rel="noopener noreferrer"
        class="group w-8 h-8 rounded-full border-2 border-white flex items-center justify-center transition-all duration-300 hover:bg-white hover:border-[#0A8B37]"
      >
        <font-awesome-icon
          :icon="['fab', 'tiktok']"
          class="text-lg text-white group-hover:text-[#0A8B37]"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  facebook: Array,
  whatsapp: Array,
  instagram: Array,
  tiktok: Array
})
</script>

<style scoped></style>
