<template lang="html">
  <div>
    <!--头部-->
    <div class="top_box">
      <a class="back waves-effect  waves-light"  onclick="self.location=document.referrer;"  href="">
        <i class="iconfont icon-back"></i>
      </a>
      <p class="title">某条音乐</p>
      <span class="more waves-effect  waves-light">
        <i class="iconfont icon-moreandroid"></i>
      </span>
    </div>

    <div class="main">
      <!--背景-->
      <div class="main_bg" :style="{backgroundImage: 'url(' + musicPic + ')'}"></div>

      <!--播放机指针-->
      <div class="switch">
        <img src="../assets/images/bofangzheng.png" alt="">
      </div>

      <!--播放机cd封面-->
      <div class="cover_box" :style="{backgroundImage: 'url(' + playerCd + ')'}">
        <div class="cover_pic":style="{backgroundImage: 'url(' + musicPic + ')'}">
        </div>
      </div>
    </div>


    <div class="player">
      <!--喜欢， 下载，评论 ，更多-->
      <div>
        <span class="iconfont icon-moreandroid"></span>
        <span class="iconfont icon-moreandroid"></span>
        <span class="iconfont icon-moreandroid"></span>
        <span class="iconfont icon-moreandroid"></span>
      </div>

      <!--进度条-->
      <div>
        <span></span>
        <div class="">
          <p></p>
          <p></p>

          <i></i>
        </div>
        <span></span>
      </div>

      <!--播放按钮-->
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
          playerCd:require('../assets/images/guangdie.png'),
          musicPic:require('../assets/images/user_pic.png'),
      }
    },
  }
</script>
<style lang="scss" scoped>
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
    border-bottom: 0.02rem solid #fff;
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
      text-align: left;
      margin-left: 1rem;
    }
    .forget_pwd{
      position: absolute;
      height: 1rem;
      line-height: 1rem;
      color: #fff;
      margin: auto;
      top: 0;
      bottom: 0;
      right: .3rem;
      text-align: center;
      font-size: .24rem;
    }
    .iconfont{
      font-size: .5rem;
      color: #fff;
    }
  }
  .main{
    position: absolute;
    width:100%;
    height:100%;

    .main_bg{
      position: absolute;
      top:0;
      width:100%;
      height:100%;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: cover;
      overflow: hidden;
      -webkit-filter: blur(40px); /* Chrome, Opera */
      -moz-filter: blur(40px);
      -ms-filter: blur(40px);
      filter: blur(40px);
      filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=40, MakeShadow=false);

    }
  .switch{
      width: 1.5rem;
      position: absolute;
      top: 1rem;
      left: 1rem;
      right: 0;
      margin: auto;
      z-index: 999;
    }
    .cover_box{
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      overflow: hidden;
      background-size: cover;
      display: block;
      position: relative;
      margin: 2.3rem auto;
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
    }
  }

  .player{
    position: absolute;
    bottom: 0;
  }

</style>
