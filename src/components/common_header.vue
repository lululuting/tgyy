<template lang="html">
  <div class="header_box" >
    <div class="header_top">
      <div class="left_box ">
        <div class="left_nav waves-effect waver-button" @click="openSideMenu()">
          <i class="iconfont icon-sort"></i>
        </div>

        <div class="user_box ellipsis  waves-effect waver-light">
          <img src="../assets/images/user_pic.png" class="user_pic" alt="">
          <span class="user_name">赵日天</span>
        </div>

      </div>

      <div class="right_box">
        <ul>
          <li class="waves-effect waves-circle">
            <i class="iconfont icon-discover"></i>
          </li>

          <li class="waves-effect waves-circle">
            <i class="iconfont icon-game"></i>
          </li>

          <li class="waves-effect waves-circle">
            <i class="iconfont icon-down"></i>
          </li>

          <li class="waves-effect waves-circle">
            <i class="iconfont icon-search"></i>
          </li>
        </ul>
      </div>
    </div>
    <ul class="top_nav">
      <li class="waves-effect waver-button" @click="selected($index),tabToggle(item.name)" :class="{active: actionName == $index}" v-for="(item,$index) in navlist" v-text="item.option"></li>
      <span class="white_bar"></span>
    </ul>
  </div>
</template>
<script>
  export default{
    data() {
      return{
        tabName:null,

        actionName: '',
        navlist: [
          {option:'首页',name:'_tabIndex'},
          {option:'国产',name:'_tabDomestic'},
          {option:'日韩',name:'_tabJapanKorea'},
          {option:'欧美',name:'_tabOccident'},
          {option:'套图',name:'_tabPicture'}
        ],
      }
    },
    methods: {
      selected: function($index) {
        this.actionName = $index;
        var bar_width = $('.white_bar').width();// 带子的宽度
        var left_5 = $(window).width()/40;// 5%的宽度
        $('.white_bar').stop(false,true).css({
          'left' : $index * bar_width + left_5 * (2*($index+1)-1)+ 'px',
          'transition': '.5s all'
        });

      },

      tabToggle: function(tabName) {
        this.tabName = tabName;
        this.$emit('tabName',this.tabName);

      },
      openSideMenu: function(){
        $('.side_menu').show().removeClass('fadeOut').addClass('fadeIn');
        $('.side_menu .menu_box').show().removeClass('slideOutLeft').addClass('slideInLeft');
      },


    }
  }
</script>
<style lang="scss" scoped>
  .header_box{
     background: #8fdac6;
      .header_top{
            width: 100%;
            height: 1rem !important;
            line-height: 1rem ;
            overflow: hidden;
            box-sizing: border-box;
            color: #fff;

            .left_box{
                width: 50%;
                float: left;
                overflow: hidden;

                .left_nav{
                    float: left;
                    width: 25%;
                    text-align: center;
                }

                .user_box{
                    float: left;
                    text-align: center;
                    width: 75%;

                    .user_pic{
                        width: .72rem;
                        height: .72rem;
                        border-radius: 50%;
                        display: inline-block;
                        overflow: hidden;
                        margin-right: .1rem;
                        vertical-align: middle;

                    }
                }
            }

            .right_box {
                width: 50%;
                float: left;
                overflow: hidden;

                ul>li {
                    height: 1rem;
                    width: 25%;
                    float: left;
                    text-align: center;
                }

            }

            .iconfont{
                font-size: .5rem;
                color: #fff;
            }
      }

      .top_nav{
          height: 1rem;
          text-align: center;
          line-height: 1rem;
          box-sizing: border-box;
          color: #fff;
          width: 100%;
          background-color: #8fdac6;
          font-size: .26rem;



          li{
              float: left;
              width: 20%;
              overflow: hidden;
              border-radius: .1rem;
              opacity: 0.6;

              a{
                color: #fff;
              }

          }

          .active{
             opacity: 1;
          }
          .white_bar{
              width: 15%;
              height: .05rem;
              background: #fff;
              border-radius: .05rem;
              bottom: -.95rem;
              left: 2.5%;
              position:relative;
              text-align: left !important;
              display:block;
          }

      }

      .nav_fixed{
          position: fixed;
          top:0;
          z-index: 888;

      }
  }
</style>
