<script setup>
import props from "./props";
import "@/style/components/Button.scss";
import {ref} from "vue";
defineOptions({
    name:'ElgButton'
})

function handleClick(){
    console.log('haha')
}
const prop = defineProps(props)
// console.log(prop)
const buttonRef = ref();
defineExpose({buttonRef})
</script>
<!-- {[`elg-button-${prop.type}`]:prop.type} -->
<template>
    <button class="elg-button" 
    :class="[`elg-button-${prop.type}`,
    prop.plain? 'elg-button-plain':'',
    prop.round? 'elg-button-round':'',
    prop.circle ? 'elg-button-circle' :'',
    (prop.icon|| prop.loading) ? 'elg-button-icon':'',
    prop.disabled ?'elg-button-disabled':'',
    prop.loading?'elg-button-disabled':'',
    prop.size?`elg-button-${prop.size}`:'' ]" 
    :disabled="prop.disabled || prop.loading"
    ref="buttonRef"
     >
    <Elg-Icon v-if="prop.loading" icon="fa-spinner" size="sm" spin />

    <Elg-Icon v-if="prop.icon" :icon="prop.icon" size="sm" />

        <slot></slot>
    </button>
    
    
</template>

<style scoped lang="scss">
// .box{
//     height: 100px;
//     width: 100px;
//     background-color: var(--primary-light-8);
// }
</style>