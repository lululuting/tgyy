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
        <input type="file">
      </div>

    </div>

    <div class="info_option">
      <div @click="openPopup()" class="option waves-effect waves-button">
        昵称：
        <span class="right_box">
          <i class="user_name">赵日天</i>
          <i class="iconfont icon-gengduo"></i>
        </span>
      </div>

      <div @click="openPopup()"  class="option waves-effect waves-button">
        性别：
        <span class="right_box">
          <i class="user_name">男</i>
          <i class="iconfont icon-gengduo"></i>
        </span>
      </div>
      <div class="option waves-effect waves-button">
        等级：
        <span class="right_box">
          <i class="user_name">新手上路</i>
        </span>
      </div>

      <div @click="openPopup()"  class="option waves-effect waves-button personality_box">
        个性签名：
        <span class="right_box personality_text">
          v哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
        </span>
      </div>
    </div>


    <mt-popup v-model="popupVisible" position="right" pop-transition="popup-fade">

      <div class="nickname_popup">
        <input type="text" placeholder="请输入新昵称" v-model="value" maxlength="12">

        <span class="action_btn" v-show="closeBtn" @click="closePopup()">取消</span>
        <span class="action_btn"  v-show="keepBtn" @click="keepPopup()">保存</span>
      </div>

    </mt-popup>

  </div>
</template>
<script>
  export default{
    data() {
      return{
        popupVisible:false,
        closeBtn:true,
        keepBtn:false,
        userInfo:{
            pic:require('../assets/images/banner_01.jpg'),
        },
        value:'赵日天',

      }
    },
    methods:{
      openPopup:function () {
        this.popupVisible=true;
      },
      closePopup:function () {
        this.popupVisible=false;
      },
      keepPopup:function () {
        // 保存 查表对数据库的操作
        this.popupVisible=false;
      }
    },
    watch: {
      value: function () {

        if (this.value != '') {
          this.keepBtn = true;
          this.closeBtn = false;
        } else {
          this.keepBtn = false;
          this.closeBtn = true;
        }
      },
    }
  }
</script>
<style lang="scss" scoped>
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
    background-color: transparent;
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

  .nickname_popup{
    height: .8rem;
    line-height: .8rem;
    padding: .2rem;
    overflow: hidden;

    input{
      width: 80%;
      float: left;
      height: .8rem;
      font-size: .28rem;
      border-bottom: .02rem solid #8fdac6;
    }
    .action_btn{
      width: 20%;
      float: left;
      display: inline-block;
      text-align: center;
    }
  }
</style>
