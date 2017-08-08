<template lang="html">
  <div>
    <_header v-on:tabName="getTabName"></_header>
    <_sideMenu></_sideMenu>
    <_returnTop></_returnTop>
    <div class="main">
      <component :is='currentView' keep-alive></component>
    </div>

  </div>
</template>
<script>
  import _header from '../components/common_header.vue'
  import _sideMenu from '../components/common_sideMenu.vue'
  import _returnTop from '../components/common_returnTop.vue'
  import _tabIndex from '../components/tab_index.vue'
  import _tabDomestic from '../components/tab_domestic.vue'
  import _tabJapanKorea from '../components/tab_JapanKorea.vue'
  import _tabOccident from '../components/tab_occident.vue'
  import _tabPicture from '../components/tab_picture.vue'





  export default {
    data(){
      return{
        currentView: '_tabIndex'
      }
    },
    methods: {
      getTabName: function (tabName){
        this.currentView = tabName
      }
    },
    mounted: function () {// 相当于$(function(){...code..})

      if(window.localStorage.length>0){
        console.log(window.localStorage);
      }else{
        console.log('第一次来');
      }




      // 头部滚动显隐
      let l_top=0;
      $(window).scroll(function(){
        let n_top = $(window).scrollTop();

        if(n_top>100){
          $('.top_nav').addClass('nav_fixed')
          $('.main').addClass('mt100');

          $('.return_top').show();
        }else{
          $('.top_nav').removeClass('nav_fixed')
          $('.main').removeClass('mt100');

          $('.return_top').hide();
        }

        l_top=n_top;
      });
    },
    components: {
      _header,
      _sideMenu,
      _returnTop,
      _tabIndex,
      _tabDomestic,
      _tabJapanKorea,
      _tabOccident,
      _tabPicture,
    }
  }
</script>
<style lang="scss" scoped>
  .main {
    overflow: hidden;
  }

</style>
