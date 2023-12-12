<template>
  <h2 class="row-title">不同方向</h2>
  <div class="row">
    <Elg-Tooltip placement="left">

      <Elg-Button>left</Elg-Button>

    </Elg-Tooltip>
    <Elg-Tooltip>
      <Elg-Button>top</Elg-Button>

    </Elg-Tooltip>
    <Elg-Tooltip placement="right">
      <Elg-Button>right</Elg-Button>

    </Elg-Tooltip>
    <Elg-Tooltip placement="bottom">
      <Elg-Button>bottom</Elg-Button>

    </Elg-Tooltip>
  </div>
  <h2 class="row-title">点击触发</h2>
  <div class="row">
    <Elg-Tooltip placement="left" trigger="click" @visible-change="handleChange">

      <Elg-Button>left</Elg-Button>

    </Elg-Tooltip>
    <Elg-Tooltip trigger="click">
      <Elg-Button>top</Elg-Button>

    </Elg-Tooltip>
    <Elg-Tooltip trigger="click" placement="right">
      <Elg-Button>right</Elg-Button>

    </Elg-Tooltip>
    <Elg-Tooltip trigger="click" placement="bottom">
      <Elg-Button>bottom</Elg-Button>

    </Elg-Tooltip>
  </div>
  <h2 class="row-title">主题</h2>
  <div class="row">
    <Elg-Tooltip content="rporis ad.">

      <Elg-Button>dark theme</Elg-Button>

    </Elg-Tooltip>
    <Elg-Tooltip effect="light">
      <Elg-Button>light theme</Elg-Button>

    </Elg-Tooltip>
  </div>
  <h2 class="row-title">手动触发</h2>
  <div class="row">
    <Elg-Tooltip ref="tooltipRef" content="手动触发" :manual="true">
      <Elg-Button type="text">当前元素不直接触发tooltip</Elg-Button>
    </Elg-Tooltip>

  </div>
  <div class="row">
    <Elg-Button type="success" @click="triggershow">点击手动打开tooltip</Elg-Button>
    <Elg-Button type="info" @click="triggerclose">点击手动关闭tooltip</Elg-Button>

  </div>
  <h2 class="row-title">延时触发</h2>
  <div class="row">
    <Elg-Tooltip placement="top" :openDelay="1000" content="延时1秒触发">

      <Elg-Button>延时1s触发</Elg-Button>

    </Elg-Tooltip>
    <Elg-Tooltip :closeDelay="1000" content="延时1秒关闭">

      <Elg-Button>延时1s关闭</Elg-Button>

    </Elg-Tooltip>
    <Elg-Tooltip :openDelay="1000" :closeDelay="1000" trigger="click" content="点击延时1s触发">

      <Elg-Button>点击延时触发,延时关闭</Elg-Button>

    </Elg-Tooltip>

  </div>

  <h2 class="row-title">更多content</h2>
  <div class="row">
    <Elg-Tooltip>
      <template #content>
        <div class="content-info">
          <p>多行信息</p>
          <p>第二行信息</p>
        </div>


      </template>
      <Elg-Button>更多content</Elg-Button>

    </Elg-Tooltip>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const tooltipRef = ref()

const handleChange = (status) => {
  console.log(status)
}
const triggershow = () => {
  // console.log(tooltipRef.value)
  tooltipRef.value.outControlShow();
}
const triggerclose = () => {
  tooltipRef.value.outControlHide();
}

</script>

<style>
.content-info{
  line-height: 30px;
  padding: 10px;
}
</style>