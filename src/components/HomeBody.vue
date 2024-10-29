<script>
import {ref} from "vue"

const image=ref( )

export default {
  data() {
    return {
    images: [
    "https://s2.loli.net/2024/10/19/m3oE9NkDIZ2wXzy.jpg",
   
    "https://s2.loli.net/2024/10/19/V9ut7Lfc2DkHWsm.jpg",
    "https://s2.loli.net/2024/10/19/fVzRWGdtJkTrNIQ.jpg"
     

],
      showTooltip: false,
    };
  },
};

</script>

<template>
<!-- 校徽 -->
  <!-- <img src="https://s2.loli.net/2024/10/18/zuaIwS3lMXWGPd6.jpg" >   
  <img src="https://s2.loli.net/2024/10/18/QoawHRZ532yYcKM.jpg" > -->
  <!-- 巴黎圣母院
<img src="https://s2.loli.net/2024/10/19/m3oE9NkDIZ2wXzy.jpg" >
悲惨世界
<img src="https://s2.loli.net/2024/10/19/32KCvBgkmnZt1lF.jpg" >
复活
<img src="https://s2.loli.net/2024/10/19/VpDA5KiS1TwsWav.jpg" >
红与黑
<img src="https://s2.loli.net/2024/10/19/OPw5IFcNCAt4vrD.jpg" >
简爱
<img src="https://s2.loli.net/2024/10/19/XCUN42lTDnwRuqM.jpg" >
小王子
<img src="https://s2.loli.net/2024/10/19/V9ut7Lfc2DkHWsm.jpg" >
战争与和平
<img src="https://s2.loli.net/2024/10/19/fVzRWGdtJkTrNIQ.jpg" > -->






  <div id="homebody" >
  
  <!-- <el-carousel :interval="4000" type="card" height="300px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
       <img src={{ imgs[{{ item }}].value }}>
    
  </el-carousel> -->

<!-- 小王子 战争与和平 巴黎圣母院 -->
  <div><span class="textcenter">热门前三</span></div>
  <div  id="flight">
    <el-carousel :interval="4000" type="card" height="450px">
      <el-carousel-item v-for="image in images" :key="image">
        <div v-if="image==='https://s2.loli.net/2024/10/19/m3oE9NkDIZ2wXzy.jpg'">
        <router-link to="/Paris"><img :src="image"   title=《巴黎圣母院》：雨果 alt=《巴黎圣母院》：雨果/></router-link>
        </div>
        <div v-else-if="image==='https://s2.loli.net/2024/10/19/V9ut7Lfc2DkHWsm.jpg'">
        <router-link to="/King"><img :src="image"   title="《小王子》：安托万·德·圣-埃克苏佩里" alt="《小王子》：安托万·德·圣-埃克苏佩里"/></router-link>
        </div>
        <div v-else="image==='https://s2.loli.net/2024/10/19/fVzRWGdtJkTrNIQ.jpg'">
        <router-link to="/WarAndPeace"><img :src="image"  title="《战争与和平》：列夫托尔斯泰" alt="《战争与和平》：列夫托尔斯泰" /></router-link>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>





  <div><span class="textcenter">上榜书籍</span></div>
  <div class="grid gap-4 grid-cols-2" id="grid-container">
    <!-- 悲惨世界 -->
  <div class="b" ><router-link to="/SorrowWord"><img src="https://s2.loli.net/2024/10/19/32KCvBgkmnZt1lF.jpg"  title="《悲惨世界》：雨果" alt="《悲惨世界》：雨果"></router-link></div>
  <!-- 复活 -->
  <div class="b"><router-link to="/Relive"><img src="https://s2.loli.net/2024/10/19/VpDA5KiS1TwsWav.jpg" title="《复活》：列夫托尔斯泰" alt="《复活》：列夫托尔斯泰"></router-link>
  </div>
  <!-- 红与黑 -->
  <div class="b"><router-link to="/RB"><img src="https://s2.loli.net/2024/10/19/OPw5IFcNCAt4vrD.jpg" title="《红与黑》：司汤达" alt="《红与黑》：司汤达"></router-link>
  </div>
  <!-- 简爱 -->
  <div class="b"><router-link to="/Jane"><img src="https://s2.loli.net/2024/10/19/XCUN42lTDnwRuqM.jpg" title="《简爱》：夏洛蒂·勃朗" alt="《简爱》：夏洛蒂·勃朗"></router-link>
  </div>
</div>


  </div>
  <router-view></router-view>>
</template>

<style scoped>
  #flight{
    position: relative;
  }
    #grid-container{
        
        /* flex:0 1 auto; */
        /* display: grid;
     grid-template-columns: repeat(3, 1fr);
     grid-gap: 10px; */
     
        height: 600px;
        width:900px;
        border: 2px,black,solid;
        position:absolute;
        margin-top:5%;
        margin-left:10%;

    }

    .b{
        
        border: 2px,black,solid;
    }
    /* 走马灯 */
    .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
    }

    .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
    background-color: #697078;
    }
    #homebody{
        /* display: flex; */
        margin-top:2%;
        margin-left:20%;
        position: absolute;
        height:2500px;
        width:70%;
        border:5px,black,solid
    }
    .textcenter{
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
</style>