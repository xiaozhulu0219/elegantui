import Button from "@/views/button.vue";
import Icon from "@/views/icon.vue";
const routes = [
    { path: '/', component: Icon },
    { path: '/button', component: Button },
    {path:'/colors',component:()=>import("../views/colors.vue")},
    {path:'/card',component:()=>import("../views/card.vue")},
    {path:'/collapse',component:()=>import("../views/collapse.vue")},
    {path:'/collapse',component:()=>import("../views/collapse.vue")},
    {path:'/dialog',component:()=>import("../views/dialog.vue")},
    {path:'/dropdown',component:()=>import("../views/dropdown.vue")},
    {path:'/pager',component:()=>import("../views/pager.vue")},
    {path:'/tooltip',component:()=>import("../views/tooltip.vue")},





]

export default routes