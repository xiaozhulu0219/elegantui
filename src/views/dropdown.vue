<template>
  <h2 class="row-title">基础用法</h2>
  <div class="row">
    <Elg-Dropdown :menuOptions="list">

      <Elg-Button type="text">下拉菜单
        <Elg-Icon icon="fa-angle-down" size="xs"></Elg-Icon>
      </Elg-Button>
    </Elg-Dropdown>
    <Elg-Dropdown  :menuOptions="list2">

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
    <Elg-Dropdown :menuOptions="list4"  >

      <Elg-Button type="primary">传入vnode节点

        <Elg-Icon icon="fa-angle-down" size="xs"></Elg-Icon>
      </Elg-Button>
    </Elg-Dropdown>
  </div>
  <!-- <tempComp targetnode="11133" /> -->
</template>

<script setup>
import { ref, toRaw, h } from "vue";
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
    disabled: true
  },
  {
    label: '帕恰🐕',
    key: 4
  },
])
const list3 = ref([
  {
    label: '库洛米',
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
</script>

<style>
/* *{
  list-style: none;
} */
.bar{
  font-size: 1.2em;
  color: var(--danger);
}
</style>