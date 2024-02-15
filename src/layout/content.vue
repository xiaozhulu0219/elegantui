<script setup lang='ts'>

</script>

<template>
    <div class="elg-content__wrapper">
        <div class="elg-content">
            <div class="elg-inner__wrapper">
                <router-view></router-view>

            </div>
        </div>
    </div>
</template>

<style scoped>
.elg-content__wrapper {
    flex: 1 1 auto;
    padding: 10px 20px 20px 10px;
    color:var(--elgdoc-big-text);
    height:100%;
    box-sizing: border-box;
    
}
.elg-content{
    height: 100%;
    border-radius: 15px;
    width: 100%;
    border: 2px solid var(--elgdoc-border-color);
    padding: 10px;
    box-sizing: border-box;
    overflow: hidden;
}
.elg-inner__wrapper{
    height: 100%;
    overflow: auto;
   
}
.elg-inner__wrapper::-webkit-scrollbar {
    width:5px;
}

.elg-inner__wrapper::-webkit-scrollbar-track {

/* background-color: #b46868; */
    background-color:var(--elgdoc-scroll-track)
} 


.elg-inner__wrapper::-webkit-scrollbar-thumb {

/* background-color: rgba(0, 0, 0, 0.2);  */
background-color:var(--elgdoc-scroll-thumb)

}
</style>