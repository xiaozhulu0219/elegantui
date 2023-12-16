import Tooltip from "./Tooltip.vue";
Tooltip.install = (app)=>{
    app.component(Tooltip.name,Tooltip);

}

export default Tooltip;