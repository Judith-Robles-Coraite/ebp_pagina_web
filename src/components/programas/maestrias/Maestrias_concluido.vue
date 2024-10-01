<template>
    <!-- Contenido de Diplomados en Conclusión  -->
    <div
        v-if="seccion === 'concluidas'"
        class="relative bottom-0 w-full h-[545px] bg-gradient-to-r from-[#203C61] to-[#0A8B37] bg-opacity-100 text-white p-4 overflow-auto scrollbar-hide"
      >
        <div class="grid grid-cols-1 md:grid-cols-3 md:px12 md:gap-20 gap-5 px-4">
          <div
            v-for="(programa, index) in programasConclusion"
            :key="index"
            class="rounded-3xl border border-white p-4"
          >
            <h3 class="text-xl text-center font-bold mb-2">{{ programa.year }}</h3>
            <div v-for="(modalidad, idx) in programa.modalidades" :key="idx">
              <h4 class="font-semibold text-center">{{ modalidad.tipo }}</h4>
              <ul>
                <li v-for="(detalle, i) in modalidad.programas" :key="i" class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                    class="flex-initial w-14"
                  >
                    <path
                      d="M320-160h320v-120q0-66-47-113t-113-47q-66 0-113 47t-47 113v120ZM160-80v-80h80v-120q0-61 28.5-114.5T348-480q-51-32-79.5-85.5T240-680v-120h-80v-80h640v80h-80v120q0 61-28.5 114.5T612-480q51 32 79.5 85.5T720-280v120h80v80H160Z"
                    />
                  </svg>
                  <div class="flex-initial w-80 py-2 text-sm">
                    {{ detalle }}
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>    
    </template>
    
    <script setup>
    import { ref } from 'vue';
    
    const seccion = ref('concluidas');
    
    const programasConclusion = ref([
        {
        year: '2024',
        modalidades: [
            {
            tipo: 'Virtualllll',
            programas: [
                'Maestría en Auditoría Médica y Gestión de Calidad en Salud Versión III Paralelo A',
                'Maestría en Salud Pública Versión III Paralelo A',
                'Maestría en Microbiología, Parasitología e Inmunodiagnóstico Versión III Paralelo A',
            ],
            },
            {
            tipo: 'Semipresencial',
            programas: [
                'Maestría en Enfermería Médico Quirúrgico – Sucre Versión III Paralelo A',
                'Maestría en Auditoría Médica y Gestión de Calidad en Salud Versión III Paralelo A',
                'Maestría en Salud Pública Versión III Paralelo A',
                'Maestría en Microbiología, Parasitología e Inmunodiagnóstico Versión III Paralelo A',
                'Maestría en Enfermería Médico Quirúrgico – Sucre Versión III Paralelo A',
                'Maestría en Auditoría Médica y Gestión de Calidad en Salud Versión III Paralelo A',
                'Maestría en Salud Pública Versión III Paralelo A',
                'Maestría en Microbiología, Parasitología e Inmunodiagnóstico Versión III Paralelo A',
            ],
            },
        ],
        },
        {
        year: '2023',
        modalidades: [
            {
            tipo: 'Virtual',
            programas: [
                'Maestría en Auditoría Médica y Gestión de Calidad en Salud Versión II',
                'Maestría en Salud Pública Versión II',
                'Maestría en Microbiología, Parasitología e Inmunodiagnóstico Versión II',
            ],
            },
        ],
        },
        {
        year: '2022',
        modalidades: [
            {
            tipo: 'Virtual',
            programas: [
                'Maestría en Auditoría Médica y Gestión de Calidad en Salud Versión I',
                'Maestría en Salud Pública Versión I',
                'Maestría en Microbiología, Parasitología e Inmunodiagnóstico Versión I',
            ],
            },
            {
            tipo: 'Semipresencial',
            programas: [
                'Maestría en Enfermería Médico Quirúrgico – Sucre Versión I',
            ],
            },
        ],
        },
    ]);
    </script>
    
    <style scoped>
    /* Global CSS */
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    
    .scrollbar-hide {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
    /* Estilos adicionales si los necesitas */
    </style>