import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue' // Página de inicio
import Nosotros from '../views/Nosotros.vue' // Página Sobre Nosotros

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
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // Desplazarse al elemento con el id del hash
      return {
        el: to.hash,
        behavior: 'smooth' // Desplazamiento suave
      }
    } else if (savedPosition) {
      return savedPosition // Volver a la posición anterior si está disponible
    } else {
      return { left: 0, top: 0 } // Desplazar al inicio de la página
    }
  }
})

export default router
