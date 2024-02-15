<script setup >
import { handleError, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
    const route = useRoute()
// console.log(router)
// console.log(route)
const props = defineProps({
    colorMode:String,
    menuPage:String
})
// console.log(props)
const emits = defineEmits(['modeChange','menuChage'])
function handleChangeMode(mode) {
    emits('modeChange', mode)
}
function changeMenu(page){
    // 用来修改当前的页面
    emits('menuChage',page)
}
</script>

<template>
    <div class="elg-layout__header">
        <div class="elg-header">
            <div class="elg-header__title">
                Elegant UI
            </div>
            <div class="elg-header__nav">
                <li class="elg-nav__item" :class="{'elg-nav__link--selective':!$route.fullPath.startsWith('/comp')}"  @click="changeMenu('intro')">
                    <router-link to="/" class="elg-nav__link" > 快速上手</router-link>
                    
                </li>
                <li class="elg-nav__item" :class="{'elg-nav__link--selective':$route.fullPath.startsWith('/comp')}"  @click="changeMenu('comp')">
                    <router-link to="/comp" class="elg-nav__link"> 组件</router-link>
                    <!-- :class="{'elg-nav__link--selective':$route}" -->
                </li>
                
            </div>
            <div class="elg-header__control">
                <div class="elg-header__controlitem">

                    <Elg-Icon @click="handleChangeMode('light')" v-if="colorMode === 'dark'" icon="fa-sun" class="iconmode"
                        :spin="true" size="xl" />
                    <Elg-Icon @click="handleChangeMode('dark')" v-if="colorMode === 'light'" icon="fa-moon" class="iconmode"
                        :bounce="true" size="xl" />


                </div>
                <div class="elg-header__controlitem">
                    1.0.0
                </div>
                <div class="elg-header__controlitem">
                    <a href="https://github.com/xiaozhulu0219/elegantui" style="font-size: 1.5em; color: var(--elgdoc-big-text) ;" class="iconfont icon-github"></a>
                </div>
            </div>


        </div>
    </div>
</template>

<style scoped >
.elg-nav__item a{
  color:var(--elgdoc-big-text);
}
.elg-nav__link--selective a{
    color:var(--elg-doc-selected-text);
    font-weight: bold;
}
.router-link-active{
  color:var(--elg-doc-selected-text);

}
.elg-layout__header {
    height: 80px;
    padding: 10px 12px 0px 10px;
    box-sizing: border-box;
    /* border-bottom: 1px solid #ddd; */
    flex: 0 0 auto;

}

.elg-header {
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    background-color: var(--elgdoc-header-background);
    text-align: start;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    box-sizing: border-box;
    justify-content: space-between;
}

.elg-header__title {
    font-size: 1.4em;
    color: var(--elgdoc-big-text);
    width: 20%;
    flex: 0 0 auto;
}
.elg-header__controlitem{
    color: var(--elgdoc-big-text);

}
.elg-header__control {
    display: flex;
    align-items: center;
}

.elg-header__nav {
    flex: 1 1 auto;
    list-style: none;
    display: flex;
    color: var(--elg-doc-selected-text);
    font-size: 1.1em;
}

.elg-nav__item {
    margin: 0 10px;
}

.elg-header__controlitem {
    margin: 0 10px;
}

.iconmode {
    color: var(--elg-doc-spi-text)
}</style>