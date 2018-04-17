<template>
  <div class="notFound">
    <div>对不起，您输入的地址有误</div>
    <div @click='goHome'>返回首页</div>
  </div>
</template>

<script>
  export default {
  methods:{
    goHome(){
      this.$router.push({path:'/home'});
    }
  }
}
</script>

<style scoped>
.notFound {
  font-size: 0.24rem;
  text-align: center;
  line-height: 2.6rem;
  color: sandybrown;
}
</style>