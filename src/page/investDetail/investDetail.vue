<template>
  <div class="investDetail">
    <mheader headTitle='新手专享' :goBack="true"></mheader>
    <invest-detail-card></invest-detail-card>
    <div class="other-detail-list">
      <div class="borderBottom-1px" @click="go('tenderRecord')">
        <span>投资记录</span>
        <span>36人<i class="iconfont icon-more"></i></span>
      </div>
      <div @click="go('projectDetails')">
        <span>项目信息</span>
        <span><i class="iconfont icon-more"></i></span>
      </div>
      <div class="borderBottom-1px" @click="go('BorrowerinfoAndRiskManage')">
        <span>借款人信息</span>
        <span><i class="iconfont icon-more"></i></span>
      </div>
      <div @click="go('BorrowerinfoAndRiskManage?Risk=1')">
        <span>风险管理</span>
        <span><i class="iconfont icon-more"></i></span>
      </div>
    </div>
    <div class="investDetail-supplement">
      <p>新用户及2017年11月28日之前在普通版和存管版从未投资过的用户可以获得10000元额度，投资过的老用户可以获得20000元额度，可多笔投资。</p>
      <a>邀请好友来投资>></a>
    </div>
    <div class="gotoLogin" v-if='!this.userInfo'>
      <router-link tag='div' to='/login'>登录</router-link>
      <p>去注册>></p>
    </div>
  </div>  
</template>

<script type="text/ecmascript-6">
import mheader from '@/components/header/header.vue'
import investDetailCard from '../../components/common/investmentDetailCard/investmentDetailCard.vue'
import {mapState} from 'vuex'
    
export default {
  data () {
    return {
    };
  },
  computed: {
    ...mapState([
      'userInfo'
    ]),
  },
  methods: {
    go(path){
      this.$router.push({path:path});
    }
  },
  components:{
    mheader,
    investDetailCard
  }
}   
</script>
<style lang='less' scoped>
.investDetail {
  min-height: 100%;
  width: 100%;
  box-sizing:border-box; 
  background: #f4f4f4;
  padding-top: 0.8rem;
  padding-bottom: 1.97rem;
}
.other-detail-list {
  margin-top: 20px;
  background: #ffffff;
  >div {
    display: block;
    display: flex;
    height: 0.88rem;
    line-height: 0.88rem;
    span:nth-child(1){
      display: block;
      padding-left: 0.24rem;
      font-size: 0.24rem;
      color: #222;
    }
    span:nth-child(2){
      display: block;
      padding-right: 0.24rem;
      flex: 1;
      font-size: 0.22rem;
      color: #999;
      text-align: right;
      i {
        padding-left: 0.3rem;
        font-size: 0.22rem;
      }
    }
  }
}
.investDetail-supplement {
  margin-top: 0.24rem;
  padding: 0 0.24rem;
  font-size: 0.2rem;
  line-height: 0.32rem;
  color: #999;
  a:nth-child(2){
    color: #fc9d14;
  }
}
.gotoLogin {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 1.97rem;
  width: 100%;
  text-align: center;
  background: #ffffff;
  overflow: hidden;
  >div {
    height: 0.76rem;
    line-height: 0.76rem;
    font-size: 0.3rem;
    color: #ffffff;
    margin:0.5rem 0.24rem 0.2rem;
    border-radius: 0.76rem;
    background: #ff654f;
  }
  >p {
    font-size: 0.2rem;
    color: #ff654f;
  }
}
</style>