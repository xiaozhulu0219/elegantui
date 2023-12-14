<script setup >
import DropdownProps from "./props";
import "@/style/components/Dropdown.scss";
import RenderComp from "@/components/renderComp.jsx"

import { ref } from "vue";
const tooltipRef = ref()
defineOptions({
    name: 'Elg-Dropdown'
})
const props = defineProps(DropdownProps);
const emit = defineEmits(['visible-change', 'select']);
const handleChange = (target) => {
    emit('visible-change', target)
}
const handleClick = (item) => {
    if (item.disabled) {
        return
    }
    emit('select', item);
    if (props.hideAfterClick) {
        // 调用子元素的隐藏方法
        tooltipRef.value.outControlHide()
    }
}
</script>

<template>
    <div class="elg-dropdown">
        <!-- :closeDelay="20000" -->
        <Elg-Tooltip 
        :placement="props.placement" 
        :trigger="props.trigger" 
        @visible-change="handleChange"
        :manual="props.manual"
        :openDelay="props.openDelay"
        :closeDelay="props.closeDelay"
       effect="light"

            ref="tooltipRef" >
            <template #content>
                <ul class="elg-dropdown_ul">
                    <!-- <li v-if="item.divided" class="elg-dropdown-li-divided"></li> -->
                    <div v-for="(item, index) in menuOptions" :key="index">
                        <li class="tli" :class="[item.disabled ? 'elg-dropdown-li-disabled' : '',
                        ]" @click="handleClick(item)">
                           <RenderComp :targetnode="item.label"/>
                        </li>
                        <div :class="[item.divided ? 'elg-dropdown-li-divided' : '']"></div>

                    </div>

                </ul>

            </template>
            <div>
                <slot></slot>
            </div>
        </Elg-Tooltip>


    </div>
</template>

<style scoped></style>