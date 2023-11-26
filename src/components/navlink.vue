<template>
  <!-- 这是导航组件 -->
  <div class="elg-nav-list">
       <li class="elg-nav-item">  <router-link to="/">Icon</router-link></li>
       <li class="elg-nav-item">  <router-link to="/button">Button</router-link></li>
       <li class="elg-nav-item">  <router-link to="/colors">Colors</router-link></li>
       <li class="elg-nav-item">  <router-link to="/card">Card</router-link></li>
       <li class="elg-nav-item">  <router-link to="/collapse">Collapse</router-link></li>
       <li class="elg-nav-item">  <router-link to="/dialog">Dialog</router-link></li>
       <li class="elg-nav-item">  <router-link to="/dropdown">Dropdown</router-link></li>
       <li class="elg-nav-item">  <router-link to="/pager">Pager</router-link></li>
       <li class="elg-nav-item">  <router-link to="/tooltip">Tooltip</router-link></li>








  </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.elg-nav-list{
    width: 100%;
    display: flex;
    margin: 20px 0;
}

.elg-nav-item{
    list-style: none;
    flex: 1 1 auto;

}

</style>