<template lang="html">
  <div>
    <!--头部-->
    <div class="top_box">
      <a class="back waves-effect  waves-light"  onclick="self.location=document.referrer;"  href="">
        <i class="iconfont icon-back"></i>
      </a>
      <p class="title">排行榜</p>

      <ul class="swiper_nav" >
        <li><span>全部</span></li>
        <li><span>国产</span></li>
        <li><span>欧美</span></li>
        <li><span>日韩</span></li>
        <li><span>套图</span></li>
      </ul>

      <ul class="sort" >
        <li><span>日排行</span></li>
        <li><span>周排行</span></li>
        <li><span>月排行</span></li>
      </ul>
    </div>



    <!--视频相关-->
    <div class="related_video_box" style="margin-top: 3rem">



      <div class="video_list">
        <router-link class="item" onclick="location.reload();" v-for="item in list" :to="{name:'particulars',query:{aid:item.aid}}">
            <span class="left_video_pic">
              <img :src="item.pic">
            </span>
          <div class="right_video_info">
            <span class="video_title">{{item.title}}</span>
            <div class="video_data">
              <span>UP：{{item.author}}</span>
            </div>

            <div class="video_data">
              <span class="player_num">播放：{{item.video_review}}</span>
              <span class="text_num">
                  弹幕：{{item.danmaku}}
                </span>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        list:[],
      }
    },
    methods:{

    },
    created (){
      let $this =this;
      // 视频信息
      let rank_url = 'https://api.imjad.cn/bilibili/v2/?get=rank&type=all&content=0&duration=7';

//      // 评论信息
//      let comments_url = 'https://api.imjad.cn/bilibili/v2/comments/aid='+this.$route.query.aid;

      this.$axios.get(rank_url).then(function(res){
        $this.list = res.data.rank.list;
        console.log($this.list)

      },function(res) {
        console.log(res.status+'获取视频信息失败！')
      });

    },
    mounted () {
    },
  }
</script>
<style lang="scss" scoped>
  @import "../assets/css/info.css";
    .top_box{
      /*background-image: -webkit-linear-gradient(90deg,#7896da,#8fdac6);*/
      background:#8fdac6;
      height: auto;
      padding-bottom: .1rem;
    }

  ul {
    display: block;
    overflow: hidden;
    li{
      float: left;
      font-size: .26rem;
    }
  }
  .swiper_nav{
    line-height: .5rem;
    li{
      width: 20%;
      text-align: center;
      span{
        display: inline-block;
        padding: .1rem;
        border-bottom: .02rem solid #fff;
      }
    }
  }

  .sort {
    line-height: .5rem;
    li{
      width: 33.33%;
      text-align: center;
      span{
        display: inline-block;
        padding: .1rem;
        border-bottom: .02rem solid #fff;
      }
    }
  }



</style>
