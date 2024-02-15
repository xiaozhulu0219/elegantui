<script setup >
// 展示属性的组件
const props = defineProps({
    propsList:Array,
    columns:{
        type:Array,
        default:()=>[{title:'属性名',value:'propsName'},
        {title:"作用",value:'effect'},
        {title:'类型',value:"type"},
        {title:"是否必须",value:'required'},
        {title:'默认值',value:'default'},
        {title:"备注",value:'info'},
       ]
    },
    width:{
        type:String,
        required:false
    }
})
</script>

<template>
<table class="elg-table" :style="{width:width?width:''}">
    <thead class="elg-table__head">
        <tr class="elg-table__title">
            <th v-for="(item,index) in columns" >
            {{item.title}}</th>
            
        </tr>

    </thead>
    <tbody>
        <tr v-for="item in propsList" class="elg-table__line">
            <td v-for="it in columns">
                <div v-if="it.value==='type'">
                    <span class="elg-table__type">{{item.type}}</span>
                </div>
                <div v-else>
                    {{item[it.value]}}

                </div>
            </td>
            <!-- <td >{{item.propsName}}</td>
            <td >{{item.effect}}</td>
            <td  >
                <span class="elg-table__type">{{item.type}}</span></td>
            <td >{{item.required}}</td>
            <td >{{item.default}}</td>
            <td >{{item.info}}</td> -->

        </tr>
    </tbody>
</table>
</template>

<style scoped>
.elg-table{
    border-collapse: collapse;
    width:80% ;
    border: 1px solid var(--elgdoc-props-theme);
    ;
}
.elg-table__head{
    border-style:none;
}
.elg-table__title{
    height: 60px;
    border-style:none;
    background-color: var(--elgdoc-props-theme);
}
.elg-table__title th{
    padding:  0 10px;
    border-style:none;
}
.elg-table__line{
    height: 40px;
}
.elg-table__type{
    background: var(--elgdoc-table-type);
    padding: 2px 5px;
    display: inline-block;
    border-radius: 3px;
}
</style>