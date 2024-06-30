import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import vueCookies from 'vue-cookies'

// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";

// App
import "./assets/css/app-style.css";

// Globals
import View360 from "@egjs/vue3-view360";

import materialKit from "./material-kit";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(materialKit);
app.use(View360);
app.use(vueCookies);
app.mount("#app");
