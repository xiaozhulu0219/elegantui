import tooltipProps from "@/components/Tooltip/props.js"
export default {
    ...tooltipProps,
    menuOptions:{
        type:Array,
        required:true
    },
    hideAfterClick:{
        type:Boolean,
        default:false
    },
    placement:{
        type:String,
        default:'bottom'
    },
   
}