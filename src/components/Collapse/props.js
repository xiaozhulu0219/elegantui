// Collapse 对应的属性

export const collapseProps={
    modelValue:{
        type:Array,
        default:()=>[]
    },
    accordion:{
        type:Boolean,
        default:false

    }
}

export const  collapseItemProps={
    name:{
        type:String,
        require:true,
        
    },
    title:{
        type:String,

    },
    disabled:{
        type:Boolean,
        default:false
    }
}

export const propsKeyList = Symbol('list')
export const propsKeyEvent = Symbol('event')