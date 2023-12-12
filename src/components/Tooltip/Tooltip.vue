<script setup >
import tooltipProps from "./props";
import { ref, onMounted, reactive, computed, watch, nextTick, defineExpose } from "vue";
import "@/style/components/Tooltip.scss";
import { createPopper } from '@popperjs/core';
const isShow = ref(false)// 默认先开启打开
defineOptions({
    name: 'Elg-Tooltip'
})
const emit = defineEmits(['visible-change'])
const props = defineProps(tooltipProps)
const triggerRef = ref();
const poperRef = ref();
let timerenter, timerleave;
// onMounted(() => {
//     const button = triggerRef.value;
//     const tooltip = poperRef.value;
//     if (button && tooltip) {
//         poperInstance =   createPopper(button, tooltip, {
//             placement: props.placement,
//             modifiers: [
//                 {
//                     name: 'offset',
//                     options: {
//                         offset: [0, 8],
//                     },
//                 },
//             ],
//         });
//     }
// })
defineExpose({
    outControlShow: () => {
        isShow.value = true;
        nextTick(show)
    },
    outControlHide: () => {
        isShow.value = false;
    }
})
const show = () => {
    // 弹出
    const button = triggerRef.value;
    const tooltip = poperRef.value;
    if (button && tooltip) {
        createPopper(button, tooltip, {
            placement: props.placement,
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, 8],
                    },
                },
            ],
        });
    }
}

watch(isShow, (newValue, oldValue) => {

    // console.log(newValue,'监控')
    emit('visible-change', newValue)

})

const events = computed(() => {
    if (props.manual) {
        //手动触发模式直接返回
        return {}
    }
    if (props.trigger === 'hover') {
        return {
            trigger: {
                mouseenter: () => {
                    // 新建hover实例
                    // console.log(timerleave)
                    if (timerleave) {
                        // 还有上一次未结束的计时器
                        clearTimeout(timerleave)
                        timerleave = null
                    }
                    if (props.openDelay) {
                        // 延时触发
                        timerenter = setTimeout(() => {
                            // 如果是延时触发,
                            // 如果在要执行的时候已经离开就需要取消计时器

                            isShow.value = true

                            nextTick(show)
                        }, props.openDelay)
                        return
                    }
                    isShow.value = true
                    // 这样不行原因是不是因为dom页面还没有重新计算
                    // 页面上是没有poper元素的 
                    // show()
                    nextTick(show)

                },

            },
            element: {
                mouseleave: () => {
                    if (timerenter) {
                        // 结束的时候需要取消计时器
                        clearTimeout(timerenter)
                        timerenter = null
                    }
                    if (props.closeDelay) {
                        // 结束的时候不是立即结束而是有延迟
                        timerleave = setTimeout(() => {
                            isShow.value = false

                        }, props.closeDelay)
                        return
                    }
                    isShow.value = false

                }
            }

        }
    } else if (props.trigger === 'click') {
        // 点击触发
        return {
            trigger: {
                click: () => {
                    if (timerenter) {
                        clearTimeout(timerenter);
                        timerenter = null;

                    }
                    if(timerleave){
                        // 有延时关闭
                        clearTimeout(timerleave);
                        timerleave = null
                    }
                    if (props.openDelay && !isShow.value) {
                        // 延迟触发且当前是关闭的状态
                        timerenter = setTimeout(() => {
                            isShow.value = true;
                            if (isShow.value) {
                                nextTick(show);


                            }
                        }, props.openDelay)
                        return
                    }
                    if(props.closeDelay && isShow.value){
                        // 当前打开 且有延时关闭
                        timerleave = setTimeout(()=>{
                            isShow.value = false;

                        },props.closeDelay)
                        return
                    }
                    isShow.value = !isShow.value;
                    if (isShow.value) {
                        nextTick(show);


                    }

                }
            }
        }

    }



})
// 
// const triggerEvent = reactive({})
const handleClick = () => {
    // 假设在这里新建
    const button = triggerRef.value;
    const tooltip = poperRef.value;
    createPopper(button, tooltip, {
        placement: 'bottom',
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 8],
                },
            },
        ],
    });
}
const button1 = () => {
    isShow.value = !isShow.value
}
const button2 = () => {
    const button = triggerRef.value;
    const tooltip = poperRef.value;
    createPopper(button, tooltip, {
        placement: 'bottom',
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 8],
                },
            },
        ],
    });
}
</script>

<template>
    <div class="elg-tooltip" v-on="events.element ? events.element : {}">
        <!-- 触发元素 -->
        <div class="tooltip_trigger-element" v-on="events.trigger ? events.trigger : {}" ref="triggerRef">
            <slot></slot>

        </div>
        <!-- 弹出元素 -->
        <div class="tooltip_poper-element" v-if="isShow" ref="poperRef" id="tooltip"
            :class="[props.effect === 'light' ? 'elg-tooltip-light' : '']" role="tooltip" style="z-index: 999;">
            <slot name="content">
                {{ props.content }}
            </slot>
            <div id="arrow" style="z-index: -999;" data-popper-arrow></div>
        </div>
        <!-- <div :style="{ marginTop: '200px' }">
            <button @click="button1">点击改变数据</button>
            <button @click="button2">点击调用show </button>
        </div> -->


    </div>
</template>

<style scoped></style>