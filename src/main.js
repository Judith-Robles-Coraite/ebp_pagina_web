import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from './router'; // Import the router
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Añade aquí otros íconos que puedas necesitar
// Añadir íconos a la biblioteca
library.add(
  faFacebookF,
  faInstagram,
  faTiktok,
  faWhatsapp,
  faArrowLeft,
  faArrowRight
);
export default router;

// Registrar el componente globalmente
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router); // Asegúrate de usar el router
app.mount("#app");
