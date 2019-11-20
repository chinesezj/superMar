<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <router-link to="/home/news">新闻</router-link>
    |
     <router-link :to="'/home/message/'+userId">消息</router-link>
      <!-- <router-link :to="{path:'/home/message',params:{name:'cuihua'}}">消息</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data() {
    return {
      userId:'zhangji'
    }
  },
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
