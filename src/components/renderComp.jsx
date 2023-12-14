import { defineComponent, } from "vue";
const renderComp = defineComponent({
    name:'test-components',
    props:['targetnode'],
    
    setup(props){
        const render =()=>{
         return <div>{props.targetnode}</div>
        }
        return render
    }
})
export default renderComp