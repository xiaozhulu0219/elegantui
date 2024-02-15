

<script setup>
import compShow from '../comp/compShow.vue';
import {ref,onMounted } from "vue";
import xml from 'highlight.js/lib/languages/xml';
import propsShow from '../comp/propsShow.vue';
import notify from '../comp/notify.vue';
import gridLayout from '../comp/gridLayout.vue';// 引入布局组件
onMounted(()=>{
  const tar = document.querySelector('.elg-inner__wrapper');
  tar.scrollTop =0
})
// 获取通知组件的实例
const Notify = ref();
function handletempClick() {
  Notify.value.message({
    content: '复制成功',
    type: 'success'
  })
}

const codeTarget = {
  xml: xml
}
const codeType = 'xml'
const codeStr1 = `
<template>
<Elg-Icon   icon="fa-toggle-on" />
<Elg-Icon   icon="fa-sync-alt" />
<Elg-Icon   icon="fa-bell" />
<Elg-Icon   icon="fa-arrow-alt-circle-down" />
<Elg-Icon   icon="fa-undo" />
<Elg-Icon  icon="fa-play-circle" />
<Elg-Icon  icon="fa-paw" />
<Elg-Icon  icon="fa-home-lg" />
<Elg-Icon  icon="fa-tree" />
<Elg-Icon  icon="fa-comment-dots" />
</template>
`
const codeStr2 = `
<template>
<Elg-Icon icon="fa-toggle-on" />
<Elg-Icon icon="fa-sync-alt" size="xs" />
<Elg-Icon icon="fa-bell" size="lg" />
<Elg-Icon icon="fa-arrow-alt-circle-down" size="lg" />
<Elg-Icon icon="fa-undo" size="xl" />
<Elg-Icon icon="fa-play-circle" size="xl" />
<Elg-Icon icon="fa-paw" size="2x" />
<Elg-Icon icon="fa-home-lg" size="2x" />
<Elg-Icon icon="fa-tree" size="3x" />
<Elg-Icon icon="fa-comment-dots" size="3x" />
</template>
`
const codeStr3 = `
<template>
<Elg-Icon icon="fa-toggle-on" rotation="90" />
<Elg-Icon icon="fa-undo" rotation="180" />
<Elg-Icon icon="fa-bell" rotation="270" />
<Elg-Icon icon="fa-play-circle" rotation="180" />
<Elg-Icon icon="fa-home-lg" flip="horizontal" />
<Elg-Icon icon="fa-comment-dots" flip="vertical" />
<Elg-Icon icon="fa-arrow-alt-circle-down" flip="both" />
<Elg-Icon icon="fa-paw" flip="vertical" />
<Elg-Icon icon="fa-tree" flip="vertical" />
</template>
`
const codeStr4 = `
<template>
<Elg-Icon icon="fa-toggle-on" :beat="true" />
<Elg-Icon icon="fa-sync-alt" :beat-fade="true" />
<Elg-Icon icon="fa-bell" :bounce="true" />
<Elg-Icon icon="fa-arrow-alt-circle-down" :fade="true" />
<Elg-Icon icon="fa-undo" :spin="true" />
<Elg-Icon icon="fa-play-circle" :shake="true" />
<Elg-Icon icon="fa-paw" :pulse="true" />
<Elg-Icon icon="fa-home-lg" :bounce="true" />
<Elg-Icon icon="fa-tree" :shake="true" />
<Elg-Icon icon="fa-comment-dots" :beat="true" />
</template>
`

const codeStr5 = `
<template>
<Elg-Icon icon="fa-toggle-on" type="primary" />
<Elg-Icon icon="fa-sync-alt" type="success" />
<Elg-Icon icon="fa-bell" type="warning" />
<Elg-Icon icon="fa-arrow-alt-circle-down" type="danger" />
<Elg-Icon icon="fa-undo" type="info" />
<Elg-Icon icon="fa-play-circle" type="primary" />
<Elg-Icon icon="fa-paw" type="success" />
<Elg-Icon icon="fa-home-lg" type="warning" />
<Elg-Icon icon="fa-tree" type="danger" />
<Elg-Icon icon="fa-comment-dots" type="info" />
</template>
`

const codeStr6 = `
<template>
<Elg-Icon icon="fa-toggle-on" color="red" />
<Elg-Icon icon="fa-sync-alt" color="blue" />
<Elg-Icon icon="fa-bell" color="#1ABC9C" />
<Elg-Icon icon="fa-arrow-alt-circle-down" color="#FFCC66" />
<Elg-Icon icon="fa-undo" color="#8E44AD" />
<Elg-Icon icon="fa-play-circle" color="#D35400" />
<Elg-Icon icon="fa-paw" color="#FFB3A7" />
<Elg-Icon icon="fa-home-lg" color="#D6ECF0" />
<Elg-Icon icon="fa-tree" color="#4B5CC4" />
<Elg-Icon icon="fa-comment-dots" color="#FF4777" />
</template>
`
const codeStr7 = `
<template>
<Elg-Icon icon="fa-toggle-on" :border="true" />
<Elg-Icon icon="fa-sync-alt" :border="true" />
<Elg-Icon icon="fa-bell" :border="true" />
<Elg-Icon icon="fa-arrow-alt-circle-down" :border="true" />
<Elg-Icon icon="fa-undo" :border="true" />
<Elg-Icon icon="fa-play-circle" :border="true" />
<Elg-Icon icon="fa-paw" :border="true" />
<Elg-Icon icon="fa-home-lg" :border="true" />
<Elg-Icon icon="fa-tree" :border="true" />
<Elg-Icon icon="fa-comment-dots" :border="true" />
</template>
`
const propsList = [
  {
    propsName: 'icon',
    effect: '设置图标',
    type: 'String',
    required: '是',
    default: '无',
    info: ''
  },
  {
    propsName: 'size',
    effect: '设置图标大小',
    type: 'String',
    required: '否',
    default: '无',
    info: 'xs lg xl 2x ...'
  }, {
    propsName: 'rotation',
    effect: '旋转',
    type: '[String, Number]',
    required: '否',
    default: '无',
    info: ''
  }, {
    propsName: 'flip',
    effect: '翻转',
    type: '[String, Number]',
    required: '否',
    default: '无',
    info: ''
  },
  {
    propsName: 'beat',
    effect: 'beat动画',
    type: 'Boolean',
    required: '否',
    default: '无',
    info: ''
  },
  {
    propsName: 'beat-fade',
    effect: 'beat-fade动画',
    type: 'Boolean',
    required: '否',
    default: '无',
    info: ''
  },
  {
    propsName: 'bounce',
    effect: 'bounce动画',
    type: 'Boolean',
    required: '否',
    default: '无',
    info: ''
  },
  {
    propsName: 'fade',
    effect: 'fade动画',
    type: 'Boolean',
    required: '否',
    default: '无',
    info: ''
  },
  {
    propsName: 'shake',
    effect: 'shake动画',
    type: 'Boolean',
    required: '否',
    default: '无',
    info: ''
  },
  {
    propsName: 'spin',
    effect: 'spin动画',
    type: 'Boolean',
    required: '否',
    default: '无',
    info: ''
  }, {
    propsName: 'pulse',
    effect: 'pulse动画',
    type: 'Boolean',
    required: '否',
    default: '无',
    info: ''
  }, {
    propsName: 'type',
    effect: '主题类型',
    type: 'String',
    required: '否',
    default: '无',
    info: ''
  }, {
    propsName: 'color',
    effect: '颜色',
    type: 'tring',
    required: '否',
    default: '无',
    info: ''
  },
]
const handleCopy = () => {
  Notify.value.message({
    content: '复制成功',
    type: 'success'
  })
}
</script>
<template>
  <div class="views-container">
    <div class="elg-view__title">
      图标·Icon
    </div>
    <div class="elg-view__sTitle">
      效果演示
    </div>
    <div class="elg-grid__wrap">
      <gridLayout>
        <template #left>
          <compShow title="普通引入" :code="codeStr1" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">

            <div ref="codeNomal" class="elg-icon__slot">
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

          </compShow>
          <compShow title="旋转和flip" :code="codeStr3" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">

            <div ref="codeNomal" class="elg-icon__slot">
              <Elg-Icon icon="fa-toggle-on" rotation="90" />
              <Elg-Icon icon="fa-undo" rotation="180" />
              <Elg-Icon icon="fa-bell" rotation="270" />
              <Elg-Icon icon="fa-play-circle" rotation="180" />
              <Elg-Icon icon="fa-home-lg" flip="horizontal" />
              <Elg-Icon icon="fa-comment-dots" flip="vertical" />
              <Elg-Icon icon="fa-arrow-alt-circle-down" flip="both" />
              <Elg-Icon icon="fa-paw" flip="vertical" />
              <Elg-Icon icon="fa-tree" flip="vertical" />
            </div>

          </compShow>
          <compShow title="预设颜色" :code="codeStr5" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">

            <div ref="codeNomal" class="elg-icon__slot">
              <Elg-Icon icon="fa-toggle-on" type="primary" />
              <Elg-Icon icon="fa-sync-alt" type="success" />
              <Elg-Icon icon="fa-bell" type="warning" />
              <Elg-Icon icon="fa-arrow-alt-circle-down" type="danger" />
              <Elg-Icon icon="fa-undo" type="info" />
              <Elg-Icon icon="fa-play-circle" type="primary" />
              <Elg-Icon icon="fa-paw" type="success" />
              <Elg-Icon icon="fa-home-lg" type="warning" />
              <Elg-Icon icon="fa-tree" type="danger" />
              <Elg-Icon icon="fa-comment-dots" type="info" />
            </div>

          </compShow>
          <compShow title="带边框" :code="codeStr7" :codeTarget="codeTarget" :codeType="codeType" @copyCallback="handleCopy">

            <div ref="codeNomal" class="elg-icon__slot">
              <Elg-Icon icon="fa-toggle-on" :border="true" />
              <Elg-Icon icon="fa-sync-alt" :border="true" />
              <Elg-Icon icon="fa-bell" :border="true" />
              <Elg-Icon icon="fa-arrow-alt-circle-down" :border="true" />
              <Elg-Icon icon="fa-undo" :border="true" />
              <Elg-Icon icon="fa-play-circle" :border="true" />
              <Elg-Icon icon="fa-paw" :border="true" />
              <Elg-Icon icon="fa-home-lg" :border="true" />
              <Elg-Icon icon="fa-tree" :border="true" />
              <Elg-Icon icon="fa-comment-dots" :border="true" />

            </div>

          </compShow>
        </template>
        <template #right>
          <compShow title="设置size" :code="codeStr2" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">

            <div ref="codeNomal" class="elg-icon__slot">
              <Elg-Icon icon="fa-toggle-on" />
              <Elg-Icon icon="fa-sync-alt" size="xs" />
              <Elg-Icon icon="fa-bell" size="lg" />
              <Elg-Icon icon="fa-arrow-alt-circle-down" size="lg" />
              <Elg-Icon icon="fa-undo" size="xl" />
              <Elg-Icon icon="fa-play-circle" size="xl" />
              <Elg-Icon icon="fa-paw" size="2x" />
              <Elg-Icon icon="fa-home-lg" size="2x" />
              <Elg-Icon icon="fa-tree" size="3x" />
              <Elg-Icon icon="fa-comment-dots" size="3x" />
            </div>

          </compShow>
          <compShow title="动画图标" :code="codeStr4" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">

            <div ref="codeNomal" class="elg-icon__slot">
              <Elg-Icon icon="fa-toggle-on" :beat="true" />
              <Elg-Icon icon="fa-sync-alt" :beat-fade="true" />
              <Elg-Icon icon="fa-bell" :bounce="true" />
              <Elg-Icon icon="fa-arrow-alt-circle-down" :fade="true" />
              <Elg-Icon icon="fa-undo" :spin="true" />
              <Elg-Icon icon="fa-play-circle" :shake="true" />
              <Elg-Icon icon="fa-paw" :pulse="true" />
              <Elg-Icon icon="fa-home-lg" :bounce="true" />
              <Elg-Icon icon="fa-tree" :shake="true" />
              <Elg-Icon icon="fa-comment-dots" :beat="true" />
            </div>

          </compShow>
          <compShow title="自定义颜色" :code="codeStr6" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">

            <div ref="codeNomal" class="elg-icon__slot">
              <Elg-Icon icon="fa-toggle-on" color="red" />
              <Elg-Icon icon="fa-sync-alt" color="blue" />
              <Elg-Icon icon="fa-bell" color="#1ABC9C" />
              <Elg-Icon icon="fa-arrow-alt-circle-down" color="#FFCC66" />
              <Elg-Icon icon="fa-undo" color="#8E44AD" />
              <Elg-Icon icon="fa-play-circle" color="#D35400" />
              <Elg-Icon icon="fa-paw" color="#FFB3A7" />
              <Elg-Icon icon="fa-home-lg" color="#D6ECF0" />
              <Elg-Icon icon="fa-tree" color="#4B5CC4" />
              <Elg-Icon icon="fa-comment-dots" color="#FF4777" />

            </div>

          </compShow>
        </template>
      </gridLayout>
    </div>


    <notify ref="Notify"> </notify>

    <div class="elg-view__sTitle">
     属性Props
    </div>
    <propsShow :propsList="propsList" />
   
    
  
    
    
   
    
  </div>
</template>


<style lang="scss" scoped>




.testcolor {
  color: $color-red ;
}

.elg-showCompContainer {
  width: 400px;
}

.elg-icon__slot {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.elg-icon__item {}
</style>