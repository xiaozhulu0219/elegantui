<script setup >
import { computed } from "vue";

const props = defineProps({
    menuPage: String
})
// 根据不同的模式渲染不同的列表导航
const  menuList= computed(() => {
    if (props.menuPage === 'intro') {
        return [
            { name: '安装', path: '/install' },
            {
                name: '引入', path: '/intro'
            }, {
                name: '使用UMD', path: '/umd'
            }
        ]
    } else if (props.menuPage === 'comp') {
        return [{
            name: '图标·Icon',
            path: '/comp'
        }, {
            name: '按钮·Button',
            path: '/comp/button'
        },{
            name:'卡片·Card',
            path:'/comp/card'
        },{
            name:'对话框·Dialog',
            path:'/comp/dialog'
        },{
            name:'分页·Pager',
            path:'/comp/pager'
        },{
            name:'提示·Tooltip',
            path:'/comp/tooltip'
        },{
            name:'抽屉·Collapse',
            path:'/comp/collapse'
        },{
            name:'下拉菜单·Dropdown',
            path:'/comp/dropdown'
        }]
    }
})
</script>

<template>
    <div class="elg-menu__warp">
        <div class="elg-menu">
            <li 
            v-for="item in menuList" 
            :key="item.name"
            class="elg-menu__item"
            :class="{'elg-menu__item--select':$route.fullPath===item.path}">
                <router-link :to="item.path" > {{ item.name}}</router-link>
            </li>
        </div>
    </div>
</template>

<style scoped>
.elg-menu__item{
    height: 40px;
    line-height: 40px;
    list-style: none;
}
.elg-menu__item a{
    color:var(--elgdoc-big-text) ;
}
.elg-menu__item--select{
    background-color:var(--elgdoc-back-sel) ;
}

.elg-menu__item--select a{
    color: var(--elg-doc-selected-text);
}
.elg-menu__item:hover{
    background-color: var(--elgdoc-hover-color);

}
.elg-menu__item--select:hover{
    background-color:var(--elgdoc-back-sel) ;
}
.elg-menu__warp {
    flex: 0 0 auto;
    overflow: hidden;
    height: 100%;
    width: 250px;
    /* border-right: 1px solid #ddd; */
    padding: 10px;
    box-sizing: border-box;
    color: var(--elgdoc-big-text)
}

.elg-menu {
    height: 100%;
    width: 100%;
    background-color: var(--elgdoc-menu-background);
    border-radius: 10px;
    /* background-color: rgba(255, 255, 255, 0.5); */
    box-sizing: border-box;
    padding: 10px 0 ;
}
</style>