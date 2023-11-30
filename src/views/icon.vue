<template>
  <div class="views-icon-container">
    <h2 class="row-title">普通引入</h2>
    <div class="row">
      <Elg-Icon icon="fa-toggle-on" />
      <Elg-Icon icon="fa-sync-alt" />
      <Elg-Icon icon="fa-bell" />
      <Elg-Icon icon="fa-arrow-alt-circle-down" />
      <Elg-Icon icon="fa-undo" />
      <Elg-Icon icon="fa-play-circle" />
      <Elg-Icon icon="fa-paw" />
      <Elg-Icon icon="fa-home-lg" />
      <Elg-Icon icon="fa-tree" />
      <Elg-Icon icon="fa-comment-dots" />

      
    </div>    
    <h2 class="row-title">设置size</h2>
    <div class="row">
      <Elg-Icon icon="fa-toggle-on" />
      <Elg-Icon icon="fa-sync-alt" size="xs"/>
      <Elg-Icon icon="fa-bell"  size="lg" />
      <Elg-Icon icon="fa-arrow-alt-circle-down" size="lg" />
      <Elg-Icon icon="fa-undo" size="xl" />
      <Elg-Icon icon="fa-play-circle" size="xl"  />
      <Elg-Icon icon="fa-paw" size="2x"/>
      <Elg-Icon icon="fa-home-lg" size="2x" />
      <Elg-Icon icon="fa-tree" size="3x" />
      <Elg-Icon icon="fa-comment-dots" size="3x" />

      
    </div>
    <h2 class="row-title">旋转和filp</h2>   
    <div class="row">
      <Elg-Icon icon="fa-toggle-on" rotation="90" />

      <Elg-Icon icon="fa-undo"  rotation="180" />
      <Elg-Icon icon="fa-bell" rotation="270" />
      <Elg-Icon icon="fa-play-circle" rotation="180" />
      <Elg-Icon icon="fa-home-lg" flip="horizontal" />
      <Elg-Icon icon="fa-comment-dots" flip="vertical" />
      <Elg-Icon icon="fa-arrow-alt-circle-down"   flip="both" />
      <Elg-Icon icon="fa-paw" flip="vertical" />
      <Elg-Icon icon="fa-tree" flip="vertical" />

    </div>
    <h2 class="row-title">动画图标</h2>   
    <div class="row">
      <Elg-Icon icon="fa-toggle-on" :beat="true" />
      <Elg-Icon icon="fa-sync-alt" :beat-fade="true" />
      <Elg-Icon icon="fa-bell" :bounce="true" />
      <Elg-Icon icon="fa-arrow-alt-circle-down" :fade="true" />
      <Elg-Icon icon="fa-undo" :spin="true" />
      <Elg-Icon icon="fa-play-circle" :shake="true" />
      <Elg-Icon icon="fa-paw" :pulse="true"  />
      <Elg-Icon icon="fa-home-lg" :bounce="true"  />
      <Elg-Icon icon="fa-tree" :shake="true" />
      <Elg-Icon icon="fa-comment-dots" :beat="true" />

      
    </div> 
    <h2 class="row-title">预设颜色</h2>   
    <div class="row">
      <Elg-Icon icon="fa-toggle-on" type="primary" />
      <Elg-Icon icon="fa-sync-alt" type="success" />
      <Elg-Icon icon="fa-bell"   type="warning" />
      <Elg-Icon icon="fa-arrow-alt-circle-down"  type="danger" />
      <Elg-Icon icon="fa-undo" type="info" />
      <Elg-Icon icon="fa-play-circle" type="primary" />
      <Elg-Icon icon="fa-paw"  type="success" />
      <Elg-Icon icon="fa-home-lg" type="warning" />
      <Elg-Icon icon="fa-tree"  type="danger" />
      <Elg-Icon icon="fa-comment-dots" type="info"  />

      
    </div>  
    <h2 class="row-title">自定义颜色</h2>   
    <div class="row">
      <Elg-Icon icon="fa-toggle-on" color="red" />
      <Elg-Icon icon="fa-sync-alt"  color="blue"/>
      <Elg-Icon icon="fa-bell"  color="#1ABC9C" />
      <Elg-Icon icon="fa-arrow-alt-circle-down" color="#FFCC66" />
      <Elg-Icon icon="fa-undo" color="#8E44AD" />
      <Elg-Icon icon="fa-play-circle" color="#D35400" />
      <Elg-Icon icon="fa-paw"   color="#FFB3A7"/>
      <Elg-Icon icon="fa-home-lg" color="#D6ECF0"/>
      <Elg-Icon icon="fa-tree" color="#4B5CC4" />
      <Elg-Icon icon="fa-comment-dots" color="#FF4777" />

      
    </div> 
    <h2 class="row-title">带边框图标</h2>   
    <div class="row">
      <Elg-Icon icon="fa-toggle-on" :border="true"  />
      <Elg-Icon icon="fa-sync-alt" :border="true" />
      <Elg-Icon icon="fa-bell" :border="true"  />
      <Elg-Icon icon="fa-arrow-alt-circle-down" :border="true"  />
      <Elg-Icon icon="fa-undo" :border="true"  />
      <Elg-Icon icon="fa-play-circle" :border="true"  />
      <Elg-Icon icon="fa-paw" :border="true" />
      <Elg-Icon icon="fa-home-lg" :border="true" />
      <Elg-Icon icon="fa-tree" :border="true"  />
      <Elg-Icon icon="fa-comment-dots" :border="true"  />

      
    </div> 
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.testcolor{
  color:$color-red ;
}
</style>