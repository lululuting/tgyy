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


    <!--全景容器-->
    <div class="qj_box">
      <!--loading-->
      <div v-show="loadingAnim" class="loading_amin">
        <div class="cube c1"></div>
        <div class="cube c2"></div>
        <div class="cube c4"></div>
        <div class="cube c3"></div>
      </div>

      <div class="container">
        <div id="your-pano"></div>
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
      <h1 class="title">【全景】几把骨大战几把瘸</h1>

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
          自拍  有参考HTF手书AV1111，BGM：【96猫】こちら、幸福安心委员会です，略有改词伪全员向，主要是恶魔和面具的拟人别问我为啥没有刀龙…虽然是反派但终究是人类就是觉得如果没有剧情需要和主角光环，恶魔应该还是比人类厉害
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

    <div class="c-9 f24" style="text-align: center; padding:.2rem 0">那种网站怎么可能会有备案呢(ღ˘⌣˘ღ)</div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        topShowHide: true, // 头部显隐
        topBg: '',// 2秒后隐藏
        openInfo: false,// 介绍信息
        loadingAnim:true,
      }
    },
    methods: {
      // 打开介绍
      videoIndoOpen: function () {
        this.openInfo = !this.openInfo;
        let $height = $('.video_info_box .info').height() + $('.crumbs_nav').height() + 40;
        if (this.openInfo) {
          $('.video_info_box .info_box ').css('height', $height / 100 + 'rem');
        } else {
          $('.video_info_box .info_box ').css('height', '.4rem');
        }
      },
      // 点赞
      clickPraise: function () {
        // ajax code...
        $(event.currentTarget).find('.iconfont').addClass('icon-appreciate_fill_light');
        $(event.currentTarget).find('.num').text(Number($(event.currentTarget).find('.num').text()) + 1);
      },
      // 收藏
      clickCollection: function () {
        // ajax code...
        $(event.currentTarget).find('.iconfont').addClass('icon-favor_fill_light');
        $(event.currentTarget).find('.num').text(Number($(event.currentTarget).find('.num').text()) + 1);
      },
    },
    mounted () {
      let $this = this;

      $(window).scroll(function () {
        let top = $(window).scrollTop();

        if (top >= $('.container').height() - $('.top_box').height()) {
          $this.topBg = true;
        } else {
          $this.topBg = false;
        }
      });

      let div = document.getElementById('your-pano');
      var i = new PhotoSphereViewer({
        panorama: 'https://pannellum.org/images/alma.jpg',
        container: div,
        time_anim: false, //可选，默认值为2000，全景图在time_anim毫秒后会自动进行动画。（设置为false禁用它）
        theta_offset: 1440, //过时的选项，可选，默认值为1440，自动动画时水平方向的速度。
        size: { //可选，默认值null，全景图容器的最终尺寸。例如：{width: 500, height: 300}。
          width: '100%',
          height: 400,
        },
//        autoload: true, //可选，默认值为true，true为自动调用全景图，false为在后面加载全景图（通过.load()方法）。
//        usexmpdata: true, //可选，默认值为true，如果Photo Sphere Viewer必须读入XMP数据则为true。
//        default_position: {}, //可选，默认值为{}，定义默认的位置，及用户看见的第一个点，例如：{long: Math.PI, lat: Math.PI/2}。
          min_fov: 30, //可选，默认值为30，观察的最小区域，单位degrees，在1-179之间。
          max_fov: 90, //可选，默认值为90，观察的最大区域，单位degrees，在1-179之间。
          allow_user_interactions: true, //可选，默认值为true，设置为false则禁止用户和全景图交互（导航条不可用）。
          tilt_up_max: Math.PI / 2 , //可选，默认值为Math.PI/2，向上倾斜的最大角度，单位radians。
          tilt_down_max: Math.PI / 2 , //可选，默认值为Math.PI/2，向下倾斜的最大角度，单位radians。
          zoom_level: 0, //可选，默认值为0，默认的缩放级别，值在0-100之间。
          long_offset: Math.PI / 360, //可选，默认值为PI/360，mouse/touch移动时每像素经过的经度值。
          lat_offset: Math.PI / 180,//可选，默认值为PI/180，mouse/touch移动时每像素经过的纬度值。
          anim_speed: '1rpm', //可选，默认值为2rpm，动画的速度，每秒/分钟多少radians/degrees/revolutions。
          navbar: true, //可选值，默认为true。显示导航条。
          navbar_style: {//可选值，默认为{}。导航条的自定义样式。下面是可用的样式列表：
          backgroundColor: 'rgba(000, 000, 000,1)', //导航条的背景颜色，默认值为rgba(61, 61, 61, 0.5)。
          buttonsColor: 'rgba(255, 255, 255, 1)', //按钮的前景颜色，默认值为transparent。
          activeButtonsBackgroundColor: 'rgba(255, 255, 255, .5)', //按钮激活状态的背景颜色，默认值为rgba(255, 255, 255, 0.1)。
          buttonsHeight: 40, //按钮的高度，单位像素，默认值为20。
          autorotateThickness: 2, //autorotate图标的厚度，单位像素，默认值为1。

          zoomRangeWidth: 0, //缩放的范围，单位显示，默认值50。
          zoomRangeThickness: 0, //缩放的范围的厚度，单位像素，默认值1。
          zoomRangeDisk: 0, //缩放范围的圆盘直径，单位像素，默认值为7。

          fullscreenRatio: 3 / 3, //全屏图标的比例，默认值为3/4。
          fullscreenThickness: 4, //全屏图标的厚度，单位像素，默认值为2。
          loading_msg:'', //可选，默认值为Loading…，图片加载时的提示文字。
        },
//        loading_img: null, //可选，默认值为null，在加载时显示的图片的路径。
        onready: loaded, //可选值，默认值为null。当全景图准备就绪并且第一张图片显示时的回调函数
      });

      //全景图准备就绪并且第一张图片显示时的回调函数
      function loaded() {
        $this.loadingAnim = false;
        i.toggleDeviceOrientation();
        console.log('准备好了');
      }
//      方法介绍
//      addAction()：添加事件（插件没有提供执行事件的方法，似乎是提供给插件内部使用的）。
//      fitToContainer()：调整全景图容器大小为指定大小。
//      getPosition()：获取坐标经纬度。
//      getPositionInDegrees()：获取经纬度度数。
//      getZoomLevel()：获取缩放级别。
//      load()：加载全景图（）。
//      moveTo(longitude, latitude)：根据经纬度移动到某一点。
//      rotate(dlong, dlat)：根据经纬度度数移动到某一点。
//      toggleAutorotate()：是否开启全景图自动旋转。
//      toggleDeviceOrientation()：是否开启重力感应方向控制。
//      toggleFullscreen()：是否开启全景图全屏。
//      toggleStereo()：是否开启立体效果（可用于WebVR哦）。
//      zoom(level)：设置缩放级别。
//      zoomIn()：放大。
//      zoomOut()：缩小。

//      window.addEventListener('deviceorientation', function(e){
//        console.log('absolute: ' + e.absolute)
//        console.log('alpha: ' + e.alpha)
//        console.log('beta: ' + e.beta)
//        console.log('gamma: ' + e.gamma)
//      });
    },
  }
</script>
<style lang="scss" scoped>
  @import "../assets/css/info.css";
</style>

