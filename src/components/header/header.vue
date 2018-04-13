<template>
   <header id='head_top'>
        <slot name='logo'></slot>
        <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
            <i class="iconfont icon-back"></i>
        </section>
        <section class="title_head omitted" v-if="headTitle">
            <span class="title_text">
              {{headTitle}}
              <i class="iconfont icon-moreunfold" v-if="!fold&&headlineArrow"></i>
              <i class="iconfont icon-less" v-if="fold&&headlineArrow"></i>
            </span>
        </section>
        <slot name="menu"></slot>
    </header>
</template>

<script type="text/ecmascript-6">
import {mapState, mapActions} from 'vuex'
    export default {
    	data(){
        return{

        }
      },
      props: {
        headTitle: {
          type:String,
          default:''
        },
        headlineArrow: {
          type:Boolean,
          default:false
        },
        fold: { // 箭头是否展开
          type:Boolean,
          default:false
        },
        goBack: {
          type:Boolean,
          default:false
        }
      }
    }
</script>
<style lang='less' scoped>
    #head_top{
      background-color: deepskyblue;
      background-image: linear-gradient(to right,#00C6FF,#0072FF);
      background:-webkit-linear-gradient(to right,#00C6FF,#0072FF);
      background: -moz-linear-gradient(to right,#00C6FF,#0072FF);
      background: -o-linear-gradient(to right,#00C6FF,#0072FF);
      position: fixed;
      z-index: 1000;
      left: 0;
      top: 0;
      width: 100%;
      height: 0.8rem;
    }
    .head_goback{
      font-size: 0.35rem;
      color: #fff;
      width: 0.6rem;
      height: 0.8rem;
      line-height: 0.8rem;
      text-align: center;
    }   
    .title_head{
      position: absolute;
      height: 0.8rem;
      line-height: 0.8rem;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 50%;
      color: #fff;
      text-align: center;
      .title_text{
          display: block;
          height: 0.8rem;
          font-size: 0.26rem;
          color: #fff;
          text-align: center;
          font-weight: bold;
          i {
            height: 100%;
            font-size: 0.23rem;
          }
      }
    }
</style>