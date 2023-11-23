import { createApp } from "vue"
import '@unocss/reset/tailwind.css'
import "./style.css"
import App from "./App.vue"
import 'virtual:uno.css'
import { setupRouter } from "./routers"
import { setupStore } from "./stores"
import 'vant/lib/index.css';

const app = createApp(App)

const setupPlugin = () => {}

const setupApp = () => {
  setupStore(app)
  setupRouter(app)
  app.mount("#app")
}

setupPlugin()
setupApp()
