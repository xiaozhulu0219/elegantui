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

// 引入dialog组件
import Dialog from "@/components/Dialog/Dialog.vue"

// 引入pager组件
import Pager from "@/components/Pager/Pager.vue"
const app = createApp(App)
app.component('Elg-Icon',Icon)
app.component('Elg-Button',Button)
app.component('Elg-Card',Card)
app.component('Elg-Dialog',Dialog)
app.component('Elg-Pager',Pager)
app.use(router)
app.mount('#app')

