import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue' // Página de inicio
import Nosotros from '../views/Nosotros.vue' // Página Sobre Nosotros
import Noticias from '../views/Noticias.vue' // Página Sobre Nosotros
import Contactanos from '../views/Contactanos.vue' // Página Sobre Nosotros


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
  },
  {
    path: '/noticias', // Ruta para "Sobre Nosotros"
    name: 'Noticias',
    component: Noticias
  },
  {
    path: '/contactanos', // Ruta para "Sobre Nosotros"
    name: 'Contactanos',
    component: Contactanos
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
      // Aplicar desplazamiento suave al inicio de la página
      return { left: 0, top: 0, behavior: 'smooth' }
    }
  }
})

export default router
