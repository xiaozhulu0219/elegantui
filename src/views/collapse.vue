<script setup>
import { ref,onMounted } from "vue";
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
let moduleVal1 = ref(['1', '2']);// 默认有两个是展开的
let moduleVal2 = ref(['1'])
const handleChange = (params) => {
  console.log(params, '///')
}

const Notify = ref();

const handleCopy = () => {
  Notify.value.message({
    content: '复制成功',
    type: 'success'
  })
}

let moduleVal3 = ref([])// 默认无展开


const codeType = 'xml'
const codeTarget = {
  xml: xml,
  javascript: javascript
}
const codeStr1 = `
<template>
  <Elg-Collapse v-model="moduleVal1" @change="handleChange">
    <Elg-Collapse-Item title="INTJ 建筑学家" name="1">
      <div>
        DUKE公爵:独立自主,很有想法的公爵
      </div>
    </Elg-Collapse-Item>
    <Elg-Collapse-Item title="INTP 逻辑学家" name="2">
      <div>
        WITCH女巫:自我佛系,隐居避世的女巫
      </div>
    </Elg-Collapse-Item>
    <Elg-Collapse-Item title="ENTJ 指挥官" name="3">
      <div>
        QUEEN女王:强势,霸道的王国女王
      </div>
    </Elg-Collapse-Item>
    <Elg-Collapse-Item disabled title="ENTP 辩论家" name="4">
      <div>
        PIRATE海盗:自由随性,大海为家
      </div>
    </Elg-Collapse-Item>
  </Elg-Collapse>
</template>
<script>
  import { ref } from "vue";
  let moduleVal1 = ref(['1', '2']);// 默认有两个是展开的
\<\/script\>
`
const codeStr2 = `
  < template >
  <Elg-Collapse v-model="moduleVal2" accordion>
    <Elg-Collapse-Item title="INTJ 建筑学家" name="1">
      <div>
        DUKE公爵:独立自主,很有想法的公爵
      </div>
    </Elg-Collapse-Item>
    <Elg-Collapse-Item title="INTP 逻辑学家" name="2">
      <div>
        WITCH女巫:自我佛系,隐居避世的女巫
      </div>
    </Elg-Collapse-Item>
    <Elg-Collapse-Item title="ENTJ 指挥官" name="3">
      <div>
        QUEEN女王:强势,霸道的王国女王
      </div>
    </Elg-Collapse-Item>
    <Elg-Collapse-Item title="ENTP 辩论家" name="4">
      <div>
        PIRATE海盗:自由随性,大海为家
      </div>
    </Elg-Collapse-Item>
  </Elg-Collapse>
</template >
<script>
  import {ref} from "vue";
  let moduleVal2 = ref(['1'])
\<\/script\>
`

const codeStr3 = `
<template>
  <Elg-Collapse v-model="moduleVal3">
    <Elg-Collapse-Item name="1">
      <template #title>
        <div class="collapse-item">
          INTJ 建筑学家 <Elg-Icon style="margin-left: 5px;" icon="fa-balance-scale"></Elg-Icon>
        </div>
      </template>
      <div>
        DUKE公爵:独立自主,很有想法的公爵
      </div>
    </Elg-Collapse-Item>
    <Elg-Collapse-Item name="2">
      <template #title>
        <div class="collapse-item">
          INTP 逻辑学家 <Elg-Icon style="margin-left: 5px;" icon="fa-envelope"></Elg-Icon>
        </div>
      </template>
      <div>
        WITCH女巫:自我佛系,隐居避世的女巫
      </div>
    </Elg-Collapse-Item>
    <Elg-Collapse-Item name="3" disabled>
      <template #title>
        <div class="collapse-item">
          ENTJ 指挥官<Elg-Icon style="margin-left: 5px;" icon="fa-sitemap"></Elg-Icon>
        </div>
      </template>
      <div>
        QUEEN女王:强势,霸道的王国女王
      </div>
    </Elg-Collapse-Item>
    <Elg-Collapse-Item name="4">
      <template #title>
        <div class="collapse-item">
          ENTP 辩论家 <Elg-Icon style="margin-left: 5px;" icon="fa-laptop-code"></Elg-Icon>
        </div>
      </template>
      <div>
        PIRATE海盗:自由随性,大海为家
      </div>
    </Elg-Collapse-Item>
  </Elg-Collapse>
</template>
<script>
  import {ref} from "vue";
  let moduleVal3 = ref([])
\<\/script\>
`
const propsList = [
{
    propsName: 'modelValue',
    effect: '获取父组件v-model绑定的值',
    type: 'Array',
    required: '是',
    default: '[]',
    info: ''
  },
  {
    propsName: 'accordion',
    effect: '是否开启手风琴模式',
    type: 'Boolean',
    required: '否',
    default: 'false',
    info: ''
  },
]
const propsList2 = [
{
    propsName: 'name',
    effect: '标题',
    type: 'String',
    required: '是',
    default: '无',
    info: ''
  },{
    propsName: 'title',
    effect: '文字标题',
    type: 'String',
    required: '否',
    default: '无',
    info: ''
  },
  {
    propsName: 'disable',
    effect: '是否禁用',
    type: 'Boolean',
    required: '否',
    default: 'false',
    info: ''
  },
]
const columns = [
  {title:'事件名称',value:'eventName'},
  {title:'作用',value:'eventEffect'},
  {title:'备注',value:'info'}

]
const propsList3= [
  {
    eventName:'change',
    eventEffect:'折叠面板发生改变时触发',
    info:''
  }
]
</script>
<template>
  <notify ref="Notify"> </notify>
  <div class="views-container">
    <div class="elg-view__title">
      抽屉·Collapse
    </div>
    <div class="elg-view__sTitle">
      效果演示
    </div>
    <div class="elg-grid__wrap">
      <gridLayout>
        <template #left>
          <compShow title="基础用法" :code="codeStr1" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">
            <template #info>
              <p>可同时展开多个面板，面板之间不影响</p>
            </template>
            <Elg-Collapse v-model="moduleVal1" @change="handleChange">
              <Elg-Collapse-Item title="INTJ 建筑学家" name="1">
                <div>
                  DUKE公爵:独立自主,很有想法的公爵
                </div>
              </Elg-Collapse-Item>
              <Elg-Collapse-Item title="INTP 逻辑学家" name="2">
                <div>
                  WITCH女巫:自我佛系,隐居避世的女巫
                </div>
              </Elg-Collapse-Item>
              <Elg-Collapse-Item title="ENTJ 指挥官" name="3">
                <div>
                  QUEEN女王:强势,霸道的王国女王
                </div>
              </Elg-Collapse-Item>
              <Elg-Collapse-Item disabled title="ENTP 辩论家" name="4">
                <div>
                  PIRATE海盗:自由随性,大海为家
                </div>
              </Elg-Collapse-Item>
            </Elg-Collapse>
          </compShow>
          <compShow title="自定义标题" :code="codeStr3" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">
            <Elg-Collapse v-model="moduleVal3">
              <Elg-Collapse-Item name="1">
                <template #title>
                  <div class="collapse-item">
                    INTJ 建筑学家 <Elg-Icon style="margin-left: 5px;" icon="fa-balance-scale"></Elg-Icon>

                  </div>
                </template>
                <div>
                  DUKE公爵:独立自主,很有想法的公爵
                </div>
              </Elg-Collapse-Item>
              <Elg-Collapse-Item name="2">
                <template #title>
                  <div class="collapse-item">
                    INTP 逻辑学家 <Elg-Icon style="margin-left: 5px;" icon="fa-envelope"></Elg-Icon>

                  </div>
                </template>
                <div>
                  WITCH女巫:自我佛系,隐居避世的女巫
                </div>
              </Elg-Collapse-Item>
              <Elg-Collapse-Item name="3" disabled>
                <template #title>
                  <div class="collapse-item">
                    ENTJ 指挥官<Elg-Icon style="margin-left: 5px;" icon="fa-sitemap"></Elg-Icon>

                  </div>
                </template>
                <div>
                  QUEEN女王:强势,霸道的王国女王
                </div>
              </Elg-Collapse-Item>
              <Elg-Collapse-Item name="4">
                <template #title>
                  <div class="collapse-item">
                    ENTP 辩论家 <Elg-Icon style="margin-left: 5px;" icon="fa-laptop-code"></Elg-Icon>

                  </div>
                </template>
                <div>
                  PIRATE海盗:自由随性,大海为家
                </div>
              </Elg-Collapse-Item>
            </Elg-Collapse>
          </compShow>
        </template>
        <template #right>

          <compShow title="手风琴模式" :code="codeStr2" :codeTarget="codeTarget" :codeType="codeType"
            @copyCallback="handleCopy">
            <Elg-Collapse v-model="moduleVal2" accordion>
              <Elg-Collapse-Item title="INTJ 建筑学家" name="1">
                <div>
                  DUKE公爵:独立自主,很有想法的公爵
                </div>
              </Elg-Collapse-Item>
              <Elg-Collapse-Item title="INTP 逻辑学家" name="2">
                <div>
                  WITCH女巫:自我佛系,隐居避世的女巫
                </div>
              </Elg-Collapse-Item>
              <Elg-Collapse-Item title="ENTJ 指挥官" name="3">
                <div>
                  QUEEN女王:强势,霸道的王国女王
                </div>
              </Elg-Collapse-Item>
              <Elg-Collapse-Item title="ENTP 辩论家" name="4">
                <div>
                  PIRATE海盗:自由随性,大海为家
                </div>
              </Elg-Collapse-Item>
            </Elg-Collapse>
          </compShow>
        </template>
      </gridLayout>
    </div>
    <div class="elg-view__sTitle">
     属性Props
    </div>
    <p style="text-align: start;">Collapse 对应的属性</p>
    <propsShow :propsList="propsList" />
    <p style="text-align: start;">CollapseItem 对应的属性</p>
    <propsShow :propsList="propsList2" />
    <div class="elg-view__sTitle">
      事件Event
    </div>
    <propsShow :columns="columns" :propsList="propsList3" width="50%" />

  </div>
  
  
  
</template>



<style scoped>
.collapse-item {
  display: flex;
  align-items: center;
}
</style>