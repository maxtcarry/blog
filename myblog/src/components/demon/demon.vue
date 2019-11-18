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

<style scoped lang="scss" >
@import './demon.css';
</style>
