<template lang="html">
  <div>
    <div class="search_box">
        <div class="input_box">
          <i class="iconfont icon-search"></i>
          <input v-model="value" type="search" placeholder="搜索">
        </div>
        <router-link to="/" class="close_btn">取消</router-link >
    </div>

    <ul class="re_data">
      <li v-for="redata in myData" v-text="redata"></li>
    </ul>
    <p v-show="myData.length===0" class="if_null">暂无数据...</p>
  </div>
</template>
<script>
  export default{
      data() {
          return{
            value:'',
            myData:'',
          }
      },
      methods:{
//        getData:function () {
//            let $this = this;
//          this.$http.get( '../static/demo.json')
//            .then(function(response){
//              $this.reData= response.data;
//              console.log($this.reData.first[1].name)
//            },function() {
//                console.log("接口错误！")
//          });
//
//        }
      },
      watch:{
          value:function () {
              let $this =this;
              this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
                params: {
                  wd:$this.value,
                },
                jsonp:'cb',
              }).then(function(res){
                $this.myData=res.data.s;
                  console.log($this.myData)
              },function(res) {
                  alert(res.status);
              });
          }
      },
      mounted(){
          $('input').focus();
      },
  }
</script>
<style lang="scss" scoped>
  .search_box{
    display: block;
    height: 1rem;
    line-height: .8rem;
    padding: .1rem .2rem;
    box-sizing: border-box;

    .input_box{
      width: 80%;
      float: left;
      position: relative;
      background: #f0f0f0;
      border-radius: .1rem;


      input{
        font-size: .28rem;
        text-indent: .7rem;
        width: 98%;
        height: .8rem;
        color: #666;
        background-color: transparent;

      }

      .icon-search{
        display:block;
        position: absolute;
        padding: 0 .1rem;
        top: 0;
        left: 0;
        font-size: .4rem;
        color: #999;
        background-color: transparent;
        z-index: 999;
      }
    }

    .close_btn{
      width: 20%;
      display: block;
      float: left;
      color: #8fdac6;
      font-size: .28rem;
      text-align: center;
    }
  }
  .re_data{
    padding: 0 .2rem;
    color: #666;
    li{
      font-size: .28rem;
      height: .8rem;
      line-height: .8rem;
      border-bottom: .01rem solid #fafafa;
    }
  }
  .if_null{
    font-size: .28rem;
    padding: 0 .2rem;
    height: .8rem;
    line-height: .8rem;
    color: #666;
    border-bottom: .01rem solid #fafafa;
  }
</style>
