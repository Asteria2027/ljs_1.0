<template>
  <div class="changePwd">
    <mheader headTitle='修改登录密码' :goBack="true"></mheader>
    <window-tips ref='windowTips'></window-tips>
    <div class="changePwd-input">
      <ul>
        <li>
          <label><i class="iconfont icon-icon--"></i></label>
          <div  class="borderBottom-1px">
            <input @keyup.13="enter" type="text" placeholder="请输入手机号码" autocomplete="off" onkeyup="this.value=this.value.replace(/^ +| +$/g,'')" maxlength="25">
          </div>
        </li>
        <li>
          <label><i class="iconfont icon-yanzhengma"></i></label>
          <div  class="borderBottom-1px">
            <input @keyup.13="enter" type="text" placeholder="请输入图形验证码" autocomplete="off" onkeyup="this.value=this.value.replace(/^ +| +$/g,'')" maxlength="4">
            <span><img src="http://www.uf-club.com/m/textCode.do?pageId=wapUserReg"></span>
          </div>
        </li>
        <li>
          <label><i class="iconfont icon-yanzhengma1"></i></label>
          <div  class="borderBottom-1px">
            <input @keyup.13="enter" type="text" placeholder="请输入手机验证码" autocomplete="off" onkeyup="this.value=this.value.replace(/^ +| +$/g,'')" maxlength="6">
            <span>立即获取</span>
          </div>
        </li>
        <li>
          <label><i class="iconfont icon-denglumima"></i></label>
          <div  class="borderBottom-1px">
            <input @keyup.13="enter" :type="showPwd?'text':'password'" placeholder="请输入新登录密码" autocomplete="off" onkeyup="this.value=this.value.replace(/^ +| +$/g,'')" maxlength="6">
            <span @click="showPwd=!showPwd">
              <i class="iconfont " :class="{'icon-in_zhengyan_fill':showPwd,'icon-biyanjing':!showPwd}"></i>
            </span>
          </div>
        </li>
      </ul>
    </div>
    <div class="changePwd-enter">提交</div>
  </div>
</template>

<script type="text/ecmascript-6">

import mheader from '@/components/header/header.vue'
import windowTips from '@/components/common/windowTips/windowTips.vue'

export default {
  data () {
    return {
      showPwd:false 
    };
  },
  components:{
    mheader,
    windowTips
  }
}

</script>
<style lang='less' scoped>
.changePwd {
  min-height: 100%;
  width: 100%;
  box-sizing:border-box; 
  background: #f4f4f4;
  padding-top: 0.8rem;
  .changePwd-input {
    margin-top: 0.24rem;
    background: #fff;
    li {
      display: block;
      display: flex;
      >label {
        display: block;
        width: 0.8rem;
        height: 100%;
        i {
          display: block;
          text-align: center;
          height: 0.8rem;
          line-height: 0.8rem;
          font-size: 0.4rem;
        }
      }
      >div {
        display: block;
        width: 100%;
        display: flex;
        height: 0.8rem;
        line-height: 0.8rem;
        font-size: 0.24rem;
        input {
          display: block;
          width: 100%;
          height: 100%;
        }
        span {
          display: block;
          height: 100%;
          width: 2.8rem;
          text-align: center;
          color: #ff654f;
          position: relative;
          img {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50% ,-50%);
          }
          i {
            color: #666;
          }
        }
      }
    }
  }
  .changePwd-enter {
    height: 0.76rem;
    line-height: 0.76rem;
    font-size: 0.3rem;
    text-align: center;
    color: #ffffff;
    margin: 0.5rem 0.24rem 0.3rem;
    border-radius: 0.76rem;
    background: #ff654f;
  }
}
</style>