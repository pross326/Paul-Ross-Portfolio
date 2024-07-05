// import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createVuetify } from "vuetify";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
});

const app = Vue.createApp(App);
app.use(router);
app.use(vuetify);
app.mount("#app");
