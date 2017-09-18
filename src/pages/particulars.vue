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
    <div class="player_box" :class="{'iffull':videoFull,'video_fixed':jb}">
      <!--播放封面-->
      <div class="load_layer">
        <img class="" src="../assets/images/banner_01.jpg" >
        <i @click="loadPlayer" class="iconfont icon-bofang load_player_icon"></i>
        <div class="video_time" v-text="videoTime"></div>
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
        <video @canplaythrough="videoLength" id="video" width=100% height=100%  src="../../static/video/xkczpj.mp4"  type="video/mp4"></video>

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

          <span v-if="barrageJson.length"><i class="iconfont icon-danmukai"></i> {{barrageJson.length}}</span>
          <span v-else="barrageJson.length"><i class="iconfont icon-danmukai"></i> 0</span>
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
  import paletteColorPicker from "../../static/palette-color-picker/palette-color-picker.min.js";
  export default {
    data(){
      return{
        topShowHide:true, // 头部显隐
        video : document.getElementById('video'), // 目标视频
        ifShow:false,// 控件显藏
        loading:false, // loading动画显隐
        loadingProgress:false,// 缓冲进度条定时器
        videoTime:'',// 视频时长
        videoCurrentTime:'00:00',// 播放起初时间
        state:false,// 播放状态
        getCurrentTime:false,// 播放进度条定时器
        videoFull:false,// 全屏
        towSecsHide:'',// 2秒后隐藏
        openInfo:false,// 介绍信息
        topBg:false,// 头部背景
        screenHeight:null,// 播放器高度
        // 格式化时间戳
        formatTime:function (second) {
          return [parseInt(second / 60 ), second% 60].join(":").replace(/\b(\d)\b/g, "0$1");
        },
        jb:false, //jb变量不给不行 播放器定位时要用到
        barrageBox:$('.danmu_box'), // 弹幕盒子
        barrageShow:true, // 是否显示弹幕
        barrageText:'',// 发送弹幕文字
        barragePosition:2,// 弹幕位置 1 top   2 左向右滚动   3 bottom
        barrageColor:'#fff',// 弹幕颜色 默认为白色
        barrageJson:[], // 读取弹幕json文件
      }
    },
    methods:{
      // 播放封面 没有退路了 点了就开始缓冲视频  直到结束或者退出页面
      loadPlayer:function () {
          let $this = this;
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

          this.loadingProgress = setInterval(function () {

            //缓冲条
            let timeRanges = video.buffered;
            // 获取以缓存的时间
            let timeBuffered = timeRanges.end(timeRanges.length - 1);
            // 获取缓存进度，值为0到1
            let bufferPercent = timeBuffered / video.duration * 100;

            $('.loading_line').css("width", bufferPercent + "%");

            if (video.ended)clearLoading(); // 视频结束时 结束缓冲定时器
          },1000);
        }
      },
      // 播放控件显隐
      showPlayer:function () {
        this.ifShow =! this.ifShow;
        this.topShowHide =this.ifShow;
      },
      // 计算视频长度
      videoLength:function () {
        this.videoTime=this.formatTime(Math.floor(video.duration));
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
        alert("分享");
      },
      // 下载
      clickDownload:function () {
        // ajax code...
        alert("下载");
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
    mounted () {
      let $this=this;


      this.$axios.get('../../static/barrageJson.json').then(function (res) {
        $this.barrageJson = res.data.list;
      }).catch(function (res) {
        console.log('获取弹幕文件失败！')
      });


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
          $('.video_action_box').css('margin-top',$this.screenHeight+'px'); //用px,rem后面出问题了
        }else {
          $this.topBg = false;
        }
      });



      // 选择位置
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
  @import "../../static/palette-color-picker/palette-color-picker.css";
  @import "../assets/css/info.css";
</style>
