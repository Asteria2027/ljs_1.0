<template>
  <div class="investDetail">
    <mheader headTitle='新手专享' :goBack="true"></mheader>
    <invest-detail-card></invest-detail-card>
    <div class="other-detail-list">
      <div class="borderBottom-1px" @click="go('tenderRecord')">
        <span>投资记录</span>
        <span v-if='userInfo'>36人<i class="iconfont icon-more"></i></span>
        <span v-else><i class="iconfont icon-more"></i></span>
      </div>
      <div @click="go('projectDetails')" class="borderBottom-1px">
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
    <div class="gotoLogin" v-if='!userInfo'>
      <router-link tag='div' to='/login'>登录</router-link>
      <p>去注册>></p>
    </div>
    <div class="investment" v-if='userInfo' @click='investInputShow=!investInputShow'>
      <div>立即投资</div>
    </div>
    <div class="screen_cover" v-if="investInputShow" @click="investInputShow=!investInputShow" @touchmove.prevent></div>
    <transition name="investment-fade" mode="out-in">
      <div class="investment-input" v-if='investInputShow'>
        <ul class="account-money">
          <li>
            <div>账户可用余额: <span class="money">0</span>元</div>
            <div>充值</div>
          </li>
          <li>
            <div>标的可投金额: <span class="money">1000</span>元</div>
          </li>
        </ul>
        <ul class="account-transaction">
          <li>
            <div>投标金额: </div>
            <div>
              <input type="number" placeholder="起投金额100，以10的整数倍递增" maxlength="11" autofocus="autofocus">
            </div>
          </li>
          <li>
            <div>交易密码:</div>
            <div>
              <input type="password" maxlength="20" placeholder="请输入交易密码" autocomplete="off">
            </div>
          </li>
        </ul>
        <p class="agree" @click="agree=!agree">
          <i class="iconfont" :class="{'icon-selected':agree,'icon-weixuanzhongyuanquan':!agree}"></i>
          我已阅读并同意
        </p>
        <p class="welfare">福利抵扣: <span>￥0</span>&nbsp; 实际支付: <span>￥0</span></p>
        <div class="investment-transaction">
          立即投资
        </div>
      </div>
    </transition>
  </div>  
</template>

<script type="text/ecmascript-6">
import mheader from '@/components/header/header.vue'
import investDetailCard from '../../components/common/investmentDetailCard/investmentDetailCard.vue'
import {mapState} from 'vuex'
    
export default {
  data () {
    return {
      investInputShow:false,
      agree:false
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

.investment-fade-enter-active, .investment-fade-leave-active {
    transition: .5s;
    transform: translateY(0);
}
.investment-fade-enter, .investment-fade-leave-active {
  transform: translateY(-200%);
}

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
.investment {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 1.5rem;
  width: 100%;
  text-align: center;
  background: #ffffff;
  overflow: hidden;
  >div {
    height: 0.76rem;
    line-height: 0.76rem;
    font-size: 0.3rem;
    color: #ffffff;
    margin:0.3rem 0.24rem 0.2rem;
    border-radius: 0.76rem;
    background: #ff654f;
  }
}
.investment-input {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #f4f4f4;
  z-index: 1002;
  .account-money {
    li {
      display: block;
      display: flex;
      padding: 0 0.24rem;
      font-size: 0.24rem;
      background: #fff;
      height: 0.8rem;
      line-height: 0.8rem;
      .money {
        color: #ff654f;
      }
      >div:nth-child(2) {
        display: block;
        flex: 1;
        text-align: right;
        color: #4a97d2;
        padding-right: 0.2rem;
      }
    }
  }
  .account-transaction {
    margin-top: 0.2rem;
    li {
      display: block;
      display: flex;
      padding: 0 0.24rem;
      font-size: 0.24rem;
      background: #fff;
      height: 0.8rem;
      line-height: 0.8rem;
      .money {
        color: #ff654f;
      }
      >div:nth-child(2) {
        display: block;
        flex: 1;
        text-align: right;
        color: #4a97d2;
        padding-right: 0.2rem;
        input {
          height: 100%;
          padding-left: 0.44rem;
          width: 100%;
        }
      }
    }
  }
  >p.agree {
    margin-top: 0.2rem;
    font-size: 0.24rem;
    padding-left: 0.24rem;
    i {
      font-size: 0.24rem;
      padding-right: 0.15rem;
      color: #ff654f;
    }
  }
  >p.welfare {
    margin-top: 0.2rem;
    font-size: 0.26rem;
    padding-left: 0.24rem;
    color: #8f8f94;
    text-align: center;
    span {
      color: #ff654f;
    }
  }
  .investment-transaction {
    height: 0.76rem;
    line-height: 0.76rem;
    font-size: 0.3rem;
    color: #ffffff;
    margin:0.3rem 0.24rem 0.2rem;
    border-radius: 0.76rem;
    text-align: center;
    background: #ff654f;
  }
}
.screen_cover {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1001;
}
</style>