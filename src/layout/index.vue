<script setup >
import Content from "./content.vue";
import Header from "./header.vue"
import Menu from "./menu.vue";
import {ref} from "vue";

const colorMode = ref('dark')
function handlemodeChange(mode){
    colorMode.value = mode
}
const menuPage = ref('intro');
function handlemenuChange(page){
    menuPage.value = page
}
</script>

<template>
<div class="elg-layout " :class="{'elg-layout-dark':colorMode==='dark'}">
        <Header :colorMode="colorMode"
         :menuPage="menuPage" 
         @modeChange="handlemodeChange"
         @menuChage="handlemenuChange" />
    <div class="elg-layout__main">

        <Menu :menuPage="menuPage" />
        <Content  />

    </div>
</div>
</template>

<style scoped >
.elg-layout{
    height: 100%;
    width: 100%;
    background-color: var(--elgdoc-background);
    display: flex;
    flex-direction: column;
    position: absolute
    ;
}
.elg-layout__main{
    height: calc(100vh - 80px);
    display: flex;
    flex:  0 0 auto;
    /* background-color: #fce6c9; */
    /* background-color: #ffffcd; */

}


</style>