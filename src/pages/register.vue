<template lang="html">
  <div class="bg_box">
    <!--头部-->
    <div class="top_box">
      <a class="back waves-effect  waves-light" href="javascript:history.go(-1);">
        <i class="iconfont icon-back"></i>
      </a>
      <span class="title">注册账号</span>
    </div>


    <div class="from_box">
      <p class="tips_top">{{tips}}</p>

      <div class="input_box" @click="openSelect()">
        <span>{{label}}</span>
        <i class="iconfont icon-right"></i>
      </div>

      <div class="input_box">
        <span class="num">{{value}}</span>
        <input class="phone_num" v-model="phoneNumber" type="text" placeholder="请输入手机号">
      </div>

      <button @click='getCode'  :class="{'btn_opacity':phoneNumber}" class="sub_btn"><label class="btn_text">获取验证码</label></button>

      <div class="tips">点击"获取验证码"按钮，即表示同意 <a class="protocol_text" href="">注册协议</a></div>
    </div>


    <!--选择国家layer-->
    <mt-popup v-model="popupCountry" class="popupCountry" position="top" pop-transition="popup-fade">
      <mt-radio
        align="right"
        title="选择你所在的国家"
        v-model="value"
        :options="options"
        @change="selectRadio()">
      </mt-radio>
    </mt-popup>

    <!--检查验证码layer-->
    <mt-popup v-model="msgCode" class="test_code" position="right" pop-transition="popup-fade">
      <div class="top_box">
        <span class="back waves-effect  waves-light" @click="closeCode">
          <i class="iconfont icon-back"></i>
        </span>
        <span class="title">验证手机号</span>
      </div>

      <div class="test_box">
        <p class="tips">{{codeTips}}</p>
        <div class="number"><span>{{value}}</span> <span>{{phoneNumber}}</span></div>

        <div>
          <input class="code_input" placeholder="请输入验证码" v-model="code" type="text" maxlength="6">
        </div>

        <span class="resend" @click="resendCode()">{{timerCodeMsg}}</span>

        <button @click="testCode()" :class="{'btn_opacity':code}" class="sub_btn"><label class="btn_text">下一步</label></button>
      </div>

    </mt-popup>

    <!--在资料填写layer-->
    <mt-popup v-model="setInfo" class="set_user_info" position="right" pop-transition="popup-fade">
      <div class="top_box">
        <span class="back waves-effect  waves-light">
          <i class="iconfont icon-back"></i>
        </span>
        <span class="title">设置密码</span>
      </div>

      <div class="set_info_box">
        <p class="tips">{{infoTips}}</p>

        <div class="input_box">
          <span class="tit">密码</span>
          <input class="pwd_input" placeholder="6-16个字符以内，区分大小写" v-model="password" type="password" maxlength="16">
        </div>
        <div class="input_box">
          <span class="tit">确认密码</span>
          <input class="com_pwd_input" placeholder="请再次输入" v-model="confirmPass" type="password" maxlength="16">
        </div>
        <div class="input_box">
          <span class="tit">昵称</span>
          <input class="nickname_input" placeholder="3-30个字符以内" v-model="nickName" type="text">
        </div>

        <button class="sub_btn" @click="subInfo" style="opacity: 1"><label class="btn_text">完成注册</label></button>
      </div>

    </mt-popup>


  </div>

</template>
<script>
  import { Indicator } from 'mint-ui';
  import { Toast } from 'mint-ui';
  export default{
    data() {
      return {
        // 手机验证
        tips:'请确认你的国家或地区,并输入手机号',
        phoneNumber:'',
        reMsg:false,

        // 手机验证码
        msgCode:false,
        code:'',
        reCodeMsg:true,
        codeTips:'验证码已经发送到以下手机，请在5分钟内完成注册',

        // 重新发生验证码
        timerCodeMsg:'重新获取验证码',
        reResendCodeMsg:false,
        preventMany:true, //防止多次点击开关

        // 选择国家
        popupCountry: false,
        value: "+86",
        label: "中国大陆",
        options: [
          {
            label: '中国大陆',
            value: '+86',
          },
          {
            label: '香港特别行政区',
            value: '+852',
          },
          {
            label: '澳门特别行政区',
            value: '+853',
          },
          {
            label: '台湾地区',
            value: '+886',
          },
          {
            label: '美国',
            value: '+1',
          },
          {
            label: '比利时',
            value: '+32',
          },
          {
            label: '澳大利亚',
            value: '+61',
          },
        ],

        // 设置资料
        setInfo:false,
        password:'',
        confirmPass:'',
        nickName:'',
        infoTips:'设置密码以后，你就可以用手机号登陆挺哥影院咯',
      }
    },
    methods: {
      // 打开选择国家layer
      openSelect: function () {
        this.popupCountry = true;
      },
      // 选择国家
      selectRadio: function () {
        console.log(this.value +"--"+this.label )
      },
      // 获取验证码
      getCode:function () {
        if (this.phoneNumber=='')return;

        let $test = /^1[34578]\d{9}$/; //手机正则 只适合中国大陆
        let $this=this;

        if ($test.test(this.phoneNumber)){
          // 获取验证码
          Indicator.open('正在获取...');

          // 模拟短信接口 返回值
          setTimeout(function () {
            $this.reMsg = true;
            $this.msgCode =true;// 开启检验验证码layer
          },2000)

        }else{
          this.tips='请输入正确的手机号！';
          $('.phone_num').addClass('shake').on('webkitAnimationEnd', function () {
            $('.phone_num').removeClass('shake');
          });

        }
      },
      // 关闭检验手机号页
      closeCode:function () {
        this.msgCode=false;
      },
      // 检验验证码
      testCode:function () {
        if (this.code=='')return;

        let $this=this;
        Indicator.open('正在检验...');

        //模拟发送验证码到后台对比为‘对’的返回值
        setTimeout(function () {
          Indicator.close();
          $this.setInfo = true;
        },2000);

//        //模拟发送验证码到后台对比为‘错’的返回值
//        setTimeout(function () {
//          $this.reCodeMsg = false;
//        },2000)

      },
      // 重新发送验证码
      resendCode:function () {
        if (!this.preventMany)return;
        let $this = this;

        // 获取验证码code。。。

        Indicator.open('正在重新发送...');

        // 模拟短信接口发送成功 返回值
        setTimeout(function () {
          $this.reResendCodeMsg = false;
        },2000);
      },
      // 设置资料提交
      subInfo:function () {
        let $this = this;

        var pwdTest =/^(\w){6,16}$/;//6到16个字符
        var nickNameTest = /^[\u4e00-\u9fa5]{2,6}$|^[_a-zA-Z0-9\—]{3,12}$/; //12个字符以内

        if (!pwdTest.test(this.password)){
          $this.infoTips='密码不符合要求！';
          $('.pwd_input').addClass('shake').on('webkitAnimationEnd', function () {
            $('.pwd_input').removeClass('shake');
          });
          return false;
        }else  if (this.password!==this.confirmPass){
          $this.infoTips='两次密码不一致！';
          $('.com_pwd_input').addClass('shake').on('webkitAnimationEnd', function () {
            $('.com_pwd_input').removeClass('shake');
          });
          return false;
        }else if (!nickNameTest.test(this.nickName)){
          $this.infoTips='昵称有误！';

          $('.nickname_input').addClass('shake').on('webkitAnimationEnd', function () {
            $('.nickname_input').removeClass('shake');
          });
          return false;

        }else {
          let tips= Toast({
            message: '操作成功',
            iconClass: 'icon icon-success'
          });


//          setTimeout(function () {
//            tips.close();
//            $this.$router.push('/login');
//          }, 1000);

        }






      }
    },
    mounted(){
        let $this = this;

        //选择国家 获取到当前所选择的国家
        $('.mint-cell').click(function () {
          $this.label = $(this).find('.mint-radio-label').text();

          // 等 选中样式动画执行完再关闭
          setTimeout(function () {
            $this.popupCountry = false;
          },300)
        })
      },
      watch:{
        // 发生短信 loading
        reMsg (){
          if (this.reMsg){
            Indicator.close();
            this.reMsg=false;
          }
        },
      // 检验验证码正确性 loading
      reCodeMsg (){
        if(!this.reCodeMsg){
          Indicator.close();
          this.reCodeMsg=true;
          this.codeTips='验证码错误！';

          $('.code_input').addClass('shake').on('webkitAnimationEnd', function () {
            $('.code_input').removeClass('shake');
          });
          console.log('模拟验证码检验，默认验证码错误 哈哈哈哈');
        }
      },
      // 重新发生验证码
      reResendCodeMsg() {
        if (this.reResendCodeMsg){
          Indicator.close();
          this.reResendCodeMsg=false;

          let $this = this;
          let sec =60;

          for(let  i=0; i<=60; i++){
            window.setTimeout(function(){
              if (sec != 0) {
                $this.timerCodeMsg = sec + "秒后重发验证" ;
                sec--;
                $this.preventMany = false;
              } else {
                sec = 60;//如果倒计时结束就让  获取验证码显示出来
                $this.timerCodeMsg = '重新获取验证码';
                $this.preventMany = true;
              }

            }, i * 1000)
          }

        }
      }
    }
  }
</script>

<style lang="scss">
  .popupCountry{
    display: block;
    width: 80%;
    height: 40%;
    top:0;
    bottom: 0;
    margin: auto;
    border-radius: 0.2rem;
    overflow: hidden;

    .mint-radiolist{
      height: 100%;
      overflow: auto;
      padding-top: .8rem;
      box-sizing: border-box;
    }

  .mint-radiolist-title {
      font-size: .28rem;
      border-bottom: .01rem solid #8fdac6;
      height: .8rem;
      line-height: .8rem;
      top: 0;
      position: fixed;
      width: 100%;
      z-index: 999;
      background: #fff;
      margin: 0;
      padding: 0 .2rem;
      color: #333;
      box-sizing: border-box;
    }
    .mint-radio-input:checked + .mint-radio-core {
      background-color: #8fdac6;
      border-color: #8fdac6;
    }
    .mint-radio-core{
      width: .4rem;
      height: .4rem;;
    }
    .mint-cell-wrapper{
      font-size: .28rem;
      background: none;
    }
    .mint-radiolist-label{
      padding: .3rem .1rem;
    }
    .mint-radio-core::after {
      top: .11rem;
      left: .11rem;
      width: .16rem;
      height: .16rem;
    }
  }
  .mint-indicator .mint-indicator-wrapper{
    padding: .4rem .5rem !important;
    z-index: 99999;
  }
  .mint-indicator .mint-spinner-snake{
    width: .64rem !important;
    height: .64rem !important;
    border: .06rem solid transparent !important;


    border-top-color: #8fdac6 !important;
    border-left-color: #8fdac6 !important;
    border-bottom-color: #8fdac6 !important;
  }
  .mint-indicator .mint-indicator-text{
    font-size: .28rem !important;
    margin-top: .2rem !important;
  }
  .mint-toast.is-placemiddle{
    z-index: 99999 !important;
  }
</style>
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
    background-color: #8fdac6;
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
  .from_box{
    display: block;
    overflow: hidden;
    margin-top: 1rem;
    padding: .3rem;
    .input_box{
      height: 1rem;
      line-height: 1rem;
      margin-top: .4rem;
      position: relative;
      overflow: hidden;
      border-bottom: .01rem solid #ccc;

      .num{
        position: absolute;
        left: 0;
        font-size: .28rem;
      }
      input{
        height: 100%;
        width: 100%;
        padding-left: .7rem;
        font-size: .28rem;
        box-sizing: border-box;
        background: transparent;
      }
      .iconfont{
        float: right;
        font-size: .28rem;
        color: #999;
      }
      .input_box:last-child{
         border-color: #8fdac6;
       }

    }
    .tips_top{
      font-size: .28rem;
      color: #999;
    }
    .tips{
      text-align: center;
      font-size: .24rem;
      color: #999;
      margin-top: .2rem;

      .protocol_text{
        color: #8fdac6;
      }
    }

  }
  .test_code{
    width: 100%;
    height:100%;
    background: #fff;
    z-index: 9099;

    .test_box {
      margin-top: 1rem;
      overflow: hidden;
      padding: .3rem;
      text-align: center;

      .tips {
        font-size: .28rem;
        color: #666;
        margin: .2rem 0;
        text-align: left;
      }
      .number{
        padding: .2rem 0;
      }

      input {
        width: 50%;
        height: .8rem;
        line-height: .8rem;
        background: #fafafa;
        text-align: center;
        font-size: .28rem;
        margin: .2rem 0;
        border-radius: .1rem;
      }

      input::-ms-input-placeholder {  text-align: center;  }
      input::-webkit-input-placeholder {  text-align: center;  }

      .resend{
        font-size: .24rem;
        color: #8fdac6;
        display: inline-block;
        margin: .2rem 0;
      }
    }
  }
  .btn_opacity{
    opacity: 1 !important;
  }
  .shake{
    animation: shake 0.82s cubic-bezier(.36, .07, .19, .97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }
    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }
    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }
    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }


  .set_user_info{
    width:100%;
    height:100%;
    z-index:2017;

    .set_info_box{
      padding: .3rem;
      margin: 1rem auto 0;

      .tips {
        font-size: .28rem;
        color: #666;
      }

      .input_box{
        height: 1rem;
        line-height: 1rem;
        margin-top: .4rem;
        position: relative;
        overflow: hidden;
        border-bottom: .01rem solid #ccc;

        .tit{
          width:30%;
          font-size: .28rem;
          float: left;
        }

        input{
          width: 70%;
          float: left;
          height: 100%;
          font-size: .28rem;
          box-sizing: border-box;
          background: transparent;
        }
      }
    }
  }
  .sub_btn{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    height: .8rem;
    line-height: .8rem;
    color: #fff;
    font-size: .28rem;
    text-align: center;
    position: relative;
    border-radius: .1rem;
    margin: .2rem 0;
    background: #8fdac6 ;
    opacity: .5;
  }
  .btn_text{
    width: 100%;
    height: 100%;
    display: block;
    border-radius: .1rem;
  }
  .btn_text:active{
    background-color: rgba(0, 0, 0, 0.31);
  }
</style>

