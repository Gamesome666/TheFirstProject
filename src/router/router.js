// import Vue from 'vue';
import { createRouter, createWebHashHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import Side from '../components/Side.vue';
import AuthorList from '../components/AuthorList.vue';
import myHome from '../pages/myHome.vue';
import BackHome from '../components/BackHome.vue';
import BookSort from '../components/BookSort.vue';
import Jane from '../components/Jane.vue';
import King from '../components/King.vue';
import Paris from '../components/Paris.vue';
import Relive from '../components/Relive.vue';
import SorrowWord from '../components/SorrowWord.vue';
import WarAndPeace from '../components/WarAndPeace.vue';
import RB from '../components/RB.vue';
// import App from '../App.vue'
// Vue.use(createRouter);
// const app=createApp(App)
// app.use(createRouter)
const routes = [
    {path:'/',redirect:"/home"},
    {path:"/home",component:()=>import("../pages/myHome.vue")},
    {path: '/AuthorList',component: AuthorList},
    {
      path: '/myHome',
      name: 'myHome',
      "params":{},
      component: myHome,
    },
    {path: '/BackHome',component: BackHome},
    {path: '/BookSort',component: BookSort},
    {path: '/WarAndPeace',component: WarAndPeace},
    {path: '/SorrowWord',component: SorrowWord},
    {path: '/Relive',component: Relive},
    {path: '/Paris',component: Paris},
    {path: '/King',component: King},
    {path: '/Jane',component: Jane},
    {path: '/RB',component: RB},
  ];
  
    
    

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
