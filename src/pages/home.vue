<template lang="html">
  <div>
    <_header v-on:tabName="getTabName"></_header>

    <_sideMenu></_sideMenu>

    <_returnTop></_returnTop>

    <div class="main">
      <transition name="fade" mode="out-in">
        <component :is='currentView' keep-alive></component>
      </transition>
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
        currentView: '_tabIndex',// 初始动态组件名称
        scrolled:0,//滚动条top距离
      }
    },
    methods: {
      getTabName: function (tabName){
        this.currentView = tabName
      },
      handleScroll:function() {
        let $this = this;
        $this.scrolled = window.scrollY;

        let nav = $('.top_nav');
        let main = $('.main');
        let returnTop = $('.return_top');

        if ($this.scrolled > nav.outerHeight()) {
          nav.addClass('nav_fixed');
          main.addClass('mt100');
          returnTop.show();
        } else {
          nav.removeClass('nav_fixed');
          main.removeClass('mt100');
          returnTop.hide();
        }
      }
    },
    mounted: function () {
      // 监听滚动条事件
      window.addEventListener('scroll', this.handleScroll);
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
    },
    beforeDestroy:function(){ // 生命周期beforeDestroy钩子函数，发生在即将离开组件之前
      $(window).off();//解除bind事件
    }
  }
</script>
<style lang="scss" scoped>
  .main {
    overflow: hidden;
  }
</style>
