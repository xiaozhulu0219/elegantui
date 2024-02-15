<script setup>
import gridLayout from '../comp/gridLayout.vue';// 引入布局组件
import compShow from '../comp/compShow.vue';
import { ref,onMounted } from "vue";
import xml from 'highlight.js/lib/languages/xml';
import notify from '../comp/notify.vue';
import propsShow from '../comp/propsShow.vue';
const Notify = ref();
const codeTarget = {
  xml: xml
}
const codeType = 'xml'
onMounted(()=>{
  const tar = document.querySelector('.elg-inner__wrapper');
  tar.scrollTop =0
})
const isShow1 = ref(false);
const isShow2 = ref(false);
const isShow3 = ref(false);
const isShow4 = ref(false);

const handleCopy = () => {
  Notify.value.message({
    content: '复制成功',
    type: 'success'
  })
}
const propsList = [
{
    propsName: 'title',
    effect: '标题',
    type: 'String',
    required: '否',
    default: '提示',
    info: ''
  },
  {
    propsName: 'width',
    effect: '弹框宽度',
    type: 'String',
    required: '否',
    default: '30vw',
    info: ''
  },{
    propsName: 'top',
    effect: '弹框距离上方距离',
    type: 'String',
    required: '否',
    default: '15vh',
    info: ''
  },{
    propsName: 'visible',
    effect: '是否可见',
    type: 'Boolean',
    required: '否',
    default: 'false',
    info: ''
  },{
    propsName: 'footer',
    effect: '是否显示对话框底部',
    type: 'Boolean',
    required: '否',
    default: 'true',
    info: ''
  }
]
const propsList2 = [
  {
    eventName:'close',
    eventEffect:'关闭对话框',
    info:''
  },{
    eventName:'confirm',
    eventEffect:'提交对话框',
    info:''
  }
]
const codeStr1 = `
<template>
  <Elg-Button type="text" @click="isShow1 = !isShow1">
      点击打开基本对话框
  </Elg-Button>
  <Elg-Dialog :visible="isShow1" @close="isShow1 = !isShow1" @confirm="isShow1 = !isShow1">
    这是一个基本的对话框
  </Elg-Dialog>
</template>
`
const codeStr2 = `
<template>
  <Elg-Button class="elg-btn--show" type="danger" @click="isShow1 = !isShow1" icon="fa-tree">
    出现吧
  </Elg-Button>
  <Elg-Dialog :visible="isShow2" @close="isShow2 = !isShow2" @confirm="isShow2 = !isShow2" :footer="false">
    这是一个无footer对话框
  </Elg-Dialog>
</template>
`

const codeStr3 = `
<template>
  <Elg-Button class="elg-btn--show" type="success" circle>
    <Elg-Icon icon="fa-paw" @click="isShow3 = !isShow3" />
  </Elg-Button>
  <Elg-Dialog :visible="isShow3">
    自定义footer
    <template #footer>

      <Elg-Button type="danger" size="small" :style="{ marginRight: '10px' }" @click="isShow3 = !isShow3">重置</Elg-Button>

      <Elg-Button type="primary" size="small" @click="isShow3 = !isShow3">确定</Elg-Button>
    </template>


  </Elg-Dialog>
</template>

`
const codeStr4 = `
<template>
  <Elg-Button class="elg-btn--show" @click="isShow4 = !isShow4" type="info" icon="fa-play-circle">
            go
  </Elg-Button>
  <Elg-Dialog :visible="isShow4" @close="isShow4 = !isShow4" @confirm="isShow4 = !isShow4" width="600px" top="40vh"
    title="温馨提醒">
    传递了 title、width、top 这三个 prop
  </Elg-Dialog>
</template>
`
// 以下代码为测试遮罩层显示位置,测试完毕请注释
// const isShow5 = ref(false);

const columns = [
  {title:'事件名称',value:'eventName'},
  {title:'作用',value:'eventEffect'},
  {title:'备注',value:'info'}

]

</script>

<template>
  <div class="views-container">
    <div class="elg-view__title">
      对话框·Dialog
    </div>
    <div class="elg-view__sTitle">
      效果演示
    </div>
    <div class="elg-grid__wrap">
      <gridLayout>
        <template #left>
          <compShow title="基本用法" :code="codeStr1" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">
            <Elg-Button type="warning" @click="isShow1 = !isShow1">
              打开
            </Elg-Button>
          </compShow>
          <compShow title="自定义footer" :code="codeStr3" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">
            <Elg-Button class="elg-btn--show" type="success" circle>
              <Elg-Icon icon="fa-paw" @click="isShow3 = !isShow3" />
            </Elg-Button>
          </compShow>
        </template>
        <template #right>
          <compShow title="无footer" :code="codeStr2" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">
            <Elg-Button class="elg-btn--show" type="danger" @click="isShow2 = !isShow2" icon="fa-tree">出现吧</Elg-Button>

          </compShow>
          <compShow title="无footer" :code="codeStr4" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">
           
            <Elg-Button class="elg-btn--show" @click="isShow4 = !isShow4" type="info" icon="fa-play-circle">
            go
            </Elg-Button>

          </compShow>
        </template>

      </gridLayout>

      
    </div>

    <notify ref="Notify"> </notify>
    <div class="elg-view__sTitle">
     属性Props
    </div>
    <propsShow :propsList="propsList" />
    <div class="elg-view__sTitle">
     事件Event
    </div>
    <propsShow :columns="columns" :propsList="propsList2" width="50%" />


  </div>

  <!-- <h2 class="row-title">基本用法</h2>
  <div class="row">
    <Elg-Button type="text" @click="isShow1 = !isShow1">
      点击打开基本对话框
    </Elg-Button>

  </div>
  <h2 class="row-title">无footer</h2>
  <div class="row">
    <Elg-Button type="text" @click="isShow2 = !isShow2">
      点击打开无footer对话框
    </Elg-Button>

  </div>
  <h2 class="row-title">自定义footer</h2>
  <div class="row">
    <Elg-Button type="text" @click="isShow3 = !isShow3">
      自定义footer
    </Elg-Button>

  </div>
  <h2 class="row-title">自定义宽度和位置</h2>
  <div class="row">
    <Elg-Button type="text" @click="isShow4 = !isShow4">
      自定义宽度和位置对话框
    </Elg-Button>

  </div> -->
  <Elg-Dialog :visible="isShow1" @close="isShow1 = !isShow1" @confirm="isShow1 = !isShow1">
    这是一个基本的对话框</Elg-Dialog>
  <Elg-Dialog style="background-color: red;" :visible="isShow2" @close="isShow2 = !isShow2" @confirm="isShow2 = !isShow2" :footer="false">
    这是一个无footer对话框</Elg-Dialog>
  <Elg-Dialog :visible="isShow3">
    自定义footer
    <template #footer>

      <Elg-Button type="danger" size="small" :style="{ marginRight: '10px' }" @click="isShow3 = !isShow3">重置</Elg-Button>

      <Elg-Button type="primary" size="small" @click="isShow3 = !isShow3">确定</Elg-Button>
    </template>


  </Elg-Dialog>
  <Elg-Dialog :visible="isShow4" @close="isShow4 = !isShow4" @confirm="isShow4 = !isShow4" width="600px" top="40vh"
    title="温馨提醒">
    传递了 title、width、top 这三个 prop
  </Elg-Dialog>
  <!-- 以下代码为测试遮罩层显示位置,测试完毕请注释 -->
  <!-- <div style="height: 800px;width: 100%;border: 1px solid #cccc;"></div>
  <Elg-Button type="text" @click="isShow5 = !isShow5">
      点击打开基本对话框
    </Elg-Button>
    <Elg-Dialog :visible="isShow5" @close="isShow5 = !isShow5" @confirm="isShow5 = !isShow5">
    这是一个基本的对话框</Elg-Dialog> -->
</template>



<style></style>