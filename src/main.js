import { createApp } from "vue";
import App from "./App.vue";
import "./tailwind.css";
import CustomComponets from "./index.js";
const app = createApp(App);

app.use(CustomComponets);

app.mount("#app");
