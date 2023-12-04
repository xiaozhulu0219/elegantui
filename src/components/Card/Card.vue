<script setup >
import "@/style/components/Card.scss";
import cardProps from "./props"
defineOptions({
    name: 'Elg-Card'
})
const props = defineProps(cardProps)
console.log(props)

</script>

<template>
    <div class="elg-card" :style="{ width: props.width }" ref="cardRef" :class="[props.shadow ? `elg-card-${props.shadow}` : '',
    props.imgSrc ? `elg-card-img` : '',
    ]">
        <div v-if="!props.imgSrc">
            <header v-if="$slots.header" class="elg-card-header">

                <slot name="header">

                </slot>
            </header>

            <main>
                <slot name="default"></slot>
            </main>

        </div>
        <div v-else>
            <div class="elg-card-img-container" :style="{ height: props.imgHeight ? props.imgHeight : 'auto' }">
                <img :src="props.imgSrc" :style="{ width: '100%', }" alt="">
                <!-- 判断是否传递summary -->
            </div>
            <div class="elg-card-summary" v-if="props.summary">{{ summary }}</div>
            <!-- 否则使用默认插槽 -->
            <div class="elg-card-summary" v-else>
                <slot name="default"></slot>

            </div>

        </div>
        <footer v-if="$slots.footer" class="elg-card-footer">
            <slot name="footer" >

            </slot>
        </footer>
    </div>
    <!-- <div class="elg-card elg-card-img" v-else
:style="{width:props.width}">
    <header>
        <img :src="props.imgSrc" alt="">
    </header>
</div> -->
</template>

<style scoped></style>