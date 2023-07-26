import { createApp } from "vue";
import App2 from "./App2.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/reset.css";

createApp(App2)
  .use(store)
  .use(router)
  .mount("#app");
