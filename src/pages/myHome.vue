<script setup>
import {useUserStore} from "../store/user.js"
import AuthorList from "../components/AuthorList.vue";
import BackHome from "../components/BackHome.vue";
import HelloWorld from "../components/HelloWorld.vue";
import HotBookList from "../components/HotBookList.vue";
import Head from "../components/Head.vue";
import Side from "../components/Side.vue";
import HomeBody from "../components/HomeBody.vue";
import BookSort from "../components/BookSort.vue";
const user=useUserStore();
</script>
<template>
    <!-- <el-button type="primary">Primary</el-button>
    <div class="text-xs text-red-50">啥都没出现</div>
    <img src="https://s2.loli.net/2024/10/18/zuaIwS3lMXWGPd6.jpg" >    
    <el-icon><Loading /></el-icon>
    <el-icon><Search /></el-icon> -->
    
    <body>

            <Head id="head"/>
            <Side id="side"/>
            <HomeBody id="homebody"></HomeBody>
            
    </body>
    <router-view></router-view>
    
</template>
<style scoped>
    #head{
        position: static;
    }
    #side{
        position: fixed;
        margin-top: 30px;
        margin-left: 30px;
    }
    #homebody{
        
        margin-top: 2%;
        margin-left: 300px;
    }
</style>
