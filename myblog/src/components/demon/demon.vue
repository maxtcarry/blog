<template>
<div class="main">
  <div class="userinfo">
      <img src="../../../static/img/portrait.jpg" alt="">

  </div>

  <div class="userinfoshow" :class="msg">

    <p v-for="item in info">{{item}}</p>
  </div>
  <div class="userinfolist">
    <span @mouseenter="show(0)" @mouseleave="hide()">个人信息</span>
    <span  @mouseenter="show(1)" @mouseleave="hide()">联系方式</span>
    <span  @mouseenter="show(2)" @mouseleave="hide()">个人技能</span>
    <span  @mouseenter="show(3)" @mouseleave="hide()">more</span>
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
        ['name:','address:',''],
        ['CALL:15110455228','WX:ma15110455228','QQ:825138590'],
        ['[HTML][CSS][JS][vue][小程序][webpack]','[node][eggjs][mongoDB][nginx]','[佛系][玄学][逆天改命]'],
        [' When I wrote this, only God and I understood what I was doing','Now, God only knows  ^.^']
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

<style scoped lang="scss">
  .main{
    margin-top: 68px;
    min-height: calc(100vh - 116px);
    height: 510px;
    /* backgrofund:linear-gradient(27deg,#4CB4E7 30%,#F8F8FF 50%,#E23352 65%,#F2EFE6 90%,#F17C67 100%); */
    background: #F2EFE6;
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

  /* animation: myflter 3s infinite; */
    text-align: right;
  }

  .userinfo img{
      display: inline-block;
      height: 200px;
      width: 200px;
      border-radius: 50%;
      filter: drop-shadow(60px 30px 2px var(--bg-color3));
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
    box-shadow: -20px 20px 1px var(--bg-color3);
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
      color: var(--bg-font1);
      font-size: 32px;
      filter: drop-shadow(0px 0px 1px var(--bg-color3));
      text-shadow: 0px 0px 0px var(--main-color);
      opacity: 0;
  }
  .userinfoleft{
    left: 100px;
    opacity: 1;
  }


</style>
