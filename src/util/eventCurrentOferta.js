import { reactive } from 'vue'

export const ofertasStore = reactive({
  ofertas: '',
  setOfertas(seccion) {
    if (this.ofertas === seccion) {
      return (this.ofertas = 'reasignar')
    } else {
      return (this.ofertas = seccion)
    }
  }
})
