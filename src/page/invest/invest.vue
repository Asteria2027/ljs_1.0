<template>
  <div class='invest'>
    <div @click='investMenuShow=!investMenuShow' class="mheader_wap">
      <mheader :headTitle="titles[0]" :fold="investMenuShow" :headlineArrow="true"></mheader>
    </div>
    <transition name="invest-menu-fade" mode="out-in">
      <div class="invest_more_icon" style="display: block;" v-if="investMenuShow">
        <div class="borderBottom-1px" :class="index==0? 'sele': ''" @click="investMenuSelect(index)" v-for="(item,index) in titles" :key="index" >{{item}}</div>
      </div>
    </transition>
    <div class="screen_cover" v-if="investMenuShow" @click="investMenuShow=!investMenuShow" @touchmove.prevent></div>
    <investment-card v-for="(item,index) in titles" :key="index"></investment-card>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import footGuide from '@/components/footer/footGuide.vue'
import mheader from '@/components/header/header.vue'
import investmentCard from '@/components/common/investmentCard/investmentCard.vue'

export default {
  data () {
    return {
      titles:['散标专区','月月升','联金定投'],
      investMenuShow:false
    };
  },
  mounted(){
    if(this.$route.query.index) {
      this.investMenuSelect(this.$route.query.index)
    }
  },
  methods:{
    investMenuSelect(index) {
      this.titles.splice(0,1,...this.titles.splice(index,1,this.titles[0]));
      this.investMenuShow = false;
    }
  },
  components: {
    footGuide,
    mheader,
    investmentCard
  },
}

</script>
<style lang='less' scoped>
.invest-menu-fade-enter-active, .invest-menu-fade-leave-active {
    transition: .5s;
    transform: translateY(0);
}
.invest-menu-fade-enter, .invest-menu-fade-leave-active {
  transform: translateY(-100%);
}
.invest {
  box-sizing:border-box; 
  min-height: 100%;
  width: 100%;
  background: #f4f4f4;
  padding-top: 0.8rem;
  padding-bottom: 0.87rem;
}
.sele {
  background-color:#e2e5ea;
}
.screen_cover {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 998;
}
.mheader_wap {
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 0.75rem;
}
.invest_more_icon {
    position: fixed;
    right: 0px;
    top: 0.75rem;
    background: #fff; 
    width: 100%;
    display: none;
    z-index: 999;
    >div {
      width: 100%;
      font-size: 0.18rem;
      color: #484848;
      height: 0.8rem;
      line-height: 0.8rem;
      text-align: center;
    }
}
</style>