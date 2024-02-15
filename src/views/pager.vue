<script setup>
import { ref,onMounted } from "vue";
import compShow from '../comp/compShow.vue';
import xml from 'highlight.js/lib/languages/xml';
import notify from '../comp/notify.vue';
import javascript from 'highlight.js/lib/languages/javascript';
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
  xml: xml,
  javascript: javascript
}
const codeType = 'xml'
let currentpage1 = ref(1);
let currentpage2 = ref(1);
let currentpage3 = ref(1);
let currentpage4 = ref(1);
let currentpage5 = ref(1);
let currentpage6 = ref(1);
let currentpage7 = ref(1);
let currentpage8 = ref(1);
let currentpage9 = ref(1);


const handleChange = (newPage) => {
  currentpage1.value = newPage
}
const codeStr1 = `
<template>
  <Elg-Pager :total="26" 
  :currentPage="currentpage1" 
  @current-change="handleChange" />
</template>
<script>
import { ref } from "vue";
  let currentpage1 = ref(1);
  const handleChange = (newPage) => {
  currentpage1.value = newPage
}
\<\/script\>
`

const codeStr2 = `
<template>
  <Elg-Pager :total="6" 
  :currentPage="currentpage2" 
  @current-change="currentpage2 = $event" />
</template>
<script>
  import { ref } from "vue";
  let currentpage2 = ref(1);
\<\/script\>
`
const codeStr3 = `
<template>
  <Elg-Pager :total="13" 
  :pageCount="13" 
  :currentPage="currentpage3" 
  @current-change="currentpage3 = $event" />
</template>
<script>
  import { ref } from "vue";
  let currentpage3 = ref(1);
\<\/script\>
`
const codeStr4 = `
<template>
  <Elg-Pager :total="20"  
  :currentPage="currentpage4" 
  @current-change="currentpage4 = $event" 
  type="primary" />
  <Elg-Pager :total="20"  
  :currentPage="currentpage5" 
  @current-change="currentpage5 = $event" 
  type="success" />
  <Elg-Pager :total="20"  
  :currentPage="currentpage6" 
  @current-change="currentpage6 = $event" 
  type="danger" />
</template>
<script>
import { ref } from "vue";
  let currentpage4 = ref(1);
  let currentpage5 = ref(1);
  let currentpage6 = ref(1);
\<\/script\>

`

const codeStr5 = `
<template>
  <Elg-Pager :total="20"    :currentPage="currentpage7" @current-change="currentpage7 = $event" size="small"
  type="primary" />
  <Elg-Pager :total="20" :currentPage="currentpage8" @current-change="currentpage8 = $event" type="primary" />
  <Elg-Pager :total="20"  :currentPage="currentpage9" @current-change="currentpage9 = $event" size="large"
  type="primary" />
</template>
<script>
  let currentpage7 = ref(1);
  let currentpage8 = ref(1);
  let currentpage9 = ref(1);
\<\/script\>
`

const propsList=[
  {
    propsName: 'total',
    effect: '总页码数',
    type: 'Number',
    required: '否',
    default: '0',
    info: ''
  },
  {
    propsName: 'currentPage',
    effect: '当前页码数',
    type: 'Number',
    required: '否',
    default: '1',
    info: ''
  },
  {
    propsName: 'pageCount',
    effect: '页码最大数',
    type: 'Number',
    required: '否',
    default: '10',
    info: ''
  },
  {
    propsName: 'type',
    effect: '主题类型',
    type: 'String',
    required: '否',
    default: '无',
    info: ''
  },
  {
    propsName: 'size',
    effect: '尺寸',
    type: 'String',
    required: '否',
    default: '无',
    info: 'small large'
  },
]
const columns = [
  {title:'事件名称',value:'eventName'},
  {title:'作用',value:'eventEffect'},
  {title:'备注',value:'info'}

]
const propsList2 = [
  {
    eventName:'current-change',
    eventEffect:'改变当前页数',
    info:''
  }
]
</script>

<template>
  <notify ref="Notify"> </notify>

  <div class="views-container">
    <div class="elg-view__title">
      分页·Pager
    </div>
    <div class="elg-view__sTitle">
      效果演示
    </div>
    <div class="page-show-container">
      <div class="page-show-container-item">
        <compShow title="基本用法" :code="codeStr1" :codeTarget="codeTarget" :codeType="codeType" @copyCallback="handleCopy">
          <template #info>
            <div>
              总页数total大于页码最大显示数pager-count,此时无法全部显示
            </div>
          </template>
          <Elg-Pager :total="26" :currentPage="currentpage1" @current-change="handleChange" />

        </compShow>
      </div>
      <div class="page-show-container-item">
        <compShow title="全部显示" :code="codeStr2" :codeTarget="codeTarget" :codeType="codeType" @copyCallback="handleCopy">
          <template #info>
            <div>
              总页数total小于等于页码最大显示数pager-count,可以全部显示
            </div>
          </template>
          <Elg-Pager :total="6" :currentPage="currentpage2" @current-change="currentpage2 = $event" />
        </compShow>
      </div>
      <div class="page-show-container-item">
        <compShow title="调整最大显示数量" :code="codeStr3" :codeTarget="codeTarget" :codeType="codeType"
          @copyCallback="handleCopy">
          <template #info>
            <div>
              页码最大显示数量pager-count是可以调整的
            </div>
          </template>
          <Elg-Pager :total="13" :pageCount="13" :currentPage="currentpage3" @current-change="currentpage3 = $event" />
        </compShow>
      </div>
      <div class="page-show-container-item">
        <compShow title="带有背景颜色" :code="codeStr4" :codeTarget="codeTarget" :codeType="codeType"
          @copyCallback="handleCopy">
          <template #info>
            <div>
              带有背景颜色的分页
            </div>
          </template>
          <Elg-Pager :total="20" style="margin-bottom: 10px;" :currentPage="currentpage4"
            @current-change="currentpage4 = $event" type="primary" />
          <Elg-Pager :total="20" style="margin-bottom: 10px;" :currentPage="currentpage5"
            @current-change="currentpage5 = $event" type="success" />
          <Elg-Pager :total="20" style="margin-bottom: 10px;" :currentPage="currentpage6"
            @current-change="currentpage6 = $event" type="danger" />

        </compShow>
      </div>
      <div class="page-show-container-item">
        <compShow title="调整大小" :code="codeStr5" :codeTarget="codeTarget" :codeType="codeType" @copyCallback="handleCopy">
          <template #info>
            <div>
              调整分页尺寸
            </div>
          </template>
          <Elg-Pager :total="20" style="margin-bottom: 10px;" :currentPage="currentpage7"
            @current-change="currentpage7 = $event" size="small" type="primary" />
          <Elg-Pager :total="20" style="margin-bottom: 10px;" :currentPage="currentpage8"
            @current-change="currentpage8 = $event" type="primary" />
          <Elg-Pager :total="20" style="margin-bottom: 10px;" :currentPage="currentpage9"
            @current-change="currentpage9 = $event" size="large" type="primary" />
        </compShow>
      </div>
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
.page-show-container {
  width: 80%;

}

.page-show-container-item {
  margin-bottom: 30px;
}</style>