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
            <p>3个月</p> 
            <p>期限</p>
          </li>
          <li>
            <p>200,000元</p>
            <p>借款金额</p>
            </li> 
          <li>
            <p>一次性还本付息</p>
            <p>还款方式</p>
          </li>
        </ul>
      </div>
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
}
</style>