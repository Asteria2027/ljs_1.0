<template>
  <div>
    <transition name="tip-fade" mode="out-in">
      <div class="windowTips" v-if='txt'>
        <div>{{txt}}</div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      txt:''
    };
  },
  methods:{
    toast(txt){
      this.txt = txt;
      setTimeout(() => {
        this.txt = '';
      }, 1500);
    }
  }
}

</script>

<style lang='less' scoped>

.tip-fade-enter-active, .tip-fade-leave-active {
  transition: .5s;
  transform: scale(1) rotate(0);
}
.tip-fade-enter, .tip-fade-leave-active {
  transform:scale(0) rotate(360deg);
}

.windowTips {
    position: fixed;
    top:0;
    left:0;
    height:100%;
    width: 100%;
    background: transparent;
    font-size: 0.24rem;
    display: block;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      display: block;
      padding: 0.2rem 0.4rem;
      max-width: 1.6rem;
      word-wrap:break-word;
      word-break:break-all;
      border-radius: 0.05rem;
      min-height: 0.3rem;
      line-height: 0.3rem;
      text-align: center;
      background: #00C6FF;
      color: #FFFFFF;
    }
  }
</style>