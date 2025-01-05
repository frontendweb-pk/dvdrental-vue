import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./routes";
import { createPinia } from "pinia";
import { AppContent } from "./utils/AppContent";

// create application instance
const app = createApp(App);

// global properties
app.config.globalProperties.$content = AppContent;

// middleware
app.use(router);

// pinia
const pinia = createPinia();
app.use(pinia);

// mount
app.mount("#app");
