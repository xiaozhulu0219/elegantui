<script setup >
import dialogProps from "./props"
import "@/style/components/Dialog.scss"
defineOptions({
    name: 'ElgDialog'
})
const emit = defineEmits(['close', 'confirm'])
const props = defineProps(dialogProps)
const handleClose = () => {
    //取消弹框
    emit('close')
}
const handleClick = () => {
    emit('confirm')
}
</script>

<template>
    <Teleport to="body">
        <!-- 背景 -->
        <transition name="fade" appear >
        <div class="elg-dialog-container" v-if="props.visible"   :style="{'--elg-dialog-width':props.width}">
          

                <div class="elg-dialog" :style="{ width: props.width, top: props.top }">
                    <div class="elg-dialog-title">
                        <div class="elg-dialog-title-left">
                            {{ props.title }}
                        </div>
                        <div class="elg-dialog-title-right">
                            <Elg-Icon icon="fa-times" @click="handleClose" />
                        </div>
                    </div>
                    <div class="elg-dialog-body">
                        <slot name="default"></slot>
                    </div>
                    <div class="elg-dialog-footer" v-if="props.footer && !$slots.footer ">
                        <Elg-Button @click="handleClose">取消</Elg-Button>

                        <Elg-Button type="primary" @click="handleClick">确定</Elg-Button>
                    </div>
                    <div class="elg-dialog-footer-self" v-if="$slots.footer ">
                        <slot name="footer"></slot>
                    </div>
                </div>

        </div>
    </transition>


    </Teleport>
</template>

<style scoped></style>