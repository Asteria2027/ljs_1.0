<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="router-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>

<script>

import {mapActions} from 'vuex'

export default {
  name: "App",
  mounted(){
    //获取用户信息
    // this.getUserInfo()
  },
  methods: {
    ...mapActions([
        'getUserInfo'
    ])
  },
};
</script>

<style>
@import url("./style/reset.css");
@import url('./font/iconfont.css');
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
#app {
  height: 100%;
  width: 100%;
}
</style>
