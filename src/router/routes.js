import Button from "@/views/button.vue";
// import Icon from "@/views/icon.vue";

import installMenu from "@/views/install_menu.vue"
import componentsMenu from "@/views/components_menu.vue"
import loading from "@/comp/loading.vue"
import install from "@/views/install.vue"
import intro from "@/views/intro.vue"
import introUmd from "@/views/intro_umd.vue"
const routes = [
    // { path: '/', component: Icon },
    // { path: '/button', component: Button },
    // {path:'/colors',component:()=>import("../views/colors.vue")},
    // {path:'/card',component:()=>import("../views/card.vue")},
    // {path:'/collapse',component:()=>import("../views/collapse.vue")},
    // {path:'/collapse',component:()=>import("../views/collapse.vue")},
    // {path:'/dialog',component:()=>import("../views/dialog.vue")},
    // {path:'/dropdown',component:()=>import("../views/dropdown.vue")},
    // {path:'/pager',component:()=>import("../views/pager.vue")},
    // {path:'/tooltip',component:()=>import("../views/tooltip.vue")},
    {
        path: '/',

        children: [
            {
                path: '',
                redirect: '/install'
            },
            {
                path: '/install',
                component: install
            }, {
                path: '/intro', component: intro
            },{
                path:'/umd',component:introUmd
            }
        ]
    }, {
        path: '/comp',
        //
        // {
        //     loading:loading,
        //     render: ()=>import("../views/icon.vue")
        //    }
        children: [
            {
                path: '',
               component:()=>import("../views/icon.vue")
            },
            {
                path:'button',
                component:()=>import("../views/button.vue")
            },{
                path:'card',
                component:()=>import("../views/card.vue")
            },{
                path:'dialog',
                component:()=>import("../views/dialog.vue")
            },
            {
                path:'pager',
                component:()=>import("../views/pager.vue"),
            },
            {
                path:'tooltip',
                component:()=>import("../views/tooltip.vue")
            }
            ,{
                path:'collapse',
                component:()=>import("../views/collapse.vue")
            },{
                path:'dropdown',
                component:()=>import("../views/dropdown.vue")
            }
            

        ]
    }




]

export default routes