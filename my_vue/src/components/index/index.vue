
<template>
  <div class="main">
    <div id="canvas" @click="changeBG" v-bind:style="gbIMG">
      <canvas id="CANVAS"></canvas>
    </div>
  </div>
</template>
<script>
import Easycanvas from 'easycanvas';
import Vue from 'Vue'
export default {
  name:'Index',
  data(){
    return {
      x:0,
      gbIMG : {
        'background-image':"url(../../../static/img/bg1.jpg)",
      }


    }
  },
  mounted:function(){
    //随机图片
    var random =parseInt(Math.random()*900);
    var imgurl = new Image();
    imgurl.src = 'https://picsum.photos/1960/1080/?image='+random;
    imgurl.onload = ()=>{
      this.gbIMG =  {
      'background-image':`url(${imgurl.src})`,
      };
    }
    //canvas 效果
    var $app = new Easycanvas.painter({
         el: '#CANVAS',
         width: 1200,
         height: 560
     });
     this.getTime($app);

     $app.start();
  },

  methods:{
    changeBG:function(){
      var random =parseInt(Math.random()*990);
      var imgurl = new Image();
      imgurl.src = 'https://picsum.photos/1960/1080/?image='+random;
      imgurl.onload = ()=>{
        this.gbIMG =  {
        'background-image':`url(${imgurl.src})`,
        };
      }
    },
    getTime:function ($){
      var $time = new Easycanvas.sprite({
          content: {
            text:function() {
              let times = new Date();
              let timesnow = times.toLocaleString();
                 return timesnow;
             },
          },
          style: {
               textFont:"24px serif",
              tx: 1100, ty:600,
              tw: 400, th: 200,
          },
      });
    // tick()
    //   var fps = 300;
    //   var now;
    //   var then = Date.now();
    //   var interval = 1000/fps;
    //   var delta;
    //
    //   function tick() {
    //   　　requestAnimationFrame(tick);
    //   　　now = Date.now();
    //   　　delta = now - then;
    //   　　if (delta > interval) {
    //
    //   　　　　then = now - (delta % interval);
    //   　　　  $time.style.tx = Math.random()*499;
    //   　　}
    //   }
      $.add($time);
    },

  },

}

</script>
<style media="screen" scoped>
  .main{
    margin-top: 68px;
    height:calc(100vh - 68px );
  }

  #canvas{
    width:100%;
    height:100%;
    margin: 0 auto;
    background-repeat:no-repeat;
    background-color: var(--bg-color3);
    background-size:cover;
    position: relative;


  }
  #CANVAS{
    position: absolute;
    left: 50%;
    margin-left: -600px;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
  }
</style>
