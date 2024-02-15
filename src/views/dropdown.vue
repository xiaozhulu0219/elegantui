<script setup>
import { ref, toRaw, h,onMounted } from "vue";
import gridLayout from '../comp/gridLayout.vue';// 引入布局组件
import xml from 'highlight.js/lib/languages/xml';
import notify from '../comp/notify.vue';
import propsShow from '../comp/propsShow.vue';
import javascript from 'highlight.js/lib/languages/javascript';
import compShow from '../comp/compShow.vue';

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


const handleChange = (target) => {
  const message = target ? '显示' : '隐藏';
  window.alert(`当前弹框状态:${message}`,)

}
const handleSelect = (item) => {
  const temp = JSON.stringify(toRaw(item));

  const message = `当前点击了,${temp}项`
  window.alert(message);
}
const list = ref([
  {
    label: '库洛米',
    key: 1
  },
  {
    label: '美乐蒂',
    key: 2
  },
  {
    label: '布丁狗',
    key: 3,
  },
  {
    label: '帕恰🐕',
    key: 4
  },
])
const list2 = ref([
  {
    label: '布朗熊',
    key: 1
  },
  {
    label: '可妮兔',
    key: 2
  },
  {
    label: '莎莉鸡🐥',
    key: 3,
    disabled: true
  },
  {
    label: '馒头人',
    key: 4
  },
])
const list3 = ref([
  {
    label: '雪莉',
    key: 1
  },
  {
    label: '普利莫',
    key: 2,
    divided: true
  },
  {
    label: '迪克',
    key: 3,
  },
  {
    label: '杰西',
    key: 4
  },
])
const list4 = ref([
  {
    label: h('div', { class: 'bar', innerHTML: '库洛米' }),
    key: 1
  },
  {
    label: '美乐蒂',
    key: 2,
    divided: true
  },
  {
    label: '布丁狗',
    key: 3,
  },
  {
    label: '帕恰🐕',
    key: 4
  },
])

const codeTarget = {
  xml: xml
}
const codeTarget2 = {
  xml: xml,
  javascript: javascript
}
const codeType = 'xml';

const codeStr1 = `
<template>
  <Elg-Dropdown :menuOptions="list">
    <Elg-Button type="text">三丽鸥全明星
      <Elg-Icon icon="fa-angle-down" size="xs"></Elg-Icon>
    </Elg-Button>
  </Elg-Dropdown> 
  <Elg-Dropdown :menuOptions="list2">
    <Elg-Button type="text">lineFriends
      <Elg-Icon icon="fa-angle-down" size="xs"></Elg-Icon>
    </Elg-Button>
  </Elg-Dropdown>
  <Elg-Dropdown :menuOptions="list3">
    <Elg-Button type="text">荒野乱斗
      <Elg-Icon icon="fa-angle-down" size="xs"></Elg-Icon>
    </Elg-Button>
  </Elg-Dropdown>
</template>
<script>
const list = ref([
  {
    label: '库洛米',
    key: 1
  },
  {
    label: '美乐蒂',
    key: 2
  },
  {
    label: '布丁狗',
    key: 3,
  },
  {
    label: '帕恰🐕',
    key: 4
  },
])
const list2 = ref([
  {
    label: '布朗熊',
    key: 1
  },
  {
    label: '可妮兔',
    key: 2
  },
  {
    label: '莎莉鸡🐥',
    key: 3,
    disabled: true
  },
  {
    label: '馒头人',
    key: 4
  },
])
const list3 = ref([
  {
    label: '雪莉',
    key: 1
  },
  {
    label: '普利莫',
    key: 2,
    divided: true
  },
  {
    label: '迪克',
    key: 3,
  },
  {
    label: '杰西',
    key: 4
  },
])
\<\/script\>
`
const codeStr2 = `
<template>
  <Elg-Dropdown :menuOptions="list" trigger="click">
    <Elg-Button type="primary">点击触发
      <Elg-Icon icon="fa-angle-down" size="xs"></Elg-Icon>
    </Elg-Button>
  </Elg-Dropdown>
</template>
<script>
const list = ref([
  {
    label: '库洛米',
    key: 1
  },
  {
    label: '美乐蒂',
    key: 2
  },
  {
    label: '布丁狗',
    key: 3,
  },
  {
    label: '帕恰🐕',
    key: 4
  },
])
\<\/script\>

`
const codeStr3 = `
<template>
  <Elg-Dropdown :menuOptions="list" trigger="click" @visible-change="handleChange" @select="handleSelect">
    <Elg-Button type="primary">点击触发
      <Elg-Icon icon="fa-angle-down" size="xs"></Elg-Icon>
    </Elg-Button>
  </Elg-Dropdown>
  <Elg-Dropdown :menuOptions="list" trigger="click" :hideAfterClick="true">
    <Elg-Button type="primary">点击后隐藏该弹框
      <Elg-Icon icon="fa-angle-down" size="xs"></Elg-Icon>
    </Elg-Button>
  </Elg-Dropdown>
</template>
<script>
const list = ref([
  {
    label: '库洛米',
    key: 1
  },
  {
    label: '美乐蒂',
    key: 2
  },
  {
    label: '布丁狗',
    key: 3,
  },
  {
    label: '帕恰🐕',
    key: 4
  },
]);
const handleChange = (target) => {
  const message = target ? '显示' : '隐藏';
  window.alert('当前弹框状态:'+message)
}
const handleSelect = (item) => {
  const temp = JSON.stringify(toRaw(item));

  const message = 
  window.alert('当前点击了,'+temp+'项');
}
\<\/script\>
`
const codeStr4 = `
<template>
  <Elg-Dropdown :menuOptions="list4">
    <Elg-Button type="primary">传入vnode节点
      <Elg-Icon icon="fa-angle-down" size="xs"></Elg-Icon>
    </Elg-Button>
  </Elg-Dropdown>  
</template>
<script>
const list4 = ref([
  {
    label: h('div', { class: 'bar', innerHTML: '库洛米' }),
    key: 1
  },
  {
    label: '美乐蒂',
    key: 2,
    divided: true
  },
  {
    label: '布丁狗',
    key: 3,
  },
  {
    label: '帕恰🐕',
    key: 4
  },
])
\<\/script\>
`
const propsList = [
  {
    propsName: 'menuOptions',
    effect: '下拉内容条目数组',
    type: 'Array',
    required: '是',
    default: '无',
    info: ''
  },
  {
    propsName: 'hideAfterClick',
    effect: '点击条目是否隐藏',
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

const propsList2=[
{
    eventName:'visible-change',
    eventEffect:'显示状态改变后触发',
    info:''
  },{
    eventName:'select',
    eventEffect:'选择的具体条目',
    info:''
  }
]
</script>
<template>
  <notify ref="Notify"> </notify>
  <div class="views-container">
    <div class="elg-view__title">
      下拉菜单·Dropdown
    </div>
    <div class="elg-view__sTitle">
      效果演示
    </div>
    <div class="elg-grid__wrap">
      <gridLayout>
        <template #left>
          <compShow title="基础用法" :code="codeStr1" :codeTarget="codeTarget2" :codeType="codeType"
            @copyCallback="handleCopy">
            <div class="drop-wrap">
              <Elg-Dropdown :menuOptions="list">
                <Elg-Button type="text">三丽鸥全明星
                  <Elg-Icon icon="fa-angle-down" size="xs"></Elg-Icon>
                </Elg-Button>
              </Elg-Dropdown>
              <Elg-Dropdown :menuOptions="list2">
                <Elg-Button type="text">lineFriends
                  <Elg-Icon icon="fa-angle-down" size="xs"></Elg-Icon>
                </Elg-Button>
              </Elg-Dropdown>
              <Elg-Dropdown :menuOptions="list3">
                <Elg-Button type="text">荒野乱斗
                  <Elg-Icon icon="fa-angle-down" size="xs"></Elg-Icon>
                </Elg-Button>
              </Elg-Dropdown>

            </div>

          </compShow>
          <compShow title="事件" :code="codeStr3" :codeTarget="codeTarget2" :codeType="codeType" @copyCallback="handleCopy">
            <template #info>
              注册事件获取当前隐藏或者显示的状态,以及当前选择的元素
            </template>
            <div class="drop-wrap">
              <Elg-Dropdown :menuOptions="list" trigger="click" @visible-change="handleChange" @select="handleSelect">
                <Elg-Button type="success">点击触发
                  <Elg-Icon icon="fa-angle-down" size="xs"></Elg-Icon>
                </Elg-Button>
              </Elg-Dropdown>
              <Elg-Dropdown :menuOptions="list" trigger="click" :hideAfterClick="true">
                <Elg-Button type="primary">点击后隐藏该弹框
                  <Elg-Icon icon="fa-angle-down" size="xs"></Elg-Icon>
                </Elg-Button>
              </Elg-Dropdown>
            </div>
          </compShow>
        </template>
        <template #right>
          <compShow title="点击触发" :code="codeStr2" :codeTarget="codeTarget2" :codeType="codeType"
            @copyCallback="handleCopy">
            <template #info>
              <p>可使用按钮点击触发下拉菜单。</p>
            </template>
            <Elg-Dropdown :menuOptions="list" trigger="click">
              <Elg-Button type="warning">点击触发
                <Elg-Icon icon="fa-angle-down" size="xs"></Elg-Icon>
              </Elg-Button>
            </Elg-Dropdown>
          </compShow>
          <compShow title="支持vnode节点" :code="codeStr4" :codeTarget="codeTarget2" :codeType="codeType"
            @copyCallback="handleCopy">
            <Elg-Dropdown :menuOptions="list4">
              <Elg-Button type="danger">传入vnode节点
                <Elg-Icon icon="fa-angle-down" size="xs"></Elg-Icon>
              </Elg-Button>
            </Elg-Dropdown>

          </compShow>
        </template>

      </gridLayout>
      <div class="elg-view__sTitle">
        属性Props
      </div>
      <propsShow :propsList="propsList" />
      <p style="text-align: start;margin: 10px 0;">
        此外 dropdown 是基于tooltip的二次封装,支持tooltip的placement,trigger,manual,openDelay,closeDelay等属性

      </p>
      <div class="elg-view__sTitle">
        事件Event
      </div>
      <propsShow :columns="columns" :propsList="propsList2" width="50%" />

    </div>

  </div>
  <!-- <h2 class="row
  -title">基础用法</h2>
  <div class="row">
    <Elg-Dropdown :menuOptions="list">

      <Elg-Button type="text">下拉菜单
        <Elg-Icon icon="fa-angle-down" size="xs"></Elg-Icon>
      </Elg-Button>
    </Elg-Dropdown>
    <Elg-Dropdown :menuOptions="list2">

      <Elg-Button type="text">部分禁用
        <Elg-Icon icon="fa-angle-down" size="xs"></Elg-Icon>
      </Elg-Button>
    </Elg-Dropdown>
    <Elg-Dropdown :menuOptions="list3">

      <Elg-Button type="text">分割线
        <Elg-Icon icon="fa-angle-down" size="xs"></Elg-Icon>
      </Elg-Button>
    </Elg-Dropdown>
  </div>
  <h2 class="row-title">触发方式</h2>
  <p>可使用按钮点击触发下拉菜单。</p>
  <div class="row">
    <Elg-Dropdown :menuOptions="list" trigger="click">

      <Elg-Button type="primary">点击触发
        <Elg-Icon icon="fa-angle-down" size="xs"></Elg-Icon>
      </Elg-Button>
    </Elg-Dropdown>

  </div>
  <h2 class="row-title">注册事件获取当前隐藏或者显示的状态,以及当前选择的元素</h2>
  <div class="row">
    <Elg-Dropdown :menuOptions="list" trigger="click" @visible-change="handleChange" @select="handleSelect">


      <Elg-Button type="primary">点击触发
        <Elg-Icon icon="fa-angle-down" size="xs"></Elg-Icon>
      </Elg-Button>
    </Elg-Dropdown>
    <Elg-Dropdown :menuOptions="list" trigger="click" :hideAfterClick="true">

      <Elg-Button type="primary">点击后隐藏该弹框

        <Elg-Icon icon="fa-angle-down" size="xs"></Elg-Icon>
      </Elg-Button>
    </Elg-Dropdown>

  </div>

  <h2 class="row-title">支持vnode节点</h2>
  <div>
    <Elg-Dropdown :menuOptions="list4">

      <Elg-Button type="primary">传入vnode节点

        <Elg-Icon icon="fa-angle-down" size="xs"></Elg-Icon>
      </Elg-Button>
    </Elg-Dropdown>
  </div> -->
</template>



<style>
/* *{
  list-style: none;
} */
.bar {
  font-size: 1.2em;
  color: var(--danger);
}

.drop-wrap {
  display: flex;
}
</style>