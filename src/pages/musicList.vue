<template lang="html">
  <div>
    <!--头部-->
    <div class="top_box">
      <a class="back waves-effect  waves-light" onclick="self.location=document.referrer;" href="">
        <i class="iconfont icon-back"></i>
      </a>
      <div class="title">歌单</div>
      <span class="more waves-effect waves-light">
        <i class="iconfont icon-moreandroid"></i>
      </span>

      <div class="top_bg" :style="{backgroundImage: 'url('+ listCoverImgUrl +')'}" style="opacity:0;"></div>
    </div>
    <!--列表-->
    <div class="main">
      <div class="top_pic_box">
        <div class="pic_img" :style="{backgroundImage: 'url('+ listCoverImgUrl +')'}"></div>
        <div class="info">
          <div class="left_pic waves-effect waves-light" :style="{backgroundImage: 'url('+ listCoverImgUrl +')'}">
            <p class="play_quantity">
              <i class="iconfont icon-erji"></i>
              {{formatPlayNum(listPlayCount)}}
            </p>

            <i class="iconfont icon-info"></i>
          </div>

          <div class="right_name">
            <p class="title">{{listTitle}}</p>
            <router-link to="/ranking" class="user_box waves-effect waves-light">
              <span class="user_pic" :style="{backgroundImage: 'url('+ listAvatarUrl +')'}"></span>
              <span class="user_name">{{listNickName}}</span>
            </router-link>
          </div>
        </div>

        <ul class="nav_action">
          <li>
            <i class="iconfont icon-roundadd"></i>
            <p class="val">{{listSubscribedCount}}</p>
          </li>

          <li>
            <i class="iconfont icon-comment"></i>
            <p class="val">{{listCommentCount}}</p>
          </li>

          <li>
            <i class="iconfont icon-share"></i>
            <p class="val">{{listShareCount}}</p>
          </li>

          <li>
            <i class="iconfont icon-down"></i>
            <p class="val">下载</p>
          </li>
        </ul>
      </div>

      <div class="content">
        <!--选择-->
        <div class="filter">
          <i class="play_icon iconfont icon-cplay1"></i>
          播放全部<i class="c-9">(共{{list.length}}首)</i>

          <div class="multiselect">
            <i class="iconfont icon-sortlight"></i>
            多选
          </div>
        </div>


        <!--列表-->
        <ul class="list" :class="{'mb1rem':playerShow}">
          <li class="item waves-effect" v-for="(item,index) in list" >
            <div @click="clickPlay($event)" class="warpper">
              <div class="left">
                {{index+1}}
                <i class="iconfont icon-notification"></i>
              </div>

              <div class="middle">
                <div>
                  <p class="m_name ellipsis">{{item.name}} <i></i><i></i></p>
                  <p class="u_name ellipsis"><i></i>{{item.ar[0].name}} </p>
                </div>
              </div>
            </div>


            <div class="right waves-effect">
              <i class="iconfont icon-moreandroid "></i>
            </div>

          </li>
        </ul>
      </div>

    </div>

    <!--底部播放界面-->
    <div class="player" v-show="playerShow">
      <div class="m_pic">
        <img :src="musicCoverImgUrl" alt="">
      </div>

      <div class="m_info" @click="showDetails">
        <p class="m_name ellipsis">{{musicName}}</p>
        <div class="m_lrc ellipsis">
          <p>{{musicAuthor}}</p>
        </div>
      </div>

      <div class="m_action">
        <div class="switch" @click="play()">
          <span class="progress">
            <i :class="{'icon-bofang':!state}" class="iconfont icon-bofangzanting"></i>
          </span>
        </div>

        <div class="list">
          <i class="iconfont icon-bofangliebiao"></i>
        </div>
      </div>
    </div>

    <audio id="music" preload="auto" autoplay :src="musicUrl"></audio>

    <div class="music_details" v-show="playerDetails">
      <!--头部-->
      <div class="top_box">
        <span @click="closeDetails" class="back waves-effect  waves-light">
          <i class="iconfont icon-back"></i>
        </span>

        <div class="title">
          <p class="name">{{musicName}}</p>
          <p class="singer">{{musicSinger}}</p>
        </div>
        <span class="more waves-effect waves-light">
        <i class="iconfont icon-moreandroid"></i>
      </span>
      </div>

      <div class="main">
        <div></div>
        <!--背景-->
        <transition name="fade" mode="out-in">
          <div class="main_bg_images" :style="{backgroundImage: 'url(' + musicPic+ ')'}"></div>
        </transition>
        <div class="main_bg_color"></div>


        <!--播放器界面-->
        <transition name="fade">
          <div class="player_view" v-show="!lyric" >
            <!--播放机指针-->
            <div class="switch" :class="{'load':!state}">
              <img src="../assets/images/bofangzheng.png" alt="">
            </div>

            <!--播放机cd封面-->
            <div @click="lyric=!lyric" class="cover_box" :class="{'paused':!state}" :style="{backgroundImage: 'url(' + playerCd + ')'}">
              <div class="cover_pic" :style="{backgroundImage: 'url(' + musicPic + ')'}"></div>
            </div>

            <!--喜欢， 下载，评论 ，更多-->
            <ul class="action_btn">
              <li class="iconfont icon-like"></li>
              <li class="iconfont icon-down"></li>
              <li class="iconfont icon-icontalknew"></li>
              <li class="iconfont icon-moreandroid"></li>
            </ul>
          </div>
        </transition>

        <!--歌词界面-->
        <div @click="lyric=!lyric" class="lyric_view" v-show="lyric">
          <ul class="lyric_box" >
            <li  v-if="Object.prototype.toString.call(musicLrc)=='[object Array]'" v-for="item in musicLrc">{{item.text}}</li>
            <li class="on" v-else-if="musicLrc=='2'">纯音乐，请欣赏！</li>
            <li class="on" v-else="musicLrc=='3'">木有歌词！</li>
          </ul>
        </div>
      </div>

      <div class="player_box">
        <!--进度条-->
        <div class="progress_bar">
          <span class="play_time">{{musicCurrentTime}}</span>
          <div class="progress">
            <p>
              <i class="new_bar"></i>
              <i class="buffer_bar"></i>
            </p>
          </div>
          <span class="duration">{{musicDuration}}</span>
        </div>

        <!--播放按钮-->
        <ul class="player_btn">
          <li class="iconfont icon-xunhuan"></li>
          <li class="iconfont icon-shangyishou"></li>
          <li @click="play" :class="{'icon-cplay1':!state}" class="iconfont icon-bofang1 play_btn"></li>
          <li class="iconfont icon-xiayishou"></li>
          <li class="iconfont icon-bofangliebiao"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        scrolled:0,//滚动条top距离
        state:false, // 播放状态

        listAvatarUrl:require('../assets/images/defaultAvatar.png'), //歌单创建者名字头像
        listNickName:'歌单创建者名字',
        listTitle:'歌单名字',
        listCoverImgUrl:require('../assets/images/morenfengmian.png'), // 歌单封面
        listPlayCount:0, // 歌单播放量
        listSubscribedCount:0, // 歌单收藏数
        listCommentCount:0,// 歌单评论数
        listShareCount:0, // 歌单分享数
        list:'', // 歌单列表

        playerShow:false, // 列表底部播放显示
        playerDetails:false, // 详情播放界面是否显示

        musicCoverImgUrl:require('../assets/images/morenfengmian.png'), // 正在播放的音乐封面
        musicAuthor:'创作者', // 正在播放音乐的创作者
        musicId:'', // 当前播放的id
        musicUrl:'', // 音乐文件
        musicPic:require('../assets/images/morenfengmian.png'), // 封面

        playerCd:require('../assets/images/guangdie.png'),// 转盘
        musicCurrentTime:'00:00', // 播放中的时间
        musicDuration:'00:00', // 时长
        timer:null, // 定时器
        lyric:null, // 切换到歌词的变量
        transitionName:'fade',// 过渡效果

        musicName:'歌名',
        musicSinger:'歌手',
        musicLrc:[], // 解析好的歌词

      }
    },
    methods:{
      handleScroll:function() {
        let $this = this;
        $this.scrolled = window.scrollY;

        let nav = $(".top_bg");
        let picBox = $(".top_pic_box");

        //透明度
        let xx = Math.floor((picBox.outerHeight()* $this.scrolled)/picBox.outerHeight())/(picBox.outerHeight()-nav.outerHeight());
        if (xx>1)xx = 1;
        if (xx<0)xx = 0;

        if ($this.scrolled > nav.outerHeight()){
          nav.css('opacity',xx);
        }else {
          nav.css('opacity',xx);
        }
      },

      // 点击歌曲播放
      clickPlay:function ($event) {
        let $this = this;
        let el = $($event.currentTarget);
        let index = el.parent('li').index();

        this.state = true;
        this.playerShow = true;

        el.find('.left .iconfont').show();
        el.parent('li').siblings('li').find('.left .iconfont').hide();

        this.musicId = this.list[index].id;
        this.musicCoverImgUrl = this.list[index].al.picUrl;
        this.musicName = this.list[index].name;
        this.musicAuthor = this.list[index].ar[0].name;

        console.log($this.musicId);

        let id = $this.musicId;
        let m_url = 'https://api.imjad.cn/cloudmusic/?type=song&id='+id;
        let m_lyric = 'https://api.imjad.cn/cloudmusic/?type=lyric&id='+id;
        let m_detail = 'https://api.imjad.cn/cloudmusic/?type=detail&id='+id;

        this.$axios.get(m_url).then(function (res) {
          $this.musicUrl = res.data.data[0].url;
        },function (res) {
          console.log(res+'获取音乐文件失败！')
        });

        this.$axios.get(m_lyric).then(function (res) {
          if(res.data.nolyric){
            $this.musicLrc='2';
          }else if (res.data.uncollected){
            $this.musicLrc='3';
          }else {
            //调用main.js挂在vue上解析歌词的方法
            $this.musicLrc=[]; // 先要变回obj 不然切歌无歌词的时候是前面的字符串格式
            $this.createLrc(res.data.lrc.lyric,$this.musicLrc);
            console.log($this.musicLrc);
          }

        },function (res) {
          console.log(res+'获取歌词失败！');
        });

        this.$axios.get(m_detail).then(function (res) {
          $this.musicPic = res.data.songs[0].al.picUrl;
          $this.musicName  = res.data.songs[0].name;
          $this.musicSinger = res.data.songs[0].ar[0].name;
        },function (res) {
          console.log(res+'获取音乐信息失败！');
        });

      },
      // 播放暂停
      play:function () {
        let music =document.getElementById('music');
        this.state = !this.state;

        if(!this.state){
          music.pause();
        }else {
          music.play();
        }
      },
      // 显示播放界面
      showDetails:function () {
        this.playerDetails = true;
      },
      closeDetails:function () {
        this.playerDetails = false;
      },
      // 定时器
      playerTimer:function () {
        let $this = this;
        let timeLineWidth = $(window).width()*0.7;
        let music = document.getElementById('music');
        this.timer = setInterval(function () {
          $this.musicCurrentTime = $this.formatTime(Math.round(music.currentTime));
          let $width = Math.round(timeLineWidth/music.duration*music.currentTime);
          $('.progress').find('.new_bar').css('width',$width+'px');

          //对应的歌词 判断是否为数组
          if (Object.prototype.toString.call($this.musicLrc)=='[object Array]'){
            for (let i =0;i<$this.musicLrc.length;i++){
              let currentTime =document.getElementById('music').currentTime.toFixed(2);
              //高亮歌词和滚动
              if(parseFloat($this.musicLrc[i].time)<=currentTime && currentTime<= $this.musicLrc[i +1].time){
                $('.lyric_box li').eq(i).addClass('new').siblings('li').removeClass('new');
                $('.lyric_box ').css('top',-($('.lyric_box .new').index()*0.8)+4.8+'rem');
              }
            }
          }

        },10);
      },
      // 下一首
      next:function () {

      },

    },
    mounted () {
      // 监听滚动条事件
      window.addEventListener('scroll', this.handleScroll);

      let $this = this;
      let music = document.getElementById('music');
      let ml_id = '372554249'; //歌单id

      let ml_url = 'https://api.imjad.cn/cloudmusic/?type=playlist&id='+ ml_id;
      this.$axios.get(ml_url).then(function (res) {
        $this.listAvatarUrl = res.data.playlist.creator.avatarUrl;
        $this.listNickName = res.data.playlist.creator.nickname;
        $this.listCoverImgUrl = res.data.playlist.coverImgUrl;
        $this.listTitle = res.data.playlist.name;
        $this.listPlayCount = res.data.playlist.playCount;
        $this.listSubscribedCount = res.data.playlist.subscribedCount;
        $this.listShareCount = res.data.playlist.shareCount;
        $this.listCommentCount = res.data.playlist.commentCount;
        $this.list = res.data.playlist.tracks;

      }, function (res) {
        console.log(res + '获取歌单信息失败！')
      });


      // 取得时长
      music.addEventListener('canplay',function () {
        $this.musicDuration = $this.formatTime(Math.round(music.duration));
      });

      // 播放结束后暂停
      music.addEventListener('ended',function () {
        $this.state =false;
      });

      // 拖拽进度条
      $('.player_box .progress').on('touchend touchmove',function(e){
        let x = e.originalEvent.changedTouches[0].clientX-this.offsetLeft;
        let X = x < 0 ? 0 : x ;
        let W = $(this).width();
        let place = X > W ? W : X;

        music.currentTime = (place/W).toFixed(2)*music.duration;
        $this.musicCurrentTime = $this.formatTime(parseInt(music.currentTime));
        $(this).find('.new_bar').css({width:(place/W).toFixed(2)*100+"%"});
      });

    },
    watch: {
      // 监听播放状态来开启或者清除定时器
      state() {
        if (!this.state){
          clearInterval(this.timer);
        }else {
          this.playerTimer();
        }
      },
      musicUrl(){
        $('.lyric_box').attr('style','');
      }
    }
  }
</script>
<style lang="scss" scoped>
  .theme_black .top_box{
    background: #333 ;
  }

  .top_box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    overflow: hidden;
    padding: 0 0;
    z-index: 1001;
    font-size: .32rem;
    transition: .5s all;
    color: #fff;


    .back {
      width: 1rem;
      position: absolute;
      top: 0;
      left: 0;
      margin: auto;
      text-align: center;
    }

    .title {
      position: relative;
      height: 1rem;
      overflow: hidden;
      text-align: left;
      margin: 0 1rem;
    }
    .iconfont{
      font-size: .5rem;
      color: #fff;
    }
  }

  .top_bg{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    left:0;
    top:0;
    background-position: center center;
    background-size: 5000%;
  }

  .top_pic_box{
    position: relative;
    height: 5.2rem;
    overflow: hidden;

    &:before{
      content: '';
      width: 100%;
      height:100%;
      position: absolute;
      background: rgba(0, 0, 0, 0.4);
      z-index: -1;
     }

    .pic_img{
      width: 100%;
      height:100%;
      position: absolute;
      top:0;
      left: 0;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
      -webkit-filter: blur(20px); /* Chrome, Opera */
      -moz-filter: blur(20px);
      -ms-filter: blur(20px);
      filter: blur(20px);
      filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=20, MakeShadow=false);
      z-index: -2;
    }

    .info{
      position: relative;
      top: 1rem;
      width: 100%;
      padding: 0 .4rem;
      box-sizing: border-box;
      overflow: hidden;

      .left_pic{
        float: left;
        height: 2.5rem;
        width: 2.5rem;
        margin-right: .4rem;
        position: relative;
        background-image:url("../assets/images/morenfengmian.png");
        background-position: 50% 50%;
        background-size: cover;
        color: #fff;
        .play_quantity{
          font-size: .24rem;
          text-align: right;
          padding: .1rem .2rem;
          .iconfont{
            font-size: .3rem;
            margin-right: .05rem;
          }
        }
        .icon-info{
          font-size: .46rem;
          position: absolute;
          right: .2rem;
          bottom: .1rem;
        }
      }
      .right_name{
        color:#fff;
        font-size:.32rem;

        .title{
          height: .9rem;
          margin-bottom: .2rem;
          overflow: hidden;
        }

        .user_box{
          overflow: hidden;
          display: inline-block;
          font-size:.24rem;
          .user_pic{
            width: .6rem;
            height: .6rem;
            background-position: 50% 50%;
            background-size: cover;
            border-radius: 50%;
            overflow: hidden;
            display: inline-block;
            vertical-align: middle;
          }

          .user_name{
            margin-left: .1rem;
            color:#fff;
            &:after{
              content: '\e617';
              font-family:"iconfont" !important;
              font-style:normal;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              color: rgba(255, 255, 255, 0.5);
            }
          }
        }
      }
    }
    .nav_action{
      margin-top: 1.3rem ;
      display: block;
      padding: 0 .3rem;
      text-align: center;
      overflow: hidden;

      li{
        width: 25%;
        float: left;
        overflow: hidden;
        color: #fff;

        .iconfont{
          font-size: .5rem;
        }
      }
    }
  }

  .content{
    background: rgb(250, 250, 250);

    .filter{
      height:.9rem;
      line-height:.9rem;
      font-size:.32rem;
      overflow: hidden;
      border-bottom:.01rem solid #eee;
      .play_icon{
        font-size: .5rem;
        margin: 0 .2rem;
      }
      .iconfont{
        vertical-align: middle;
      }
      .multiselect{
        float: right;
        padding: 0 .2rem;
        font-size:.3rem;
        .iconfont{
          font-size: .4rem;
        }
      }
    }


    .mb1rem{
      margin-bottom: 1rem;
    }
    .list{
      overflow: hidden;

      .item{
        line-height: 1rem;
        width: 100%;
        display: block;
        position: relative;
        box-sizing: border-box;


        .warpper{
          overflow: hidden;
        }
        .left{
          width: 1rem;
          height: 1rem;
          overflow: hidden;
          position: absolute;
          top:0;
          left:0;
          text-align: center;
          color: #999;
          background: rgb(250, 250, 250);

          .iconfont{
            display: none;
            width: 100%;
            height: 100%;
            background: rgb(250, 250, 250);
            position: absolute;
            font-size: .4rem;
            color: #8fdac6;
            top:0;
            left:0;
          }
        }
        .middle{
          width: 100%;
          overflow: hidden;
          padding:0 1rem;
          box-sizing: border-box;
          float: left;
          border-bottom:.01rem solid #eee;

          .m_name{
            line-height: .6rem;
            font-size: .3rem;
          }
          .u_name{
            line-height: .4rem;
            font-size: .24rem;
            color: #999;
          }
        }
        .right{
          width: 1rem;
          height: 1rem;
          overflow: hidden;
          position: absolute;
          top:0;
          right: 0;
          text-align: center;
          color: #999;
          z-index: 999;
        }
      }
    }
  }
  .player{
    width: 100%;
    height: 1rem;
    position: fixed;
    background: rgba(255, 255, 255, 0.9);
    bottom: 0;

    .m_pic{
      width: .8rem;
      height:.8rem;
      overflow: hidden;
      position: absolute;
      left: .1rem;
      top:.1rem;
      z-index: 997;
    }
    .m_info{
      height:.8rem;
      width: 100%;
      padding: 0 2rem 0 1rem;
      margin-top: .1rem;
      z-index: 998;
      display: block;
      box-sizing: border-box;
      overflow: hidden;
      .m_name{
        line-height: .5rem;
        font-size: .3rem;
      }
      .m_lrc{
        height: .3rem;
        font-size: .24rem;
        color: #999;
      }
    }
    .m_action{
      width: 1.7rem;
      height: .8rem;
      position: absolute;
      top:.1rem;
      right: .1rem;
      z-index: 999;
      text-align: center;

      .switch{
        width: .8rem;
        height: .8rem;
        line-height: .8rem;
        display: inline-block;
        float: left;

        .progress{
          width: .58rem;
          height: .58rem;
          line-height: .58rem;
          margin: .11rem;
          display: inline-block;
          overflow: hidden;
          border-radius: 50%;
          color: #666;
          border: .03rem solid #777;
          box-sizing: border-box;

          .iconfont{
            font-size: .32rem;
          }
        }
      }
      .list{
        width: .8rem;
        height: .8rem;
        line-height: .8rem;
        font-size: .5rem;
        margin-left: .1rem;
        color: #666;
        float: left;

        .iconfont{
          font-size: .5rem;
        }
      }
    }

  }




  .music_details{
    overflow: hidden;
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    z-index: 999999;
    background: #fff;


    .theme_black .top_box{
      background: #333 ;
    }

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
      font-size: .32rem;
      transition: .5s all;
      border-bottom: 0.01rem solid rgba(234, 240, 255, 0.31);
      color: #fff;

    .back{
      width: 1rem;
      position: absolute;
      top: 0;
      left:0;
      margin: auto;
      text-align: center;
    }
    .title{
      position: relative;
      height: 1rem;
      overflow: hidden;
      text-align: left;
      margin: 0 1rem;

    .name{
      line-height: .6rem;
    }
    .singer{
      font-size: .24rem;
      color: #eee;
      line-height: .4rem;
    }
    }
    .iconfont{
      font-size: .5rem;
      color: #fff;
    }
    .more{
      width: 1rem;
      position: absolute;
      text-align: center;
      top:0;
      right: 0;
    }
    }
    .main{
      position: absolute;
      width:100%;
      height:100%;

    .player_view,
    .lyric_view{
      position: absolute;
      top:0;
      overflow: hidden;
      display: block;
      width: 100%;
      height:80%;
      text-align: center;
      transition: all .5s;
      z-index: 996;
    }
    .lyric_view{
      overflow: hidden;
      margin-top: 1rem;
      height:70%;

    .lyric_box{
      position: absolute;
      transition: all .5s;
      top:4.8rem;
      width: 100%;
      overflow: hidden;
      color: #fff;

    li{
      height: .8rem;
      line-height: .8rem;
      opacity: .5;
      transition: all .5s;
    }
    .new{
      opacity: 1;
    }
    }
    }

    #music{
      width: 0;
      height: 0;
      padding: 0;
      margin: 0;
    }
    .main_bg_color{
      position: absolute;
      top:0;
      width:100%;
      height:100%;
      background-color: rgba(0, 0, 0, 0.3);
    }
    .main_bg_images{
      position: absolute;
      top:0;
      width:100%;
      height:100%;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
      overflow: hidden;
      -webkit-filter: blur(20px); /* Chrome, Opera */
      -moz-filter: blur(20px);
      -ms-filter: blur(20px);
      filter: blur(20px);
      filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=20, MakeShadow=false);
    }
    .switch{
      width: 1.5rem;
      position: absolute;
      top: 1rem;
      left: 1rem;
      right: 0;
      margin: auto;
      z-index: 999;
      -webkit-transition:  all .5s;
      -moz-transition:  all .5s;
      -ms-transition:  all .5s;
      -o-transition: all .5s;
      transition: all .5s;
      -webkit-transform-origin: .25rem .25rem;
      -moz-transform-origin: .25rem .25rem;
      -ms-transform-origin: .25rem .25rem;
      -o-transform-origin: .25rem .25rem;
      transform-origin: .25rem .25rem;
    }
    .load{
      float:left;
      -ms-transform:rotate(-45deg); /* IE 9 */
      -moz-transform:rotate(-45deg); /* Firefox */
      -webkit-transform:rotate(-45deg); /* Safari and Chrome */
      -o-transform:rotate(-45deg); /* Opera */
      transform:rotate(-45deg);
    }
    .paused {
      -webkit-animation-play-state: paused !important;
      -moz-animation-play-state: paused !important;
      -o-animation-play-state: paused !important;
      animation-play-state: paused !important;
    }
    .cover_box{
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      overflow: hidden;
      background-size: cover;
      display: block;
      position: relative;
      margin: 2.36rem auto;
      -webkit-animation: load 30s linear infinite;;
      -o-animation: load 30s linear infinite;;
      animation: load 30s linear infinite;


    &:after{
       width: 5.2rem;
       height: 5.2rem;
       display: block;
       position: absolute;
       background: #ffff;
     }
    .cover_pic{
      width: 3.5rem;
      height: 3.5rem;
      border-radius: 50%;
      background-size:cover ;
      background-position: 50% 50%;
      position: absolute;
      top: 0;
      left: 0;
      right:0;
      bottom: 0;
      margin: auto;
      z-index: 998;
    }

    @-webkit-keyframes load {
      0% {
        transform: rotate(0);
        -ms-transform: rotate(0); /* IE 9 */
        -webkit-transform: rotate(0); /* Safari and Chrome */
        -o-transform: rotate(0); /* Opera */
        -moz-transform: rotate(0); /* Firefox */
      }

      100% {
        transform: rotate(360deg);
        -ms-transform: rotate(360deg); /* IE 9 */
        -webkit-transform: rotate(360deg); /* Safari and Chrome */
        -o-transform: rotate(360deg); /* Opera */
        -moz-transform: rotate(360deg); /* Firefox */
      }
    }
    }
    }
    .action_btn{
      display: inline-block;
      overflow: hidden;
    li{
      float: left;
      color: #fff;
      margin:0 .4rem;
      font-size: .5rem;
      text-align: center;
      display: inline-block;
      overflow: hidden;
    }
    }
    .player_box{
      width: 100%;
      height: 20%;
      position: absolute;
      bottom: 0;
      z-index: 999;
      text-align: center;

    .iconfont{
      font-size: .5rem;
      color: #fff;
    }


    .progress_bar{
      height: .5rem;
      line-height: .5rem;
      margin-top: .4rem;
      color: #fff;
      text-align: center;
      overflow: hidden;

    .play_time {
      width: 15%;
      float: left;
    }
    .progress{
      height: .5rem;
      width: 70%;
      float: left;
      position: relative;
      overflow: hidden;

    p{
      display: block;
      width: 100%;
      height: .05rem;
      background: rgba(234, 240, 255, 0.3);
      position: absolute;
      top:0;
      bottom: 0;
      left:0;
      right:0;
      box-sizing:border-box ;
      border-radius: .5rem;
      margin: auto;
    }

    .new_bar{
      position: relative;
      width: 0;
      height: .05rem;
      background-color: rgba(170, 218, 193, 0.5);
      display: block;
      z-index: 2;

    &:after{
       content: "";
       position: absolute;
       top: -.1rem;
       right: -.25rem;
       width: .25rem;
       height: .25rem;
       border-radius: 50%;
       background-color: #fff;

       box-shadow: 0 0 .1rem rgba(152, 218, 197,1);
     }
    }
    .buffer_bar{
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      background-color: rgba(143, 218, 198, 0.25);
      height: .05rem;
      max-width: 100%;
      display: block;
    }
    .duration{
      width:15%;
      float: left;
    }
    }
    }

    .player_btn{
      line-height: 1.2rem;
      margin-top: .4rem ;
      overflow: hidden;
    li{
      float: left;
      width: 20%;
    }
    .play_btn{
      font-size: .9rem;
    }
    }
    }

  }







</style>
