
export default {
    content: {
        type: String,
        default:'tooltip'

    },
    trigger: {
        type: String,
        default: 'hover'
    },
    placement: {
        type: String,
        default: 'top'
    },
    manual: {
        type: Boolean,
        default: false,

    },
    openDelay: {
        type: Number,
        default: 0
    },
    closeDelay:{
        type:Number,
        default:0
    },
    effect:{
        type:String,
        default:'dark'
        
    }
}