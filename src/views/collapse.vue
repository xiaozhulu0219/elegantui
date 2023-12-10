<template>
  <h2 class="row-title">基础用法</h2>
  <p>可同时展开多个面板，面板之间不影响</p>
  <div class="row">
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
  </div>
  <h2 class="row-title">手风琴效果</h2>
  <div class="row">
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
  </div>
  <h2 class="row-title">自定义标题</h2>
  <div class="row">
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
  </div>
</template>

<script setup>
import { ref } from "vue";
let moduleVal1 = ref(['1', '2']);// 默认有两个是展开的
let moduleVal2 = ref(['1'])
const handleChange = (params) => {
  console.log(params, '///')
}
let moduleVal3 = ref([])// 默认无展开
</script>

<style scoped>
.collapse-item{
  display: flex;
  align-items: center;
}
</style>