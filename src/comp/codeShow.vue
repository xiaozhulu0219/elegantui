<script setup >
import { marked } from 'marked';
import { computed, onMounted, ref } from "vue";
import 'highlight.js/styles/github.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
// 预设一段preset代码

const props = defineProps({
    codeStr: String,
    codeType: String,
    register: Object,
    backColor:{
        type:String,
        required:false
    }
})
const renderStr = computed(() => {
    return marked('```' + props.codeType + '\n' + props.codeStr)
})
const codeRef = ref();
onMounted(() => {
    // 获取了元素

    const target = codeRef.value.querySelector('pre code')
    for (let key in props.register) {
        hljs.registerLanguage(key, props.register[key]);

    }
    hljs.highlightBlock(target);
})
// 预设值

</script>

<template>
    <div v-html="renderStr"
     ref="codeRef" 
     class="elg-code__wrap"
     :style="{backgroundColor:backColor?backColor:''}"></div>
</template>

<style >
.elg-code__wrap {
    border-radius: 20px;
    /* overflow: hidden; */
    background-color: var(--elgdoc-code-back2);


}
.elg-code__wrap code::-webkit-scrollbar {
    height:5px;
}
.elg-code__wrap code::-webkit-scrollbar-track {

/* background-color: #b46868; */
    background-color:var(--elgdoc-scroll-track)
} 
.elg-code__wrap code::-webkit-scrollbar-thumb {

/* background-color: rgba(0, 0, 0, 0.2);  */
background-color:var(--elgdoc-scroll-thumb)

}
.elg-code__wrap .hljs {

    font-family: v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace !important;
    font-size: 1.1em;
    /* padding: 5px !important; */
    padding: 0 15px 10px 15px !important;
    border-radius: 20px;
    background-color: inherit;

}

.elg-code__wrap pre {
    border-radius: 20px;
}

.elg-code__wrap code {
    color: var(--elgdoc-big-text);
    border-radius: 20px;


}

.elg-code__wrap .hljs span {
    /* font-size: ; */
}

.elg-code__wrap .hljs-string {
    color: #61aeee !important;
}</style>