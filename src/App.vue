<template>
  <div id="app">
    <router-view></router-view> <!--  这里是用来展示路由页面内容的，如果想用跳转就用<router-link to='xxx'></router-link> -->
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>
<style lang="css">
@import "assets/css/base.css";
@import "assets/font/iconfont.css";
@import "../static/animate/animate.min.css";
@import "../static/waves/waves.min.css";
@import "../static/cropper/cropper.min.css";
@import "../static/cropper/cropper.min.css";
@import "../static/flexText/flexText.css";
</style>
