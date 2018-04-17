<template>
  <header class="slide">
    <div class="swiper-container" v-if="foodTypes.length">
        <ul class="swiper-wrapper">
            <li class="swiper-slide" v-for="(item, index) in foodTypes" :key="index">
              <img :src="item.imgSrc" alt="">
            </li>
        </ul>
        <div class="swiper-pagination" id="indexPagination"></div>
      </div>
  </header>
</template>

<script type="text/ecmascript-6">

import Swiper from 'swiper'
import '@/style/swiper-4.2.2.min.css'

export default {
  data () {
    return {
      foodTypes:[
        {
          imgSrc:'https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg'
        },
        {
          imgSrc:'https://fuss10.elemecdn.com/7/a9/77ff360f7d3fde2d459727ad09fcfjpeg.jpeg'
        },
        {
          imgSrc:'https://fuss10.elemecdn.com/8/83/171fd98b85dee3b3f4243b7459b48jpeg.jpeg'
        }
      ]
    }
  },
  mounted(){
    var mySwiper =  new Swiper ('.swiper-container', {
      autoplay: {
      delay: 4000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
      },
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      }
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