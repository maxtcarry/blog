
<template>
  <div class="main">
    <div id="canvas" @click="changeBG" v-bind:style="gbIMG">
      <!-- <canvas id="CANVAS"></canvas> -->
    </div>
  </div>
</template>
<script>


export default {
  name:'Index',
  data(){
    return {
      x:0,
      gbIMG : {
        'background-image':"url(@/static/img/bg1.jpg)",
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
  },

}

</script>
<style media="screen" scoped>
  .main{
    margin-top: 68px;
    height:calc(100vh - 116px );
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
</style>
