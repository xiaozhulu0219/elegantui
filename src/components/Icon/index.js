import Icon from "./Icon.vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Icon.install = (app)=>{
    app.component('font-awesome-icon',FontAwesomeIcon);
    app.component(Icon.name,Icon);

}

export default Icon