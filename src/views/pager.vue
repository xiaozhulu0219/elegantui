<template>
    <h2 class="row-title">总页数total大于页码最大显示数pager-count,此时无法全部显示</h2>
    <div class="row">
      <Elg-Pager :total="26"  :currentPage="currentpage1"
      @current-change="handleChange" />
    </div>
    <h2 class="row-title">总页数total小于等于页码最大显示数pager-count,可以全部显示</h2>
    <div class="row">
      <Elg-Pager :total="6"  :currentPage="currentpage2"
      @current-change="currentpage2=$event" />
    </div>
    <h2 class="row-title">页码最大显示数量pager-count是可以调整的</h2>
    <div class="row">
      <Elg-Pager :total="13" :pageCount="13"   :currentPage="currentpage3"
      @current-change="currentpage3=$event" />
    </div>
    <h2 class="row-title">带有背景颜色的分页</h2>
    <div class="row">
      <Elg-Pager :total="20"   :currentPage="currentpage4"
      @current-change="currentpage4=$event" type="primary" />
    </div>
    <div class="row">
      <Elg-Pager :total="20"   :currentPage="currentpage5"
      @current-change="currentpage5=$event" type="success" />
    </div>
    <div class="row">
      <Elg-Pager :total="20"   :currentPage="currentpage6"
      @current-change="currentpage6=$event" type="danger" />
    </div>
    <h2 class="row-title">调整大小</h2>
    <div class="row">
      <Elg-Pager :total="20"   :currentPage="currentpage7"
      @current-change="currentpage7=$event" size="small" type="primary" />
    </div>
    <div class="row">
      <Elg-Pager :total="20"   :currentPage="currentpage8"
      @current-change="currentpage8=$event"  type="primary" />
    </div>
    <div class="row">
      <Elg-Pager :total="20"   :currentPage="currentpage9"
      @current-change="currentpage9=$event"  size="large" type="primary" />
    </div>
</template>

<script setup>
import {ref} from "vue";
let currentpage1 = ref(1);
let currentpage2 = ref(1);
let currentpage3 = ref(1);
let currentpage4 = ref(1);
let currentpage5 = ref(1);
let currentpage6 = ref(1);
let currentpage7 = ref(1);
let currentpage8 = ref(1);
let currentpage9 = ref(1);


const handleChange=(newPage)=>{
  currentpage1.value = newPage
}

</script>

<style>

</style>