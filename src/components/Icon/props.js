export default {
    icon:{
        type:String,
        required:true
    },
    size:{
        type:String,
        default:'lg'
    },
    rotation:{
        type:String|| Number,
    },
    flip:{
        type:String|| Number,
    },
    beat:{
        type:Boolean,
    },
    ['beat-fade']:{
        type:Boolean
    },
    bounce:{
        type:Boolean
    },
    fade:{
        type:Boolean
    },
    shake:{
        type:Boolean
    },
    spin:{
        type:Boolean
    },
    pulse:{
        type:Boolean
    },
    type:{
        type:String
    },
    color:{
        type:String
    },
    border:{
        type:Boolean
    }

}