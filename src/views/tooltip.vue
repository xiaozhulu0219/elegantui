
<script setup>
import { ref,onMounted  } from 'vue';
import gridLayout from '../comp/gridLayout.vue';// 引入布局组件
import compShow from '../comp/compShow.vue';
import xml from 'highlight.js/lib/languages/xml';
import notify from '../comp/notify.vue';
import propsShow from '../comp/propsShow.vue';
import javascript from 'highlight.js/lib/languages/javascript';
onMounted(()=>{
  const tar = document.querySelector('.elg-inner__wrapper');
  tar.scrollTop =0
})
const tooltipRef = ref()
const Notify = ref();
const handleChange = (status) => {
  console.log(status)
}
const handleCopy = () => {
  Notify.value.message({
    content: '复制成功',
    type: 'success'
  })
}
const triggershow = () => {
  // console.log(tooltipRef.value)
  tooltipRef.value.outControlShow();
}
const triggerclose = () => {
  tooltipRef.value.outControlHide();
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
  <Elg-Tooltip placement="left">
    <Elg-Button class="elg-btn--show" type="primary" icon="fa-bell">left</Elg-Button>
  </Elg-Tooltip>
  <Elg-Tooltip>
    <Elg-Button class="elg-btn--show" type="success" icon="fa-undo">top</Elg-Button>
  </Elg-Tooltip>
  <Elg-Tooltip placement="right">
    <Elg-Button class="elg-btn--show" type="warning" icon="fa-paw">right</Elg-Button>
  </Elg-Tooltip>
  <Elg-Tooltip placement="bottom">
    <Elg-Button class="elg-btn--show" type="danger" icon="fa-tree">bottom</Elg-Button>
  </Elg-Tooltip>
</template>
`
const codeStr2 = `
<template>
  <Elg-Tooltip placement="left" trigger="click" @visible-change="handleChange">
    <Elg-Button class="elg-btn--show" type="warning">left</Elg-Button>
  </Elg-Tooltip>
  <Elg-Tooltip trigger="click">
    <Elg-Button class="elg-btn--show" type="success">top</Elg-Button>
  </Elg-Tooltip>
  <Elg-Tooltip trigger="click" placement="right">
    <Elg-Button class="elg-btn--show" type="info" round plain>right</Elg-Button>
  </Elg-Tooltip>
  <Elg-Tooltip trigger="click" placement="bottom">
    <Elg-Button class="elg-btn--show" type="warning" plain>bottom</Elg-Button>
  </Elg-Tooltip>
</template>
`
const codeStr3 = `
<template>
  <Elg-Tooltip content="rporis ad.">
    <Elg-Button class="elg-btn--show" type="danger" plain>dark theme</Elg-Button>
  </Elg-Tooltip>
  <Elg-Tooltip effect="light">
    <Elg-Button class="elg-btn--show" type="warning" plain>light theme</Elg-Button>
  </Elg-Tooltip>
</template>
`

const codeStr4 = `
<template>
  <div>
    <Elg-Tooltip ref="tooltipRef" content="hola" :manual="true">
      <Elg-Button class="elg-btn--show" type="danger" circle>
        <Elg-Icon icon="fa-tree" />
      </Elg-Button>
    </Elg-Tooltip>
  </div>
  <div style="margin-top: 15px;" >
    <Elg-Button type="success" style="margin-right: 20px;" @click="triggershow">触发</Elg-Button>
    <Elg-Button type="info" @click="triggerclose">关闭</Elg-Button>
  </div>
  
</template>
<script>
  import { ref } from 'vue';
  const tooltipRef = ref()
  const triggershow = () => {
    tooltipRef.value.outControlShow();
  }
  const triggerclose = () => {
    tooltipRef.value.outControlHide();
  }
\<\/script\>
`
const codeStr5 = `
<template>
  <Elg-Tooltip placement="top" :openDelay="1000" content="延时1秒触发">
    <Elg-Button type="success">延时1s触发</Elg-Button>
  </Elg-Tooltip>
  <Elg-Tooltip :closeDelay="1000" content="延时1秒关闭">
    <Elg-Button type="primary">延时1s关闭</Elg-Button>
  </Elg-Tooltip>
  <Elg-Tooltip :openDelay="1000" :closeDelay="1000" trigger="click" content="点击延时1s触发">
    <Elg-Button type="danger">点击延时1s</Elg-Button>
  </Elg-Tooltip>  
</template>
`
const codeStr6=`
<template>
  <Elg-Tooltip>
    <template #content>
      <div class="content-info">
        <p>bonjour</p>
        <p>Ciao </p>
      </div>
    </template>
    <Elg-Button type="warning">更多content</Elg-Button>
  </Elg-Tooltip>  
</template>
`
const  propsList=[
{
    propsName: 'content',
    effect: '提示内容',
    type: 'String',
    required: '否',
    default: 'tooltip',
    info: ''
  },
  {
    propsName: 'trigger',
    effect: '触发方式',
    type: 'String',
    required: '否',
    default: 'hover',
    info: ''
  },
  {
    propsName: 'placement',
    effect: '出现位置',
    type: 'String',
    required: '否',
    default: 'top',
    info: ''
  },
  {
    propsName: 'manual',
    effect: '自定义触发',
    type: 'Boolean',
    required: '否',
    default: 'false',
    info: ''
  },
  {
    propsName: 'openDelay',
    effect: '延迟触发时间',
    type: 'Number',
    required: 'false',
    default: '无',
    info: ''
  },{
    propsName: 'closeDelay',
    effect: '延时关闭时间',
    type: 'Number',
    required: '否',
    default: '无',
    info: ''
  },{
    propsName: 'effect',
    effect: '切换模式',
    type: 'String',
    required: '否',
    default: 'dark',
    info: 'dark | light'
  },
]
const columns = [
  {title:'事件名称',value:'eventName'},
  {title:'作用',value:'eventEffect'},
  {title:'备注',value:'info'}

]
const propsList2 = [
  {
    eventName:'visible-change',
    eventEffect:'回显当前提示显示状态',
    info:''
  }
]
</script>
<template>
  <notify ref="Notify"> </notify>
  <div class="views-container">
    <div class="elg-view__title">
      提示·Tooltip
    </div>
    <div class="elg-view__sTitle">
      效果演示
    </div>
    <div class="elg-grid__wrap">

      <gridLayout>
        <template #left>
          <compShow title="基础用法" :code="codeStr1" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">
            <div class="tool-wrap">
              <Elg-Tooltip placement="left">
                <Elg-Button class="elg-btn--show" type="primary" icon="fa-bell">left</Elg-Button>
              </Elg-Tooltip>
              <Elg-Tooltip>
                <Elg-Button class="elg-btn--show" type="success" icon="fa-undo">top</Elg-Button>
              </Elg-Tooltip>
              <Elg-Tooltip placement="right">
                <Elg-Button class="elg-btn--show" type="warning" icon="fa-paw">right</Elg-Button>
              </Elg-Tooltip>
              <Elg-Tooltip placement="bottom">
                <Elg-Button class="elg-btn--show" type="danger" icon="fa-tree">bottom</Elg-Button>
              </Elg-Tooltip>
            </div>

          </compShow>
          <compShow title="更换主题" :code="codeStr3" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">
            <div class="tool-wrap">
              <Elg-Tooltip content="rporis ad.">
                <Elg-Button class="elg-btn--show" type="danger" plain>dark theme</Elg-Button>
              </Elg-Tooltip>
              <Elg-Tooltip effect="light">
                <Elg-Button class="elg-btn--show" type="warning" plain>light theme</Elg-Button>
              </Elg-Tooltip>
            </div>

          </compShow>
          <compShow title="延时触发" :code="codeStr5" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">
            <div class="tool-wrap">
              <Elg-Tooltip placement="top" :openDelay="1000" content="延时1秒触发">
                <Elg-Button type="success">延时1s触发</Elg-Button>
              </Elg-Tooltip>
              <Elg-Tooltip :closeDelay="1000" content="延时1秒关闭">
                <Elg-Button type="primary">延时1s关闭</Elg-Button>
              </Elg-Tooltip>
              <Elg-Tooltip :openDelay="1000" :closeDelay="1000" trigger="click" content="点击延时1s触发">
                <Elg-Button type="danger">点击延时1s</Elg-Button>
              </Elg-Tooltip>
            </div>

          </compShow>
        </template>
        <template #right>
          <compShow title="点击触发" :code="codeStr2" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">
            <template #info>不同触发方式</template>
            <div class="tool-wrap">
              <Elg-Tooltip placement="left" trigger="click" @visible-change="handleChange">
                <Elg-Button class="elg-btn--show" type="warning">left</Elg-Button>
              </Elg-Tooltip>
              <Elg-Tooltip trigger="click">
                <Elg-Button class="elg-btn--show" type="success">top</Elg-Button>
              </Elg-Tooltip>
              <Elg-Tooltip trigger="click" placement="right">
                <Elg-Button class="elg-btn--show" type="info" round plain>right</Elg-Button>
              </Elg-Tooltip>
              <Elg-Tooltip trigger="click" placement="bottom">
                <Elg-Button class="elg-btn--show" type="warning" plain>bottom</Elg-Button>
              </Elg-Tooltip>
            </div>

          </compShow>
          <compShow title="手动触发" :code="codeStr4" :codeTarget="codeTarget2" :codeType="codeType"
            @copyCallback="handleCopy">
            <div>
              <Elg-Tooltip ref="tooltipRef" content="hola" :manual="true">
                <Elg-Button class="elg-btn--show" type="danger" circle>
                  <Elg-Icon icon="fa-tree" />
                </Elg-Button>
              </Elg-Tooltip>
            </div>
            <div style="margin-top: 15px;">
              <Elg-Button type="success" style="margin-right: 20px;" @click="triggershow">触发</Elg-Button>
              <Elg-Button type="info" @click="triggerclose">关闭</Elg-Button>
            </div>


          </compShow>
          <compShow title="更多内容" :code="codeStr6" :codeTarget="codeTarget " :codeType="codeType"
            @copyCallback="handleCopy">
            <Elg-Tooltip>
              <template #content>
                <div class="content-info">
                  <p>bonjour</p>
                  <p>Ciao </p>
                </div>
              </template>
              <Elg-Button type="warning">更多content</Elg-Button>
            </Elg-Tooltip>
          </compShow>
        </template>

      </gridLayout>
    </div>

    <div class="elg-view__sTitle">
     属性Props
    </div>
    <propsShow :propsList="propsList" />
  <div class="elg-view__sTitle">
      事件Event
    </div>
  <propsShow :columns="columns" :propsList="propsList2" width="50%" />
  </div>
 
 
  
  
  
</template>



<style>
.content-info {
  line-height: 30px;
  padding: 10px;
}

.tool-wrap {
  display: flex;
}
</style>