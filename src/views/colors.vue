<script setup>
// const 
import ColorComp from "@/components/colorComp.vue"
</script>

<template>
  <div class="color-container">
    <h2>colors</h2>
    <p>elegant预设了1种主色，4种辅助颜色</p>
    <h3>主色</h3>
    <div class="primary-container">
      <div class="primary-left">
        <div class="primary-title1">primary</div>
        <div class="primary-title2">#409EFF</div>
      </div>
      <div class="primary-right">
        <div class="right-1 right-item">primary-dark-2</div>
        <div class="right-2 right-item">primary-light-1</div>
        <div class="right-3 right-item">primary-light-3</div>
        <div class="right-4 right-item">primary-light-5</div>
        <div class="right-5 right-item">primary-light-7</div>
        <div class="right-6 right-item">primary-light-8</div>
      </div>
    </div>
    <h3>辅助色</h3>
    <div class="other-container">
      <ColorComp baseColor="success" />
      <ColorComp baseColor="warning"  />

      <ColorComp baseColor="danger"/>
      <ColorComp baseColor="info"/>
    </div>
    <h3>中性色</h3>
    <p>中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。</p>
    
    <div class="text-color-container">
      <div class="text-color-item" style="background-color:var(--elg-text-color-primary)">
        <div class="primary-text1">主要文字</div>
        <div class="primary-text2">#303133</div>
      </div>
      <div class="text-color-item" style="background-color:var(--elg-text-color-regular)">
         <div class="primary-text1">常规文字</div>
        <div class="primary-text2">#606266</div>
      </div>
      <div class="text-color-item" style="background-color:var(--elg-text-color-secondary)">
         <div class="primary-text1">次要文字</div>
        <div class="primary-text2">#909399</div>
      </div>
      <div class="text-color-item" style="background-color:var(--elg-text-color-disabled)">
        <div class="primary-text1">占位文字</div>
        <div class="primary-text2">#C0C4CC</div>
      </div>

    </div>
    <div class="text-color-container border">
      <div class="text-color-item" style="background-color:var(--elg-border-color)">
        <div class="primary-text1">一级边框</div>
        <div class="primary-text2">#DCDFE6</div>
      </div>
      <div class="text-color-item" style="background-color:var(--elg-border-color-light)">
         <div class="primary-text1">二级边框</div>
        <div class="primary-text2">#E4E7ED</div>
      </div>
      <div class="text-color-item" style="background-color:var(--elg-border-color-lighter)">
         <div class="primary-text1">三级边框</div>
        <div class="primary-text2">#EBEEF5</div>
      </div>
      <div class="text-color-item" style="background-color:var(--elg-border-color-extra-light)">
        <div class="primary-text1">四级边框</div>
        <div class="primary-text2">#F2F6FC</div>
      </div>

    </div>
  </div>
</template>



<style lang="scss">
.color-container {
  width: 100%;
}
.primary-container {
  display: flex;
  height: 210px;
  .primary-left {
    text-align: start;
    width: 40%;
    background-color: var(--primary);
    padding: 10px;
    color: #fff;

    box-sizing: border-box;

    .primary-title2 {
      margin-top: 5px;
      // font-size: 0.8em;
    }
  }
  
  .primary-right {
    width: 30%;
    text-align: left;
    .right-item {
      height: 35px;
      line-height: 35px;
      color: #606266;
      padding-left: 10px;
      box-sizing: border-box;
    }
    .right-1 {
      background-color: var(--primary-dark-2);
    }
    .right-2 {
      background-color: var(--primary-light-1);
    }
    .right-3 {
      background-color: var(--primary-light-3);
    }
    .right-4 {
      background-color: var(--primary-light-5);
    }
    .right-5 {
      background-color: var(--primary-light-7);
    }
    .right-6 {
      background-color: var(--primary-light-8);
    }
  }
}

.other-container {
    height: 200px;
    display: flex;
    margin-bottom: 20px;
  }
.text-color-container{
  display: flex;
  height: 70px;
  color: #fff;
  text-align: left;
 
  .text-color-item{
    flex: 1 1 auto;
     padding: 10px;
  box-sizing: border-box;
    .primary-text2{
      font-size: 0.8em;
    }
  }
   &.border{
     color: var(--elg-text-color-primary);
  text-align: left;
   }
}
</style>