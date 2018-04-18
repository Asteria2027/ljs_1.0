<template>
  <div class="tenderRecord">
    <mheader headTitle='投标记录' :goBack="true"></mheader>
    <login-interception v-if='!userInfo'></login-interception>
    <div class="tender-list-title" v-if='userInfo'>
      <span>投标人</span>
      <span>投标时间</span>
      <span>投标金额</span>
    </div>
    <div class="tender-list" v-if='userInfo'>
      <ul>
        <li v-for="(item,index) in list" :key="index" class="borderBottom-1px">
          <div>1***7</div>
          <div>2018-04-16 10:46:43</div>
          <div>¥1,200</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import mheader from '@/components/header/header.vue'
import loginInterception from '@/components/common/loginInterception/loginInterception.vue'
import {mapState} from 'vuex'

export default {
  data () {
    return {
      list:[1,2,3,4,5,6]
    };
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
  .tenderRecord {
    min-height: 100%;
    width: 100%;
    box-sizing:border-box; 
    background: #f4f4f4;
    padding-top: 0.8rem;
  }
  .tender-list-title {
    display: block;
    display: flex;
    height: 0.8rem;
    line-height: 0.8rem;
    font-size: 0.20rem;
    text-align: center;
    span {
      display: block;
      flex: 1;
      font-size: 0.20rem;
    }
  }
  .tender-list {
    ul>li {
      height: 0.8rem;
      line-height: 0.8rem;
      width: 100%;
      display: block;
      display: flex;
      text-align: center;
      background: #fff;
      div {
        display: block;
        flex: 1;
        font-size: 0.20rem;
      }
    }
  }
</style>