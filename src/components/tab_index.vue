<template lang="html">
  <div class="bg_box">

    <div class="banner_box">
      <mt-swipe ref="swipe" :auto="6000">
        <mt-swipe-item class="waves-effect waves-light" v-for="item in banner">
          <img  :src="item.pic" alt="" />
        </mt-swipe-item>
      </mt-swipe>
    </div>

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

      <router-link  to="/particulars" class="item waves-effect  waves-light" v-for="item in list">
        <div class="pic_box">
          <img v-lazy="item.pic" :alt="item.title">
        </div>

        <div class="info">
          <div class="title">{{item.title}}</div>

          <div class="up_name">
            <span>{{item.author}}</span>
            <span class="look_num"><i class="iconfont icon-yanjing"></i>{{item.play}}</span>
            <!--<span v-else class="look_num"><i class="iconfont icon-yanjing"></i>{{item.play}}</span>-->
          </div>
        </div>
      </router-link>
    </ul>
  </div>

    <div class="modular_box">
      <div class="title_box waves-effect waver-button">
        <span class="left"><i class="iconfont icon-niaoju"></i>日韩</span>
        <span class="right">当前<i class="num">123</i>个视频 <i class="iconfont icon-gengduo"></i></span>
      </div>

      <ul class="list_box">
        <li class="item waves-effect  waves-light">
          <div class="pic_box">
            <img src="../assets/images/banner_01.jpg" alt="">
          </div>

          <div class="info">
            <div class="title">啪啪啪大合集，让你一次爽个够！</div>
            <div class="up_name">
              <span>隔壁老马</span>
              <span class="look_num"><i class="iconfont icon-yanjing"></i>20</span>
            </div>
          </div>
        </li>
        <li class="item waves-effect  waves-light">
          <div class="pic_box">
            <img src="../assets/images/banner_01.jpg" alt="">
          </div>

          <div class="info">
            <div class="title">啪啪啪大合集，让你一次爽个够！</div>
            <div class="up_name">
              <span>隔壁老马</span>
              <span class="look_num"><i class="iconfont icon-yanjing"></i>20</span>
            </div>
          </div>
        </li>
        <li class="item waves-effect  waves-light">
          <div class="pic_box">
            <img src="../assets/images/banner_01.jpg" alt="">
          </div>

          <div class="info">
            <div class="title">啪啪啪大合集，让你一次爽个够！</div>
            <div class="up_name">
              <span>隔壁老马</span>
              <span class="look_num"><i class="iconfont icon-yanjing"></i>20</span>
            </div>
          </div>
        </li>
        <li class="item waves-effect  waves-light">
          <div class="pic_box">
            <img src="../assets/images/banner_01.jpg" alt="">
          </div>

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
          <div class="pic_box">
            <img src="../assets/images/banner_01.jpg" alt="">
          </div>

          <div class="info">
            <div class="title">啪啪啪大合集，让你一次爽个够！</div>
            <div class="up_name">
              <span>隔壁老马</span>
              <span class="look_num"><i class="iconfont icon-yanjing"></i>20</span>
            </div>
          </div>
        </li>
        <li class="item waves-effect  waves-light">
          <div class="pic_box">
            <img src="../assets/images/banner_01.jpg" alt="">
          </div>

          <div class="info">
            <div class="title">啪啪啪大合集，让你一次爽个够！</div>
            <div class="up_name">
              <span>隔壁老马</span>
              <span class="look_num"><i class="iconfont icon-yanjing"></i>20</span>
            </div>
          </div>
        </li>
        <li class="item waves-effect  waves-light">
          <div class="pic_box">
            <img src="../assets/images/banner_01.jpg" alt="">
          </div>

          <div class="info">
            <div class="title">啪啪啪大合集，让你一次爽个够！</div>
            <div class="up_name">
              <span>隔壁老马</span>
              <span class="look_num"><i class="iconfont icon-yanjing"></i>20</span>
            </div>
          </div>
        </li>
        <li class="item waves-effect  waves-light">
          <div class="pic_box">
            <img src="../assets/images/banner_01.jpg" alt="">
          </div>

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
          <div class="pic_box">
            <img src="../assets/images/banner_01.jpg" alt="">
          </div>

          <div class="info">
            <div class="title">啪啪啪大合集，让你一次爽个够！</div>
            <div class="up_name">
              <span>隔壁老马</span>
              <span class="look_num"><i class="iconfont icon-yanjing"></i>20</span>
            </div>
          </div>
        </li>
        <li class="item waves-effect  waves-light">
          <div class="pic_box">
            <img src="../assets/images/banner_01.jpg" alt="">
          </div>

          <div class="info">
            <div class="title">啪啪啪大合集，让你一次爽个够！</div>
            <div class="up_name">
              <span>隔壁老马</span>
              <span class="look_num"><i class="iconfont icon-yanjing"></i>20</span>
            </div>
          </div>
        </li>
        <li class="item waves-effect  waves-light">
          <div class="pic_box">
            <img src="../assets/images/banner_01.jpg" alt="">
          </div>

          <div class="info">
            <div class="title">啪啪啪大合集，让你一次爽个够！</div>
            <div class="up_name">
              <span>隔壁老马</span>
              <span class="look_num"><i class="iconfont icon-yanjing"></i>20</span>
            </div>
          </div>
        </li>
        <li class="item waves-effect  waves-light">
          <div class="pic_box">
            <img src="../assets/images/banner_01.jpg" alt="">
          </div>

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
  export default {
    components: {

    },
    data() {
      return {
        // 模拟banner图片数据
        banner:[],
        list:[],
      }
    },
    created () {
      let $this =this;

//      let banner_url = 'http://www.bilibili.com/index/recommend.json';//轮播数据
//
//      this.$axios.get(banner_url).then(function(res){
//        $this.banner=res.data.data;
//      },function(res) {
//        alert(res.status);
//      });


      let list_url = 'https://api.imjad.cn/bilibili/?get=rank&content=23&duration=7' //国产
      this.$axios.get(list_url).then(function(res){
        $this.list=res.data.rank.list.slice(0,10);

        //播放量过滤
        for(let i=0;i<$this.list.length;i++){
          if($this.list[i].play>10000){
            let num = $this.list[i].play.toString();
            $this.list[i].play = num.slice(0,-4)+'w';
          }
        }

      },function(res) {
        alert(res.status);
      });

    },
  }
</script>
<style lang="scss">

    .mint-swipe-indicator{
        width: .1rem;
        height: .1rem;
    }
    .mint-swipe-indicator{
      opacity: .5;
      background: rgba(0, 0, 0, 0.41);
    }

    .banner_box{
      overflow: hidden;
      height: 3.5rem;
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

                .pic_box{
                    width: 100%;
                    height: 2rem;
                    position: relative;
                    overflow: hidden;
                    max-height: 2rem;
                    background: #f2f2f2;

                    img{
                      width: 100%;
                      max-height: 2rem;
                      position: absolute;
                      top:0;
                      bottom: 0;
                      left: 0;
                      right: 0;
                      margin: auto;
                    }

                    img[lazy=loading] {
                      height: 1rem;
                      width: 1rem;
                      position: absolute;
                      top:0;
                      bottom: 0;
                      left: 0;
                      right: 0;
                      margin: auto;
                    }
                }

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
