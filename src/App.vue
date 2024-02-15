<script setup>
// import Navlink from "./components/navlink.vue";
import Layout from "./layout/index.vue"
</script>

<template>
  <!-- <div class="elg-container">
    <h1 class="elg-title">ElegantUI组件展示</h1>
    <Navlink />
    <div class="elg-content">
      <router-view></router-view>
    </div>
  </div> -->
  <div class="elg-layout__wrap">
    <Layout />

  </div>
</template>

<style >

.elg-container{
  width: 80vw;
  margin: 0 auto;

}
.elg-content{
  width: 100%;
}
.elg-layout__wrap{
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
</style>
