<template lang="html">
  <div>
    <!--头部-->
    <div class="top_box">
      <a class="back" href="javascript:history.go(-1);">
        <i class="iconfont icon-back"></i>
      </a>
    </div>

    <div class="pic_box">
      <div class="bg waves-effect waves-light" :style="{backgroundImage: 'url(' + userInfo.pic + ')'}"></div>

      <div class="user_pic" :style="{backgroundImage: 'url(' + userInfo.pic + ')'}">
        <input type="file" id="file_pic" @change="setPic($event)">
      </div>

    </div>

    <div class="info_option">
      <div @click="openPopupName()" class="option waves-effect waves-button">
        昵称：
        <span class="right_box">
          <i class="user_name">{{userInfo.name}}</i>
          <i class="iconfont icon-gengduo"></i>
        </span>
      </div>

      <div @click="openPopupSex()"  class="option waves-effect waves-button">
        性别：
        <span class="right_box">
          <i class="user_name">{{userInfo.sex}}</i>
          <i class="iconfont icon-gengduo"></i>
        </span>
      </div>
      <div class="option waves-effect waves-button">
        等级：
        <span class="right_box">
          <i class="user_name">{{userInfo.level}}</i>
        </span>
      </div>

      <div @click="openPopupAutograph()"  class="option waves-effect waves-button personality_box">
        个性签名：
        <span class="right_box personality_text">{{userInfo.autograph}}</span>
      </div>
    </div>

    <!--头像裁剪layer-->
    <mt-popup v-model="popupCut" class="cut_layer" position="right" pop-transition="popup-fade">
      <div class="cut_pic">
        <img id="cutImg" :src="upPath" alt="tp">
      </div>
      <div class="action">
        <button class="cancel" @click="cancelPic()">取消</button>
        <button class="determine" @click="keepPic()">确定</button>
      </div>
    </mt-popup>

    <!--昵称layer-->
    <mt-popup v-model="popupName" position="right" pop-transition="popup-fade">
      <div class="input_box">
        <input type="text" placeholder="请输入新昵称" v-model="userInfo.name" maxlength="12">
          <span class="action_btn" v-show="closeBtn" @click="closePopup()">取消</span>
          <span class="action_btn" v-show="keepBtn" @click="keepPopup()">保存</span>
      </div>
    </mt-popup>

    <!--性别layer-->
    <mt-popup v-model="popupSex" position="right" pop-transition="popup-fade">
      <div class="select_box">
          <label class="sex_box">
            <img class="sex_pic" @click="setBoySty()" :class="{'on':userInfo.sex=='萌妹'}"  :src=" require('../assets/images/boy_'+boySty+'.jpg')" alt="">
            <input name="sex" v-model="userInfo.sex" :checked="userInfo.sex=='基佬'" type="radio" value="基佬">
          </label>
          <label class="sex_box">
            <img class="sex_pic" @click="setGirlSty()"  :class="{'on':userInfo.sex=='基佬'}"  :src=" require('../assets/images/girl_'+girlSty+'.jpg')"  alt="">
            <input name="sex" v-model="userInfo.sex" :checked="userInfo.sex=='萌妹'" type="radio" value="萌妹">
          </label>

        <div>
          <span class="action_btn" v-show="closeBtn" @click="closePopup()">取消</span>
          <span class="action_btn" v-show="keepBtn" @click="keepPopup()">保存</span>
        </div>

      </div>
    </mt-popup>

    <!--个性签名layer-->
    <mt-popup v-model="popupAutograph" position="right" pop-transition="popup-fade">
      <div class="input_box">
        <div class="textarea_box">
          <textarea id="textarea" placeholder="请输入个性签名" v-model="userInfo.autograph" maxlength="30"></textarea>
          <i class="tips_num">{{tipsNum}}</i>
        </div>
        <span class="action_btn" v-show="closeBtn" @click="closePopup()">取消</span>
        <span class="action_btn" v-show="keepBtn" @click="keepPopup()">保存</span>
      </div>
    </mt-popup>



  </div>
</template>


<script>
  require('../../static/lib/flexText/flexText.min.js');
  import Cropper from 'cropperjs';
  export default{
    data() {
      return{
        popupName:false,
        popupSex:false,
        popupAutograph:false,
        popupCut:false,

        closeBtn:true,
        keepBtn:false,

        upPath:'',
        userInfo:{
          pic:require('../assets/images/banner_01.jpg'),
          name:'赵日天',
          sex:'基佬',
          level:'新手上路',
          autograph:'哈哈哈哈哈哈哈几把',
        },
        picValue:'',
        cropper:'',
        croppable:false,
        panel:false,
        url:'',

        //头像切换
        boySty:1,
        girlSty:1,


        //tips剩余字数
        hasNum:'',
        maxNum:30,
        tipsNum:'',




    }
    },
    methods:{
      setPic(e) {

        this.popupCut=true;

        let files = e.target.files || e.dataTransfer.files;
        if (!files.length) return;
        this.panel = true;
        this.picValue = files[0];

        this.url = URL.createObjectURL(this.picValue);// 解释地址


        //每次替换图片要重新得到新的url
        if(this.cropper){
          this.cropper.replace(this.url);
        }
        this.panel = true;


      },
      //创造画布
      getRoundedCanvas (sourceCanvas) {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        var width = sourceCanvas.width;
        var height = sourceCanvas.height;

        canvas.width = width;
        canvas.height = height;

        context.imageSmoothingEnabled = true;
        context.drawImage(sourceCanvas, 0, 0, width, height);
        context.globalCompositeOperation = 'destination-in';
        context.beginPath();
//        context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true); //圆形
        context.fill();
        return canvas;
      },
      // 确定保存
      keepPic(){
        this.panel = false;
        let croppedCanvas;
        let roundedCanvas;

        if (!this.croppable) {
          return;
        }

        croppedCanvas = this.cropper.getCroppedCanvas();// Crop

        roundedCanvas = this.getRoundedCanvas(croppedCanvas); // Round  获取画布64

        this.userInfo.pic = roundedCanvas.toDataURL();//赋值
        $('#file_pic').val('');// 清空值 同一图片重复选择
        this.popupCut=false;// 最后关闭弹出

        //code....
      },
      cancelPic(){
        $('#file_pic').val('');// 清空值 同一图片重复选择
        this.popupCut=false;
      },

      // 头像
      setBoySty(){
        this.boySty=2;
        this.girlSty=1;
      },
      setGirlSty(){
        this.boySty=1;
        this.girlSty=2;
      },
      openPopupName:function () {
        this.popupName=true;
      },

      openPopupSex:function () {
        this.popupSex=true;
      },
      openPopupAutograph:function () {
        this.popupAutograph=true;
        this.hasNum = this.userInfo.autograph.length;
        this.tipsNum = this.maxNum-this.hasNum;

      },

      // 取消 关闭layer层
      closePopup:function () {
        this.popupName=false;
        this.popupSex=false;
        this.popupAutograph=false;

      },

      //模拟提交from集合 ajax 实际上要一条一条分开提交
      keepPopup:function () {
        // 保存 关闭layer层 查表对数据库的操作
        this.popupName=false;
        this.popupSex=false;
        this.popupAutograph=false;




        // 变回取消状态
        this.keepBtn = false;
        this.closeBtn = true;
      }
    },
    mounted () {
      $('#textarea').flexText();

      //初始化这个裁剪框
      var self = this;
      var image = document.getElementById('cutImg');

      var screenWidth = $(window).width();
      var screenHeight =  $(window).height();

      this.cropper = new Cropper(image, {
        aspectRatio: 1 / 1,//裁剪框比例 1：1
        minContainerHeight: screenHeight,
        minContainerWidth: screenWidth,
        strict:false,
        viewMode: 1,//显示
        autoCropArea:0.6, // 默认值0.8（图片的80%）。0-1之间的数值，定义自动剪裁框的大小。
        guides: false,//裁剪框虚线 默认true有
        dragMode: "move",
        background: false,// 容器是否显示网格背景
        movable: true,//是否能移动图片
        cropBoxMovable: true,//是否允许拖动裁剪框
        cropBoxResizable: false,//是否允许拖动 改变裁剪框大小
        ready: function () {
          self.croppable = true;
        }
      });

    },
    watch: {
      'userInfo.name'() {
        this.keepBtn = true;
        this.closeBtn = false;
      },
      'userInfo.sex'() {
        this.keepBtn = true;
        this.closeBtn = false;
      },
      'userInfo.autograph'() {

        this.hasNum = this.userInfo.autograph.length;
        this.tipsNum = this.maxNum - this.hasNum;

        this.keepBtn = true;
        this.closeBtn = false;
      },
    },
  }
</script>

<style>

  .cropper-view-box{
    outline-color: transparent !important;
  }
</style>
<style lang="scss" scoped>
  @import "../../static/lib/cropper/cropper.min.css";
  @import "../../static/lib/flexText/flexText.css";

  .top_box {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    overflow: hidden;
    padding: 0 0;
    z-index: 999;
    background-color: transparent !important;
    font-size: .32rem;
    transition: .5s all;
    color: #fff;

    .iconfont {
      position: absolute;
      top: 0;
      left: .3rem;
      margin: auto;
      font-size: .5rem;
      color: #fff;
    }

  }
  .pic_box{
    position: relative;
    height: 4.5rem;


    .bg{
      position: absolute;
      width: 100%;
      height: 100%;
      background:50% 50% no-repeat;
      background-size: cover;

      -webkit-filter: blur(3px); /* Chrome, Opera */
      -moz-filter: blur(3px);
      -ms-filter: blur(3px);
      filter: blur(3px);
    }



    .user_pic{
      width: 2rem;
      height: 2rem;
      overflow: hidden;
      position: absolute;
      top:0;
      bottom:0;
      left:0;
      right:0;
      z-index: 11;
      margin: auto;
      box-sizing: border-box;

      border-radius:50%;
      border: .05rem solid #fff;
      background:50% 50% no-repeat;
      background-size: cover;


      input{
        position: absolute;
        top: 0;
        left: 0;
        width:100%;
        height: 100%;
        opacity: 0;
      }
    }
  }
  .info_option{
    overflow: hidden;
    .option{
      padding: 0 .2rem;
      position: relative;
      height: 1rem;
      line-height: 1rem;
      border-bottom: .02rem solid #f0f0f0;
      .right_box{
        position: absolute;
        right: .2rem;
        color: #999;

      .iconfont{
        font-size: .26rem;
      }
    }
  }
  .personality_box{
    height: auto !important;

  }
  .personality_text{
    white-space: normal;
    position: inherit !important;
    overflow: hidden;
    display: inline-block;
    float: right;
    max-width: 60%;
    right: 0 !important;
    line-height: .4rem;
    margin: .35rem 0 ;
  }


  }
  .mint-popup{
    width: 100%;
    height:100%;
  }

  .input_box{
    padding: .2rem;
    overflow: hidden;

    input{
      width: 80%;
      float: left;
      height: .8rem;
      font-size: .28rem;
      border-bottom: .02rem solid #8fdac6;
    }
    .textarea_box{
      width: 80%;
      float: left;
      overflow: hidden;
      position: relative;
      min-height: .5rem;
      border-bottom: .02rem solid #8fdac6;

      textarea{
        width: 100%;
        line-height: .5rem;
        box-sizing: border-box;
        font-size: .28rem;
        resize: none;
        vertical-align: middle;
      }
      .tips_num{
        position: absolute;
        bottom: 0;
        right: 0;
        color:#62c7db;
        font-size: .24rem;
      }

    }
    .action_btn{
      width: 20%;
      line-height: .8rem;
      float: left;
      display: inline-block;
      text-align: center;
    }
  }

  .select_box{
    text-align: center;
    .sex_box{
      width: 1.5rem;
      height: 1.5rem;
      display: inline-block;
      overflow: hidden;
      border-radius: 50%;
      border: .04rem solid #fff;
      margin: .5rem;
      position: relative;
    }
    .on{
      filter: grayscale(100%);
      -webkit-filter: grayscale(100%);
      -moz-filter: grayscale(100%);
      -ms-filter: grayscale(100%);
      -o-filter: grayscale(100%);
    }

    .sex_box img{
      position: absolute;
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;
      z-index: 6;
      width: 100%;
    }
  }

  .action{
    position: fixed;
    bottom: 1rem;
    width: 100%;
    text-align: center;

  }
  .action button{
    width: 1.5rem;
    height: .8rem;
    margin: 0 .2rem;
    display: inline-block;
    line-height: .8rem;
    font-size: .32rem;
    background: transparent;
    color: #fff;
  }


</style>
