<script setup >
// 通知类型组件
import { computed, ref, onMounted, reactive } from "vue";
import getRandomId from "../util/getRandomId";
const notifyOptions = reactive({});
const notifyIsShow = ref(false);
// 设置一个通知组件的数组
const transList = ref([]);
// const props = defineProps({
//     content:String,
//     type:{
//         type:String,
//         default:'success'     
//     }
// })
// 使用computed计算出类型   
const renderList = computed(() => {
    return transList.value.map(item=>{
        switch (item.type) {
        case 'success':
            return {
                ...item,
                icontype: 'fa-check-circle',
                color: 'success'
            };
        case 'info':
            return {
                ...item,
                icontype: 'fa-info-circle',
                color: 'primary'
            };
        case 'warning':
            return {
                ...item,
                icontype: 'fa-exclamation-triangle',
                color: 'warning'
            };
        case 'danger':
            return {
                ...item,
                icontype: 'fa-bomb',
                color: 'danger'
            }
        default: {
            return {
                ...item,
                icontype: 'fa-comment-dots',
                color: 'info'
            }
        }

    }
        
    })
    
})
const notify = ref()
const message = (options) => {
    // 实际的内容是传递到这里的
    const notifyItem = {
        status:'show'
    };
    notifyItem.content = options.content
    notifyItem.type = options.type;
    notifyItem.id = getRandomId();
    // 添加到数组中
    // notifyOptions.content = options.content;
    // notifyOptions.type = options.type
    // 显示通知
    // 暂时只提供到时间自动消失的情况 // 默认两秒消失
    notifyItem.duration = options.duration || 3000;
    const idx = notifyItem.id;
    setTimeout(()=>{
        // 到时间后就将status 改成 hide
        transList.value =  transList.value.filter(item=>{
            return item.id !==idx
        })
    },notifyItem.duration)
    transList.value.push(notifyItem);

}

const close =()=>{
        notifyIsShow.value = false;

}
defineExpose({
    message,
    close
})
</script>

<template>
    <transition-group name="ntf">
        <!-- <div class="elg-notify" ref="notify" v-if="notifyIsShow">
            <Elg-Icon :icon="iconType.icontype" :type="iconType.color" />
            <span class="elg-notify__content">
                {{ notifyOptions.content }}
            </span>
        </div> -->
        <div class="elg-notify" ref="notify"
         v-for="(item,index) in renderList" :key="item.id" 
         :style="{top:(10+index*50)+'px'}"
         >
            <Elg-Icon :icon="item.icontype" :type="item.color" />
            <span class="elg-notify__content">
                {{ item.content }}
            </span>
        </div>
    </transition-group>
</template>

<style >
.elg-notify {
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translate(-50%,0);
    display: flex;
    align-items: center;
    padding: 10px 15px;
    border-radius: 4px;
    box-shadow: 0 0 8px 0px #ccc, 1px 1px 10px 0px #ccc;
    background-color: var(--elgdoc-notify-back);
    transition:300ms linear;
}

.elg-notify__content {
    margin: 0 5px;
}
.ntf-enter-from{
    opacity: 0;
    top: 100px;
    transform: translate(-50%,150px) scale(0.3);


}
.ntf-enter{
    opacity: 0;
    top: 100px;
    transform: translate(-50%,150px);


}
.ntf-enter-to{
    opacity: 1;
    transform: translate(-50%,0px) scale(1);

}
.ntf-enter-active,.ntf-leave-active{
    /* opacity: 1;
    transform: translate(-50%,0px); */
    transition:300ms linear;

}
.ntf-leave-from{
    opacity: 1;
    transform: translate(-50%,0px) scale(1);
}
.ntf-leave-to{
    opacity: 0;
    transform: translate(-50%,0px) scale(0);


}
.ntf-move{
    transition:300ms linear;
}
</style>