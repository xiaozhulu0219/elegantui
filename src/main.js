import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import "./style/index.scss"

// 引入公共css
import "@/assets/base.css"
// 引入icon组件
import Icon from "@/components/Icon/Icon.vue";

// 引入button组件
import Button from "@/components/Button/Button.vue";

// 引入card组件
import Card from "@/components/Card/Card.vue";
const app = createApp(App)
app.component('Elg-Icon',Icon)
app.component('Elg-Button',Button)
app.component('Elg-Card',Card)
app.use(router)
app.mount('#app')

