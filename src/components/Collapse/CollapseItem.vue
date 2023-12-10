<script setup >
import {collapseItemProps,propsKeyList,propsKeyEvent} from "./props";
import "@/style/components/Collapse.scss";
import {ref,onMounted,inject,computed} from "vue";
defineOptions({
        name:'Elg-Collapse-Item'
    })
const props = defineProps(collapseItemProps)
// const isFold = ref(true);// 是否折叠
const domRef = ref();
const scrollHeight=ref(0)
onMounted(()=>{
    scrollHeight.value = domRef.value.scrollHeight;
    // 真实高度
    
})

const modelValue = inject(propsKeyList);
const handleClick = inject(propsKeyEvent)
// console.log(modelValue,"这里")
// 计算当前项是否应该折叠
const isFold = computed(()=>{
   return  !modelValue.value.includes(props.name)
})
</script>

<template>
    <div class="elg-collapse-item" 
    :class="[props.disabled?`elg-collapse-item-disabled`:'']"
    ref="domRef"
    :style="{
        height:isFold?'':scrollHeight+'px'

    }"
    >

        <div class="elg-collapse-item-title" @click="handleClick(props.name,props.disabled)">
            <div class="item-title-left">
                <slot name="title">{{title}}</slot>
            </div>
            <div class="item-title-right">
                <Elg-Icon icon="fa-angle-right" class="icon_direct" :class="{'icon_down':!isFold}" />
            </div>
        </div>
       
        <div class="elg-collapse-item-body">
            <slot></slot>

        </div>
    </div>
</template>

<style scoped>

</style>