<template lang="html">
    <div class="header_box">
        <div class="header_top">
            <div class="left_box ">
                <div class="left_nav">
                  <i class="iconfont icon-sort"></i>
                </div>

                <div class="user_box ellipsis">
                  <img src="../assets/images/user_pic.png" class="user_pic" alt="">
                  <span class="user_name">赵日天</span>
                </div>

            </div>

            <div class="right_box">
                <ul>
                    <li>
                        <a href="">
                            <i class="iconfont icon-discover"></i>
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <i class="iconfont icon-game"></i>
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <i class="iconfont icon-down"></i>
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <i class="iconfont icon-search"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        <div class="header_bottom">
            <ul class="nav_tit">
                <li class="action">国产</li>
                <li>欧美</li>
                <li>日韩</li>
                <li>经典</li>
                <li>VIP</li>
            </ul>
        </div>
    </div>
</template>
<script></script>
<style lang="scss" scoped>
    .header_box{
        width: 100%;
        height: 2rem;
        background-color: #fb7299;
        box-sizing: border-box;
        color: #fff;
        box-shadow: 0 .01rem .3rem #999;

        .header_top{
            height: 1rem;
            line-height: 1rem;
            overflow: hidden;



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
                        line-height: 1rem;
                    }
                }
            }

            .right_box{
                width: 50%;
                float: left;
                overflow: hidden;
                ul li{
                    width: 25%;
                    float: left;
                    text-align: center;
                }
            }
        }

        .header_bottom{
            height:1rem;
            line-height:1rem;
            text-align: center;
            .nav_tit{
                li{
                    float: left;
                    width: 20%;
                    font-size:.28rem;
                    opacity: 0.8;
                }
            }
            .action{
                opacity: 1 !important;
            }

        }

        .iconfont{
          font-size: .5rem;
          color: #fff;
        }
    }

</style>
