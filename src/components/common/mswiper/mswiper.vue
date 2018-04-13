<template>
  <div class="slide">
    <div class="swiper-container" v-if="foodTypes.length">
        <ul class="swiper-wrapper">
            <li class="swiper-slide" v-for="(item, index) in foodTypes" :key="index">
              <img :src="item.imgSrc" alt="">
            </li>
        </ul>
        <div class="swiper-pagination" id="indexPagination"></div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">

import '@/plugins/swiper.min.js'
import '@/style/swiper.min.css'

export default {
  data () {
    return {
      foodTypes:[
        {
          imgSrc:'https://fuss10.elemecdn.com/9/7c/9700836a33e05c2410bda8da59117jpeg.jpeg'
        },
        {
          imgSrc:'https://fuss10.elemecdn.com/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg'
        }
      ]
    }
  },
  mounted(){
    new Swiper ('.swiper-container', {
      loop: true,
      pagination: '.swiper-pagination',
      paginationClickable :true,
      autoplayDisableOnInteraction : false,
      autoplay: 4000,
      observer:true,
      observeParents:true,
      pagination: '.swiper-pagination',
      loop: true
    });
  }
}

</script>
<style lang='less' scoped>

.slide .swiper-container {
      width: 100%;
      height: 3rem;
      position: relative;
      background: #fff;
      ul {
        height: 100%;
        li {
          width: 100%;
          height: 100%;
          float: left;
          img {
            display: block;
            display: inline-block;
            height:100%;
            width:100%;
          }
        }
      }
      #indexPagination>span.swiper-pagination-bullet {
        display: block;
        display: inline-block;
        width: 0.08rem;
        height: 0.08rem;
        background: #FFFFFF;
        opacity: 0.3;
      }
      #indexPagination>span.swiper-pagination-bullet-active {
        display: block;
        display: inline-block;
        opacity: 1;
        background: #fff;
      }
  }

</style>