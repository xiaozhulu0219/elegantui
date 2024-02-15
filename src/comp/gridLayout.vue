<script setup >
// grid布局
</script>

<template>
    <div class="elg-grid__wrap">
        <div class="elg-grid__wrapItem">
            <slot name="left"></slot>
        </div>
        <div class="elg-grid__wrapItem">
            <slot name="right"></slot>

        </div>

    </div>
</template>

<style scoped>
.elg-grid__wrap {
    width: 100%;
    display: grid;
    /* border: 1px solid #ccc; */
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 15px;
    align-items: flex-start
}

.elg-grid__wrapItem {
    display: grid;
    grid-template-columns: 100%;
    gap: 15px;
}
</style>