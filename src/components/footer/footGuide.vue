<template>
    <section id='foot_guide'>
        <router-link tag="div" to="/home" class="guide_item">
            <i class="iconfont icon-shouye-n"></i>
            <span>首页</span>
        </router-link>
        <router-link tag="div" to="/invest" class="guide_item">
            <i class="iconfont icon-touzhi-n"></i>
            <span>投资</span>
        </router-link>
        <router-link tag="div" to="/account"  class="guide_item">
            <i class="iconfont icon-zhuanghu-n"></i>
            <span>账户</span>
        </router-link>
    </section>
</template>

<script>
    
    import {mapState, mapActions, mapMutations} from 'vuex'

    export default {
    	data(){
            return{
                
            }
        },
        mounted(){
            //获取用户信息
            this.$store.state.address = "中国"
            // this.getUserInfo();
            this.ADD_CART({author: 'author_yechun',shopid: 'shopid_1', name: 'name_t', price:'price_2'});
        },
        computed: {
            ...mapState([
                'address','telphone'
            ])
        },
        methods: {
            ...mapActions([
                'getUserInfo'
            ]),
            ...mapMutations([
                'ADD_CART'
            ])
        },

    }

</script>

<style lang="less" scoped>
    #foot_guide{
        background-color: #fff;
        position: fixed;
        z-index: 100;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 0.87rem;
        display: flex;
        box-shadow: 0 -0.026667rem 0.053333rem rgba(0,0,0,.1);
    }
    .guide_item {
        display: block;
    	flex: 1;
        height: 0.87rem;
    	text-align: center;
        span {
            display: block;
            width: 100%;
            height: 0.4rem;
            line-height: 0.3rem;
            font-size: 0.16rem;
            color: #666; 
        }
        i {
            display: block;
            width: 100%;
            height: 0.47rem;
            line-height: 0.6rem;
            font-size: 0.26rem;
            color: #666; 
            font-size: 18px;
        }
    }
    .guide_item.router-link-active span,
    .guide_item.router-link-active i {
        color: #e25353;
    }
   
</style>
