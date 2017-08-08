<template lang="html">
  <div class="bg_box">
    <!--头部-->
    <div class="top_box">
      <a class="back waves-effect  waves-light" href="javascript:history.go(-1);">
        <i class="iconfont icon-back"></i>
      </a>
      <span class="title">登录</span>
      <a class="forget_pwd" href="">忘记密码？</a>
    </div>

    <!--banner-->
    <div class="login_banner">
      <img :src="banner" alt="">
    </div>

    <div class="from_box">
      <div class="input_box">
          <i class="iconfont icon-people"></i>
          <input type="text" placeholder="请输入手机号/邮箱" maxlength="12">
      </div>

      <div class="input_box">
          <i class="iconfont icon-lock"></i>
          <input type="password" placeholder="请输入密码" maxlength="12">
      </div>

      <div class="action_box">
        <router-link class="button register_btn" to="/register">注册账号</router-link>
        <button class="button login_btn">登录</button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        banner:require('../assets/images/banner_012.jpg'),
      }
    },

  }
</script>
<style lang="scss" scoped>
  body{
    background: #8fdac6 !important;
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
    background-color: #8fdac6;
    /*background-image:-webkit-linear-gradient(90deg,#8fdac6, #7896da);*/
    /*background-image:linear-gradient(90deg,#8fdac6,#7896da);*/

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
  .login_banner{
    margin-top: 1rem;
  }

  .from_box{
    width: 80%;
    margin: 0 auto;


    .input_box{
      height: 1rem;
      line-height: 1rem;
      margin-top: .4rem;
      position: relative;
      overflow: hidden;
      border-bottom: .01rem solid #ccc;

      .iconfont{
        position: absolute;
        left: 0;
        font-size: .5rem;
        color: #999;
      }
      input{
        height: 100%;
        width: 100%;
        padding-left: .7rem;
        font-size: .28rem;
        box-sizing: border-box;
        background: transparent;
      }
    }
    .action_box{
      margin-top: .4rem;
      overflow: hidden;

      .button{
        width: 48%;
        height: .8rem;
        display: inline-block;
        line-height: .8rem;
        border-radius: .1rem;
        border: .01rem solid #8fdac6;
        color: #fff;
        font-size: .28rem;
        float: left;
        text-align: center;
        box-sizing: border-box;
      }
      .register_btn{
        margin-right: 4%;
        border: .01rem solid #8fdac6;
        color: #8fdac6;
      }
      .login_btn{
        background: rgba(143, 218, 198, 0.5);
      }
    }
  }
</style>

