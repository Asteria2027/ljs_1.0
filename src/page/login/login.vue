<template>
  <div class="login">
    <mheader headTitle='登录' :goBack="true"></mheader>
    <div class='login-input'>
      <div class="borderBottom-1px">
        <input @keyup.13="enter" type="text" placeholder="手机/邮箱/用户名" v-model="user.name" autocomplete="off" onkeyup="this.value=this.value.replace(/^ +| +$/g,'')" maxlength="25">
      </div>
      <div>
        <input @keyup.13="enter" type="password" placeholder="密码" maxlength="25" v-model="user.pwd" autocomplete="off" onpaste="return false" onkeyup="this.value=this.value.replace(/^ +| +$/g,'')">
      </div>
    </div>
    <div class="login-enter" @click='enter'>登录</div>
    <p class="forgetpwd"><a>忘记密码</a></p>
    <div class="register"><a>注册送668元红包</a></div>
    <window-tips ref='windowTips'></window-tips>
  </div>
</template>

<script type="text/ecmascript-6">

import mheader from '@/components/header/header.vue'
import windowTips from '@/components/common/windowTips/windowTips.vue'
import {mapMutations} from 'vuex'

export default {
  data () {
    return {
      user:{name:'',pwd:''}
    };
  },
  methods:{
    ...mapMutations([
        'RECORD_USERINFO',
    ]),
    enter(){
      if(this.user.name==''){
        this.$refs.windowTips.toast('请输入账号');
        return
      }
      if(this.user.pwd==''){
        this.$refs.windowTips.toast('请输入密码');
        return
      }
      this.RECORD_USERINFO(JSON.stringify(this.user));
      this.$router.go(-1);
    }
  },
  components:{
    mheader,
    windowTips
  }
}

</script>

<style lang='less' scoped>

.login {
  box-sizing:border-box; 
  background: #f4f4f4;
  padding-top: 0.8rem;
  min-height: 100%;
  width: 100%;
  .login-input {
    margin-top: 0.24rem;
    background: #fff;
    >div {
      height: 0.8rem;
      margin-left: 0.24rem;
      line-height: 0.8rem;
      font-size: 0.24rem;
      input {
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
  .login-enter {
    height: 0.76rem;
    line-height: 0.76rem;
    font-size: 0.3rem;
    text-align: center;
    color: #ffffff;
    margin: 0.5rem 0.24rem 0.3rem;
    border-radius: 0.76rem;
    background: #ff654f;
  }
  .forgetpwd {
    text-align: right;
    padding-right: 0.24rem;
    font-size: 0.24rem;
    a {
      color: #4a97d2;
    }
  }
  .register {
    padding: 0.45rem 0.24rem 0;
    text-align: center;
    a {
      display: block;
      background: #fffbed;
      padding: 0.42rem 0;
      color: #ff5a21;
      font-size: 0.24rem;
      border: 0.02rem solid #ffe0d0;
      border-radius: 0.1rem;
    }
  }
}

</style>