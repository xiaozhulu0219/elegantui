<script setup >
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import elgProps from "./props"
import "@/style/components/Icon.scss"
library.add(fas)
defineOptions({
    name: 'ElgIcon',
})
const prop = defineProps(elgProps);
</script>

<template>
    <i class="elg-icon" :class="prop.type?`elg-icon-${prop.type}`:''"
    >
        <font-awesome-icon v-bind="prop"   />
    </i>
    

</template>

<style scoped></style>