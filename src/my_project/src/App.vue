<template>
  <el-button type="primary" @click="onClick">Element UI のボタンだよ</el-button>
</template>

<script>
export default {
  name: 'App',
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

