<script setup>
import Side from "../components/Side.vue";
import Head from "../components/Head.vue";
// export default{
//     method:{
//         goBack(){
//             this.$router.go(-1);
//         }
//     }

// }
</script>

<template>
    <Head></Head>
    <Side id="side"></Side>
    <div><span class="center1">作者列表</span></div>
    <ul >
        <!--记得 新开网页 +下划线-->
      <a href="https://baike.baidu.com/item/%E5%AE%89%E6%89%98%E4%B8%87%C2%B7%E5%BE%B7%C2%B7%E5%9C%A3-%E5%9F%83%E5%85%8B%E8%8B%8F%E4%BD%A9%E9%87%8C/19777081"><li class="center2">《小王子》：安托万·德·圣-埃克苏佩里</li></a>
      <a href="https://baike.baidu.com/item/%E5%88%97%E5%A4%AB%C2%B7%E5%B0%BC%E5%8F%A4%E6%8B%89%E8%80%B6%E7%BB%B4%E5%A5%87%C2%B7%E6%89%98%E5%B0%94%E6%96%AF%E6%B3%B0/1250657?fromtitle=%E5%88%97%E5%A4%AB%E6%89%98%E5%B0%94%E6%96%AF%E6%B3%B0&fromid=249226&fromModule=lemma_search-box"><li class="center2">《复活》：列夫托尔斯泰</li></a>
 <a href="https://baike.baidu.com/item/%E5%88%97%E5%A4%AB%C2%B7%E5%B0%BC%E5%8F%A4%E6%8B%89%E8%80%B6%E7%BB%B4%E5%A5%87%C2%B7%E6%89%98%E5%B0%94%E6%96%AF%E6%B3%B0/1250657?fromtitle=%E5%88%97%E5%A4%AB%E6%89%98%E5%B0%94%E6%96%AF%E6%B3%B0&fromid=249226&fromModule=lemma_search-box"><li class="center2">《战争与和平》：列夫托尔斯泰</li></a>
      <a href="https://baike.baidu.com/item/%E5%8F%B8%E6%B1%A4%E8%BE%BE?fromModule=lemma_search-box"><li class="center2">《红与黑》：司汤达</li></a>

     
      <a href="https://baike.baidu.com/item/%E7%BB%B4%E5%85%8B%E5%A4%9A%C2%B7%E9%9B%A8%E6%9E%9C?fromModule=lemma_search-box"><li class="center2">《悲惨世界》：雨果</li></a>
      <a href="https://baike.baidu.com/item/%E7%BB%B4%E5%85%8B%E5%A4%9A%C2%B7%E9%9B%A8%E6%9E%9C?fromModule=lemma_search-box"><li class="center2">《巴黎圣母院》：雨果</li></a>
      <a href="https://baike.baidu.com/item/%E5%A4%8F%E6%B4%9B%E8%92%82%C2%B7%E5%8B%83%E6%9C%97%E7%89%B9/237857?fromModule=search-result_lemma"><li class="center2">《简爱》：夏洛蒂·勃朗</li></a>

    </ul>

  <router-view></router-view>
  
</template>

<style scoped>
   /* #side{
        position:fixed;
        height: 50px;
        width: 200px;
        display: inline-block;
        text-align: center;
        line-height: 50px;
        margin-top:100%;
    }
      */

        .center1{
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .center2{
    display:  flex;
    font-size: 20px;
    justify-content: center;
    align-items: center;
  }
</style>
