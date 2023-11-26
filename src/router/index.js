import routes from "./routes"
import {createRouter,createWebHistory} from "vue-router"


const router = createRouter({
    history:createWebHistory(),
    routes, // `routes: routes` 的缩写
})


export default router