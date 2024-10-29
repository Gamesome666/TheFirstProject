
<script setup>
// export default {
//      methods: {
//        goToChild() {
//          this.$router.push({ name: 'AuthorList' });
//        },
//      },
//    };
</script>
<!-- 旁边的组件 -->
<template>
    <div class="float-top:100px" id="side">
        <div class="rounded-t-lg"><p class="textsetting"><router-link to="/myHome">回到首页</router-link></p></div><br/>
        <div id="side-middle-style" ><p class="textsetting" ><router-link to="/AuthorList">作者列表</router-link></p></div><br/>
        <div class="rounded-b-lg"><p class="textsetting"><router-link to="/BookSort">书籍分类</router-link></p></div><br/>
        <div>热门书籍排行</div>
        
        <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-fanhuidingbu"></use>
            <use xlink:href="#icon-dianzan"></use>
            <use xlink:href="#icon-shoucang"></use>
            
        </svg>

    </div>


    <div>
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
    #side{
        position:fixed;
        height: 50px;
        width: 200px;
        display: inline-block;
        text-align: center;
        line-height: 50px;
    }
    .rounded-t-lg{
        height:50px;
        width:200px;
        border: 3px,black,solid;
    }
    #side-middle-style{
        border: 3px,black,solid;
    }
    .rounded-b-lg{
        border: 3px,black,solid;
    }
    /* #side-middle-style{
        
    } */
    .textsetting{
        
    }
</style>
