import './assets/main.css';
import '../node_modules/flowbite-vue/dist/index.css';

import { Input, initTWE } from 'tw-elements';
initTWE({ Input }, { allowReinits: true });

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// Importar Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebookF, faInstagram, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Añadir los íconos a la librería
library.add(faFacebookF, faInstagram, faTiktok, faWhatsapp);

const app = createApp(App);

app.use(createPinia());
app.use(router);

// Registrar el componente FontAwesomeIcon globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
