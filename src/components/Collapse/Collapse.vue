<script setup >
import {collapseProps,propsKeyList,propsKeyEvent} from './props';
import "@/style/components/Collapse.scss";
import {provide,computed} from "vue";
    defineOptions({
        name:'Elg-Collapse'
    })
    const props = defineProps(collapseProps)
    const emit = defineEmits(['update:modelValue','change'])
    const transfer = (target)=>{
        emit('update:modelValue',target)
        emit('change',target)
    }
    // collapse组件拿到prosp.modelValue
    // 还需要根据当前是否是手风琴模式来判断
    const activeList = computed(()=>{
        let list = []
        // console.log(props.modelValue)
        if(props.accordion && props.modelValue.length>1){

            list.push(props.modelValue[0]);
        }else{
            // 非手风琴模式
            list = props.modelValue
        }
        return list
    })
    const changeActive=(item,disabled)=>{
        if(disabled){
            return 
        }
        if(props.accordion){
            // 判断点击的这个和传递过来的是否相同
            if(item === activeList.value[0] ){
                // 点击手风琴展开的项目
                // 需要关上
                transfer([])

            }else{
                // 点击的是其他项目
                transfer([item])

            }
        }else{
            // 非手风琴模式
            // 判断当前的list 有没有当前项目
            if(activeList.value.includes(item)){
                // 包括当前项目
                // 关闭当前项目
                const tempList =activeList.value.filter(it=>it!=item);
                transfer(tempList)


                
            }else{
                // 不包括当前项目 向列表中添加
                const tempList = [...activeList.value]
                tempList.push(item)
                transfer(tempList)

            }
        }
    }
    provide(propsKeyEvent,changeActive)
    // console.log(activeList.value,',,,')
    provide(propsKeyList,activeList)
</script>

<template>
    <div class="elg-collapse">
        <slot ></slot>
        <!-- {{ activeList }} -->
    </div>
</template>

<style scoped>

</style>