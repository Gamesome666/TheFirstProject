<script setup>
import {useUserStore} from "../store/user.js"
const user=useUserStore();
</script>
<template>
    <div>出现吧</div>
    <span>{{ user.token }}</span>
</template>