<script setup>
import { ref ,onMounted} from "vue";
import gridLayout from '../comp/gridLayout.vue';// 引入布局组件
import compShow from '../comp/compShow.vue';
import xml from 'highlight.js/lib/languages/xml';
import notify from '../comp/notify.vue';
import propsShow from '../comp/propsShow.vue';
onMounted(()=>{
  const tar = document.querySelector('.elg-inner__wrapper');
  tar.scrollTop =0
})
const Notify = ref();
const handleCopy = () => {
  Notify.value.message({
    content: '复制成功',
    type: 'success'
  })
}

const codeTarget = {
  xml: xml
}
const propsList =[
  {
    propsName: 'width',
    effect: '卡片宽度',
    type: 'String',
    required: '否',
    default: '无',
    info: ''
  },
  {
    propsName: 'imgSrc',
    effect: '封面链接',
    type: 'String',
    required: '否',
    default: '无',
    info: ''
  }, {
    propsName: 'imgHeight',
    effect: '封面高度',
    type: 'String',
    required: '否',
    default: '无',
    info: ''
  },
  {
    propsName: 'summary',
    effect: '卡片摘要',
    type: 'String',
    required: '否',
    default: '无',
    info: ''
  },
  {
    propsName: 'shadow',
    effect: '是否添加卡片阴影',
    type: 'Boolean',
    required: '否',
    default: 'true',
    info: ''
  }

]
const codeType = 'xml'
const codeStr1 = `
<template>
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
</template>

`

const codeStr2 = `
<template>
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
</template>
`

const codeStr3 = `
<template>
  <Elg-Card width="30%" >
      总是显示
    </Elg-Card>
    <Elg-Card width="30%" shadow="hover">
      悬浮时显示
    </Elg-Card>
    <Elg-Card width="30%" shadow="never">
      从不显示
    </Elg-Card>
</template>
`

const codeStr4 = `
<template>
  <Elg-Card width="40%" img-src="https://picsum.photos/400/200" summary="前端主流布局系统进阶与实战，轻松解决页面布局难题">
  </Elg-Card>
  <Elg-Card width="40%" shadow="hover" img-src="https://picsum.photos/400/200" imgHeight="200px">
    <div>浩瀚星空，广阔静谧，探索无尽宇宙是人类的终极理想</div>
  </Elg-Card>
</template>
`

const codeStr5=`
<template>
  <Elg-Card width="30%" img-src="https://picsum.photos/400/200" summary="Google资深工程师深度讲解Go语言 由浅入深掌握Go语言">
      <template #footer>
        <div class="footer">
          <div class="level">中级 · 5225人报名</div>
          <div class="price">￥399.00</div>
        </div>
      </template>
    </Elg-Card>
    <Elg-Card width="60%" img-src="https://picsum.photos/400/200" imgHeight="100px">
      <div>路线吃透面试学问，伴随身为Java工程师的你一路成长，高效充分准备面试拿offer。</div>
      <template #footer>
        <div class="footer">
          <div class="level">3步骤 · 3门课</div>
          <div class="price">10982收藏</div>
        </div>
      </template>
    </Elg-Card>
</template>
`
</script>
<template>
  <notify ref="Notify"> </notify>
  <div class="views-container">
    <div class="elg-view__title">
      卡片·Card
    </div>
    <div class="elg-view__sTitle">
      效果演示
    </div>
    <div class="elg-grid__wrap">
      <gridLayout>
        <template #left>
          <compShow title="简单卡片" :code="codeStr1" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">
            <div class=""></div>
            <Elg-Card>
              <div v-for="o in 4" :key="o" class="text item">
                {{ '列表内容 ' + o }}
              </div>


            </Elg-Card>
          </compShow>
          <compShow title="卡片阴影" :code="codeStr3" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">
            <template #info>
              <div> 可对阴影的显示进行配置。</div>

            </template>
            <div class="elg-card-layContainer">
              <Elg-Card class="card-show-item" style="background-color: var(--elgdoc-background);width: 70%;">
                总是显示
              </Elg-Card>
              <Elg-Card class="card-show-item" shadow="hover" style="background-color: var(--elgdoc-background);width: 70%;">
                悬浮时显示
              </Elg-Card>
              <Elg-Card class="card-show-item" shadow="never" style="background-color: var(--elgdoc-background);width: 70%;">
                从不显示
              </Elg-Card>
            </div>

          </compShow>
          <compShow title="自定义样式" :code="codeStr5" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">
            <div style="display: flex; justify-content: space-between; " >
              <Elg-Card width="48%" img-src="https://picsum.photos/402/202" summary="Google资深工程师深度讲解Go语言 由浅入深掌握Go语言">
              <template #footer>
                <div class="footer">
                  <div class="level">中级 · 5225人报名</div>
                  <div class="price">￥399.00</div>
                </div>
              </template>
            </Elg-Card>
            <Elg-Card width="50%" img-src="https://picsum.photos/403/203" imgHeight="100px">
            <div>路线吃透面试学问，伴随身为Java工程师的你一路成长，高效充分准备面试拿offer。</div>
            <template #footer>
              <div class="footer">
                <div class="level">3步骤 · 3门课</div>
                <div class="price">10982收藏</div>
              </div>
            </template>
          </Elg-Card>
            </div>
            
          </compShow>
          
        </template>
        <template #right>
          <compShow title="基础用法" :code="codeStr2" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">
            <template #info>
              <div> 包含标题，内容和操作</div>

            </template>
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
          </compShow>
          <compShow title="基础用法" :code="codeStr4" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">
            <template #info>
              <div> 添加一个封面</div>

            </template>
            <Elg-Card img-src="https://picsum.photos/400/200" summary="前端主流布局系统进阶与实战，轻松解决页面布局难题">

            </Elg-Card>

            <Elg-Card width="80%" style="margin-top: 20px;" shadow="hover" img-src="https://picsum.photos/401/201"
              imgHeight="200px">
              <div>浩瀚星空，广阔静谧，探索无尽宇宙是人类的终极理想</div>
            </Elg-Card>
          </compShow>
        </template>

      </gridLayout>

    

    </div>
    <div class="elg-view__sTitle">
      属性Props
    </div>
    <propsShow :propsList="propsList" />
  </div>
  <!-- <h2 class="row-title">简单卡片</h2>
  <div class="row">
    <Elg-Card>

      <div v-for="o in 4" :key="o" class="text item">
        {{ '列表内容 ' + o }}
      </div>


    </Elg-Card>

  </div> -->
  <!-- <h2 class="row-title">基础用法</h2>
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
  </div> -->
  <!-- <h2 class="row-title">卡片阴影</h2>
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
  <h2 class="row-title">基础图片卡片</h2> -->
  <!-- <div class="row">
    <Elg-Card width="40%" img-src="web.png" summary="前端主流布局系统进阶与实战，轻松解决页面布局难题">

    </Elg-Card>
    <Elg-Card width="40%" shadow="hover" img-src="star.jpg" imgHeight="200px">
      <div>浩瀚星空，广阔静谧，探索无尽宇宙是人类的终极理想</div>
    </Elg-Card>
  </div> -->
  <!-- <h2 class="row-title">自定义样式</h2>
  <div class="row">
    <Elg-Card width="30%" img-src="go.png" summary="Google资深工程师深度讲解Go语言 由浅入深掌握Go语言">
      <template #footer>
        <div class="footer">
          <div class="level">中级 · 5225人报名</div>
          <div class="price">￥399.00</div>
        </div>
      </template>
    </Elg-Card>
    <Elg-Card width="60%" img-src="java.png" imgHeight="100px">
      <div>路线吃透面试学问，伴随身为Java工程师的你一路成长，高效充分准备面试拿offer。</div>
      <template #footer>
        <div class="footer">
          <div class="level">3步骤 · 3门课</div>
          <div class="price">10982收藏</div>
        </div>
      </template>
    </Elg-Card>
  </div> -->
</template>



<style scoped>
.elg-card-layContainer {
  display: flex;
  align-items: center;
  flex-direction: column;

}

.card-show-item {
  margin-bottom: 15px;
  text-align: center;
}

.card-show-container {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}

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

.footer {
  text-align: left;

  .level {
    font-size: var(--elg-font-size-small);
    color: var(--elg-text-color-secondary);
    margin-bottom: 5px;
  }

  .price {
    color: var(--danger);

  }
}
</style>