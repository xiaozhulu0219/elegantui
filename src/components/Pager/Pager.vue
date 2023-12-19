<script setup >
import pageProps from "./props";
import "@/style/components/pager.scss";
import { computed } from "vue";

defineOptions({
    name: 'ElgPager'
})
const emit = defineEmits(['current-change'])

const pageTo=(pages)=>{
   if(pages==='prev'){
    // 往前减5页
    pages=props.currentPage-5
   }
   if(pages==='next'){
    pages=props.currentPage+5

   }
   if(pages<1){
    pages=1
   }
   if(pages>props.total){
    pages =props.total
   }
    if(pages===props.currentPage){
        return
    }else{
    emit('current-change',pages)

    }
}
const props = defineProps(pageProps);
const pageCount = computed(()=>{
    if(props.pageCount<7){
        return 7
    }else{
        return props.pageCount
    }
})
// console.log(props)

const list = computed(() => {

    if (props.total <= pageCount.value) {
        const pages = []

        //可以全部显示
        for (let i = 1; i <= props.total; i++) {
            pages.push(i)
        }
        return pages
    } else {
        // 无法全部显示

        const pages = [];
        // 判断当前位置在哪里
        if (props.currentPage < 5) {
            //显示的位置是123....total
            for(let i=1;i<=5;i++){
                pages.push(i)
            }
            pages.push('next')
            pages.push(props.total)
        }
        else if(props.currentPage>props.total-4){
            // 页码处于最后
            pages.push(1);
                pages.push('prev');
            for(let i=props.total-4;i<=props.total;i++){
                
                pages.push(i)
            }
        }else{
            // 处于中间位置
            pages.push(1);
            pages.push('prev');
            for(let i=props.currentPage-2;i<=props.currentPage+2;i++){
                pages.push(i);
            }
            pages.push('next');
            pages.push(props.total)
        }
        return pages

    }
})
</script>

<template>
    <div class="elg-pager" 
    :class="[props.type?`elg-pager-${props.type}`:'',
props.size?`elg-pager-${props.size}`:'']">
        <a @click="pageTo(1)" >
            <Elg-Icon 
            icon="fa-angle-double-left" 
            :class="{'elg-pager-icon-disabled':props.currentPage===1}"
             />
        </a>
        <a  @click="pageTo(props.currentPage-1)" >
            <Elg-Icon 
            icon="fa-angle-left"
             :class="{'elg-pager-icon-disabled':props.currentPage===1}"
            />
        </a>

        <a v-for="(item, index) in list" :key="index"
         :class="{ active: item === props.currentPage,
         prev:item ==='prev',
         next:item ==='next'}"
         :disabled="item === props.currentPage"
         
         @click="pageTo(item)"><span class="textinfo" >{{ (item==='prev' || item==='next') ? '...' :item  }}</span>
         <Elg-Icon icon="fa-caret-left" class="prev-icon" v-if="item==='prev'" ></Elg-Icon>
         <Elg-Icon icon="fa-caret-right" class="next-icon" v-if="item==='next'"></Elg-Icon>
        </a>

        <a @click="pageTo(props.currentPage+1)">
            <Elg-Icon  icon="fa-angle-right" :class="{'elg-pager-icon-disabled':props.currentPage===props.total}" />
        </a>
        <a @click="pageTo(props.total)">
            <Elg-Icon  icon="fa-angle-double-right"  :class="{'elg-pager-icon-disabled':props.currentPage===props.total}" />
        </a>
    </div>
</template>

<style scoped></style>