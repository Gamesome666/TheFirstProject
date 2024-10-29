<script setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
// import Register from "./Register.vue";
// import Login from "./Login.vue";
// import { useModalStore } from "@/store/modal.js";
import { useUserStore } from "../store/user.js";
import { useModalStore } from "../store/modal.js";



const modal = useModalStore();


const input = ref("");
// const modal = useModalStore();
const user = useUserStore();
</script>

<template>
  <!-- 标题 -->
  <div class="grid grid-cols-3 gap-4 ">
    <img  class="float-left" src="https://s2.loli.net/2024/10/18/zuaIwS3lMXWGPd6.jpg"  >
   

  <div class="grid gap-200 grid-cols-2" id="comment">
  <div>广软"豆瓣"</div>

  <div>书展评</div>
  </div>
</div>
  <!-- 登陆注册 -->
  <div class="button">

      <el-button link size="large" @click="modal.switchLoginVisible">
        登录
      </el-button>
      <el-button link size="large" @click="modal.switchRegVisible">
        注册
      </el-button>
    </div>
    
    
  
  <el-divider>
    <el-icon><star-filled /></el-icon>
  </el-divider>
</template>
<style scoped>
  .logo{
    height: 150px;
    width: 1300px;
  }
  #comment{
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .button{
    margin-top:-60px;
    margin-left: 90%;
  }
</style>


