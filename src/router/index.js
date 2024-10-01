import { createRouter, createWebHistory } from 'vue-router';
import Home from '../App.vue'; // Adjust the path based on your project structure
import Doctorados from '../components/programas/doctorados/Doctorados.vue'; // Path to your component
import Ofertas from '../components/ofertas/Ofertas.vue';

const routes = [
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
