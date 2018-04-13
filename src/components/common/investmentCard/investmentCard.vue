<!-- 推荐投资卡片 -->
<template>
  <div class="investmentCard">
    <div class="home_list_title" @click="gotoAddress(investIndex)" v-if='investIndex'>
      <div class="borderBottom-1px">
          <span>{{cardTitle}}</span>  
          <i class="num">(1)</i>
      </div>
      <div class="borderBottom-1px">
          <i>100元起投 期限短</i>
          <i class="iconfont icon-more"></i>
      </div>
    </div>
    <div class="home_list-content" v-if='investIndex' @click="gotoDetail">
      <h3>深圳杨**女士用于耐用消费品</h3>
      <ul>
        <li class="annualization-rate">
          <div><span >12.93</span><span>%</span></div>
          <p>约定年化</p>
        </li>
        <li class="remaining-period">
          <div><span>32</span><span>个月</span></div>
          <p>剩余期限</p>
        </li>
        <li class="transfer-amount">
          <div>6888</div>
          <p>转让金额</p>
        </li>
        <li class="target-progress">
          <div class="pro_box">
            <p class="pro_bg"></p>
            <p class="pro_bar"></p>
          </div>
          <i>31.81%</i>
        </li>
      </ul>
    </div>

    <div class="invest_list-content" v-if='!investIndex' @click="gotoDetail">
      <h3>深圳杨**女士用于耐用消费品</h3>
      <ul>
        <li class="annualization-rate borderTop-1px">
          <div><span >12.93</span><span>%</span></div>
          <p>约定年化</p>
        </li>
        <li class="period borderTop-1px">
          <div><span>32</span><span>个月</span></div>
          <p>期限</p>
        </li>
        <li class="the-date-of-settlement borderTop-1px">
          <div>6888</div>
          <p>结息日</p>
        </li>
        <li class="transfer-amount borderTop-1px">
          <div>6888</div>
          <p>转让金额</p>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    cardTitle: {
      type: String,
      default: ''
    },
    investIndex: {
      type: String,
      default: ''
    }
  },
  methods:{
    gotoAddress(Index){
      if(Index){
        this.$router.push({path:'/invest',query:{index:Index}});
        return;
      }
      this.$router.push({path:'/invest'});
    },
    gotoDetail(){
      this.$router.push({path:'/investDetail'});
    }
  }
}
</script>
<style lang='less' scoped>
.investmentCard {
  background: #fff;
  .home_list_title {
    display: block;
    display: flex;
    height: 0.5rem;
    padding-top: 0.2rem;
    width: 100%;
    >:nth-child(1){
      display: block;
      flex: 1;
      text-align: left;
      margin-left: 0.24rem;
      display: block;
      font-size: 0.24rem;
      span {
        font-weight: 700;
        color: #222222;  
      } 
    }
    >:nth-child(2){
      display: block;
      flex: 1;
      font-size: 0.21rem;
      text-align: right;
      margin-right: 0.15rem;
      display: block;
      font-size: 0.21rem;
      color: #999999;
      i {
        font-size: 0.21rem;
      }
    }
  }
  .home_list-content {
    margin-bottom: 0.2rem;
    width: 100%;
    overflow: hidden;
    >h3 {
      color: #7a7a7a;
      font-size: 0.2rem;
      margin: 0.3rem 0 0.26rem 0.24rem;
    }
    >ul {
      display: block;
      display: flex;
      font-size: 0.18rem;
      li {
        display: block;
        flex: 1;
        >div {
          margin-bottom:0.3rem;
        }
        >p {
          font-size: 0.18rem;
          color: #999999;
          padding-left: 0.15rem;
          padding-bottom: 0.3rem;
        }
      }
    }
    .annualization-rate {
      padding-left: 0.24rem;
      >div {
        color: #fe6246;
        >span:nth-child(1){
          font-size:0.42rem; 
        }
        >span:nth-child(2){
          font-size:0.2rem; 
        }
      }
    }
    .remaining-period {
      >div {
        color: #222222;
        >span:nth-child(1){
          font-size:0.42rem; 
        }
        >span:nth-child(2){
          font-size:0.16rem; 
        }
      }
    }
    .transfer-amount {
      >div {
        color: #222222;
        font-size:0.42rem; 
      }
    }
    .target-progress {
      height: 0.08rem;
      padding-top: 0.15rem;
      padding-right: 0.24rem;
      position: relative;
      .pro_box {
        position: relative;
        width: 0.72rem;
      }
      .pro_bg {
        width: 100%;
        height: 0.08rem;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 0.08rem;
        background: #f4f4f4;
      }
      .pro_bar {
        background: #f68181;
        position: absolute;
        left: 0;
        top: 0;
        height: 0.08rem;
        width: 50%;
        border-radius: 0.08rem;
      }
      >i {
        position: absolute;
        left: 0.8rem;
        top: 0.11rem;
      }
    }
  }
  
  .invest_list-content {
    overflow: hidden;
    margin-bottom: 0.2rem;
    width: 100%;
    >h3 {
      display: block;
      height: 0.7rem;
      line-height: 0.7rem;
      color: #7a7a7a;
      font-size: 0.2rem;
      margin-left: 0.24rem;
    }
    >ul {
      display: block;
      width: 100%;
      display: flex;
      font-size: 0.18rem;
      li {
        display: block;
        padding-top: 0.3rem;
        flex: 1;
        >div {
          margin-bottom:0.3rem;
        }
        >p {
          font-size: 0.18rem;
          color: #999999;
          padding-left: 0.15rem;
          padding-bottom: 0.3rem;
        }
      }
    }
    .annualization-rate {
      margin-left: 0.24rem;
      >div {
        color: #fe6246;
        >span:nth-child(1){
          font-size:0.42rem; 
        }
        >span:nth-child(2){
          font-size:0.2rem; 
        }
      }
    }
    .period {
      >div {
        color: #222222;
        >span:nth-child(1){
          font-size:0.42rem; 
        }
        >span:nth-child(2){
          font-size:0.16rem; 
        }
      }
    }
    .transfer-amount,
    .the-date-of-settlement {
      >div {
        color: #222222;
        font-size:0.42rem; 
      }
    }
    .transfer-amount {
      margin-right: 0.24rem;
    }
  }
}

</style>