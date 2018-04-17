<template>
  <div class="home">
    <mheader>
      <span slot='logo' class="head_logo"  @click="reload"></span>
      <i slot='menu' class="head_memu iconfont icon-gengduo" @click="menuShow=!menuShow"></i>
    </mheader>
    <transition name="menu-fade" mode="out-in">
      <div class="index_more_icon" style="display: block;" v-if="menuShow">
        <router-link :to="'/aboutUs'" class="borderBottom-1px">平台介绍</router-link>
        <router-link :to="'/riskEducation'"  class="borderBottom-1px">风险教育</router-link>
        <router-link :to="'/informationDisplay'" class="borderBottom-1px">信息披露</router-link>
        <a href="https://hz-v7.ntalker.com/downt/t2d/chat.php?v=2018.01.31&siteid=kf_10152&settingid=kf_10152_1518147916779&baseuri=https%3A%2F%2Fdl.ntalker.com%2Fjs%2Fxn6%2F&mobile=1&ref=https%3A%2F%2Fwww.uf-club.com%2Fm%2FhomeInit.do&tit=%E8%81%94%E9%87%91%E6%89%80%E5%AE%98%E7%BD%91-%E9%A3%8E%E6%8A%95%252B%E4%B8%8A%E5%B8%82%E7%B3%BB%E8%83%8C%E6%99%AF+%E5%AE%89%E5%85%A8%E5%8F%AF%E9%9D%A0%E7%9A%84%E4%BA%92%E8%81%94%E7%BD%91%E9%87%91%E8%9E%8D%E5%B9%B3%E5%8F%B0&iframechat=0&header=1&rnd=1523848342015">在线客服</a>
      </div>
    </transition>
    <div class="screen_cover" v-if="menuShow" @click="menuShow=!menuShow" @touchmove.prevent></div>
    <mswiper></mswiper>
    <div class="home-membership-report">
      <ul>
        <li>
          <img src="./instroduce_power_01.png" alt="">
          <p>已加入会员</p>
          <p><span class="num">594463</span>人</p>
        </li>
        <li>
          <img src="./instroduce_power_02.png" alt="">
          <p>累计为会员赚取</p>
          <p><span class="num">1</span>亿<span class="num">594463</span>万<span class="num">594463</span>元</p>
        </li>
        <li>
          <img src="./instroduce_power_03.png" alt="">
          <p>平台安全运营</p>
          <p><span class="num">4</span>年<span class="num">163</span>天</p>
        </li>
      </ul>
    </div>
    <investment-card v-for="(item,index) in cardTitle" :key="index" :cardTitle="item" :investIndex='String(index)'></investment-card>
    <div class="home-Other-side">
      <a href="https://www.uf-club.com/index.do">桌面版</a>
      <a>下载客户端</a>
    </div>
    <foot-guide></foot-guide>
  </div>
  
</template>

<script type="text/ecmascript-6">
import footGuide from '@/components/footer/footGuide.vue'
import mheader from '@/components/header/header.vue'
import mswiper from '@/components/common/mswiper/mswiper.vue'
import investmentCard from '@/components/common/investmentCard/investmentCard.vue'
import {getdata, jq_getdata} from '@/server/getData.js'

export default {
  data () {   
    return {
      menuShow:false,
      cardTitle:['散标专区','月月升','联金定投'],
    };
  },
  mounted(){      

    // jq_getdata().then(res => {
    //   console.log(res);
    // })
    
  },
  methods:{
    //点击图标刷新页面
    reload(){
        window.location.reload();
    }
  },   
  components: {
    footGuide,
    mswiper,
    mheader,
    investmentCard
  },
}

</script>
<style lang='less' scoped>

  .menu-fade-enter-active, .menu-fade-leave-active {
    transition: .5s;
    transform: translateX(0);
  }
  .menu-fade-enter, .menu-fade-leave-active {
    transform: translateX(100%);
  }

  .home {
    box-sizing:border-box; 
    background: #f4f4f4;
    padding-top: 0.8rem;
    padding-bottom: 0.87rem;
    min-height: 100%;
    width: 100%;
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
  .head_logo {
    width: 4.84rem;
    height: 0.59rem;
    background-image: url('./ljs_app_logo2.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 50%;
    left:0.22rem;
    transform: translateY(-50%);
  }
  .head_memu {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right:0.22rem;
    font-size: 18px;
    color: #fff;
  }

  .index_more_icon {
    position: fixed;
    right: 0px;
    top: 0.75rem;
    background: #fff; 
    width: 100%;
    display: none;
    padding-top: 0.04rem;
    padding-bottom: 0.08rem;
    z-index: 999;
    >a {
      display: block;
      width: 100%;
      font-size: 0.18rem;
      color: #484848;
      height: 0.8rem;
      line-height: 0.8rem;
      text-align: center;
    }
}
.home-membership-report {
  height: 2rem;
  margin-bottom: 0.2rem;
  background: #ffffff;
  ul {
    width: 100%;
    height: 100%;
    display: block;
    display: flex;
    color: #999;
    text-align: center;
    li {
      display: block;
      flex: 1;
      >img {
        display: block;
        height: 0.68rem;
        width: 0.68rem;
        margin: 0.3rem auto 0.12rem;
      }
      >p:nth-child(2){
        font-size: 0.16rem;
        margin-bottom: 0.16rem;
      }
      >p:nth-child(3){
        font-size: 0.23rem;
      }
      .num {
        color: #fe9a15;
      }
    }
  }
}
.home-Other-side {
  display: block;
  display: flex;
  height: 0.75rem;
  padding: 0.05rem 0;
  line-height: 0.8rem;
  text-align: center;
  font-size: 0.22rem;
  color: #fe9a15;
  background: #fff;
  >a {
    display: block;
    flex: 1;
    color: #fe9a15;
  }
  >a:nth-child(1) {
    border-right: 1px solid #F4F4F4;
  }
}
</style>