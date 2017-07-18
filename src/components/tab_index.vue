<template lang="html">
  <div class="bg_box">
    <swiper :options="swiperOption"  ref="mySwiper">
      <!-- 这部分放你要渲染的那些内容 -->
      <swiper-slide v-for="item in banner" class="waves-effect waves-light">
        <img  :src="item.src" alt="">
      </swiper-slide>
      <!-- 这是轮播的小圆点 -->
      <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
    </swiper>


    <ul class="classify_nav">
      <li class="waves-effect waver-button">
        <i class="iconfont icon-rankfill c-ef7222"></i>
        <p class="tit">排行</p>
      </li>
      <li class="waves-effect waver-button">
        <i class="iconfont icon-creativefill c-ffbe4a"></i>
        <p class="tit">看点</p>
      </li>
      <li class="waves-effect waver-button">
        <i class="iconfont icon-gaoqingshexiang c-62c7db"></i>
        <p class="tit">高清</p>
      </li>
      <li class="waves-effect waver-button">
        <i class="iconfont icon-shoufei c-8fdac6"></i>
        <p class="tit">氪金</p>
      </li>
    </ul>

    <div class="modular_box">
    <div class="title_box waves-effect waver-button">
      <span class="left"><i class="iconfont icon-iconjiudianzhuanqu35"></i>国产</span>
      <span class="right">当前<i class="num">123</i>个视频 <i class="iconfont icon-gengduo"></i></span>
    </div>

    <ul class="list_box">
      <li class="item waves-effect  waves-light">
        <img src="../assets/images/banner_01.jpg" alt="">

        <div class="info">
          <div class="title">啪啪啪大合集，让你一次爽个够！</div>

          <div class="up_name">
            <span>隔壁老马</span>
            <span class="look_num"><i class="iconfont icon-yanjing"></i>20</span>
          </div>
        </div>
      </li>
      <li class="item waves-effect  waves-light">
        <img src="../assets/images/banner_01.jpg" alt="">

        <div class="info">
          <div class="title">啪啪啪大合集，让你一次爽个够！</div>

          <div class="up_name">
            <span>隔壁老马</span>
            <span class="look_num"><i class="iconfont icon-yanjing"></i>20</span>
          </div>
        </div>
      </li>
      <li class="item waves-effect  waves-light">
        <img src="../assets/images/banner_01.jpg" alt="">

        <div class="info">
          <div class="title">啪啪啪大合集，让你一次爽个够！</div>

          <div class="up_name">
            <span>隔壁老马</span>
            <span class="look_num"><i class="iconfont icon-yanjing"></i>20</span>
          </div>
        </div>
      </li>
      <li class="item waves-effect  waves-light">
        <img src="../assets/images/banner_01.jpg" alt="">

        <div class="info">
          <div class="title">啪啪啪大合集，让你一次爽个够！</div>

          <div class="up_name">
            <span>隔壁老马</span>
            <span class="look_num"><i class="iconfont icon-yanjing"></i>20</span>
          </div>
        </div>
      </li>
    </ul>
  </div>

    <div class="modular_box">
      <div class="title_box waves-effect waver-button">
        <span class="left"><i class="iconfont icon-niaoju"></i>日韩</span>
        <span class="right">当前<i class="num">123</i>个视频 <i class="iconfont icon-gengduo"></i></span>
      </div>

      <ul class="list_box">
        <li class="item waves-effect  waves-light">
          <img src="../assets/images/banner_01.jpg" alt="">

          <div class="info">
            <div class="title">啪啪啪大合集，让你一次爽个够！</div>

            <div class="up_name">
              <span>隔壁老马</span>
              <span class="look_num"><i class="iconfont icon-yanjing"></i>20</span>
            </div>
          </div>
        </li>
        <li class="item waves-effect  waves-light">
          <img src="../assets/images/banner_01.jpg" alt="">

          <div class="info">
            <div class="title">啪啪啪大合集，让你一次爽个够！</div>

            <div class="up_name">
              <span>隔壁老马</span>
              <span class="look_num"><i class="iconfont icon-yanjing"></i>20</span>
            </div>
          </div>
        </li>
        <li class="item waves-effect  waves-light">
          <img src="../assets/images/banner_01.jpg" alt="">

          <div class="info">
            <div class="title">啪啪啪大合集，让你一次爽个够！</div>

            <div class="up_name">
              <span>隔壁老马</span>
              <span class="look_num"><i class="iconfont icon-yanjing"></i>20</span>
            </div>
          </div>
        </li>
        <li class="item waves-effect  waves-light">
          <img src="../assets/images/banner_01.jpg" alt="">

          <div class="info">
            <div class="title">啪啪啪大合集，让你一次爽个够！</div>

            <div class="up_name">
              <span>隔壁老马</span>
              <span class="look_num"><i class="iconfont icon-yanjing"></i>20</span>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="modular_box">
      <div class="title_box waves-effect waver-button">
        <span class="left"><i class="iconfont icon-ouzhou"></i>欧美</span>
        <span class="right">当前<i class="num">123</i>个视频 <i class="iconfont icon-gengduo"></i></span>
      </div>

      <ul class="list_box">
        <li class="item waves-effect  waves-light">
          <img src="../assets/images/banner_01.jpg" alt="">

          <div class="info">
            <div class="title">啪啪啪大合集，让你一次爽个够！</div>

            <div class="up_name">
              <span>隔壁老马</span>
              <span class="look_num"><i class="iconfont icon-yanjing"></i>20</span>
            </div>
          </div>
        </li>
        <li class="item waves-effect  waves-light">
          <img src="../assets/images/banner_01.jpg" alt="">

          <div class="info">
            <div class="title">啪啪啪大合集，让你一次爽个够！</div>

            <div class="up_name">
              <span>隔壁老马</span>
              <span class="look_num"><i class="iconfont icon-yanjing"></i>20</span>
            </div>
          </div>
        </li>
        <li class="item waves-effect  waves-light">
          <img src="../assets/images/banner_01.jpg" alt="">

          <div class="info">
            <div class="title">啪啪啪大合集，让你一次爽个够！</div>

            <div class="up_name">
              <span>隔壁老马</span>
              <span class="look_num"><i class="iconfont icon-yanjing"></i>20</span>
            </div>
          </div>
        </li>
        <li class="item waves-effect  waves-light">
          <img src="../assets/images/banner_01.jpg" alt="">

          <div class="info">
            <div class="title">啪啪啪大合集，让你一次爽个够！</div>

            <div class="up_name">
              <span>隔壁老马</span>
              <span class="look_num"><i class="iconfont icon-yanjing"></i>20</span>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="modular_box">
      <div class="title_box waves-effect waver-button">
        <span class="left"><i class="iconfont icon-gongju-jingdian"></i>套图</span>
        <span class="right">当前<i class="num">123</i>个视频 <i class="iconfont icon-gengduo"></i></span>
      </div>

      <ul class="list_box">
        <li class="item waves-effect  waves-light">
          <img src="../assets/images/banner_01.jpg" alt="">

          <div class="info">
            <div class="title">啪啪啪大合集，让你一次爽个够！</div>

            <div class="up_name">
              <span>隔壁老马</span>
              <span class="look_num"><i class="iconfont icon-yanjing"></i>20</span>
            </div>
          </div>
        </li>
        <li class="item waves-effect  waves-light">
          <img src="../assets/images/banner_01.jpg" alt="">

          <div class="info">
            <div class="title">啪啪啪大合集，让你一次爽个够！</div>

            <div class="up_name">
              <span>隔壁老马</span>
              <span class="look_num"><i class="iconfont icon-yanjing"></i>20</span>
            </div>
          </div>
        </li>
        <li class="item waves-effect  waves-light">
          <img src="../assets/images/banner_01.jpg" alt="">

          <div class="info">
            <div class="title">啪啪啪大合集，让你一次爽个够！</div>

            <div class="up_name">
              <span>隔壁老马</span>
              <span class="look_num"><i class="iconfont icon-yanjing"></i>20</span>
            </div>
          </div>
        </li>
        <li class="item waves-effect  waves-light">
          <img src="../assets/images/banner_01.jpg" alt="">

          <div class="info">
            <div class="title">啪啪啪大合集，让你一次爽个够！</div>

            <div class="up_name">
              <span>隔壁老马</span>
              <span class="look_num"><i class="iconfont icon-yanjing"></i>20</span>
            </div>
          </div>
        </li>
      </ul>
    </div>


  </div>
</template>
<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        // 模拟banner图片数据
        banner:[
            {src:require('../assets/images/banner_01.jpg')},
            {src:require('../assets/images/banner_02.jpg')},
            {src:require('../assets/images/banner_03.jpg')},
            {src:require('../assets/images/banner_04.jpg')},
            {src:require('../assets/images/banner_05.jpg')}
        ],
        swiperOption: {
          //是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
          notNextTick: true,
          pagination: '.swiper-pagination',
          slidesPerView: 'auto',
          centeredSlides: true,
          loop : true,
          paginationClickable: true,
          autoplay : 5000,
          autoplayDisableOnInteraction : false,
          onSlideChangeEnd: swiper => {
            //这个位置放swiper的回调方法
            this.page = swiper.realIndex+1;
            this.index = swiper.realIndex;
          }
        }
      }
    },
    //定义这个sweiper对象
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted () {
      //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
      this.swiper.slideTo(0, 0, false);
    }

  }
</script>
<style lang="scss">
    .swiper-pagination-bullet{
        width: .1rem;
        height: .1rem;
    }
    .bg_box{
        background: #fafafa;
    }
    .classify_nav{
        overflow: hidden;
        background: #fff;
        color:#666;

        li{
            float: left;
            text-align: center;
            width: 25%;
            padding:.1rem 0;

            .iconfont{
                font-size: .5rem;

            }
            .tit{
                margin: .1rem 0;
                font-size:.24rem;
            }
        }
    }


    .modular_box{

        .title_box{
            overflow: hidden;
            padding: .15rem 0.2rem;

            .left{
                .iconfont{
                    color: #663300;
                    font-size: .4rem;
                    margin-right: .1rem;
                }
            }

            .right{
                margin-top: .05rem;
                float:right;

                .num{
                    color: #ffbe4a;
                }

                .iconfont{
                    font-size: .24rem;
                }
            }

        }
        .list_box{
            overflow: hidden;
            padding: .1rem .1rem 0 .1rem;

            .item{
                float: left;
                width: 50%;
                overflow: hidden;
                box-sizing: border-box;
                border-radius: .2rem;
                margin-bottom: .2rem;
                padding: 0 .1rem;

                .info{
                    padding: .1rem;
                    background: #fff;
                    overflow: hidden;

                    .title{
                        font-size: .28rem;
                        margin-bottom: .1rem;
                        height: .74rem;

                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;


                    }

                    .up_name{
                        font-size: .26rem;
                        color: #999;
                        .iconfont{
                            font-size: .28rem;
                        }
                        .look_num{
                            float: right;
                        }
                    }

                }
            }

        }


    }
</style>
