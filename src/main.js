import { createApp } from "vue";
import App from "./App.vue";

// Icons and Styles
import FontAwesomePlugin from "./plugins/FontAwesome";
import "./assets/main.pcss";

// App Wide Components
import AppButton from "./components/AppButton.vue";
import AppCountInput from "./components/AppCountInput.vue";
import AppModalOverlay from "./components/AppModalOverlay.vue";
import { createPinia } from "pinia";
import { PiniaHistoryPlugin } from "./plugins/PiniaHistoryPlugin";
// Init App

const pinia = createPinia()
pinia.use(PiniaHistoryPlugin)

createApp(App)
  .use(FontAwesomePlugin)
  .use(pinia)
  .component("AppButton", AppButton)
  .component("AppCountInput", AppCountInput)
  .component("AppModalOverlay", AppModalOverlay)
  .mount("#app");
