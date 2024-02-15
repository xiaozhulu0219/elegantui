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

// 引入Collapse组件
import Collapse from "@/components/Collapse/Collapse.vue";
import CollapseItem from "@/components/Collapse/CollapseItem.vue";

// 引入tooltip组件
import Tooltip from "@/components/Tooltip/Tooltip.vue";

// 引入下拉菜单组件
import Dropdown from "@/components/Dropdown/Dropdown.vue";
const app = createApp(App)
app.component('Elg-Icon',Icon)
app.component('Elg-Button',Button)
app.component('Elg-Card',Card)
app.component('Elg-Dialog',Dialog)
app.component('Elg-Pager',Pager)
app.component('Elg-Collapse',Collapse)
app.component('Elg-Collapse-Item',CollapseItem)
app.component('Elg-Tooltip',Tooltip)
app.component('Elg-Dropdown',Dropdown)
app.use(router)
// 停止计时器
clearInterval(loadingtimer)
loadingtimer=null
app.mount('#app')

