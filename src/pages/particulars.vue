<template lang="html">
  <div>
    <!--头部-->
    <div v-show="topShowHide" :class="{'top_bg':topBg}" class="top_box">
      <a class="back waves-effect  waves-light"  onclick="self.location=document.referrer;"  href="">
        <i class="iconfont icon-back"></i>
      </a>
      <p class="title">AV{{$route.query.aid}}</p>
      <span class="more waves-effect  waves-light">
              <i class="iconfont icon-moreandroid"></i>
          </span>
    </div>
    <!--播放器-->
    <div class="player_box" :class="{'iffull':videoFull,'video_fixed':jb}">

      <!--播放封面-->
      <div class="load_layer">
        <div class="cover_pic" :style="{backgroundImage: 'url(' + v.videoPic + ')'}"></div>
        <i @click="loadPlayer" v-show="canPlay" class="iconfont icon-bofang load_player_icon"></i>
        <div class="video_time" v-text="v.videoTime"></div>
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

      <!--主要视频区域-->
      <div class="video_box">
        <div style="width:100%;padding-top: 62.5%;"></div>

        <!--loading动画-->
        <div v-show="loading" class="loading_amin">
          <div class="cube c1"></div>
          <div class="cube c2"></div>
          <div class="cube c4"></div>
          <div class="cube c3"></div>
        </div>

        <!--弹幕区域-->
        <div class="danmu_box" v-show=" barrageShow" @click="showPlayer()"></div>

        <!--视频本体-->
        <video id="video" preload="auto" webkit-playsinline="true"  width=100% height=100% :src="v.videoUrl" type="video/mp4"></video>

        <!--播放控件-->
        <div v-show="ifShow" class="control_bar">
          <!--播放时间进度-->
          <div class="left_time">
            <span style="margin-left: .2rem" v-text="videoCurrentTime"></span>
            <i>/</i>
            <span v-text="v.videoTime"></span>
          </div>

          <!--进度条滑块-->
          <div class="control_slider">
            <p class="timeline">
              <span class="progress_line"></span>
              <i class="loading_line"></i>
            </p>
          </div>

          <!--右边 弹幕 全屏 的操作-->
          <div class="right_action">
                  <span class="barrage_btn">
                    <i @click="barrageToggle" :class="{'icon-danmukai':barrageShow,'icon-danmuguan':!barrageShow}"  class="iconfont"></i>
                  </span>

            <span class="full_btn">
                    <i @click="fullToggle" :class="{'icon-tuichuquanping2':videoFull,' icon-quanping-':!videoFull}" class="iconfont"></i>
                  </span>
          </div>

          <!--播放开关-->
          <span @click="player" :class="{'icon-bofangzanting':state}"  class="iconfont icon-bofang player_icon"></span>
        </div>

      </div>

      <!--发送弹幕区域-->
      <div class="emit_danmu_box">
        <!--选择位置-->
        <div class="left">
          <span class="position">
            <i class="selected iconfont icon-d-scroll"></i>
            <div class="select_position">
                <i position-data="1" class="iconfont icon-d-top"></i>
                <i position-data="2" class="iconfont icon-d-scroll" style="outline-color:#333"></i>
                <i position-data="3" class="iconfont icon-d-bottom"></i>
            </div>
          </span>
        </div>

        <!--选择颜色-->
        <div class="select_color">
          <input type="text" name="color"  value="#ffffff" >
        </div>

        <input type="text" v-model="barrageText" class="danmu_text" placeholder="发送弹幕">

        <!--发送按钮-->
        <div @click="emitBarrage" class="right waves-effect waves-light">
          <span class="iconfont icon-forwardfill"></span>
        </div>
      </div>

    </div>
    <!--点赞 分享 收藏 缓存-->
    <ul class="video_action_box">
      <li @click="clickPraise()" class="c-f09d9d waves-effect">
        <i :class="{'icon-appreciate_fill_light':v.ifLike}" class="iconfont icon-appreciate"></i>
        <i class="num">{{v.likeNum}}</i>
      </li>

      <li @click="clickCollection()" class="c-ffbe4a waves-effect">
        <i :class="{'icon-favor_fill_light':v.ifCollect}" class="iconfont icon-favor"></i>
        <i class="num">{{v.collectNum}}</i>
      </li>

      <li @click="clickShare()" class="c-62c7db waves-effect">
        <i class="iconfont icon-share">
        </i><i>分享</i>
      </li>

      <li class="c-8fdac6 waves-effect">
        <a :href="'http://www.jijidown.com/video/av'+$route.query.aid" >
          <i class="iconfont icon-down">
          </i><i>缓存</i>
        </a>
      </li>
    </ul>
    <!--标题 播放量 内容介绍 面包屑-->
    <div class="video_info_box">
      <h1 class="title">{{v.videoTitle}}</h1>

      <div class="page_view">
        <div class="left_data">
          <span>
            <i class="iconfont icon-bofang"></i>
            {{formatPlayNum(v.videoView)}}
          </span>

          <span v-if="barrageJson.length"><i class="iconfont icon-danmukai"></i> {{formatPlayNum(v.videoDanmu)}}</span>
          <span v-else="barrageJson.length"><i class="iconfont icon-danmukai"></i> 0</span>
        </div>

        <i @click="videoIndoOpen()" :class="{'icon-fold':openInfo}" class="open_icon iconfont icon-unfold"></i>
      </div>

      <div class="info_box">
        <div class="info">{{v.videoDesc}}</div>


        <div class="crumbs_nav">
          <span>
            <a href="" target="_self" class="" >主页</a>
            <a href="" target="_self" class="">{{v.videoTname}}</a>
            av{{$route.query.aid}}
          </span>

          <span class="fr">UP主: {{v.videoUp}}</span>
        </div>
      </div>


    </div>
    <!--评论 显示最火的5条-->
    <div class="comment_box" >

      <p class="title">评论 <span class="c-9" >({{v.commentsCount}})</span></p>

      <ul class="comment_list">
        <li class="item" v-for="item in v.comments" >
          <a class="user_pic" href="">
            <img :src="item.member.avatar">
          </a>
          <div class="user_name_box">
            <p class="user_name">{{item.member.uname}}</p>
            <p class="user_time">{{formatCommentsTime(item.ctime)}}</p>
          </div>
          <span @click="commentsClickPraise($event)" class="praise"><i class="iconfont icon-appreciate"></i><i class="num">{{item.like}}</i></span>
          <a class="text" href="">
            {{item.content.message}}
          </a>
        </li>
      </ul>

      <!--点击更多评论-->
      <span class="more_comment_btn" v-if="v.comments.length>5" href="">点击查看更多评论</span>
      <span class="more_comment_btn" v-if="v.comments.length==0">暂时还没有人评论哦！</span>

    </div>
    <!--视频相关-->
    <div class="related_video_box">
      <p class="title">视频相关</p>

      <div class="video_list">
        <router-link class="item" onclick="location.reload();" v-for="item in v.videoRelates" :to="{name:'particulars',query:{aid:item.aid}}">
            <span class="left_video_pic">
              <img :src="item.pic">
            </span>

          <div class="right_video_info">
            <span class="video_title">{{item.title}}</span>
            <div class="video_data">
              <span>UP：{{item.owner.name}}</span>
            </div>

            <div class="video_data">
              <span class="player_num">播放：{{item.stat.view}}</span>
              <span class="text_num">
                  弹幕：{{item.stat.danmaku}}
                </span>
            </div>
          </div>
        </router-link>

        <span class="more_comment_btn" v-if="v.videoRelates.length==0">木有数据！</span>
      </div>
    </div>
    <div class="c-9 f24" style="text-align: center; padding:.2rem 0">那种网站怎么可能会有备案呢(ღ˘⌣˘ღ)</div>
  </div>
</template>
<script>
  import paletteColorPicker from "../../static/lib/palette-color-picker/palette-color-picker.min.js";
  export default {
    data(){
      return{
        topShowHide:true, // 头部显隐
        video : document.getElementById('video'), // 目标视频元素
        v:{
          videoUrl:'',// 链接
          videoTitle:'',// 标题
          videoPic:'',// 封面
          videoView:0,// 播放量
          videoDanmu:0,// 弹幕量
          videoTime:'00:00',// 时长
          videoUp:'',// up主
          videoTname:'',// 所属分类
          videoRelates:[],// 视频相关
          commentsCount:0,//评论数
          comments:[], //评论信息
          ifLike:false, // 点赞
          likeNum:666, // 假装这是已赞的数据 -_-因为b站没有点赞数据。。。。
          ifCollect:false, //假装这是收藏的状态
          collectNum:0, //收藏的数据
        },
        canPlay:false,//视频元素是否能够播放
        ifShow:false,// 控件显藏
        loading:true, // loading动画显隐
        loadingProgress:false,// 缓冲进度条定时器
        videoCurrentTime:'00:00',// 播放起初时间
        state:false,// 播放状态
        getCurrentTime:false,// 播放进度条定时器
        videoFull:false,// 全屏
        towSecsHide:'',// 2秒后隐藏
        openInfo:false,// 介绍信息
        topBg:false,// 头部背景
        screenHeight:null,// 播放器高度
        jb:false, //jb变量不给不行 播放器定位时要用到
        barrageBox:$('.danmu_box'), // 弹幕盒子
        barrageShow:true, // 是否显示弹幕
        barrageText:'',// 发送弹幕文字
        barragePosition:2,// 弹幕位置 1 top   2 左向右滚动   3 bottom
        barrageColor:'#fff',// 弹幕颜色 默认为#fff白色
        barrageJson:[], // 读取的弹幕json文件
      }
    },
    methods:{
      // 播放封面 没有退路了 点了就开始缓冲视频  直到结束或者退出页面
      loadPlayer:function () {

        let $this = this;
        $('.load_layer').hide();
        this.screenHeight = $('.player_box').outerHeight(); //记录播放器高度

        if (video.paused) {
          video.play();
          $('.load_layer').hide();
          this.state=true;
          this.topShowHide=false;
          this.dsq(); //播放开启定时器

          // 缓冲 ！没有退路了!
          function clearLoading() {
            clearInterval($this.loadingProgress)
          }

          //缓冲条
          $this.loadingProgress = setInterval(function () {
            let timeRanges = video.buffered;
            let timeBuffered = timeRanges.end(timeRanges.length - 1);
            let bufferPercent = timeBuffered / video.duration * 100;
            $('.loading_line').css("width", bufferPercent + "%");
            if (video.ended)clearLoading(); // 视频结束时 结束缓冲定时器
            console.log('缓冲中。。。')
          },1000);
        }
      },
      // 播放控件显隐
      showPlayer:function () {
        this.ifShow =! this.ifShow;
        this.topShowHide =this.ifShow;
      },
      // 播放与暂停
      player: function () {
        let $this = this;
        if (video.paused){
          clearInterval($this.getCurrentTime); //先清除定时器 预防万一


          this.state=true;
          this.loading=false;


          video.play();
          $this.dsq(); //在开启视频定时器



          if(video.ended){
            clearInterval(this.getCurrentTime); //播放完清除视频定时器
            $('.video_end').css('display','flex');
          }

        }else {
          $this.state=false;
          clearInterval($this.getCurrentTime); //暂停清除定时器

          video.pause();
        }
      },
      // 重播
      rePlay:function () {

        video.play();
        this.ifShow=false;
        this.topShowHide =this.ifShow;

        $('.video_end').hide();

        $('.timeline').children('.progress_line').css('width','0');
        clearTimeout(this.getCurrentTime); //暂停清除定时器 预防万一

        this.dsq();// 播放开启定时器

      },
      // 播放时间与进度条 主要定时器 弹幕和进度条
      dsq:function () {
        let $this = this;

        this.getCurrentTime = setInterval(function () {

          // loading动画
          if(video.readyState==4){
            $this.loading = false;
          }else {
            $this.loading = true;
          }


          // 播放进度
          $this.videoCurrentTime=$this.formatTime(Math.floor(video.currentTime));

            // 赋值进度条
            let timelineWidth = $(window).width()*.8*.5;
            let $width = timelineWidth/video.duration*video.currentTime;
            $('.timeline').children('.progress_line').css('width',$width+'px');

            if(video.ended){
              $(document).off();

              clearInterval($this.getCurrentTime);

              $this.ifShow=false;
              $this.topShowHide =true;
              $this.videoFull=false;

              $('.video_end').css('display','flex');
            }

          function readBarrage() {
            let boxWidth = $('.danmu_box').width();

            let vTime = Math.floor(video.currentTime);

            for (let i =0;i<$this.barrageJson.length;i++){

              if($this.barrageJson[i].time == vTime && !video.paused){
                //创建弹幕
                let barrage = document.createElement("span");
                let itemWidth = $this.barrageJson[i].width + boxWidth;

                barrage.innerHTML = $this.barrageJson[i].text;
                barrage.style.color = $this.barrageJson[i].color;
                barrage.style.top = $this.barrageJson[i].top + 'px';// 弹幕top定位

                let dom = document.getElementsByClassName('danmu_box')[0].appendChild(barrage);// 插入弹幕

                //不是滚动弹幕判断
                if($this.barrageJson[i].type==2){
                  setTimeout(function(){
                    barrage.style.transform = 'translateX('+ -itemWidth +'px)';// 弹幕X轴定位
                  },10);
                }else{
                  barrage.style.left= (boxWidth - barrage.clientWidth)/2+'px';// 弹幕居中定位
                  setTimeout(function(){
                    barrage.style.transform = 'translateX(0px)';// 弹幕X轴定位 这个还是用px吧
                  },10);
                }

                dom.addEventListener('webkitTransitionEnd', function () { //动画结束时删除自己
                  this.parentNode.removeChild(this);
                });
              }
            }
          }
          readBarrage();
        },1000);
      },
      // 全屏开关
      fullToggle:function () {
        this.videoFull =! this.videoFull;

        // 全屏禁止滚动
        if (this.videoFull){
          $('body').css('overflow','hidden');
        }else{
          $('body').css('overflow','auto');
          this.jb = true;
        }

      },
      // 弹幕开关
      barrageToggle:function () {
        this.barrageShow =! this.barrageShow;
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
        this.v.ifLike =!this.v.ifLike;
        if ( this.v.ifLike){
          this.v.likeNum-=1;
          //还要一些ajax 后台操作库的 code..
        }else{
          this.v.likeNum+=1;
          //还要一些ajax 后台操作库的 code..
        }
      },
      commentsClickPraise:function (event) {
          console.log(event.currentTarget);
      },
      // 收藏
      clickCollection:function () {
        this.v.ifCollect=!this.v.ifCollect;
        if ( this.v.ifCollect){
          this.v.collectNum-=1;
           //还要一些ajax 后台操作库的 code..
        }else{
          this.v.collectNum+=1;
          //还要一些ajax 后台操作库的 code..
        }
      },
      // 分享
      clickShare:function () {
        // ajax code...
        alert("分享个毛线啊");
      },
      // 发送弹幕
      emitBarrage:function () {
        let $this = this;
        let box = $('.danmu_box'); //弹幕容器

        let lineNum = parseInt(box.height() / 32); //屏幕分行 -64是留2行的高度给字幕
        let lineNumMin = parseInt(lineNum/2);
        let ranDomLine;
        let y;

        let t = Math.floor(video.currentTime * 10)/10; //记录视频当前播放时间戳
        let boxWidth = box.width();// 屏幕宽度 rem

        function createBarrge(){
          //过滤输入内容
          if ($this.barrageText <= 0 || (/^\s+$/).test($this.barrageText)) {
            alert('请输入弹幕');
            $this.barrageText='';
            return false;
          }

          //创建弹幕
          let barrage = document.createElement("span");
          barrage.innerHTML = $this.barrageText;
          let dom = document.getElementsByClassName('danmu_box')[0].appendChild(barrage);// 插入弹幕

          let itemWidth = barrage.clientWidth + boxWidth;// 获取弹幕+屏幕宽度


          if($this.barragePosition==1) {
            ranDomLine = Math.floor(Math.random() * lineNumMin); // 随机分行
            y = (ranDomLine * 32); //top位置 32是弹幕的行高

            console.log(lineNum/2);
            barrage.style.top = y + 'px';// 弹幕top定位 这个还是用px吧
            barrage.style.left = (boxWidth - barrage.clientWidth) / 2 + 'px';// 弹幕居中定位
            barrage.style.transform = "translateX(0px)";// 弹幕定位 这个还是用px吧
          }else if($this.barragePosition==3){

            ranDomLine =  Math.floor(Math.random()*(lineNum-lineNumMin)+lineNumMin);// 随机分行

            y = (ranDomLine*32); //top位置 32是弹幕的行高

            barrage.style.top = y+'px';// 弹幕top定位 这个还是用px吧
            barrage.style.left= (boxWidth - barrage.clientWidth)/2+'px';// 弹幕居中定位
            barrage.style.transform = "translateX(0px)";// 弹幕定位 这个还是用px吧
          }else {
            ranDomLine = Math.floor(Math.random() * lineNum); // 随机分行
            y = (ranDomLine*32); //top位置 32是弹幕的行高

            barrage.style.top = y+'px';// 弹幕top定位 这个还是用px吧
            barrage.style.transform = 'translateX('+ -itemWidth +'px)';// 弹幕定位 这个还是用px吧
          }

          barrage.setAttribute("time", t);
          barrage.setAttribute("thisWidth", barrage.clientWidth);

          barrage.style.color = $this.barrageColor;// 颜色
          $this.barrageText='';// 发射后清除输入框

          dom.addEventListener('webkitTransitionEnd', function(){ //动画结束时删除自己
            this.parentNode.removeChild(this);
          });
        };
        createBarrge();
      },

    },
    created (){

      let $this = this;
      this.$axios.get('../../static/barrageJson.json').then(function (res) {
        $this.barrageJson = res.data.list;
      },function (res) {
        console.log(res+'获取弹幕文件失败！')
      });



      // 视频链接
      let v_url = 'https://api.imjad.cn/bilibili/v2/?aid='+this.$route.query.aid+'&page=1&quality=3&type=mp4';
      // 视频信息
      let info_url = 'https://api.imjad.cn/bilibili/v2/?aid='+this.$route.query.aid;
//      // 评论信息 按点赞最多来排
      let comments_url = 'https://api.imjad.cn/bilibili/v2/?get=comments&aid='+this.$route.query.aid+'&sort=2';



      this.$axios.get(v_url).then(function(res){
        $this.v.videoTime= $this.formatTime(Math.floor(res.data.timelength/1000));

        if (res.data.durl instanceof Array){
          $this.v.videoUrl=res.data.durl[0].url;
        }else {
          $this.v.videoUrl=res.data.durl.url;
        }

      },function(res) {
        console.log(res.status+'获取视频失败！')
      });

      this.$axios.get(info_url).then(function(res){
        $this.v.videoTitle = res.data.data.title;
        $this.v.videoPic = res.data.data.pic;
        $this.v.videoUp = res.data.data.owner.name;
        $this.v.videoTname = res.data.data.tname;
        $this.v.videoView = res.data.data.stat.view;
        $this.v.videoDanmu = res.data.data.duration;
        $this.v.videoDesc = res.data.data.desc;
        $this.v.videoRelates = res.data.data.relates.slice(0,5);
        $this.v.collectNum = res.data.data.stat.favorite;
      },function(res) {
        console.log(res.status+'获取视频信息失败！')
      });

      this.$axios.get(comments_url).then(function(res){
        $this.v.comments=res.data.data.replies;
        $this.v.commentsCount = res.data.data.page.count;
      },function(res) {
        console.log(res.status+'获取评论信息失败！')
      });


    },
    mounted () {
      let $this=this;
      // 监听可以播放了之后 关闭loading动画 再显示播放按钮
      document.getElementById('video').addEventListener("canplay", function () {
          console.log('可以开始播放了');
        $this.canPlay=true;
        $this.loading =false;
      }, false);

      // 拖拽进度条
      $('.player_box').on('touchend touchmove','.timeline',function(e){
        let x = e.originalEvent.changedTouches[0].clientX-this.offsetLeft;
        let X = x < 0 ? 0 : x ;
        let W = $(this).width();
        let place = X > W ? W : X;
        video.currentTime = (place/W).toFixed(2)*video.duration;
        $(this).children('.progress_line').css({width:(place/W).toFixed(2)*100+"%"});

        $this.videoCurrentTime = $this.formatTime(Math.floor(video.currentTime));
      });

      // 3秒后隐藏播放控件
      $(document).on('click touchend touchmove','.video_box,.top_box',function() {
        clearInterval($this.towSecsHide);
        if(!video.paused && $(window).scrollTop()<=$('.player_box').height()-$('.top_box').height()){
          $this.towSecsHide = setTimeout(function () {
            $this.ifShow=false;
            $this.topShowHide =$this.ifShow;
          },3000)
        }
      });

      //横竖屏切换
      $(window).on("orientationchange",function(){
//        // 如果想横竖屏切换时停止播放就开启这段注释
//        clearInterval($this.towSecsHide);
//        clearTimeout($this.getCurrentTime);
//        $this.ifShow=true;
//        $this.state=false;
//        video.pause();

        let timelineWidth = $(window).width()*.8*.5;
        let $width = timelineWidth/video.duration*video.currentTime;
        $('.timeline').children('.progress_line').css('width',$width+'px');
      });

      //  播放时播放器fixed在最上方 暂停时视频可以跟滚动条滑动。还有一些top_nav的一些变化 和 横竖屏时播放暂停时播放器fixed 下面元素对空缺位margin-top的补位
      $(window).scroll(function () {
        let top = $(window).scrollTop();
        if(top>=$('.player_box').height()-$('.top_box').height() && !$('.player_box').hasClass('video_fixed')){
          clearInterval($this.towSecsHide);
          $this.topBg=true;
          $this.topShowHide=true;
        }else if(top==0 && !$this.state && !$('.player_box').hasClass('iffull')){
          $('.video_action_box').css({'margin-top':'0px'});
          $('.player_box').removeClass('video_fixed');
        } else if ($this.state && $('.player_box').hasClass('video_fixed')){
          $('.video_action_box').css('margin-top',$this.screenHeight+'px');
        }else {
          $this.topBg = false;
        }
      });


      //选择弹幕位置
      function selectPosition() {
        let positionBox = $('.select_position');
        let dsq = null;

        $('.position .selected').on('click',function () {
          positionBox.fadeToggle();
          if (dsq !=null){
            clearTimeout(dsq);
          }
          dsq = setTimeout(function () {
            positionBox.fadeOut();
          },2000);
        });

        $('.select_position .iconfont').click(function () {
          let val = $(this).attr('position-data');
          $(this).css('outline-color','#333').siblings().css('outline-color','#fff');

          let className = $(this).attr('class');
          $('.position .selected').attr('class', 'selected '+className); //selected后面要有个空格

          $this.barragePosition = val;

          clearTimeout(dsq);
          $('.select_position').fadeOut();
        });
      }
      selectPosition();

      //选择颜色 用的paletteColorPicker插件
      // Advanced exacmple
      $('[name="color"]').paletteColorPicker({
        // Color in { key: value } format
        colors: [
          {"红": "#E91E63"},
          {"橙": "#ef7222"},
          {"黄": "#ffbe4a"},
          {"绿": "#9affa0"},
          {"青": "#8fdac6"},
          {"蓝": "#0094b0"},
          {"紫": "#b0388b"},
          {"粉": "#F8BBD0"},
        ],
        // Add custom class to the picker
        custom_class: 'double',
        // Force the position of picker's bubble
        position: 'downside', // default -> 'upside'
        // Where is inserted the color picker's button, related to the input
        insert: 'after', // default -> 'before'
        // Don't add clear_btn
        clear_btn: 'last', // null -> without clear button, default -> 'first'
        // Timeout for the picker's fade out in ms
        timeout: 2000, // default -> 2000
        // Forces closin all bubbles that are open before opening the current one
        close_all_but_this: false, // default is false
        // Sets the input's background color to the selected one on click
        // seems that some users find this useful ;)
        set_background: false, // default is false

        // Callback on change value
        //回调
        onchange_callback: function( clicked_color ) {
          $this.barrageColor = clicked_color;
          $('.palette-color-picker-bubble').fadeOut();
        }
      });

    },
    watch: {
      state() {
        if (this.state){
          $('.video_action_box').css('margin-top',this.screenHeight+'px');
          $('.player_box').addClass('video_fixed');
        }
      },
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../static/lib/palette-color-picker/palette-color-picker.css";
  @import "../assets/css/info.css";
</style>
