<script setup >
import {onMounted, ref} from "vue";
import codeShow from "./codeShow.vue";
import useClipboard from 'vue-clipboard3';
const { toClipboard } = useClipboard();
const isCodeShow=ref(false);
// 显示的内容就是插槽的内容
const res = defineSlots();
const emits = defineEmits(['copyCallback'])
const props = defineProps({
    title: String,
    code:String,
    codeTarget:Object,
    codeType:String
})
const showCode=()=>{
    isCodeShow.value=!isCodeShow.value
}
const copyText = async (text) => {
	try {
	    await toClipboard(text);
        emits('copyCallback')
	} catch (e) {
	    console.error(e);
	}
}

const handleCopyCode=()=>{
    // 复制功能实现
    copyText(props.code)
}

</script>

<template>
    <div class="elg-compShow__wrap">
        <div class="elg-compShow__head">
            <div class="elg-compShow__title">{{ title }}</div>
            <div class="elg-compShow__icons">
                <Elg-Tooltip placement="top" content="复制代码" class="elg-compShow__item">
                    <Elg-Icon icon="fa-clone" @click="handleCopyCode" class="elg-compShow--icon" style="font-size: 0.8em;" />
                </Elg-Tooltip>
                <Elg-Tooltip placement="top" class="elg-compShow__item" :content="isCodeShow?'隐藏代码':'显示代码'"> 
                    <Elg-Icon icon="fa-code" 
                    class="elg-compShow--icon" 
                     style="font-size: 0.8em;"
                     @click="showCode" />
                </Elg-Tooltip>

            </div>

        </div>
        <div class="elg-compShow__content" >
            <div class="elg-compShow__info">
                <slot name="info"> </slot>
            </div>
            
            <slot ></slot>
        </div>
        <div v-if="isCodeShow" class="elg-compShow__code" >
        <codeShow :codeStr="code" 
         :codeType="codeType" 
         :register="codeTarget"
         backColor="var(--elgdoc-comp-back)"
         ></codeShow>
        
        </div>
    </div>
</template>

<style scoped>
.elg-compShow__info{
    box-sizing: border-box;
    margin-bottom: 15px;
}
.elg-compShow--icon:hover,.elg-compShow--icon:active{
    color:var(--elg-doc-selected-text);
}
.elg-compShow__wrap {
    text-align: start;
    width: 100%;
    border: 1px solid var(--elgdoc-comp-border);
    border-radius: 5px;
    background-color: var(--elgdoc-comp-back);
    overflow: auto;
}


.elg-compShow__head {
    padding: 5px;
    box-sizing: border-box;
    display: flex;
}
.elg-compShow__head{
    display: flex;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;
    height: 50px;
    align-items: center;
}
.elg-compShow__title{
    font-size: 1.4em;
   

}
.elg-compShow__item{
}
.elg-compShow__icons{
    display: flex;
}
.elg-compShow__content{
    padding: 15px;
    box-sizing: border-box;
}
.elg-compShow__code{
    width: 100%;
    border-top: 1px solid var(--elgdoc-comp-border);
    
}

</style>