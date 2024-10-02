import { reactive } from 'vue'

export const ofertasStore = reactive({
  ofertas: '',
  setOfertas(seccion) {
    this.ofertas = seccion
  }
})
