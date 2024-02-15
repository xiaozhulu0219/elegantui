<script setup >
import { marked } from 'marked';
import {  onMounted } from "vue";
import 'highlight.js/styles/github.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml'
import codeShow from '../comp/codeShow.vue';

onMounted(()=>{
  const tar = document.querySelector('.elg-inner__wrapper');
  tar.scrollTop =0
})



const code1 = `
import { createApp } from 'vue';
import ElementPlus from "elegantui-plus";
import "elegantui-plus/style.css";
import App from './App.vue'
const app = createApp(App);
app.use(ElementPlus)
app.mount('#app') 
`;
const codetype1 = 'javascript'

const codeIcon = `
import { createApp } from 'vue';
import {ElgIcon} from "elegantui-plus";
import "elegantui-plus/style.css";
import App from './App.vue'
const app = createApp(App);
ElgIcon.install(app);
app.mount('#app') 
`
const codeButton = `
import { createApp } from 'vue';
import {ElgButton,ElgIcon} from "elegantui-plus";
import "elegantui-plus/style.css";
import App from './App.vue'
const app = createApp(App);
ElgButton.install(app)
ElgIcon.install(app)
app.mount('#app') 
`

const codeCard = `
import { createApp } from 'vue';
import {ElgButton,ElgIcon,ElgCard} from "elegantui-plus";
import "elegantui-plus/style.css";
import App from './App.vue'
const app = createApp(App);
ElgButton.install(app)
ElgCard.install(app)
ElgIcon.install(app)
app.mount('#app') 
`

const codeCollapse=`
import { createApp } from 'vue';
import {ElgCollapse,ElgCollapseItem} from "elegantui-plus";
import "elegantui-plus/style.css";
import App from './App.vue'
const app = createApp(App);
ElgCollapse.install(app)
ElgCollapseItem.install(app)
app.mount('#app') 
`
const codeDialog=`
import { createApp } from 'vue';
import {ElgButton,ElgIcon,ElgDialog} from "elegantui-plus";
import "elegantui-plus/style.css";
import App from './App.vue'
const app = createApp(App);
ElgDialog.install(app);
ElgButton.install(app)
ElgIcon.install(app)
app.mount('#app')
`

const codeTooltip = `
import { createApp } from 'vue';
import {ElgButton,ElgIcon,ElgTooltip} from "elegantui-plus";
import "elegantui-plus/style.css";
import App from './App.vue'
const app = createApp(App);
ElgButton.install(app);
ElgIcon.install(app);
ElgTooltip.install(app)
app.mount('#app')
`
const codeDropdown =`
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
`
const codePager=`
import { createApp } from 'vue';
import {ElgPager,ElgIcon} from "elegantui-plus";
import "elegantui-plus/style.css";
import App from './App.vue'
const app = createApp(App);
ElgPager.install(app);
ElgIcon.install(app);
app.mount('#app')
`

const registerObj = {
    javascript
}
</script>

<template>
    <div class="elg-intro__wrap">
        <h2 class="elg-intro__title">完整引入</h2>
        <p>推荐使用完整引入</p>
        <codeShow :codeStr="code1" :codeType="codetype1" :register="registerObj"></codeShow>

        <!-- <div id="t2" v-html="inner2"></div>
        <div id="test" v-html="inner"></div> -->
        <h2 class="elg-intro__title">按需引入</h2>
        <p>按需导入组件暂时需要按照以下方式，后续可能会有较大改动</p>

        <h3>Icon组件</h3>
        <codeShow :codeStr="codeIcon" :codeType="codetype1" :register="registerObj"></codeShow>
        <h3>Button组件</h3>
        <codeShow :codeStr="codeButton" :codeType="codetype1" :register="registerObj"></codeShow>
        <h3>Card组件</h3>
        <codeShow :codeStr="codeCard" :codeType="codetype1" :register="registerObj"></codeShow>
        <h3>Collapse组件</h3>
        <codeShow :codeStr="codeCollapse" :codeType="codetype1" :register="registerObj"></codeShow>
        <h3>Dialog组件</h3>
        <codeShow :codeStr="codeDialog" :codeType="codetype1" :register="registerObj"></codeShow>
        <h3>Tooltip组件</h3>
        <codeShow :codeStr="codeTooltip" :codeType="codetype1" :register="registerObj"></codeShow>
        <h3>Dropdown组件</h3>
        <codeShow :codeStr="codeDropdown" :codeType="codetype1" :register="registerObj"></codeShow>
        <h3>Pager组件</h3>
        <codeShow :codeStr="codePager" :codeType="codetype1" :register="registerObj"></codeShow>
    </div>
</template>

<style scoped>
.elg-intro__wrap {
    text-align: start;
    width: 80%;
    padding-left: 10px;
}
.elg-intro__title{
    font-weight: bold;
    margin: 20px 0;
}
</style>