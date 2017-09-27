<template>
  <div id="app">
    <router-view></router-view> <!--  这里是用来展示路由页面内容的，如果想用跳转就用<router-link to='xxx'></router-link> -->
  </div>
</template>

<script>

export default {
  mounted (){
      if (localStorage.getItem("theme")==1){
          document.getElementsByTagName("body")[0].className='theme_black';
      }
  }
}
</script>
<style lang="css">
@import "assets/css/base.css";
@import "assets/font/iconfont.css";
@import "../static/lib/animate/animate.min.css";
@import "../static/lib/waves/waves.min.css";
@import "assets/css/themeColor.css";
</style>
