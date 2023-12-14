<script setup>
const props = defineProps({
    baseColor: {
        default: 'success',
        type: String,
    },

});
const colorlist=['-dark-2','-light-1','-light-3','-light-5','-light-7','-light-8']
</script>
<template>
  <!-- 单个颜色组件 -->
  <div class="other-item-container">
      <div class="other-top" :style="{backgroundColor:`var(--${baseColor})`}">
          <div class="primary-title1">{{baseColor}}</div>
      </div>
      <div class="other-bottom">
          <div class="other-bottom-item" v-for="(item,index) in colorlist"
          :key="index" :style="{backgroundColor:`var(--${baseColor}${item})`}" ></div>
          

      </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
.other-item-container{
    flex: 1 1 auto;
    margin: 10px;
}
.other-top{
    height: 130px;
    width: 100%;
    background-color: var(--warning);
    border-radius: 4px 4px 0 0;
    padding: 10px ;
    box-sizing: border-box;
    color: #fff;
    text-align: left;

}
.other-bottom{
    display: flex;
    height: 50px;
    box-sizing: border-box;
    .other-bottom-item{
        flex: 1 1 auto;
    }
    .other-bottom-item:nth-child(1){
    border-radius: 0 0 0 4px;
        
    }
    .other-bottom-item:last-child{
    border-radius: 0 0 4px 0;

    }
}
</style>