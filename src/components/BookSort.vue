<script setup>
import Side from "../components/Side.vue";
import Head from "../components/Head.vue";

</script>

<template>
    <Head></Head>
    <Side id="side"></Side>
    <div><span id="sort">书籍分类</span></div>
  <router-view></router-view>
  <div class="grid grid-cols-2 gap-2" id="bb">
  <div class="aa">科技</div>
  
  <div class="aa">经管</div>
  <div class="aa">文艺</div>
  <div class="aa">教育</div>
  <div class="aa">人文社科</div>
</div>
  <!-- <ul>
    <li>科技、经管、文艺、教育、人文社科</li>
    <li>科技、经管、文艺、教育、人文社科</li>
    <li>科技、经管、文艺、教育、人文社科</li>
    <li>科技、经管、文艺、教育、人文社科</li>
    <li>科技、经管、文艺、教育、人文社科</li>
  </ul> -->
</template>

<style scoped>
    #sort{
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

  }
  #bb{
    margin-left:30%
    /* display: flex;
    justify-content: center;
    align-items: center; */
  }
  .aa{
    height:200px;
    width:200px;
    border: 5px,pink,solid;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
