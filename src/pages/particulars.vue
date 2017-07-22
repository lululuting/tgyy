<template lang="html">
  <div>
      <!--头部-->
      <div v-show="topShowHide" :class="{'top_bg':topBg}" class="top_box">
          <a class="back waves-effect  waves-light" href="javascript:history.go(-1);">
              <i class="iconfont icon-back"></i>
          </a>
          <p class="title">av001</p>
          <span class="more waves-effect  waves-light">
              <i class="iconfont icon-moreandroid"></i>
          </span>
      </div>

      <!--播放器-->
      <div class="player_box" :class="{'iffull':videoFull}">
          <!--播放封面-->
          <div class="load_layer">
              <img class="" src="../assets/images/banner_01.jpg" >

              <i @click="loadPlayer()" class="iconfont icon-bofang load_player_icon"></i>
              <div class="video_time" v-text="videoTime"></div>
          </div>

          <!--播放控件-->
          <div v-show="ifShow" class="control_bar">
            <!--播放时间进度-->
            <div class="left_time">
              <span style="margin-left: .2rem" v-text="videoCurrentTime"></span>
              <i>/</i>
              <span v-text="videoTime"></span>
            </div>

            <!--进度条滑块-->
            <div class="control_slider">
              <p class="timeline"><span style=""></span></p>
            </div>

            <!--右边 弹幕 全屏 的操作-->
            <div class="right_action">
              <span class="barrage_btn">
                <i class="iconfont icon-danmukai"></i>
              </span>

              <span class="full_btn">
                <i @click="full()" :class="{'icon-tuichuquanping2': videoFull}" class="iconfont icon-quanping- "></i>
              </span>
            </div>

            <!--播放开关-->
            <span @click="player()" :class="{'icon-bofangzanting':state}"  class="iconfont icon-bofang player_icon"></span>
          </div>

          <!--播放结束黑屏 重播 或者看看其他的-->
          <div class="video_end">
              <div class="action_box">
                  <span @click="rePlay()" class="replay_icon waves-effect waves-button">
                      <i class="iconfont icon-refresh"></i>
                      <p>重新播放</p>
                  </span>

                  <span class="waves-effect waves-button">
                      <i class="iconfont icon-share"></i>
                      <p>分享</p>
                  </span>
              </div>
          </div>

          <div class="video_box">
              <video @click="showPlayer()"   @canplaythrough="videoLength()" id="video" width=100% height=100%  src="https://media.w3.org/2010/05/sintel/trailer.mp4"  type="video/mp4"></video>
          </div>

      </div>
      <!--播放器END-->

      <!--点赞 分享 收藏 缓存-->
      <ul class="video_action_box">
          <li @click="clickPraise()" class="c-f09d9d waves-effect">
              <i class="iconfont icon-appreciate"></i><i class="num">123</i>
          </li>

          <li @click="clickCollection()" class="c-ffbe4a waves-effect">
              <i class="iconfont icon-favor"></i><i class="num">12</i>
          </li>

          <li @click="clickShare()" class="c-62c7db waves-effect">
              <i class="iconfont icon-share"></i><i>分享</i>
          </li>

          <li @click="clickDownload()" class="c-8fdac6 waves-effect">
             <i class="iconfont icon-down"></i><i>缓存</i>
          </li>
      </ul>

      <!--标题 播放量 内容介绍 面包屑-->
      <div class="video_info_box">
          <h1 class="title">【日常打架】几把骨大战几把瘸</h1>

          <div class="page_view">
              <div class="left_data">
                  <span>
                      <i class="iconfont icon-bofang"></i>
                      100
                  </span>

                  <span>
                      <i class="iconfont icon-danmukai"></i>
                      21
                  </span>
              </div>

              <i @click="videoIndoOpen()" :class="{'icon-fold':openInfo}" class="open_icon iconfont icon-unfold"></i>
          </div>

          <div class="info_box">
            <div class="info">
              自制  有参考HTF手书AV386928，BGM：【96猫】こちら、幸福安心委员会です，略有改词伪全员向，主要是恶魔和面具的拟人别问我为啥没有刀龙…虽然是反派但终究是人类就是觉得如果没有剧情需要和主角光环，恶魔应该还是比人类厉害
            </div>


            <div class="crumbs_nav">
              <a href="" target="_self" class="" >主页</a>
              <a href="" target="_self" class="">国产</a>
              av12305886
            </div>
          </div>


      </div>

      <!--评论 显示最火的5条-->
      <div class="comment_box" >

          <p class="title" >评论 <span class="c-9" >( 236 )</span></p>

          <ul class="comment_list">
              <li class="item" href="">
                <a class="user_pic" href="">
                  <img src="../assets/images/user_pic.png">
                </a>
                <div class="user_name_box">
                  <p class="user_name">几把威</p>
                  <p class="user_time">两分钟前</p>
                </div>
                <span @click="clickPraise()" class="praise"><i class="iconfont icon-appreciate"></i><i class="num">666</i></span>
                <a class="text" href="">
                  上一次看到这个的时候，金星还在撸管...
                </a>
              </li>
              <li class="item" href="">
                <a class="user_pic" href="">
                  <img src="../assets/images/user_pic.png">
                </a>
                <div class="user_name_box">
                  <p class="user_name">几把威</p>
                  <p class="user_time">两分钟前</p>
                </div>
                <span @click="clickPraise()" class="praise"><i class="iconfont icon-appreciate"></i><i class="num">666</i></span>
                <a class="text" href="">
                  上一次看到这个的时候，金星还在撸管...
                </a>
              </li>
              <li class="item" href="">
                <a class="user_pic" href="">
                  <img src="../assets/images/user_pic.png">
                </a>
                <div class="user_name_box">
                  <p class="user_name">几把威</p>
                  <p class="user_time">两分钟前</p>
                </div>
                <span @click="clickPraise()" class="praise"><i class="iconfont icon-appreciate"></i><i class="num">666</i></span>
                <a class="text" href="">
                  上一次看到这个的时候，金星还在撸管...
                </a>
              </li>
              <li class="item" href="">
                <a class="user_pic" href="">
                  <img src="../assets/images/user_pic.png">
                </a>
                <div class="user_name_box">
                  <p class="user_name">几把威</p>
                  <p class="user_time">两分钟前</p>
                </div>
                <span @click="clickPraise()" class="praise"><i class="iconfont icon-appreciate"></i><i class="num">666</i></span>
                <a class="text" href="">
                  上一次看到这个的时候，金星还在撸管...
                </a>
              </li>
              <li class="item" href="">
                <a class="user_pic" href="">
                  <img src="../assets/images/user_pic.png">
                </a>
                <div class="user_name_box">
                  <p class="user_name">几把威</p>
                  <p class="user_time">两分钟前</p>
                </div>
                <span @click="clickPraise()" class="praise"><i class="iconfont icon-appreciate"></i><i class="num">666</i></span>
                <a class="text" href="">
                  上一次看到这个的时候，金星还在撸管...
                </a>
              </li>
          </ul>
          <!--点击更多评论-->
          <span class="more_comment_btn" href="">点击查看更多评论</span>

      </div>

      <!--视频相关-->
      <div class="related_video_box">
          <p class="title">视频相关</p>

          <div class="video_list">
              <a class="item" href="">
                  <span class="left_video_pic">
                    <img src="../assets/images/user_box_bg_12312ad.png">
                  </span>

                  <div class="right_video_info">
                      <span class="video_title">【老马与老奶奶不得不说的故事】-Sarcasm- [圣主/瓦龙/圣主]</span>
                      <div class="video_data">
                        <span>时长：123分钟</span>
                        <span>类型：国产</span>
                      </div>

                      <div class="video_data">
                        <span class="player_num">播放：1.1万</span>
                        <span class="text_num">
                          弹幕：79
                        </span>
                      </div>
                  </div>
              </a>
              <a class="item" href="">
                    <span class="left_video_pic">
                      <img src="../assets/images/user_box_bg_12312ad.png">
                    </span>

                <div class="right_video_info">
                  <span class="video_title">【成龙历险记丨拟人化】-Sarcasm- [圣主/瓦龙/圣主]</span>
                  <div class="video_data">
                    <span>时长：113分钟</span>
                    <span>类型：国产</span>
                  </div>

                  <div class="video_data">
                    <span class="player_num">播放：1.1万</span>
                    <span class="text_num">
                            弹幕：719
                          </span>
                  </div>
                </div>
              </a>
              <a class="item" href="">
                    <span class="left_video_pic">
                      <img src="../assets/images/user_box_bg_12312ad.png">
                    </span>

                <div class="right_video_info">
                  <span class="video_title">【老马与老奶奶不得不说的故事】-Sarcasm- [圣主/瓦龙/圣主]</span>
                  <div class="video_data">
                    <span>时长：123分钟</span>
                    <span>类型：欧美</span>
                  </div>

                  <div class="video_data">
                    <span class="player_num">播放：1.1万</span>
                    <span class="text_num">弹幕：12</span>
                  </div>
                </div>
              </a>
          </div>
      </div>

      <div class="c-9 f24" style="text-align: center; padding:.2rem 0">那种网站怎么可能会有备案呢(ღ˘⌣˘ღ)</div>

  </div>
</template>
<script>


  export default {
      data(){
          return{
              topShowHide:true, // 头部显隐
              video : document.getElementById('video'), // 目标视频
              ifShow:false,// 控件显藏
              videoTime:'',// 视频时长
              videoCurrentTime:'00:00',// 播放起初时间
              state:false,// 播放开关状态
              getCurrentTime:false,// 进度条定时器
              videoFull:false,// 全屏
              towSecsHide:'',// 2秒后隐藏
              openInfo:false,
              topBg:false,
          }
      },
      methods:{
          // 播放封面 只出现一次
          loadPlayer:function () {
              if (video.paused) {
                  video.play();
                  $('.load_layer').hide();
                  this.state=true;
                  this.topShowHide=false;
                  this.dsq(); //播放开启定时器
              }
          },
          // 播放控件显隐
          showPlayer:function () {
              this.ifShow =! this.ifShow;
              this.topShowHide =this.ifShow;
          },
          // 计算视频长度
          videoLength:function () {
              function formatTime(second) {
                  return [parseInt(second / 60 ), second% 60].join(":").replace(/\b(\d)\b/g, "0$1");
              }
              this.videoTime=formatTime(Math.floor(video.duration));
          },
          // 播放与暂停
          player: function () {
              var $this = this;
              if (video.paused){
                  clearTimeout($this.getCurrentTime); //播放清除定时器 预防万一
                  this.state=true;
                  video.play();
                  $this.dsq(); //播放开启定时器

                  if(video.ended){
                    clearTimeout(this.getCurrentTime); //播放完清除定时器
                    $('.video_end').css('display','flex');
                  }

              }else {
                  $this.state=false;
                  clearTimeout($this.getCurrentTime); //暂停清除定时器
                  video.pause();
              }
          },
          // 重播
          rePlay:function () {
              video.play();
              this.ifShow=false;
              this.topShowHide =this.ifShow;

              $('.video_end').hide();

              $('.timeline').children().css('width','0');
              clearTimeout(this.getCurrentTime); //暂停清除定时器 预防万一
              this.dsq();// 播放开启定时器
          },
          // 播放时间与进度条
          dsq:function () {
              var $this=this;
              this.getCurrentTime = setInterval(function () {

                  function formatTime(second) {return [parseInt(second / 60 ), second% 60].join(":").replace(/\b(\d)\b/g, "0$1");}
                  $this.videoCurrentTime=formatTime(Math.floor(video.currentTime));

                  let box = $('.timeline');
                  let thisWidth = box.children().width();
                  let $width =box.width()/video.duration;
                  box.children().css('width',(thisWidth+$width)/100 +'rem');

                  if(video.ended){
                    $(document).off();

                      clearTimeout($this.getCurrentTime);
                      $this.ifShow=false;
                      $this.topShowHide =true;
                      $this.videoFull=false;

                      $('.video_end').css('display','flex');

                  }
              },1000);
          },
          // 全屏与退出全屏
          full:function () {
              this.videoFull =! this.videoFull;
          },
          // 打开视频介绍
          videoIndoOpen:function () {
          this.openInfo=!this.openInfo;
          let $height = $('.video_info_box .info').height()+$('.crumbs_nav').height()+40;

          if (this.openInfo){
            $('.video_info_box .info_box ').css('height',$height/100+'rem');
          }else {
            $('.video_info_box .info_box ').css('height','.4rem');

          }
        },

          // 点赞
          clickPraise:function () {
              // ajax code...
              $(event.currentTarget).find('.iconfont').addClass('icon-appreciate_fill_light');
              $(event.currentTarget).find('.num').text( Number($(event.currentTarget).find('.num').text())+1);
          },
          // 收藏
          clickCollection:function () {
              // ajax code...
              $(event.currentTarget).find('.iconfont').addClass('icon-favor_fill_light');
              $(event.currentTarget).find('.num').text( Number($(event.currentTarget).find('.num').text())+1);
          },
          // 分享
          clickShare:function () {
              // ajax code...

          },
          // 下载
          clickDownload:function () {
              // ajax code...
              alert("下载");
          },
      },
      mounted () {
          let $this=this;

          $('.player_box').on('touchend touchmove','.timeline',function(e){
            var x = e.originalEvent.changedTouches[0].clientX-this.offsetLeft;
            var X = x < 0 ? 0 : x ;
            var W = $(this).width();
            var place = X > W ? W : X;
            video.currentTime = (place/W).toFixed(2)*video.duration;
            $(this).children().css({width:(place/W).toFixed(2)*100+"%"});
          });

          $(document).on('click touchend','.video_box,.control_bar,.top_box',function() {
              clearInterval($this.towSecsHide);


              if(!video.paused && $(window).scrollTop()<=$('.player_box').height()-$('.top_box').height()){
                  $this.towSecsHide = setTimeout(function () {
                      $this.ifShow=false;
                      $this.topShowHide =$this.ifShow;
                  },3000)
              }
          });

          $('.player_box').on('touchmove','.video_box,.control_bar,.top_box',function() {
              clearInterval($this.towSecsHide);

              $this.ifShow=true;
              $this.topShowHide =$this.ifShow;
          });

          $(document).on("orientationchange",function(){
  //          如果想横竖屏切换时停止播放就开启这段注释
  //          clearInterval($this.towSecsHide);
  //          clearTimeout($this.getCurrentTime);
  //          $this.ifShow=true;
  //          $this.state=false;
  //          video.pause();
              let $width = $('.timeline').width()/video.duration*video.currentTime;
              $('.timeline').children().css('width',$width/100+'rem');
          });


          $(window).scroll(function () {
              let top = $(window).scrollTop();

              if(top>=$('.player_box').height()-$('.top_box').height()){
                  clearInterval($this.towSecsHide);

                  $this.topBg=true;
                  $this.topShowHide=true;
              }else {
                  $this.topBg=false;
              }
          })
      }
  }
</script>
<style lang="scss" scoped>

  .top_box{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    overflow: hidden;
    padding: 0 0;
    z-index: 1001;
    background-color: transparent;
    font-size: .32rem;
    transition: .5s all;
    color: #fff;

    .back{
      position: absolute;
      top: 0;
      left: .3rem;
      margin: auto;
    }
    .title{
      position: relative;
      width: 50%;
      height: 1rem;
      overflow: hidden;
      margin: 0 auto;
      text-align: center;
    }
    .more{
      position: absolute;
      height: 1rem;
      margin: auto;
      top: 0;
      bottom: 0;
      right: .3rem;
      text-align: center;
    }
    .iconfont{
      font-size: .5rem;
      color: #fff;
    }
  }
  .top_bg{
    background-color: #8fdac6;
  }
  .iffull{
    position: fixed !important;
    z-index: 1000 !important;
    width: 100% !important;
    height: 100% !important;
    background-color: black;
  }

  .player_box{
    position: relative;
    overflow: hidden;
    z-index: 996;

    .load_layer{
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      color: #fff;
      z-index: 999;
      overflow: hidden;

      img{
        display: inline-block;
        position: relative;
        width: 100%;
        height: 100%;
        opacity: .85;
      }
      .load_player_icon{
        position: absolute;
        bottom: .5rem;
        right: .5rem;
        color: #fff;
        font-size: 1rem;
      }
    }

    .video_time{
      position: absolute;
      left: .5rem;
      bottom: .5rem;
      border: .02rem solid hsla(0,0%,100%,.6);
      background-color: hsla(0,0%,100%,.2);
      padding: .1rem .2rem;
      border-radius: .1rem;
    }
    .video_box{
      width: 100%;
      height: 100%;
    }

    .control_bar{
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: .8rem;
      border-width: 0;
      border-style: solid;
      border-color: #e2e2e2;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 1;
      z-index: 999;

      .player_icon{
        position: absolute;
        bottom: 1.1rem;
        right: .5rem;
        color: #fff;
        font-size: 1rem;
      }
      .icon-bofangzanting:before {
        content: "\E61D" !important;
      }

      .left_time{
        width: 25%;
        float: left;
        line-height: .8rem;
        color: #fff;
        font-size: .2rem;
        text-align: left;

      }
      .right_action{
        width: 25%;
        float: left;
        line-height: .8rem;
        font-size: .32rem;
        text-align: right;

      .barrage_btn,
        .full_btn{
          display: inline-block;
          overflow: hidden;
          margin-right: .2rem;

          .icon-tuichuquanping2:before {
            content: "\E614" !important;
          }
        }
        .iconfont{
          color: #fff;
          font-size: .5rem;
        }

      }
      .control_slider{
        display: inline-block;
        overflow: hidden;
        width: 50%;
        float: left;
        line-height: .8rem;
        margin:  0 auto;
        text-align: center;

        .timeline {
          width: 80%;
          height: .06rem;
          background-color: rgba(216, 216, 216, 0.3);
          border-radius: .6rem;
          margin:0 auto;
          line-height: .8rem;
          position: relative;
          display: inline-block;
          z-index: 2;
        }
        .timeline span {
          position: relative;
          width: 0;
          border-radius: .5rem;
          height: .05rem;
          background-color: #8fdac6;
          display: block;
          /*-webkit-transition: width ease-out 0.3s;*/
          /*-o-transition: width ease-out 0.3s;*/
          /*transition: width ease-out 0.3s;*/
        }
        .timeline span:after{
          content: "";
          position: absolute;
          top:-.07rem;
          right:-.1rem;
          width: .2rem;
          height:.2rem;
          border-radius: 50%;
          background-color: #fff;
        }
      }

    }
    .video_end{
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-color: rgba(51, 51, 51, 0.8);
      text-align: center;
      position: absolute;
      top:0;
      z-index: 999;
      display: none;
      font-size: .26rem;
      align-items: center;

      .action_box{
        margin: 0 auto;

        span{
          display: inline-block;
          text-align: center;
          color: #fff;
          border-radius: .2rem;
        }
      }
      .iconfont{
        font-size: .8rem;
        margin: 0 .5rem;
      }
    }

  }


  .video_action_box{
    height: 1rem;
    text-align: center;
    overflow: hidden;
    background-color: #fff;
    border-bottom:.1rem solid #fafafa;
    li{
      width: 25%;
      overflow: hidden;
      float:left;
      line-height: 1rem;
      font-size:.24rem;
      .iconfont{
        font-size: .5rem;
        line-height: 1rem;
        vertical-align: sub;
        margin-right: .1rem;
      }
    }
  }

  .video_info_box{
    overflow: hidden;
    padding: .2rem;
    border-bottom:.1rem solid #fafafa;

    .title{
      display: block;
      line-height: .4rem;
      font-size: .36rem;
      font-weight: 500;
      color: #333;
      margin-bottom: .2rem;
    }
    .page_view{
      position: relative;
      margin-bottom: .2rem;
      color: #999;

      span{
        margin-right: .4rem;
      }

      .left_data{
        display: inline-block;
      }
      .open_icon{
        position: absolute;
        right: 0;
        top: -.05rem;
        font-size: .4rem !important;
      }
      .iconfont{
        font-size: .32rem;
      }
    }
    .info_box{
      height:.4rem;
      line-height: .4rem;
      transition: .5s all;
      overflow: hidden;


      .info{
        line-height: .4rem;
        font-size: .28rem;
        color: #999;
      }


      .crumbs_nav{
        margin-top: .4rem;
        color: #999;

        a{
          font-size: .28rem;
          color: #8fdac6;
        }

        a:after{
          display: inline-block;
          font-size: .28rem;
          content: "\e617";
          color: #999;
          font-family:"iconfont";
          font-style:normal;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      }
    }
  }


  .comment_box{
    overflow: hidden;
    border-bottom: .1rem solid #fafafa;
    .title{
      padding: 0 .2rem;
      margin-top: .2rem;
    }
    .comment_list{
      padding: 0 .2rem;
      overflow: hidden;

      .item{
        display: block;
        position: relative;
        overflow: hidden;
        border-bottom: .01rem solid #adadad;
        padding:  .4rem 0 .4rem 1rem;
        color: #999;
        .user_pic{
          position: absolute;
          top: .4rem;
          left: 0;
          width: .8rem;
          height: .8rem;
          overflow: hidden;
          border-radius: 50%;
        }
        .user_name_box{
          max-width: 60%;
          color: #999;
          display: block;
          margin-bottom: .2rem;
          .user_name{
            margin-bottom: .05rem;
          }
          .user_time{
            font-size: .16rem;
          }
        }
        .praise{
          position: absolute;
          top: .4rem;
          right: 0;
          color: #999;

          .iconfont{
            font-size: .32rem;
            margin-right: .1rem;
          }
        }
        .text{
          color: #666;
        }
      }
      .item:last-child{
        border: none;
      }

    }

    .more_comment_btn{
      margin-bottom: .4rem;
      display: block;
      height: .5rem;
      line-height: .5rem;
      font-size: .28rem;
      color: #999;
      text-align: center;
    }
  }



  .related_video_box{
    border-bottom: .1rem solid #fafafa;

    .title{
      padding: 0 .2rem;
      margin-top: .4rem;
    }
    .video_list{
      padding: 0 .2rem;
      .item{
        display: block;
        position: relative;
        padding: .2rem 0 .2rem 2.7rem;
        height: 1.6rem;
        overflow: hidden;
        border-bottom: .01rem solid #999;

        .left_video_pic{
          position: absolute;
          left: 0;
          width: 2.5rem;
          height: 1.6rem;
          border-radius: .1rem;
          overflow: hidden;
        }
        .right_video_info{
          .video_title{
            display: block;
            max-height:.8rem;
            line-height: .4rem;
            font-size: .28rem;
            color: #333;
            overflow: hidden;
          }

          .video_data{
            display: block;
            overflow: hidden;
            line-height: .4rem;
            font-size: .24rem;
            color: #666;

            span{
              display: inline-block;
              width: 50%;
              float: left;
            }
          }

        }
      }
      .item:last-child{
        border: none;
      }
    }

  }

</style>
