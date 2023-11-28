import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import "./style/index.scss"
const app = createApp(App)
app.use(router)
app.mount('#app')
