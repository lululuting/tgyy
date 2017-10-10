<template lang="html">
  <div class="return_top animated " @click="returnTop()">
    <span class="iconfont icon-top"></span>
  </div>
</template>
<script>
  export default{
    methods: {
        returnTop:function () {
          $('body,html').animate({ scrollTop: 0 }, 800);
        }
    }
  }
</script>
<style lang="scss" scoped>
  .return_top .iconfont{
      font-size: .6rem;
      color: #fff;
      padding: .05rem;
      background-color: rgba(51, 51, 51, 0.31);
      position: fixed;
      right: .5rem;
      bottom: .5rem;
      z-index:9999;
  }
</style>
