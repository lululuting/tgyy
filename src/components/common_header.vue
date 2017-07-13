<template lang="html">
    <div class="header_box">
        <div class="left_box ">
            <div class="left_nav waves-effect waver-button">
              <i @click="openSideMenu()" class="iconfont icon-sort"></i>
            </div>

            <div class="user_box ellipsis  waves-effect waver-button">
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
</template>
<script>
  export default{
    methods: {
      openSideMenu: function(){
        $('.side_menu').show().removeClass('fadeOut').addClass('fadeIn');
        $('.side_menu .menu_box').show().removeClass('slideOutLeft').addClass('slideInLeft');
      },

    }
  }
</script>
<style lang="scss" scoped>
    .header_box{
        width: 100%;
        height: 1rem !important;
        line-height: 1rem ;
        overflow: hidden;
        position: fixed;
        top: 0;
        background-color: #fb7299;
        box-sizing: border-box;
        color: #fff;
        z-index: 888;

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
                width: 75%;
                font-size: .32rem;

                .user_pic{
                    width: .72rem;
                    height: .72rem;
                    border-radius: 50%;
                    display: inline-block;
                    overflow: hidden;
                    margin-right: .25rem;
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


</style>
