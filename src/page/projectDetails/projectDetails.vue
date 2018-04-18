<template>
  <div class="projectDetails">
  <mheader headTitle='项目详情' :goBack="true"></mheader>
  <login-interception v-if='!userInfo'></login-interception>
    <div class="loan-information infomation" v-if='userInfo'>
      <div class="title">
        <h3 class="borderBottom-1px">借款信息</h3>
      </div>
      <ul>
        <li>
          <div>借款金额</div>
          <div>200,000元</div>
        </li>
        <li>
          <div>借款期限</div>
          <div>3个月</div>
        </li>
        <li>
          <div>历史年化</div>
          <div>9.5%</div>
        </li>
        <li>
          <div>还款方式</div>
          <div>一次性还本付息</div>
        </li>
      </ul>
    </div>
    <div class="corporate-information infomation" v-if='userInfo'>
      <div class="title">
        <h3 class="borderBottom-1px">企业信息</h3>
      </div>
      <ul>
        <li>
          <div>企业名称</div>
          <div>******有限公司</div>
        </li>
        <li>
          <div>注册资本</div>
          <div>120万</div>
        </li>
      </ul>
      <p>该借款企业主要经营普通种植材料：城镇绿化苗种植、批零兼营；园林器具批发、零售；花卉租赁；蔬菜种植、销售；果树（不含种苗）种植；水果、初级食用农产品批发、零售；花卉（不含种苗）种植、销售；盆景（不含种苗）种植、销售；农作物种植、销售；粮油批发、零售。<br/>普通种植材料：城镇绿化苗种植、批零兼营；园林器具批发、零售；花卉租赁；蔬菜种植、销售；果树（不含种苗）种植；水果、初级食用农产品批发、零售；花卉（不含种苗）种植、销售；盆景（不含种苗）种植、销售；农作物种植、销售；粮油批发、零售。</p>
    </div>
    <div class="infomation" v-if='userInfo'>
      <div class="title">
        <h3 class="borderBottom-1px">借款用途</h3>
      </div>
      <p>用于企业发展</p>
    </div>
    <div class="infomation" v-if='userInfo'>
      <div class="title">
        <h3 class="borderBottom-1px">还款来源</h3>
      </div>
      <p>还款来源为企业盈利</p>
    </div>
    <div class="screen_cover" v-if="fullPicShow" @click="fullPicShow=!fullPicShow"></div>
    <div class="picture-information infomation" v-if='userInfo'>
      <div class="title">
        <h3 class="borderBottom-1px">图片资料</h3>
      </div>
      <!-- Swiper1 -->
      <div class="swiper-container pic-info-content">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in pics" :key="index" @click='goFullPic(index)'>
            <img :src="item.imgSrc" alt="">
          </div>
        </div>
      </div>
      <!-- Swiper2 -->
      <div class="swiper-container pic-info-content-fullScreen" v-show="fullPicShow">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in pics" :key="index">
            <img :src="item.imgSrc" alt="">
          </div>
        </div>
        <div class="swiper-pagination fullScreen-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

import mheader from '@/components/header/header.vue'
import Swiper from 'swiper'
import '@/style/swiper-4.2.2.min.css'
import loginInterception from '@/components/common/loginInterception/loginInterception.vue'
import {mapState} from 'vuex'

export default {
  data () {
    return {
      pics:[
        {
          imgSrc:require('./projectDetails_1.jpg')
        },
        {
          imgSrc:require('./projectDetails_2.jpg')
        },
        {
          imgSrc:require('./projectDetails_3.jpg')
        },
        {
          imgSrc:require('./projectDetails_4.jpg')
        },
        {
          imgSrc:require('./projectDetails_5.jpg')
        }
      ],
      fullPicShow:false
    };
  },
  mounted(){
    this.$nextTick(()=>{
      var swiper1 = new Swiper('.pic-info-content',{
        speed: 300,
        freeMode : true,
        freeModeMomentum : true,
        slidesPerView:3,
        centeredSlides: false,
        freeModeSticky :false,
        spaceBetween: 10,
        observer:true,
        observeParents:true
      });
    })
  },
  methods:{
    goFullPic(index){
      this.fullPicShow = true;
      var self = this;
      setTimeout(() => {
        var mySwiper2 =  new Swiper ('.pic-info-content-fullScreen', {
          loop: true,
          pagination: {
            el: '.fullScreen-pagination',
            type:'fraction'
          },
          on:{
            doubleTap: function(event){
              self.fullPicShow = false;
            }
          },
        });
        mySwiper2.slideTo(index+1, 1000, false);
      }, 20);
    }
  },
  computed: {
    ...mapState([
        'userInfo'
    ]),
  },
  components:{
    mheader,
    loginInterception
  }
}

</script>
<style lang='less' scoped>
.screen_cover {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 998;
}
.projectDetails {
  min-height: 100%;
  width: 100%;
  box-sizing:border-box; 
  background: #f4f4f4;
  padding-top: 0.8rem;
}
.projectDetails .infomation {
  margin-bottom: 0.2rem;
  background: #fff;
  >.title {
    >h3 {
      font-size: 0.25rem;
      color: #2d2d2d;
      margin:0 0.24rem;
      padding:0.2rem 0;
    }
  }
  >ul {
    font-size: 0.2rem;
    padding-left: 0.24rem;
    >li {
      display: block;
      display: flex;
      height: 0.7rem;
      line-height: 0.7rem;
      >div {
        display: block;
        flex: 1;
      }
      >div:nth-child(1){
        color: #666;
      }
    }
  }
  >p {
    font-size: 0.18rem;
    padding:0.1rem 0.24rem 0.2rem;
    line-height: 0.3rem;
    color: #666;
  }
}
.projectDetails .pic-info-content {
  height: 1.5rem;
  width: 100%;
  >.swiper-wrapper {
    height: 100%;
    >.swiper-slide {
      height: 100%;
      >img {
        display: block;
        height: 100%;
        width: 100%;
      }
    }
  }
}
.projectDetails .pic-info-content-fullScreen {
  position: fixed;
  z-index: 1000;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: auto;
  width: 100%;
  >.swiper-wrapper {
    height: auto;
    >.swiper-slide {
      width: 100%;
      margin: auto 0;
      overflow: hidden;
      >img {
        display: block;
        width: 100%;
        height: auto;
      }
    }
  }
  .fullScreen-pagination {
    font-size: 0.3rem;
    color: #fff;
  }
}
</style>