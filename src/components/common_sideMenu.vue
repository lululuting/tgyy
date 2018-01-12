<template lang="html">
  <mt-popup v-model="sideMenu" position="left" pop-transition="popup-fade">
    <div class="menu_box">
      <!--用户资料-->
      <div class="user_box waves-effect  waves-light">
        <div class="top_user_box">
          <div class="user_pic">
            <router-link to="/login">
              <img src="../assets/images/user_pic.png" alt="">
            </router-link >
          </div>

          <div class="action_box">
            <i @click="themeSwitch()" id="theme_state"  :class="{'icon-yueliang':themeColor}"  class="iconfont icon-taiyang waves-effect waver-button "> </i>
          </div>
        </div>

        <div class="bottom_box">
          <div>赵日天<span class="lv_box">LV<i>1</i></span></div>

          <div class="level_box">
            <i class="level">新手上路</i>
          </div>

          <div class="property_box">
            <span>油箱：0.00 L</span>
          </div>
        </div>

      </div>

      <!--option选项-->
      <div class="nav_con">
        <ul class="nav_list">
          <li class="waves-effect waves-button"><a href=""><i class="iconfont icon-home"></i>首页</a></li>
          <li class="waves-effect waver-button"><a href=""><i class="iconfont icon-favor"></i>我的收藏</a></li>
          <li class="waves-effect waver-button"><a href=""><i class="iconfont icon-skin"></i>主题</a></li>
          <li class="waves-effect waver-button"><a href=""><i class="iconfont icon-settings"></i>设置</a></li>
        </ul>
      </div>
    </div>
  </mt-popup>

</template>
<script>
    export default{
        data(){
            return{
                sideMenu:false,
                themeColor:false, //切换主题样式变量
            }
        },

        methods: {
            // 主题样式切换
            themeSwitch: function () {
                this.themeColor=!this.themeColor;

                if (this.themeColor){
                  document.getElementsByTagName( "body")[0].className='theme_black';
                  localStorage.setItem('theme',1);
                }else{
                  document.getElementsByTagName( "body")[0].className='';
                  localStorage.setItem('theme',0);
                }

              console.log((this.themeColor)?'暗夜之美':'葱油绿意')

            }
        },
        mounted (){
            let $this = this;

            if(localStorage.getItem("theme")==1){this.themeColor=true;}

            let $height = $(window).height() - $('.user_box').height();
            $('.nav_con').css('height',$height/100+'rem');

            $('.left_box .left_nav').click(function () {
              $this.sideMenu=true;
            });
        }
    }

</script>
<style lang="scss" scoped>
  $themeColor: #8fdac6;/*默认主题颜色*/

  .mint-popup-left{
    height: 100%;
    width: 70%;
  }
  .menu_box{
      height: 100%;
      background: #fff;

      .user_box{
          width: 100%;
          padding:.4rem;
          overflow: hidden;
          box-sizing: border-box;
          background: url('/static/images/user_box_bg_0123asd.png') $themeColor 50% 50% no-repeat;

          background-size: cover;




          .top_user_box{
              height: 1.5rem;
              line-height: 1.5rem;

              .user_pic{
                  width: 1.5rem;
                  height: 1.5rem;
                  overflow: hidden;
                  display: inline-block;
                  border-radius: 50%;
                  box-sizing: border-box;
                  border: .04rem solid #fff;
              }

              .action_box{
                  float: right;

                  .iconfont{
                      display: inline-block;
                      overflow: hidden;
                      font-size: .4rem;
                      line-height: .4rem;
                      color: #fff;
                      margin-left: .3rem;
                      padding: .1rem;
                      border: .04rem solid #fff;
                      border-radius: 50%;
                      opacity: 0.8;
                  }
              }

          }

          .bottom_box{
              color: #fff;
              margin-top: 0.2rem;

              .lv_box{
                  padding: .02rem .05rem;
                  background-color: rgba(0, 134, 179, 0.1);
                  border: .01rem solid #fff;
                  border-radius: .06rem;
                  display: inline-block;
                  margin-left: .1rem;

                  font-size: .2rem;
              }
              .level_box{
                  padding: .05rem .1rem;
                  background-color: rgba(255, 255, 255, 0.5);
                  border: .01rem solid #fff;
                  border-radius: .05rem;
                  display: inline-block;
                  font-size: .2rem;
                  margin: .15rem 0;

                  .level{
                    color: $themeColor;
                  }
              }
              .property_box{
                  font-size: .24rem;

                  span{
                      opacity: 0.7;
                      margin-right: 0.3rem;
                  }
              }

          }
      }

      .nav_con{
          padding: .2rem 0;

          $bg: #{$themeColor};
          @if $bg != '#8fdac6' {
              background: $themeColor;
          }

          .nav_list{
              border-bottom: .01rem solid #d8d8d8;

              li{
                  .iconfont{
                      font-size: .5rem;
                      color: #666;
                      margin: 0 .4rem ;
                  }
                  a{
                      color: #666;
                      display: block;
                      padding: .3rem 0;
                  }
              }

          }
          .nav_list:last-child{
              border: none;
          }
     }


  }


</style>
