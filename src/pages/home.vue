<template lang="html">
  <div>
      <_header></_header>
      <_sideMenu></_sideMenu>

      <div class="main">
          <ul class="top_nav">
              <li class="waves-effect waver-button" @click="selected($index)" :class="{active: actionName == $index}" v-for="(item,$index) in nav" v-text="item.option"></li>
          </ul>

        <_tabIndex></_tabIndex>
      </div>



  </div>
</template>
<script>
  import _header from '../components/common_header.vue'

  import _sideMenu from '../components/common_sideMenu.vue'

  import _tabIndex from '../components/tab_index.vue'


  export default {
      data() {
          return{
            actionName: '',
            nav: [
              {option:'首页'},
              {option:'国产'},
              {option:'日韩'},
              {option:'欧美'},
              {option:'套图'}
            ]
          }
      },
      methods: {
          selected: function($index) {
            this.actionName = $index
          }
      },
      components: {
        _header,
        _sideMenu,
        _tabIndex
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
            background: #8fdac6;
            box-sizing: border-box;
            color: #fff;
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

        }
    }

</style>
