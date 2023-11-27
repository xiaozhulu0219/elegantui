<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import Navlink from "./components/navlink.vue"
</script>

<template>
  <div class="elg-container">
    <h1 class="elg-title">ElegantUI组件展示</h1>
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
.elg-content{
  width: 100%;
}
</style>
