<template>
  <el-button type="primary" @click="onClick">Element UI のボタンだよ</el-button>
  <el-date-time-picker></el-date-time-picker>
  <el-date-picker 
        type="daterange" 
        v-model="value1" 
        range-separator="〜" 
        start-placeholder="開始日" 
        end-placeholder="終了日">                            
  </el-date-picker>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    const onClick = ()=>{
      alert('よくも押してくれたな！');
    };
    return {
      onClick,
    };
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
