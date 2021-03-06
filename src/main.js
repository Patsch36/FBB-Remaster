import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify.js";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router/index.js";
import store from './store'

loadFonts();

createApp(App).use(store)
  .use(vuetify)
  .use(router)
  .mount("#app");
