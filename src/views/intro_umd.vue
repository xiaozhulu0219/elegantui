<script setup>
import xml from 'highlight.js/lib/languages/xml';
import javascript from 'highlight.js/lib/languages/javascript';
import codeShow from '../comp/codeShow.vue';
import {onMounted } from "vue";
onMounted(()=>{
  const tar = document.querySelector('.elg-inner__wrapper');
  tar.scrollTop =0
})
const codeType = 'xml';
const code=`
<p>haha</p>
`
const codeUmd = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="https://mp-d08e57ac-bfc6-460b-8732-05e71820dffa.cdn.bspapp.com/umd/style.css" />
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/3.3.4/vue.global.js">\<\/script\>
    <script src="https://mp-d08e57ac-bfc6-460b-8732-05e71820dffa.cdn.bspapp.com/umd/ElegantUI.umd.cjs">\<\/script\>

  </head>
  <body>
    <div id="app">
        <div>{{ message }}</div>
        <Elg-Button >默认按钮</Elg-Button>
    </div>
    <script>
    const app = Vue.createApp({
        data() {
          return {
            message: "Hello ElegantUI !",
          };
        },
      });
      app.use(ElegantUI);
      app.mount("#app");
    \<\/script\>
  \<\/body\>
\<\/html\>

`
</script>

<template>
    <div class="elg-umd__wrap">
        <h2 class="elg-umd__title">umd</h2>
        <p>使用umd版本的ElegantUI</p>
        <p>📌umd文件下载地址 https://mp-d08e57ac-bfc6-460b-8732-05e71820dffa.cdn.bspapp.com/umd/ElegantUI.umd.cjs </p>
        <p>📌样式文件:https://mp-d08e57ac-bfc6-460b-8732-05e71820dffa.cdn.bspapp.com/umd/style.css</p>
        <p>以下是一个使用例子</p>
        <codeShow :codeStr="codeUmd" :codeType="codeType" :register="{'javascript':javascript,'xml':xml}"></codeShow>

    </div>
</template>

<style scoped>
.elg-umd__wrap {
    text-align: start;
    width: 80%;
    padding-left: 10px;
}

.elg-umd__title {
    font-weight: bold;
    margin: 20px 0;
}
</style>