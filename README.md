

# elegantui-plus 文档

`elegantui-plus`是一个基于vue3,使用vite搭建的常用组件库,开发者可以选择使用npm导入或者以cdn的形式快速上手.

[源码地址](https://github.com/xiaozhulu0219/elegantui)

[文档地址](https://static-mp-d08e57ac-bfc6-460b-8732-05e71820dffa.next.bspapp.com)

## 快速开始
### 完整引入
推荐使用完整引入
```js
import { createApp } from 'vue';
import ElementPlus from "elegantui-plus";
import "elegantui-plus/style.css";
import App from './App.vue'
const app = createApp(App);
app.use(ElementPlus)
app.mount('#app')
```

### 按需导入
按需导入示例
elegantui-plus组件库对开发中的常用组件进行封装,提供如下按需导入的方法

#### button组件

```js
import { createApp } from 'vue';
import {ElgButton,ElgIcon} from "elegantui-plus";
import "elegantui-plus/style.css";
import App from './App.vue'
const app = createApp(App);
ElgButton.install(app)
ElgIcon.install(app)
app.mount('#app') 

```

#### card组件

```js
import { createApp } from 'vue';
import {ElgButton,ElgIcon,ElgCard} from "elegantui-plus";
import "elegantui-plus/style.css";
import App from './App.vue'
const app = createApp(App);
ElgButton.install(app)
ElgCard.install(app)
ElgIcon.install(app)
app.mount('#app')

```
#### collapse组件
```js
import { createApp } from 'vue';
import {ElgCollapse,ElgCollapseItem} from "elegantui-plus";
import "elegantui-plus/style.css";
import App from './App.vue'
const app = createApp(App);
ElgCollapse.install(app)
ElgCollapseItem.install(app)
app.mount('#app') 

```
#### dialog组件
```js
import { createApp } from 'vue';
import {ElgButton,ElgIcon,ElgDialog} from "elegantui-plus";
import "elegantui-plus/style.css";
import App from './App.vue'
const app = createApp(App);
ElgDialog.install(app);
ElgButton.install(app)
ElgIcon.install(app)
app.mount('#app')

```
#### tooltip组件
```js
import { createApp } from 'vue';
import {ElgButton,ElgIcon,ElgTooltip} from "elegantui-plus";
import "elegantui-plus/style.css";
import App from './App.vue'
const app = createApp(App);
ElgButton.install(app);
ElgIcon.install(app);
ElgTooltip.install(app)
app.mount('#app')


```

#### dropdown组件
```js
import { createApp } from 'vue';
import {ElgButton,ElgIcon,ElgTooltip,ElgDropdown} from "elegantui-plus";
import "elegantui-plus/style.css";
import App from './App.vue'
const app = createApp(App);
ElgButton.install(app);
ElgIcon.install(app);
ElgTooltip.install(app);
ElgDropdown.install(app);
app.mount('#app')


```

#### 使用pager组件
```js
import { createApp } from 'vue';
import {ElgPager,ElgIcon} from "elegantui-plus";
import "elegantui-plus/style.css";
import App from './App.vue'
const app = createApp(App);
ElgPager.install(app);
ElgIcon.install(app);
app.mount('#app')
```

## 组件
### icon组件


#### 支持的属性

| 属性名       | 作用             | 类型             | 是否必须 | 默认值 |
| ------------ | ---------------- | ---------------- | -------- | ------ |
| icon         | 设置图标         | String           | 是       | 无     |
| size         | 图标大小         | String           | 否       | 无     |
| rotation     | 旋转             | [String, Number] | 否       | 无     |
| flip         | 翻转             | [String, Number] | 否       | 无     |
| beat         | beat动画         | Boolean          | 否       | 无     |
| beat-fade    | beat-fade动画    | Boolean          | 否       | 无     |
| bounce       | bounce动画       | Boolean          | 否       | 无     |
| fade         | fade动画         | Boolean          | 否       | 无     |
| shake        | shake动画        | Boolean          | 否       | 无     |
| spin         | spin动画         | Boolean          | 否       | 无     |
|   pulse      |      pulse动画   | Boolean          | 否       | 无     |
| type         | 主题类型         | String           | 否       | 无     |
| color        | 自定义颜色       | String           | 否       | 无     |



#### 使用示例
```html
<!-- 普通引入 -->
    <Elg-Icon icon="fa-toggle-on" />
    <Elg-Icon icon="fa-sync-alt" />
    <Elg-Icon icon="fa-bell" />
<!-- 设置size,size可选值:xs,lg,xl,2x,3x.... -->
    <Elg-Icon icon="fa-toggle-on" />
    <Elg-Icon icon="fa-sync-alt" size="xs"/>
    <Elg-Icon icon="fa-bell"  size="lg" />
<!-- 设置旋转和filp -->
    <Elg-Icon icon="fa-undo"  rotation="180" />
    <Elg-Icon icon="fa-home-lg" flip="horizontal" />
    <Elg-Icon icon="fa-tree" flip="vertical" />
<!-- 动画图标 -->
     <Elg-Icon icon="fa-toggle-on" :beat="true" />
      <Elg-Icon icon="fa-sync-alt" :beat-fade="true" />
      <Elg-Icon icon="fa-bell" :bounce="true" />
      <Elg-Icon icon="fa-arrow-alt-circle-down" :fade="true" />
      <Elg-Icon icon="fa-undo" :spin="true" />
      <Elg-Icon icon="fa-play-circle" :shake="true" />
      <Elg-Icon icon="fa-paw" :pulse="true"  />
      <Elg-Icon icon="fa-home-lg" :bounce="true"  />
      <Elg-Icon icon="fa-tree" :shake="true" />
      <Elg-Icon icon="fa-comment-dots" :beat="true" />
<!-- 使用预设颜色 -->
       <Elg-Icon icon="fa-toggle-on" type="primary" />
      <Elg-Icon icon="fa-sync-alt" type="success" />
      <Elg-Icon icon="fa-bell"   type="warning" />
      <Elg-Icon icon="fa-arrow-alt-circle-down"  type="danger" />
      <Elg-Icon icon="fa-undo" type="info" />
      <Elg-Icon icon="fa-play-circle" type="primary" />
      <Elg-Icon icon="fa-paw"  type="success" />
      <Elg-Icon icon="fa-home-lg" type="warning" />
      <Elg-Icon icon="fa-tree"  type="danger" />
      <Elg-Icon icon="fa-comment-dots" type="info"  />
<!-- 使用自定义颜色   -->
      <Elg-Icon icon="fa-toggle-on" color="red" />
      <Elg-Icon icon="fa-sync-alt"  color="blue"/>
      <Elg-Icon icon="fa-bell"  color="#1ABC9C" />
      <Elg-Icon icon="fa-arrow-alt-circle-down" color="#FFCC66" />
      <Elg-Icon icon="fa-undo" color="#8E44AD" />
      <Elg-Icon icon="fa-play-circle" color="#D35400" />
      <Elg-Icon icon="fa-paw"   color="#FFB3A7"/>
      <Elg-Icon icon="fa-home-lg" color="#D6ECF0"/>
      <Elg-Icon icon="fa-tree" color="#4B5CC4" />
      <Elg-Icon icon="fa-comment-dots" color="#FF4777" />
```
### button组件
#### 支持的属性
| 属性名   | 作用       | 类型    | 是否必须 | 默认值  |
| -------- | ---------- | ------- | -------- | ------- |
| type     | 主题颜色   | String  | 否       | default |
| size     | 大小       | String  | 否       | 无      |
| plain    | 是否朴素   | Boolean | 否       | false   |
| round    | 是否圆角   | Boolean | 否       | false   |
| circle   | 是否圆形   | Boolean | 否       | false   |
| disabled | 是否禁用   | Boolean | 否       | false   |
| loading  | 是否加载中 | Boolean | 否       | false   |
| icon     | 图标       | String  | 否       | 无      |

#### 使用示例
```html
<!-- 基础用法 -->
      <Elg-Button>默认按钮</Elg-Button>
      <Elg-Button type="primary">主要按钮</Elg-Button>
      <Elg-Button type="success">成功按钮</Elg-Button>
      <Elg-Button type="info">信息按钮</Elg-Button>
      <Elg-Button type="warning">警告按钮</Elg-Button>
      <Elg-Button type="danger">危险按钮</Elg-Button>
<!-- 朴素按钮 -->
       <Elg-Button plain>默认按钮</Elg-Button>
      <Elg-Button type="primary" plain>主要按钮</Elg-Button>
      <Elg-Button type="success" plain>成功按钮</Elg-Button>
      <Elg-Button type="info" plain>信息按钮</Elg-Button>
      <Elg-Button type="warning" plain>警告按钮</Elg-Button>
      <Elg-Button type="danger" plain>危险按钮</Elg-Button>
 <!-- 圆角边框    -->
      <Elg-Button round>默认按钮</Elg-Button>
      <Elg-Button type="primary" round>主要按钮</Elg-Button>
      <Elg-Button type="success" round>成功按钮</Elg-Button>
      <Elg-Button type="info" round plain>信息按钮</Elg-Button>
      <Elg-Button type="warning" round plain>警告按钮</Elg-Button>
      <Elg-Button type="danger" round>危险按钮</Elg-Button>
<!-- 圆形按钮 -->
      <Elg-Button circle> <Elg-Icon icon="fa-sync-alt" /></Elg-Button>
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
<!-- 图标按钮 -->
      <Elg-Button icon="fa-sync-alt">默认按钮</Elg-Button>
      <Elg-Button type="primary" icon="fa-bell">主要按钮</Elg-Button>
      <Elg-Button type="success" icon="fa-undo">成功按钮</Elg-Button>
      <Elg-Button type="info" icon="fa-play-circle">信息按钮</Elg-Button>
      <Elg-Button type="warning"  icon="fa-paw">警告按钮</Elg-Button>
      <Elg-Button type="danger" icon="fa-tree">危险按钮</Elg-Button>  
<!-- 图标禁用 -->
      <Elg-Button disabled>默认按钮</Elg-Button>
      <Elg-Button type="primary" disabled>主要按钮</Elg-Button>
      <Elg-Button type="success" disabled>成功按钮</Elg-Button>
      <Elg-Button type="info" disabled>信息按钮</Elg-Button>
      <Elg-Button type="warning" disabled  plain>警告按钮</Elg-Button>
      <Elg-Button type="danger" disabled plain>危险按钮</Elg-Button>
<!-- 等待状态 -->
      <Elg-Button loading>默认按钮</Elg-Button>
      <Elg-Button type="primary" loading>主要按钮</Elg-Button>
      <Elg-Button type="success" loading>成功按钮</Elg-Button>
      <Elg-Button type="info" loading>信息按钮</Elg-Button>
      <Elg-Button type="warning" loading  plain>警告按钮</Elg-Button>
      <Elg-Button type="danger" loading plain>危险按钮</Elg-Button>
<!-- 尺寸 提供small和large -->
      <Elg-Button size="small" round>默认按钮</Elg-Button>
      <Elg-Button type="primary" size="small" loading>主要按钮</Elg-Button>
      <Elg-Button type="success">成功按钮</Elg-Button>
      <Elg-Button type="info">信息按钮</Elg-Button>
      <Elg-Button type="warning" size="large" round>警告按钮</Elg-Button>
      <Elg-Button type="danger" size="large" icon="fa-paw">危险按钮</Elg-Button>
<!-- 文字按钮 -->
      <Elg-Button type="text" >文字按钮</Elg-Button>
      <Elg-Button type="text" disabled>文字按钮</Elg-Button>
```
#### ref

获取 button 根 DOM 元素
```html
<template>
<div class="row">
      <Elg-Button type="primary" @click="handleClick" ref="target">主要按钮</Elg-Button>
    </div>
</template>
<script setup>
import {ref} from "vue";
const target = ref('');
const handleClick=()=>{
  window.alert('点击事件')
  console.log(target.value.buttonRef)
}
</script>

```

### collapse组件
#### 支持的属性
**Collapse** 对应的属性

| 属性名     | 作用                      | 类型    | 是否必填 | 默认值 |
| ---------- | ------------------------- | ------- | -------- | ------ |
| modelValue | 获取父组件v-model绑定的值 | Array   | 否       | [ ]    |
| accordion  | 是否开启手风琴模式        | Boolean | 否       | false  |

**CollapseItem** 对应的属性

| 属性名   | 作用     | 类型    | 是否必填 | 默认值 |
| -------- | -------- | ------- | -------- | ------ |
| name     | 标题     | String  | 是       | 无     |
| title    | 标题     | String  | 否       | 无     |
| disabled | 是否禁用 | Boolean | 否       | false  |



####  支持的事件

| 事件名 | 作用                   |
| ------ | ---------------------- |
| change | 折叠面板发生改变时触发 |
#### 使用示例
```html
<!-- 基本使用 -->
<Elg-Collapse v-model="moduleVal1" @change="handleChange">
      <Elg-Collapse-Item title="一致性 Consistency" name="1">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </Elg-Collapse-Item>
      <Elg-Collapse-Item title="反馈 Feedback" name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </Elg-Collapse-Item>
      <Elg-Collapse-Item title="效率 Efficiency" name="3">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </Elg-Collapse-Item>
      <Elg-Collapse-Item disabled title="可控 Controllability" name="4">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </Elg-Collapse-Item>
    </Elg-Collapse>
<!-- 手风琴效果 -->
 <Elg-Collapse v-model="moduleVal2" accordion>
      <Elg-Collapse-Item title="一致性 Consistency" name="1">
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </Elg-Collapse-Item>
      <Elg-Collapse-Item title="反馈 Feedback" name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </Elg-Collapse-Item>
      <Elg-Collapse-Item title="效率 Efficiency" name="3">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </Elg-Collapse-Item>
      <Elg-Collapse-Item title="可控 Controllability" name="4">
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </Elg-Collapse-Item>
    </Elg-Collapse>
<!-- 自定义标题 -->
 <Elg-Collapse v-model="moduleVal3">
      <Elg-Collapse-Item name="1">
        <template #title>
          <div class="collapse-item">
            一致性 Consistency <Elg-Icon style="margin-left: 5px;" icon="fa-balance-scale"></Elg-Icon>

          </div>
        </template>
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </Elg-Collapse-Item>
      <Elg-Collapse-Item name="2">
        <template #title>
          <div class="collapse-item">
            反馈 Feedback <Elg-Icon style="margin-left: 5px;" icon="fa-envelope"></Elg-Icon>

          </div>
        </template>
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </Elg-Collapse-Item>
      <Elg-Collapse-Item name="3" disabled>
        <template #title>
          <div class="collapse-item">
            效率 Efficiency<Elg-Icon style="margin-left: 5px;" icon="fa-sitemap"></Elg-Icon>

          </div>
        </template>
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </Elg-Collapse-Item>
      <Elg-Collapse-Item name="4">
        <template #title>
          <div class="collapse-item">
            可控 Controllability <Elg-Icon style="margin-left: 5px;" icon="fa-laptop-code"></Elg-Icon>

          </div>
        </template>
        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
      </Elg-Collapse-Item>
    </Elg-Collapse>
```
```js
import { ref } from "vue";
let moduleVal1 = ref(['1', '2']);// 默认有两个是展开的
let moduleVal2 = ref(['1'])
const handleChange = (params) => {
  console.log(params, '///')
}
let moduleVal3 = ref([])// 默认无展开
```

### card组件

#### 支持的属性

| 属性名    | 作用     | 类型   | 是否必须 | 默认值 |
| --------- | -------- | ------ | -------- | ------ |
| width     | 卡片宽度 | Number | 否       | 无     |
| imgSrc    | 卡片链接 | String | 否       | 无     |
| imgHeight | 图片高度 | Number | 否       | 无     |
| summary   | 卡片摘要 | String | 否       | 无     |
| shadow    | 阴影模式 | String | 否       | 无     |

### 使用示例
```html
<!-- 简单使用 -->
 <Elg-Card>
      <div v-for="o in 4" :key="o" class="text item">
        {{ '列表内容 ' + o }}
      </div>
 </Elg-Card>
    <!-- 基本使用 包括标题和内容 -->
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
<!-- 对阴影进行配置 -->
    <Elg-Card width="30%">
      总是显示
    </Elg-Card>
    <Elg-Card width="30%" shadow="hover">
      悬浮时显示
    </Elg-Card>
    <Elg-Card width="30%" shadow="never">
      从不显示
    </Elg-Card>

```

### 对话框dialog

#### 属性
| 属性名  | 作用           | 类型    | 是否必填 | 默认值  |
| ------- | -------------- | ------- | -------- | ------- |
| title   | 标题           | String  | 否       | ''提示" |
| width   | 宽度           | String  | 否       | 30vw    |
| top     | 距离上方的距离 | String  | 否       | 15vh    |
| visible | 是否可见       | Boolean | 否       | false   |
| footer  | 是否显示对话框底部| Boolean | 是       | true   |



#### 支持的事件

| 事件名 | 作用       |
| ------ | ---------- |
| close  | 关闭对话框 |
| confirm| 提交对话框 |

#### 使用示例
```html
<template>
 <Elg-Button type="text" @click="isShow1 = !isShow1">
      点击打开基本对话框
 </Elg-Button>
 <Elg-Dialog :visible="isShow1" @close="isShow1 = !isShow1" @confirm="isShow1 = !isShow1">
  这是一个基本的对话框</Elg-Dialog>
</template>
<script setup>
import { ref } from 'vue';
const isShow1 = ref(false);
</script>

```

### 分页
#### 属性
| 属性名      | 作用       | 类型   | 是否必须 | 默认值 |
| ----------- | ---------- | ------ | -------- | ------ |
| total       | 总页码数   | Number | 否       | 0      |
| currentPage | 当前页码数 | Number | 否       | 1      |
| pageCount   | 页码最大数 | Number | 否       | 10     |
| type        | 主题类型   | String | 否       | 无     |
| size        | 大小       | String | 否       | 

#### 支持的事件

| 事件名         | 作用           |
| -------------- | -------------- |
| current-change | 改变当前的页数 |

#### 使用实例

```html
<template>
    <!-- 总页数total大于页码最大显示数pager-count,此时无法全部显示 -->
     <Elg-Pager :total="26"  :currentPage="currentpage1"
      @current-change="handleChange" />
      <!-- 总页数total小于等于页码最大显示数pager-count,可以全部显示 -->
       <Elg-Pager :total="6"  :currentPage="currentpage2"
      @current-change="currentpage2=$event" />
      <!-- 带有背景颜色的分页 -->
      <Elg-Pager :total="20"   :currentPage="currentpage4"
      @current-change="currentpage4=$event" type="primary" />
      <!-- 调整大小 -->
       <Elg-Pager :total="20"   :currentPage="currentpage5"
      @current-change="currentpage5=$event" size="small" type="primary" />
      <Elg-Pager :total="20"   :currentPage="currentpage6"
      @current-change="currentpage6=$event"  size="large" type="primary" />
</template>


<script setup>
  import {ref} from "vue";
  let currentpage1 = ref(1);
  let currentpage2 = ref(1);
  let currentpage4 = ref(1);
  let currentpage5 = ref(1);
  let currentpage6 = ref(1);

  const handleChange=(newPage)=>{
  currentpage1.value = newPage
}
</script>


```

### tooltip
#### 支持的属性
| 属性名     | 作用       | 类型    | 是否必须 | 默认值 |
| ---------- | ---------- | ------- | -------- | ------ |
| content    | 提示内容   | String  | 否       | 无     |
| trigger    | 触发方式   | String  | 否       | hover  |
| placement  | 出现位置   | String  | 否       | left   |
| manual     | 自定义触发 | Boolean | 否       | false  |
| openDelay  | 延时打开   | Number  | 否       | 100    |
| closeDelay | 延时关闭   | Number  | 否       | 100    |
| effect     | 切换模式   | String  | 否       | dark  |

#### 支持的事件

| 事件名         | 作用         |
| -------------- | ------------ |
| visible-change | 提示是否显示 |

#### 使用示例
```html
<!-- 基本使用 -->
<template>
    <Elg-Tooltip placement="left">
      <Elg-Button>left</Elg-Button>
    </Elg-Tooltip>
    <Elg-Tooltip>
      <Elg-Button>top</Elg-Button>
    </Elg-Tooltip>
    <Elg-Tooltip placement="right">
      <Elg-Button>right</Elg-Button>
    </Elg-Tooltip>
    <Elg-Tooltip placement="bottom">
      <Elg-Button>bottom</Elg-Button>
    </Elg-Tooltip>
<!-- 点击触发 -->
   <Elg-Tooltip placement="left" trigger="click"   @visible-change="handleChange">
      <Elg-Button>left</Elg-Button>
    </Elg-Tooltip>
<!-- 主题 -->
      <Elg-Tooltip content="rporis ad.">
        <Elg-Button>dark theme</Elg-Button>
    </Elg-Tooltip>
    <Elg-Tooltip effect="light">
      <Elg-Button>light theme</Elg-Button>
    </Elg-Tooltip>
<!-- 手动触发 -->
 <div class="row">
    <Elg-Tooltip ref="tooltipRef" content="手动触发" :manual="true">
      <Elg-Button type="text">当前元素不直接触发tooltip</Elg-Button>
    </Elg-Tooltip>
     <Elg-Button type="success" @click="triggershow">点击手动打开tooltip</Elg-Button>
    <Elg-Button type="info" @click="triggerclose">点击手动关闭tooltip</Elg-Button>
  </div>
<!-- 延时触发 -->
    <Elg-Tooltip placement="top" :openDelay="1000" content="延时1秒触发">
      <Elg-Button>延时1s触发</Elg-Button>
    </Elg-Tooltip>
    <Elg-Tooltip :closeDelay="1000" content="延时1秒关闭">
      <Elg-Button>延时1s关闭</Elg-Button>
    </Elg-Tooltip>
<!-- 更多content -->
    <Elg-Tooltip>
      <template #content>
        <div class="content-info">
          <p>多行信息</p>
          <p>第二行信息</p>
        </div>
      </template>
      <Elg-Button>更多content</Elg-Button>
    </Elg-Tooltip>
</template>
<script setup>
import { ref } from 'vue';
const tooltipRef = ref()
const handleChange = (status) => {
  console.log(status)
}
const triggershow = () => {
  // console.log(tooltipRef.value)
  tooltipRef.value.outControlShow();
}
const triggerclose = () => {
  tooltipRef.value.outControlHide();
}
</script>
```

### 下拉菜单dropdown
#### 支持的属性
| 属性名          | 作用                | 类型    | 是否必须 | 默认值 |
| --------------- | ------------------- | ------- | -------- | ------ |
| menuOptions     | 下拉内容条目数组    | Array   | 是       | 无     |
| hideAfterClick  | 点击条目后隐藏      | Boolean | 否       | false  |

此外 dropdown 是基于tooltip的二次封装,支持tooltip的placement,trigger,manual,openDelay,closeDelay等属性


#### 支持的事件

| 事件名           | 作用                   |
| ---------------- | ---------------------- |
| *visible-change* | 显示状态改变后触发     |
| *select*         | 选择了具体的某一个项目 |


#### 使用示例
```html
<template>
    <!-- 基本使用 -->
    <Elg-Dropdown :menuOptions="list">
        <Elg-Button type="text">下拉菜单
            <Elg-Icon icon="fa-angle-down" size="xs"></Elg-Icon>
      </Elg-Button>
    </Elg-Dropdown>
    <!-- 部分禁用 -->
    <Elg-Dropdown  :menuOptions="list2">
      <Elg-Button type="text">部分禁用
        <Elg-Icon icon="fa-angle-down" size="xs"></Elg-Icon>
      </Elg-Button>
    </Elg-Dropdown>
    <!-- 分割线 -->
    <Elg-Dropdown :menuOptions="list3">
      <Elg-Button type="text">分割线
        <Elg-Icon icon="fa-angle-down" size="xs"></Elg-Icon>
      </Elg-Button>
    </Elg-Dropdown>
</template>
<script setup>
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
</script>
```


## 结束
谢谢阅读,有问题请联系(317879181@qq.com)
