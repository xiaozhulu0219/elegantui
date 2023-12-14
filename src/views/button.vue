<template>
  <div class="views-button-container">
    <h2 class="row-title">基础用法</h2>
    <div class="row">
      <Elg-Button>默认按钮</Elg-Button>
      <Elg-Button type="primary">主要按钮</Elg-Button>
      <Elg-Button type="success">成功按钮</Elg-Button>
      <Elg-Button type="info">信息按钮</Elg-Button>
      <Elg-Button type="warning">警告按钮</Elg-Button>
      <Elg-Button type="danger">危险按钮</Elg-Button>

      
    </div>    
    <h2 class="row-title">朴素按钮</h2>
    <div class="row">
      <Elg-Button plain>默认按钮</Elg-Button>
      <Elg-Button type="primary" plain>主要按钮</Elg-Button>
      <Elg-Button type="success" plain>成功按钮</Elg-Button>
      <Elg-Button type="info" plain>信息按钮</Elg-Button>
      <Elg-Button type="warning" plain>警告按钮</Elg-Button>
      <Elg-Button type="danger" plain>危险按钮</Elg-Button>

      
    </div>  
    <h2 class="row-title">圆角边框</h2>
    <div class="row">
      <Elg-Button round>默认按钮</Elg-Button>
      <Elg-Button type="primary" round>主要按钮</Elg-Button>
      <Elg-Button type="success" round>成功按钮</Elg-Button>
      <Elg-Button type="info" round plain>信息按钮</Elg-Button>
      <Elg-Button type="warning" round plain>警告按钮</Elg-Button>
      <Elg-Button type="danger" round>危险按钮</Elg-Button>

      
    </div>
    <h2 class="row-title">圆形按钮</h2>
    <div class="row">
      <Elg-Button circle> <Elg-Icon icon="fa-sync-alt" /></Elg-Button>
      <Elg-Button type="primary" circle>
        <Elg-Icon icon="fa-bell" />
      </Elg-Button>
      <Elg-Button type="success" circle>
        <Elg-Icon icon="fa-undo" />
      </Elg-Button>
      <Elg-Button type="info" circle>
        <Elg-Icon icon="fa-play-circle" />
      </Elg-Button>
      <Elg-Button type="warning" circle>
        <Elg-Icon icon="fa-paw" />
      </Elg-Button>
      <Elg-Button type="danger" circle>
        <Elg-Icon icon="fa-tree" />
      </Elg-Button>

      
    </div>  
    <h2 class="row-title">图标按钮</h2>
    <div class="row">
      <Elg-Button icon="fa-sync-alt">默认按钮</Elg-Button>
      <Elg-Button type="primary" icon="fa-bell">主要按钮</Elg-Button>
      <Elg-Button type="success" icon="fa-undo">成功按钮</Elg-Button>
      <Elg-Button type="info" icon="fa-play-circle">信息按钮</Elg-Button>
      <Elg-Button type="warning"  icon="fa-paw">警告按钮</Elg-Button>
      <Elg-Button type="danger" icon="fa-tree">危险按钮</Elg-Button>

      
    </div>
    <h2 class="row-title">禁用状态</h2>
    <div class="row">
      <Elg-Button disabled>默认按钮</Elg-Button>
      <Elg-Button type="primary" disabled>主要按钮</Elg-Button>
      <Elg-Button type="success" disabled>成功按钮</Elg-Button>
      <Elg-Button type="info" disabled>信息按钮</Elg-Button>
      <Elg-Button type="warning" disabled  plain>警告按钮</Elg-Button>
      <Elg-Button type="danger" disabled plain>危险按钮</Elg-Button>

      
    </div> 
    <h2 class="row-title">等待状态</h2>
    <div class="row">
      <Elg-Button loading>默认按钮</Elg-Button>
      <Elg-Button type="primary" loading>主要按钮</Elg-Button>
      <Elg-Button type="success" loading>成功按钮</Elg-Button>
      <Elg-Button type="info" loading>信息按钮</Elg-Button>
      <Elg-Button type="warning" loading  plain>警告按钮</Elg-Button>
      <Elg-Button type="danger" loading plain>危险按钮</Elg-Button>

      
    </div> 
    <h2 class="row-title">不同尺寸按钮</h2>
    <div class="row">
      <Elg-Button size="small" round>默认按钮</Elg-Button>
      <Elg-Button type="primary" size="small" loading>主要按钮</Elg-Button>
      <Elg-Button type="success">成功按钮</Elg-Button>
      <Elg-Button type="info">信息按钮</Elg-Button>
      <Elg-Button type="warning" size="large" round>警告按钮</Elg-Button>
      <Elg-Button type="danger" size="large" icon="fa-paw">危险按钮</Elg-Button>

      
    </div>
    <h2 class="row-title">文字按钮</h2>
    <div class="row" >
      <Elg-Button type="text" >文字按钮</Elg-Button>
      <Elg-Button type="text" disabled>文字按钮</Elg-Button>

    </div>
    <h2 class="row-title">点击事件</h2>
    <div class="row">
      <Elg-Button type="primary" @click="handleClick" ref="target">主要按钮</Elg-Button>
    </div>
    

  </div>
</template>

<script setup>
import {ref} from "vue";
const target = ref('');
const handleClick=()=>{
  window.alert('点击事件')
  console.log(target.value.buttonRef)
}
</script>

<style>

</style>