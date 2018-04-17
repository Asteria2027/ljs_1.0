<template>
  <div class="account">
    <div class="user-info">
      <span class="exit">安全退出</span>
      <div class="user-assets">
        <img src="./avatar.jpeg" alt="">
        <p>总资产 (元) <i class="iconfont icon-more"></i> </p>
        <p class="account-money">100008.8</p>
      </div>
      <div class="user-assets-detail">
        <ul>
          <li>
            <p>可用余额(元)</p> 
            <p>1288866.88</p>
          </li>
          <li>
            <p>累计收益(元)</p>
            <p>88666.66</p>
            </li> 
          <li>
            <p>待收本金(元)</p>
            <p>106.29</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="manage-money">
      <div><i class="iconfont icon-tixian"></i>提现</div>
      <div><i class="iconfont icon-chongzhi1"></i>充值</div>
    </div>
    <div class="account-list">
      <ul>
        <li>
          <div><i class="iconfont icon-chongzhi"></i></div>
          <div>我的投资</div>
          <div>两笔持有中<i data-v-d997418a="" class="iconfont icon-more"></i></div>
        </li>
        <li>
          <div><i class="iconfont icon-richeng1"></i></div>
          <div>回款日程</div>
          <div><i data-v-d997418a="" class="iconfont icon-more"></i></div>
        </li>
        <li>
          <div><i class="iconfont icon-richeng"></i></div>
          <div>交易明细</div>
          <div><i data-v-d997418a="" class="iconfont icon-more"></i></div>
        </li>
      </ul>
      <ul>
        <li>
          <div><i class="iconfont icon-yaoqinghaoyou"></i></div>
          <div>邀请好友</div>
          <div>邀请有奖哦<i data-v-d997418a="" class="iconfont icon-more"></i></div>
        </li>
        <li>
          <div><i class="iconfont icon-iconfontzhizuobiaozhun27"></i></div>
          <div>我的福利</div>
          <div><i data-v-d997418a="" class="iconfont icon-more"></i></div>
        </li>
        <li>
          <div><i class="iconfont icon-anquan"></i></div>
          <div>安全中心</div>
          <div><i data-v-d997418a="" class="iconfont icon-more"></i></div>
        </li>
      </ul>
      <ul>
        <li>
          <div><i class="iconfont icon-zidongtoubiao"></i></div>
          <div>自动投标</div>
          <div><i data-v-d997418a="" class="iconfont icon-more"></i></div>
        </li>
      </ul>
    </div>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
import footGuide from "../../components/footer/footGuide.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    footGuide
  },
  computed: {
    ...mapState(["address"])
  }
};
</script>
<style lang="less" scoped>
.account {
  box-sizing: border-box;
  background: #f4f4f4;
  padding-bottom: 0.87rem;
  min-height: 100%;
  width: 100%;
  .user-info {
    position: relative;
    height: 4.44rem;
    width: 100%;
    overflow: hidden;
    background: #f4775f;
    .exit {
      position: absolute;
      top: 0.3rem;
      left: 0.24rem;
      font-size: 0.26rem;
      color: #fee7df;
    }
    .user-assets {
      > img {
        display: block;
        width: 1.18rem;
        height: 1.18rem;
        margin: 0.46rem auto 0.22rem;
        border-radius: 50%;
      }
      > p:nth-child(2) {
        font-size: 0.18rem;
        color: #ffffff;
        text-align: center;
        margin-bottom: 0.26rem;
        i {
          font-size: 0.18rem;
        }
      }
      .account-money {
        font-size: 0.6rem;
        color: #ffffff;
        text-align: center;
      }
    }
    .user-assets-detail {
      ul {
        width: 100%;
        height: 0.74rem;
        margin-top: 0.6rem;
        margin-bottom: 0.26rem;
        display: block;
        display: flex;
        color: #fff;
        li {
          display: block;
          flex: 1;
          text-align: center;
          border-right: 1px solid rgba(0, 0, 0, 0.2);
          p:nth-child(1) {
            font-size: 0.15rem;
            margin-bottom: 0.16rem;
          }
          p:nth-child(2) {
            font-size: 0.26rem;
          }
        }
      }
    }
  }

  .manage-money {
    height: 0.9rem;
    width: 100%;
    font-size:0.24rem;
    color: #222;
    display: block;
    display: flex;
    background: #fff;
    overflow: hidden;
    div {
      display: block;
      flex: 1;
      text-align: center;
      height: 0.7rem;
      margin: 0.1rem 0;
      line-height: 0.7rem;
      i {
        line-height: 0.7rem;
        font-size:0.26rem;
        margin-right: 0.05rem;
      }
    }
    div:nth-child(2){
      color: #ff6f4e;
      border-left: 1px solid #f4f4f4;
    }
  }

  .account-list {
    overflow: hidden;
    margin-bottom: 0.2rem;
    ul{
      margin-top: 0.2rem;
      width: 100%;
      background: #fff;
      li {
        display: block;
        display: flex;
        height: 0.9rem;
        line-height: 0.9rem;
        font-size: 0.24rem;
        color: #222;
        div:nth-child(1) {
          width: 0.85rem;
          height: 0.9rem;
          text-align: center;
          i {
            font-size: 0.24rem;
            line-height: 0.9rem;
            color: #999;
          }
        }
        div:nth-child(2) {
          border-bottom: 1px solid #f4f4f4;
        }
        div:nth-child(3){
          display: block;
          flex: 1;
          text-align: right;
          color: #999;
          border-bottom: 1px solid #f4f4f4;
          i {
            font-size: 0.24rem;
            line-height: 0.9rem;
            padding-right: 0.24rem;
            padding-left: 0.15rem;
            color: #999;
          }
        }
      }
    }
    ul:nth-child(2){
      li:nth-child(1){
        div:nth-child(3){
          color: #ff6f4e;
        }
      }
    }
  }
}
</style>