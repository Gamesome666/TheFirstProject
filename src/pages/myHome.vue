<script setup>
import {useUserStore} from "../store/user.js"
const user=useUserStore();
</script>
<template>
    <div class="text-xs text-red-100">出现吧</div>
    <span>{{ user.token }}</span>
    <el-icon><Loading /></el-icon>
    <el-icon><Search /></el-icon>
</template>