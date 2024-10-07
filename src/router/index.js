import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue'; // Página de inicio
import Nosotros from '../views/Nosotros.vue'; // Página Sobre Nosotros
const routes = [
  {
    path: '/', // Ruta para la página de inicio
    name: 'Home',
    component: Home
  },
  {
    path: '/nosotros', // Ruta para "Sobre Nosotros"
    name: 'Nosotros',
    component: Nosotros
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
