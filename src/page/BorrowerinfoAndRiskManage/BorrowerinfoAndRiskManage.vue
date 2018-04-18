<template>
  <div class="BorrowerinfoAndRiskManage">
    <mheader headTitle='标的详情' :goBack="true"></mheader>
    <div class="BAR-title">
      <div :class="{'redBorder':Borrowerinfo}" @click='Borrowerinfo=true'>借款信息</div>
      <div :class="{'redBorder':!Borrowerinfo}" @click='Borrowerinfo=false'>风险管理</div>
    </div>
    <login-interception v-if='!userInfo'></login-interception>
    <section class="Borrowerinfo tabConten" v-if="Borrowerinfo&&userInfo">
      <div class="title">
        <h3 class="borderBottom-1px">基本信息</h3>
      </div>
      <ul>
        <li>
          <div>性别</div>
          <div>男</div>
        </li>
        <li>
          <div>年龄</div>
          <div>39</div>
        </li>
        <li>
          <div>身份证</div>
          <div>362************033</div>
        </li>
        <li>
          <div>学历</div>
          <div>本科及以上</div>
        </li>
        <li>
          <div>婚姻状况</div>
          <div>已婚</div>
        </li>
        <li>
          <div>子女状况</div>
          <div>有</div>
        </li>
      </ul>
      <div class="title">
        <h3 class="borderBottom-1px">资产信息</h3>
      </div>
      <ul>
        <li>
          <div>房产</div>
          <div>无</div>
        </li>
        <li>
          <div>车产</div>
          <div>无</div>
        </li>
        <li>
          <div>月收入水平</div>
          <div>10000</div>
        </li>
        <li>
          <div>其他信用贷款</div>
          <div>有</div>
        </li>
      </ul>
      <div class="title">
        <h3 class="borderBottom-1px">工作信息</h3>
      </div>
      <ul>
        <li>
          <div>职位</div>
          <div>员工</div>
        </li>
        <li>
          <div>工作城市</div>
          <div>深圳</div>
        </li>
        <li>
          <div>工作年限</div>
          <div>1</div>
        </li>
        <li>
          <div>公司行业</div>
          <div></div>
        </li>
        <li>
          <div>公司性质</div>
          <div>其他</div>
        </li>
        <li>
          <div>公司规模</div>
          <div>50-100人</div>
        </li>
      </ul>
      <div class="title">
        <h3 class="borderBottom-1px">借款信息</h3>
      </div>
      <ul>
        <li>
          <div>融资次数</div>
          <div>1</div>
        </li>
        <li>
          <div>融资总额</div>
          <div>109641</div>
        </li>
        <li>
          <div>逾期期数</div>
          <div>0</div>
        </li>
        <li>
          <div>当前逾期金额</div>
          <div>0</div>
        </li>
        <li>
          <div>信用等级</div>
          <div>B</div>
        </li>
      </ul>
    </section>
    <section class="RiskManage tabConten" v-if="!Borrowerinfo&&userInfo">
      <div class="title">
        <h3 class="borderBottom-1px">信息认证</h3>
      </div>
      <p>该信息由<span>赫美微贷</span>在<span>2017年07月17日</span><label>审核通过</label></p>
      <div class="info-identification-content">
        <div><img src="./hmwd_logo.jpg" alt="赫美微贷"></div>
        <div>
          <ul>
            <li><span><i class="iconfont icon-shenfenxinxi"></i>身份信息</span><span><i class="iconfont icon-renzheng"></i>认证通过</span></li>
            <li><span><i class="iconfont icon-work"></i>工作证明</span><span><i class="iconfont icon-renzheng"></i>认证通过</span></li>
            <li><span><i class="iconfont icon-xinyongqia1"></i>信用报告</span><span><i class="iconfont icon-renzheng"></i>认证通过</span></li>
            <li><span><i class="iconfont icon-qitashouru"></i>收入证明</span><span><i class="iconfont icon-renzheng"></i>认证通过</span></li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">

import mheader from '@/components/header/header.vue'
import loginInterception from '@/components/common/loginInterception/loginInterception.vue'
import {mapState} from 'vuex'

export default {
  data () {
    return {
      Borrowerinfo:this.$route.query.Risk?false:true, //通过入口附带参数来判断当前应展示的内容
    };
  },
  computed: {
    ...mapState([
        'userInfo'
    ]),
  },
  components: {
    mheader,
    loginInterception
  }
}

</script>

<style lang="less" scoped>
.BorrowerinfoAndRiskManage {
  min-height: 100%;
  width: 100%;
  box-sizing:border-box; 
  background: #f4f4f4;
  padding-top: 0.8rem;
  padding-bottom: 0.4rem;
  .BAR-title {
    display: block;
    display: flex;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.3rem;
    color: #929292;
    background: #fff;
    >div {
      display: block;
      flex: 1;
      text-align: center;
    }
    >div.redBorder {
      box-sizing: border-box;
      color: #e25353;
      border-bottom: 1px solid #e25353; 
    }
  }
}

.tabConten {
  background: #fff;
  margin:0.15rem;
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
    text-indent: 2em;
    font-size: 0.24rem;
    padding:0.1rem 0.24rem 0.2rem;
    line-height: 0.3rem;
    color: #666;
    >span {
      color: #333;
    }
    >label {
      color: #63b97c;
    }
  }
  .info-identification-content{
    display: block;
    display: flex;
    font-size: 0.2rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    div:nth-child(1){
      width: 2rem;
      img {
        display: block;
        margin: 0.2rem auto 0;
        width: 1.51rem;
      }
    }
    div:nth-child(2){
      flex: 1;
      line-height: 0.5rem;
      i {
        font-size: 0.3rem;
        margin-right: 0.15rem;
      }
      li span:nth-child(1) {
        margin-right: 0.5rem;
        color: #999;
      }
      li span:nth-child(2) i{
        color: #63b97c; 
      }
    }
  }
}
</style>