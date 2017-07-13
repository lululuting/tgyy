<template lang="html">
  <div>
      <_header></_header>
      <_sideMenu></_sideMenu>

      <div class="main">
          <ul class="top_nav">
              <li class="waves-effect waver-button action">国产</li>
              <li class="waves-effect waver-button">欧美</li>
              <li class="waves-effect waver-button">日韩</li>
              <li class="waves-effect waver-button">经典</li>
              <li class="waves-effect waver-button">套图</li>
          </ul>


      </div>
  </div>
</template>
<script>
  import _header from '../components/common_header.vue'

  import _sideMenu from '../components/common_sideMenu.vue'

  export default {
    components: {
      _header,
      _sideMenu
    }
  }
</script>
<style lang="scss" scoped>
    .main {
        overflow: hidden;
        margin-top: .99rem;


        .top_nav{
            height: 1rem;
            text-align: center;
            line-height: 1rem;
            background: #fb7299;
            box-sizing: border-box;
            color: #fff;
            font-size: .26rem;


            li{
                float: left;
                width: 20%;
                overflow: hidden;
                border-radius: .1rem;
                opacity: 0.8;

                a{
                  color: #fff;
                }

            }

            .action{
              opacity: 1;
              border-bottom:.03rem solid #fff ;

            }

        }
    }

</style>
