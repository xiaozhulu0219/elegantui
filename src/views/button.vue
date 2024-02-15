
<script setup>
import compShow from '../comp/compShow.vue';
import propsShow from '../comp/propsShow.vue';
import notify from '../comp/notify.vue';
import gridLayout from '../comp/gridLayout.vue';// 引入布局组件
import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';


import { ref,onMounted } from "vue";
onMounted(()=>{
  const tar = document.querySelector('.elg-inner__wrapper');
  tar.scrollTop =0
})
const Notify = ref();
const target = ref('');
const handleClick = () => {
  window.alert('点击事件')
  console.log(target.value.buttonRef)
}
const handleCopy = () => {
  Notify.value.message({
    content: '复制成功',
    type: 'success'
  })
}
const codeTarget = {
  xml: xml
}
const codeTarget2 = {
  xml: xml,
  javascript: javascript

}
const codeType = 'xml'
const codeStr1 = `
<template>
  <Elg-Button>默认按钮</Elg-Button>
  <Elg-Button type="primary">主要按钮</Elg-Button>
  <Elg-Button type="success">成功按钮</Elg-Button>
  <Elg-Button type="info">信息按钮</Elg-Button>
  <Elg-Button type="warning">警告按钮</Elg-Button>
  <Elg-Button type="danger">危险按钮</Elg-Button>
</template>
`
const codeStr2 = `
<template>
  <Elg-Button plain>默认按钮</Elg-Button>
  <Elg-Button type="primary" plain>主要按钮</Elg-Button>
  <Elg-Button type="success" plain>成功按钮</Elg-Button>
  <Elg-Button type="info" plain>信息按钮</Elg-Button>
  <Elg-Button type="warning" plain>警告按钮</Elg-Button>
  <Elg-Button type="danger" plain>危险按钮</Elg-Button>
</template>
`

const codeStr3 = `
<template>
  <Elg-Button round>默认按钮</Elg-Button>
  <Elg-Button type="primary" round>主要按钮</Elg-Button>
  <Elg-Button type="success" round>成功按钮</Elg-Button>
  <Elg-Button type="info" round plain>信息按钮</Elg-Button>
  <Elg-Button type="warning" round plain>警告按钮</Elg-Button>
  <Elg-Button type="danger" round>危险按钮</Elg-Button>
</template>
`

const codeStr4 = `
<template>
  <Elg-Button circle> 
    <Elg-Icon icon="fa-sync-alt" />
  </Elg-Button>
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
</template>
`

const codeStr5 = `
<template>
  <Elg-Button icon="fa-sync-alt">默认按钮</Elg-Button>
  <Elg-Button type="primary" icon="fa-bell">主要按钮</Elg-Button>
  <Elg-Button type="success" icon="fa-undo">成功按钮</Elg-Button>
  <Elg-Button type="info" icon="fa-play-circle">信息按钮</Elg-Button>
  <Elg-Button type="warning" icon="fa-paw">警告按钮</Elg-Button>
  <Elg-Button type="danger" icon="fa-tree">危险按钮</Elg-Button>  
</template>
`

const codeStr6 = `
<template>
  <Elg-Button disabled>默认按钮</Elg-Button>
  <Elg-Button type="primary" disabled>主要按钮</Elg-Button>
  <Elg-Button type="success" disabled>成功按钮</Elg-Button>
  <Elg-Button type="info" disabled>信息按钮</Elg-Button>
  <Elg-Button type="warning" disabled plain>警告按钮</Elg-Button>
  <Elg-Button type="danger" disabled plain>危险按钮</Elg-Button>  
</template>

`

const codeStr7 = `
<template>
  <Elg-Button loading>默认按钮</Elg-Button>
  <Elg-Button type="primary" loading>主要按钮</Elg-Button>
  <Elg-Button type="success" loading>成功按钮</Elg-Button>
  <Elg-Button type="info" loading>信息按钮</Elg-Button>
  <Elg-Button type="warning" loading plain>警告按钮</Elg-Button>
  <Elg-Button type="danger" loading plain>危险按钮</Elg-Button>
</template>
`

const codeStr8 = `
<template>
  <Elg-Button size="small" round>默认按钮</Elg-Button>
  <Elg-Button type="primary" size="small" loading>主要按钮</Elg-Button>
  <Elg-Button type="success">成功按钮</Elg-Button>
  <Elg-Button type="info">信息按钮</Elg-Button>
  <Elg-Button type="warning" size="large" round>警告按钮</Elg-Button>
  <Elg-Button type="danger" size="large" icon="fa-paw">危险按钮</Elg-Button>  
</template>
`

const codeStr9 = `
<template>
  <Elg-Button type="text">文字按钮</Elg-Button>
  <Elg-Button type="text" disabled>文字按钮</Elg-Button>
</template>
`

const codeStr10 = `
<template>
<Elg-Button type="primary" @click="handleClick" ref="target">主要按钮</Elg-Button>
</template>
<script setup>
  const target = ref('');
  const handleClick = () => {
    window.alert('点击事件')
    console.log(target.value.buttonRef)
        }
\<\/script\>
`

const propsList = [
  {
    propsName: 'type',
    effect: '主题颜色',
    type: 'String',
    required: '是',
    default: 'default',
    info: ''
  }, {
    propsName: 'size',
    effect: '设置图标大小',
    type: 'String',
    required: '否',
    default: '无',
    info: ''
  }, {
    propsName: 'plain',
    effect: '是展示为朴素按钮',
    type: 'Boolean',
    required: '否',
    default: 'false',
    info: ''
  }, {
    propsName: 'round',
    effect: '是否展示圆角边框',
    type: 'Boolean',
    required: '否',
    default: 'false',
    info: ''
  }, {
    propsName: 'circle',
    effect: '是否展示圆形按钮',
    type: 'Boolean',
    required: '否',
    default: 'false',
    info: ''
  }, {
    propsName: 'disable',
    effect: '是否禁用',
    type: 'Boolean',
    required: '否',
    default: 'false',
    info: ''
  }, {
    propsName: 'loading',
    effect: '是否加载中',
    type: 'Boolean',
    required: '否',
    default: 'false',
    info: ''
  }, {
    propsName: 'icon',
    effect: '图标类型',
    type: 'String',
    required: '否',
    default: '无',
    info: ''
  }
]
</script>

<template>
  <div class="views-container">
    <div class="elg-view__title">
      按钮·Button
    </div>
    <div class="elg-view__sTitle">
      效果演示
    </div>
    <div class="elg-grid__wrap">
      <gridLayout>
        <template #left>
          <compShow title="基础用法" :code="codeStr1" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">
            <div ref="codeNomal" class="elg-btn__slot">
              <Elg-Button class="elg-btn--show">默认按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="primary">主要按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="success">成功按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="info">信息按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="warning">警告按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="danger">危险按钮</Elg-Button>
            </div>
          </compShow>
          <compShow title="圆角边框" :code="codeStr3" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">
            <div ref="codeNomal" class="elg-btn__slot">
              <Elg-Button class="elg-btn--show" round>默认按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="primary" round>主要按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="success" round>成功按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="info" round plain>信息按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="warning" round plain>警告按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="danger" round>危险按钮</Elg-Button>
            </div>
          </compShow>
          <compShow title="图标按钮" :code="codeStr5" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">
            <div ref="codeNomal" class="elg-btn__slot">
              <Elg-Button class="elg-btn--show" icon="fa-sync-alt">默认按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="primary" icon="fa-bell">主要按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="success" icon="fa-undo">成功按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="info" icon="fa-play-circle">信息按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="warning" icon="fa-paw">警告按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="danger" icon="fa-tree">危险按钮</Elg-Button>
            </div>
          </compShow>
          <compShow title="等待状态" :code="codeStr7" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">
            <div ref="codeNomal" class="elg-btn__slot">
              <Elg-Button class="elg-btn--show" loading>默认按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="primary" loading>主要按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="success" loading>成功按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="info" loading>信息按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="warning" loading plain>警告按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="danger" loading plain>危险按钮</Elg-Button>

            </div>
          </compShow>
          <compShow title="文字按钮" :code="codeStr9" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">
            <div ref="codeNomal" class="elg-btn__slot">
              <Elg-Button class="elg-btn--show" type="text">文字按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="text" disabled>文字按钮</Elg-Button>

            </div>
          </compShow>
        </template>
        <template #right>
          <compShow title="朴素按钮" :code="codeStr2" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">
            <div ref="codeNomal" class="elg-btn__slot">
              <Elg-Button class="elg-btn--show" plain>默认按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="primary" plain>主要按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="success" plain>成功按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="info" plain>信息按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="warning" plain>警告按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="danger" plain>危险按钮</Elg-Button>
            </div>
          </compShow>
          <compShow title="圆形按钮" :code="codeStr4" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">
            <div ref="codeNomal" class="elg-btn__slot">
              <Elg-Button class="elg-btn--show" circle>
                <Elg-Icon icon="fa-sync-alt" />
              </Elg-Button>
              <Elg-Button class="elg-btn--show" type="primary" circle>
                <Elg-Icon icon="fa-bell" />
              </Elg-Button>
              <Elg-Button class="elg-btn--show" type="success" circle>
                <Elg-Icon icon="fa-undo" />
              </Elg-Button>
              <Elg-Button class="elg-btn--show" type="info" circle>
                <Elg-Icon icon="fa-play-circle" />
              </Elg-Button>
              <Elg-Button class="elg-btn--show" type="warning" circle>
                <Elg-Icon icon="fa-paw" />
              </Elg-Button>
              <Elg-Button class="elg-btn--show" type="danger" circle>
                <Elg-Icon icon="fa-tree" />
              </Elg-Button>
            </div>
          </compShow>
          <compShow title="禁用状态" :code="codeStr6" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">
            <div ref="codeNomal" class="elg-btn__slot">
              <Elg-Button class="elg-btn--show" disabled>默认按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="primary" disabled>主要按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="success" disabled>成功按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="info" disabled>信息按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="warning" disabled plain>警告按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="danger" disabled plain>危险按钮</Elg-Button>
            </div>
          </compShow>
          <compShow title="不同尺寸" :code="codeStr8" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">
            <div ref="codeNomal" class="elg-btn__slot">
              <Elg-Button class="elg-btn--show" size="small" round>默认按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="primary" size="small" loading>主要按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="success">成功按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="info">信息按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="warning" size="large" round>警告按钮</Elg-Button>
              <Elg-Button class="elg-btn--show" type="danger" size="large" icon="fa-paw">危险按钮</Elg-Button>
            </div>
          </compShow>
          <compShow title="点击事件" :code="codeStr10" :codeTarget="codeTarget2" :codeType="codeType"
            @copyCallback="handleCopy">
            <div ref="codeNomal" class="elg-btn__slot">
              <Elg-Button type="primary" @click="handleClick" ref="target">主要按钮</Elg-Button>

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


<style scoped>
.elg-btn__slot {}

.elg-btn--show {
  margin-right: 5px;
  margin-bottom: 5px;

}
</style>