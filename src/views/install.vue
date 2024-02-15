<script setup>
import { onMounted } from "vue";
onMounted(()=>{
  const tar = document.querySelector('.elg-inner__wrapper');
  tar.scrollTop =0
})
</script>

<template>
    <div class="elg-install-title">
        <h2 style="font-size:1.5em">Elegant UI </h2>
    </div>
    <p>是一个 Vue3 的组件库。组件还在持续完善中</p>

    <h3 class="elg-install-stitle">安装</h3>
    <p>🎯 注意，Elegant UI 仅支持 Vue3</p>
    <p>使用npm安装</p>

        <code class="elg-install-code" >
            npm i elegantui-plus
        </code>
   
  
    <h3 class="elg-install-stitle">图标</h3>
    <p>✨ Elegant UI的图标是基于 <a style="font-size:1.2em" href="https://fontawesome.com.cn/">Font Awesome</a> 图标库的二次封装 </p>
    <h3 class="elg-install-stitle">联系我</h3>
    <p>🚀 邮箱: 317879181@qq.com</p>
</template>

<style scoped>
.elg-install-title{
    padding:30px 0 
}
.elg-install-stitle{
    margin:20px 0;
    font-weight:bold
}
.elg-install-code{
    background-color:var(--elgdoc-code-back);
    height:40px;
    line-height:40px;
    display:inline-block;
    width:50%;
}

</style>