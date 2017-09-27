<template lang="html">
  <div class="bg_box">

    <div class="banner_box">
      <mt-swipe ref="swipe" :auto="6000">
        <mt-swipe-item class="waves-effect waves-light" v-for="item in banner">
          <img  :src="item.pic" alt="" />
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="classify_nav">
      <router-link to="/ranking" class="nav_option waves-effect waver-button">
        <i class="iconfont icon-rankfill c-ef7222"></i>
        <p class="tit">排行</p>
      </router-link>
      <router-link to="/music" class="nav_option waves-effect waver-button">
        <i class="iconfont icon-creativefill c-ffbe4a"></i>
        <p class="tit">看点</p>
      </router-link>
      <router-link to="/ranking" class="nav_option waves-effect waver-button">
        <i class="iconfont icon-gaoqingshexiang c-62c7db"></i>
        <p class="tit">高清</p>
      </router-link>
      <router-link to="/ranking" class="nav_option waves-effect waver-button">
        <i class="iconfont icon-shoufei c-8fdac6"></i>
        <p class="tit">氪金</p>
      </router-link>
    </div>

    <div class="modular_box">
    <div class="title_box waves-effect waver-button">
      <span class="left"><i class="iconfont icon-iconjiudianzhuanqu35"></i>国产</span>
      <span class="right">当前<i class="num">123</i>个视频 <i class="iconfont icon-gengduo"></i></span>
    </div>

    <ul class="list_box" >

      <router-link v-for="item in gc" :to="{name:'particulars',query:{aid:item.aid}}"  class="item waves-effect  waves-light">
        <div class="pic_box">
          <img v-lazy="item.pic" :alt="item.title">
        </div>
        <div class="info">
          <div class="title">{{item.title}}</div>

          <div class="up_name">
            <span class="up">{{item.author}}</span>
            <span class="look_num"><i class="iconfont icon-yanjing"></i>{{formatPlayNum(item.play)}}</span>
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
        <router-link  :to="{name:'particulars',query:{aid:item.aid}}" class="item waves-effect  waves-light" v-for="item in jp">
          <div class="pic_box">
            <img v-lazy="item.pic" :alt="item.title">
          </div>

          <div class="info">
            <div class="title">{{item.title}}</div>

            <div class="up_name">
              <span class="up">{{item.author}}</span>
              <span class="look_num"><i class="iconfont icon-yanjing"></i>{{formatPlayNum(item.play)}}</span>
            </div>
          </div>
        </router-link>
      </ul>
    </div>

    <div class="modular_box">
      <div class="title_box waves-effect waver-button">
        <span class="left"><i class="iconfont icon-ouzhou"></i>欧美</span>
        <span class="right">当前<i class="num">123</i>个视频 <i class="iconfont icon-gengduo"></i></span>
      </div>

      <ul class="list_box">
        <router-link  :to="{name:'particulars',query:{aid:item.aid}}" class="item waves-effect  waves-light" v-for="item in om">
          <div class="pic_box">
            <img v-lazy="item.pic" :alt="item.title">
          </div>

          <div class="info">
            <div class="title">{{item.title}}</div>

            <div class="up_name">
              <span class="up">{{item.author}}</span>
              <span class="look_num"><i class="iconfont icon-yanjing"></i>{{formatPlayNum(item.play)}}</span>
            </div>
          </div>
        </router-link>
      </ul>
    </div>

    <div class="modular_box">
      <div class="title_box waves-effect waver-button">
        <span class="left"><i class="iconfont icon-gongju-jingdian"></i>套图</span>
        <span class="right">当前<i class="num">123</i>个视频 <i class="iconfont icon-gengduo"></i></span>
      </div>

      <ul class="list_box">
        <router-link  :to="{name:'particulars',query:{aid:item.aid}}" class="item waves-effect  waves-light" v-for="item in gc">
          <div class="pic_box">
            <img v-lazy="item.pic" :alt="item.title">
          </div>

          <div class="info">
            <div class="title">{{item.title}}</div>

            <div class="up_name">
              <span class="up">{{item.author}}</span>
              <span class="look_num"><i class="iconfont icon-yanjing"></i>{{formatPlayNum(item.play)}}</span>
            </div>
          </div>
        </router-link>
      </ul>
    </div>


  </div>
</template>
<script>
  export default {
    data() {
      return {
        // 模拟banner图片数据
        banner:[],
        gc:[],
        jp:[],
        om:[],
        tp:[],
      }
    },
    created () {
      let $this =this;

      let banner_url = 'http://api.bilibili.com/x/web-show/res/loc?jsonp=jsonp&pf=0&id=23&_=1482805801599';//轮播数据

      //按3天内排行高到底 每类截10条
      let gc_url = 'https://api.imjad.cn/bilibili/?get=rank&content=5&duration=3' //国产 娱乐
      let jp_url = 'https://api.imjad.cn/bilibili/?get=rank&content=23&duration=3' //日韩 电影
      let om_url = 'https://api.imjad.cn/bilibili/?get=rank&content=119&duration=3' //欧美 鬼畜

      this.$http.jsonp(banner_url).then(function(res){
        $this.banner=res.data.data;
      },function(res) {
        console.log(res.status+'轮播图请求失败！');
      });

      this.$axios.get(gc_url).then(function(res){
        $this.gc=res.data.rank.list.slice(0,10);
      },function(res) {
        console.log(res.status+'国产请求失败！');
      });

      this.$axios.get(jp_url).then(function(res){
        $this.jp=res.data.rank.list.slice(0,10);
      },function(res) {
        console.log(res.status+'日韩请求失败！');
      });

      this.$axios.get(om_url).then(function(res){
        $this.om=res.data.rank.list.slice(0,10);
      },function(res) {
        console.log(res.status+'欧美请求失败！');
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
      position: relative;
      padding-bottom: 50%;


      /*插件布局有问题不适用 需要改写*/
      .mint-swipe{
        position: static;
        .mint-swipe-items-wrap{
          position: static;
        }
      }


    }
    .bg_box{
        background: #fafafa;
    }
    .classify_nav{
        overflow: hidden;
        background: #fff;
        color:#666;

        .nav_option{
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
                    background: #f2f2f2;

                    img{
                      width: 100%;
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
                        height: .3rem;
                        line-height: 3rem;
                        overflow: hidden;
                        font-size: .24rem;
                        color: #999;

                        .up{
                          width: 60%;
                          float: left;
                          line-height: .3rem;
                          display: inline-block;
                          text-overflow: ellipsis;
                          overflow: hidden;
                          white-space: nowrap;
                        }
                        .iconfont{
                            font-size: .24rem;
                            line-height: .3rem;
                        }
                        .look_num{
                          text-align: right;
                            display: inline-block;
                            width: 40%;
                            line-height: .3rem;
                            float: left;
                            overflow: hidden;

                        }
                    }

                }
            }

        }


    }


</style>
