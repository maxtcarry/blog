<template>
<div class="main">
  <div class="userinfo">
      <img src="../../../static/img/bg1.jpg" alt="">
  </div>

  <div class="userinfoshow" :class="msg">
    {{info}}
  </div>
  <div class="userinfolist">
    <span @mouseenter="show(0)" @mouseleave="hide()">个人信息</span>
    <span  @mouseenter="show(1)" @mouseleave="hide()">联系方式</span>
    <span  @mouseenter="show(2)" @mouseleave="hide()">个人经历</span>
    <span  @mouseenter="show(3)" @mouseleave="hide()">想说的话</span>
  </div>
</div>
</template>

<script>
export default {
  name:'Demon',
  data(){
    return {
      info:'...',
      userinfo:[
      "11","222","333","君不见，黄河之水天上来，奔流到海不复回。君不见，高堂明镜悲白发，朝如青丝暮成雪。"
      ],
      msg:{
        userinfoleft:false
      }
    }

  },
  methods:{
    show:function(id){
      this.msg.userinfoleft = true;
      this.info = this.userinfo[id]
    },
    hide:function(){
      this.msg.userinfoleft = false;
    }
  }


}
</script>

<style scoped>
  .main{
    margin-top: 68px;
    min-height: calc(100vh - 116px);
    height: 510px;
    background: var(--fu-color1);
    position: relative;
  }
  .userinfo{
    position: absolute;
    width: 800px;
    left: 50%;
    top: 50%;
    margin-top: -200px;
    margin-left: -300px;
    height: 400px;
    filter: drop-shadow(20px 20px 2px var(--bg-color3));
  /* animation: myflter 3s infinite; */
    text-align: right;
  }

  .userinfo img{
      display: inline-block;
      height: 200px;
      width: 200px;
      border-radius: 50%;
  }

  .userinfolist{
    position: absolute;
    width: 800px;
    left: 0%;
    top: 70%;
    height: 200px;

    text-align: right;

  }

  .userinfolist span{
    cursor: pointer;
    position: relative;
    display: inline-block;
    width: 140px;
    height: 40px;
    line-height: 40px;
    background: var(--fu-color2);
    transform: rotate(-30deg) skew(25deg) translate(0,0);
    margin: 0 20px;
    text-align: center;
    box-shadow: -20px 20px 10px var(--bg-color3);
    transition:  all .3s;
  }

  .userinfolist span:hover{
    transform: rotate(-30deg) skew(25deg) translate(20px,-15px);
    box-shadow: -50px 50px 50px rgba(0,0,0,.5);


    }
  .userinfolist span::after{
    content: '';
    position: absolute;
    top: 10px;
    left: -20px;
    height: 100%;
    width: 20px;
    background: var(--bg-color3);
    transform: .5s;
    transform: rotate(0deg) skewY(-45deg);
    opacity: 0.4;
  }
  .userinfolist span::before{
      opacity: 0.3;
    content: '';
    position: absolute;
    bottom: -20px;
    left: -10px;
    height: 20px;
    width: 100%;
    background:var(--bg-color3);
    transform: .5s;
    transform: rotate(0deg) skewX(-45deg);
  }
  .userinfoshow{
      position: absolute;
      left: -600px;
      top: 100px;
      width: 600px;
      height: 100px;
      transition:  all 0.5s;
      color: var(--bg-color4);
      font-size: 40px;
      filter: drop-shadow(3px 3px 1px var(--bg-color3));
      text-shadow: 0px 0px 2px var(--main-color);
      opacity: 0;
  }
  .userinfoleft{
    left: 100px;
    opacity: 1;
  }


</style>
