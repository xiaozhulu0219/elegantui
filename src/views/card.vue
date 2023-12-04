<template>
  <h2 class="row-title">简单卡片</h2>
  <div class="row">
    <Elg-Card>

      <div v-for="o in 4" :key="o" class="text item">
        {{ '列表内容 ' + o }}
      </div>


    </Elg-Card>

  </div>
  <h2 class="row-title">基础用法</h2>
  包含标题，内容和操作。
  <div class="row">
    <Elg-Card>


      <template #header>
        <div class="card-header">
          <span class="title">卡片名称</span>
          <Elg-Button type="text">操作按钮</Elg-Button>
        </div>

      </template>
      <div v-for="o in 4" :key="o" class="text item">
        {{ '列表内容 ' + o }}
      </div>
      
    </Elg-Card>
  </div>
  <h2 class="row-title">卡片阴影</h2>
  可对阴影的显示进行配置。
  <div class="row">
    <Elg-Card width="30%">
      总是显示
    </Elg-Card>
    <Elg-Card width="30%" shadow="hover">
      悬浮时显示
    </Elg-Card>
    <Elg-Card width="30%" shadow="never">
      从不显示
    </Elg-Card>
  </div>
  <h2 class="row-title">基础图片卡片</h2>
  <div class="row">
    <Elg-Card width="40%" img-src="web.png" summary="前端主流布局系统进阶与实战，轻松解决页面布局难题">

    </Elg-Card>
    <Elg-Card width="40%" shadow="hover" img-src="star.jpg" imgHeight="200px">
      <div>浩瀚星空，广阔静谧，探索无尽宇宙是人类的终极理想</div>
    </Elg-Card>
  </div>
  <h2 class="row-title">自定义样式</h2>
  <div class="row">
    <Elg-Card width="30%" img-src="go.png" summary="Google资深工程师深度讲解Go语言 由浅入深掌握Go语言">
      <template #footer>
        <div class="footer">
          <div class="level">中级 · 5225人报名</div>
          <div class="price">￥399.00</div>
        </div>
      </template>
    </Elg-Card>
    <Elg-Card width="60%" img-src="java.png" imgHeight="100px" >
      <div>路线吃透面试学问，伴随身为Java工程师的你一路成长，高效充分准备面试拿offer。</div>
      <template #footer>
    <div class="footer">
      <div class="level">3步骤 · 3门课</div>
      <div class="price">10982收藏</div>
    </div>
  </template>
    </Elg-Card>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 10px 0;
}

.box-card {
  width: 480px;
}

.card-header {

  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    font-size: 1.2em;
  }
}
.footer{
  text-align: left;
  .level{
    font-size:var(--elg-font-size-small);
    color:var(--elg-text-color-secondary) ;
    margin-bottom: 5px;
  }
  .price{
    color:var(--danger) ;

  }
}
</style>