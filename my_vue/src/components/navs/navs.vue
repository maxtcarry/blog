<template>
<div class="main">
  <div class="more">
  <span>负重前行</span>
  </div>
  <div class="time-box">
      <div class="">
        <div class="time-item"  v-for='item in timedata'>
          <p><a>{{item.title}}</a></p>
          <span>{{item.createTime}}</span>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import {getArticleList} from "@/API/api"
export default {
  name:'navs',
  data(){
    return {
      timedata:[]
    }
  },
  mounted:function(){
      getArticleList()
        .then( (response) =>{
          if(response.status==200){
            let resdata = response.data;
            this.timedata.push(...resdata);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
  },

}
</script>

<style scoped>
  .main{
    margin-top: 68px;
    min-height: 600px;
    overflow: hidden;
  }
  .time-box{
    width: 1200px;
    margin: -10px auto 0px;
    background: var(--bg-color3);
    padding-top: 40px;
    min-height: 600px;
  }
  .time-item{
      width: 600px;
    padding:10px 20px;

  }

  .time-item:nth-child(odd){
    margin-left: 598px;
    text-align: left;
    border-left: 4px solid var(--tiao-color2);
  }
  .time-item:nth-child(even){
    margin-left: 2px;
    text-align: right;
    border-right: 4px solid var(--tiao-color2);
  }
  .time-item:hover {
    background:var(--main-color);
    box-shadow: 0px 1px 1px 0px var(--bg-color4);
  }
  .time-item:hover p{
        cursor:pointer;
  }
  .time-item p{
    position: relative;
    font-size: 18px;
    font-weight: 900;
    margin:10px 0px;

  }

  .time-item p a{
      display: inline-block;
      width: 520px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space:nowrap;
  }

  .time-item:nth-child(odd) p::before{
    content: "";
    position: absolute;
    left: -32px;
   top: 10px;
   width:20px;
   height: 20px;
   border-radius: 10px;
   background: var(--fu-color2);
  }
  .time-item:nth-child(odd) p::after{
    content: "";
    position: absolute;
    left: -25px;
    top: 17px;
   border: 3px solid #fff;
   width:6px;
   height: 6px;
   border-radius: 50%;
   background: var(--fu-color2);
  }
  .time-item:nth-child(even) p::before{
    content: "";
    position: absolute;
    left: 568px;
   top: 10px;
   width:20px;
   height: 20px;
   border-radius: 10px;
   background: var(--fu-color1);
  }
  .time-item:nth-child(even) p::after{
    content: "";
    position: absolute;
    left: 575px;
    border: 3px solid #fff;
    top: 17px;
   width:5px;
   height: 5px;
   border-radius: 10px;
   background: var(--fu-color1);
  }
  .time-item span{
    font-size: 12px;
    border-bottom:1px solid var(--bg-color5);
  }
  .more{
    width: 100%;
    background: var(--bg-color1);
    height: 240px;
    text-align: center;
    font-size: 42px;
    margin-top: -120px;
    line-height: 360px;
  z-index: 22;
  }
</style>
