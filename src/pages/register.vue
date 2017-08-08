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

      <button @click='getCode' class="sub_btn">获取验证码</button>

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

        <button @click="testCode()" class="next_btn">下一步</button>
      </div>

    </mt-popup>


  </div>

</template>
<script>
  import { Indicator } from 'mint-ui';
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

        //模拟发送验证码到后台对比的返回值
        setTimeout(function () {
          $this.reCodeMsg = false;
        },2000)
      },
      // 重新发送验证码
      resendCode:function () {
        if (!this.preventMany)return;
        let $this = this;

        // 获取验证码
        Indicator.open('正在重新发送...');

        // 模拟短信接口 返回值
        setTimeout(function () {
          $this.reResendCodeMsg = true;
        },2000);
      },
    },
    mounted(){
      let $this = this;
      $('.mint-cell').click(function () {

        $this.label = $(this).find('.mint-radio-label').text();

        setTimeout(function () {
          $this.popupCountry = false;
        },300)
      })
    },
    watch:{
      phoneNumber (){
        if (!this.phoneNumber==''){
          $('.sub_btn').css('background','rgba(143, 218, 198, 1)');
        }else {
          $('.sub_btn').css('background',' rgba(143, 218, 198, .5)');
        }
      },
      // 发生短信 loading
      reMsg (){
        if (this.reMsg){
          Indicator.close();
          this.reMsg=false;
        }
      },
      code (){
        if (!this.code =='') {
          $('.next_btn').css('background', 'rgba(143, 218, 198, 1)');
        } else {
          $('.next_btn').css('background', 'rgba(143, 218, 198, .5)');
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
    height: 60%;
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
    .mint-cell:last-child{
      background: none;
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

</style>
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
    .sub_btn{
      width: 100%;
      margin-top: .4rem;
      font-size: .28rem;
      display: block;
      text-align: center;
      height: .8rem;
      border-radius: .1rem;
      color: #fff;
      background: rgba(143, 218, 198, 0.5);
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
      padding-top: 1rem;
      overflow: hidden;
      text-align: center;

      .tips {
        font-size: .28rem;
        color: #666;
        margin: .2rem 0;
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
        text-align: center;
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
      .next_btn{
        width: 80%;
        height: .8rem;
        line-height: .8rem;
        color: #fff;
        font-size: .28rem;
        text-align: center;
        border-radius: .1rem;
        margin: .2rem 0;
        background: rgba(143, 218, 198, 0.5);
      }

    }
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
</style>

