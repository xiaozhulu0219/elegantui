<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Navlink from "./components/navlink.vue"
</script>

<template>
  <div class="elg-container">
    <div class="elg-title">Elegantui组件展示</div>
    <Navlink />
    <div class="elg-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>

.elg-container{
  width: 80vw;
  margin: 0 auto;

}
</style>
