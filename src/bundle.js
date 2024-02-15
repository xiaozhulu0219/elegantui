// 该文件用于打包


 // 引入font-awesome

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import all icons */
import { fas } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(fas)

console.log('引入成功')
// 引入样式
import "@/style/index.scss";


// 引入自定义组件
import Button from "@/components/Button";
import Card from "@/components/Card";
import {Collapse} from "@/components/Collapse";
import {CollapseItem} from "@/components/Collapse";
import Dialog from "@/components/Dialog";
import Dropdown from "@/components/Dropdown";
import Icon from "@/components/Icon";
import Pager from "@/components/Pager";
import Tooltip from "@/components/Tooltip";

const componentArr =[Button,Card,Collapse,CollapseItem,Dialog,Dropdown,Icon,Pager,Tooltip];


const install = (app)=>{
    componentArr.forEach((comp)=>{
        // console.log(comp.name)
        app.component(comp.name,comp)
    })

    // 单独注册图标原组件
    app.component('font-awesome-icon',FontAwesomeIcon)
}

export default {
    install
};
export {
    install,
    Button as ElgButton,
    Card as ElgCard,
    Collapse as ElgCollapse,
    CollapseItem as ElgCollapseItem ,
    Dialog as ElgDialog,
    Dropdown as ElgDropdown,
    Icon as ElgIcon ,
    Pager as ElgPager,
    Tooltip as ElgTooltip
}




