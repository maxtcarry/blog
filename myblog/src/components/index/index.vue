<template>
<div class="main">
  <div id="canvas" @click="changeBG" v-bind:style="gbIMG">
    <div class="serve">
      <div class="fsz36">
        可乐的博客
      </div>
      <div><span>服务端</span>基于[node][eggjs]</div>
      <div><span>前端</span>基于[vue]</div>
      <div><span>服务器</span>[CentOS 7.4 64位][nginx]</div>
    </div>
  </div>
  <div class="interlayer">
    <div><span>github</span>[<a href="https://github.com/maxtcarry">maxtcarry</a>]</div>
    <div><span>email</span>[<a href="javascript:void(0);">maxtcarry@163.com</a>]</div>
    <div><span>网站已运行</span><a href="javascript:void(0);">{{daycoding}}</a>天{{hourscoding}}小时</div>
  </div>
  <!-- <div class="">

  </div> -->
</div>
</template>
<script>
export default {
  name: 'Index',
  data() {
    return {
      x: 0,
      gbIMG: {
        'background-image': "url(@/static/img/bg1.jpg)",
      },
      daycoding:'',
      hourscoding:''
    }
  },
  mounted: function() {
    //计算运行时间
        this.daycoding  = parseInt((new Date().getTime() - new Date('2019-07-22'.replace(/-/g, "/")).getTime()) / (1000 * 60 * 60 * 24));
        this.hourscoding  = parseInt((new Date().getTime() - new Date('2019-07-22'.replace(/-/g, "/")).getTime()) / (1000 * 60 * 60));
    //随机图片
    var random = parseInt(Math.random() * 990);
    var imgurl = new Image();
    imgurl.src = 'https://picsum.photos/1960/1080/?image=' + random;
    imgurl.onload = () => {
      this.gbIMG = {
        'background-image': `url(${imgurl.src})`,
      };
    }

  },

  methods: {
    changeBG: function() {
      var random = parseInt(Math.random() * 990);
      var imgurl = new Image();
      imgurl.src = 'https://picsum.photos/1960/1080/?image=' + random;
      imgurl.onload = () => {
        this.gbIMG = {
          'background-image': `url(${imgurl.src})`,
        };
      }
    },
  },

}
</script>
<style media="screen" scoped lang="scss">
.main {
    margin-top: 68px;
    // height: calc(100vh - 116px);
}
::-webkit-scrollbar {
        width:12px;
        background-color: aqua;
        }
.fsz36{
  font-size: 36px;
  margin: 10px 0;
}
#canvas {
    width: 100%;
    margin: 0 auto;
    height: 668px;
    background-repeat: no-repeat;
    background-color: var(--bg-color3);
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
}
.serve {
    width: 100%;
    height: 400px;
    background-color: var(--bg-color3);
    opacity: 0.7;
    text-align: center;
    vertical-align: middle;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    div {
        width: 100%;
        height: 38px;
        line-height: 38px;

        span{
          color: var(--fu-color1);
          padding:4px 8px;
        }
    }
}
.serve:after{
    position: absolute;
    content: '';
    width: 1%;
    height: 200%;
    background:#F8F8FF;
    box-shadow: 1px 1px 10px #fff;
    left: 10%;
    top: -50%;
    transform:skewX(-25deg);
    animation: myfirst 4s ease-in-out infinite ;
   filter: blur(10px) contrast(30);
  }
  @keyframes myfirst{
    0% {left: -50%;}
    100%{left:150%;}
  }

.interlayer{
  width: 100%;
  height: 400px;
  border-top: 10px solid var(--bg-color2);
  background:#e7f7ff;
  opacity: 0.7;
  text-align: center;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  div {
      width: 100%;
      height: 38px;
      line-height: 38px;
      span{
        color: var(--fu-color1);
        padding:4px 8px;
      }
      a:hover{
        color:var(--fu-color2);
      }
  }
}
</style>
