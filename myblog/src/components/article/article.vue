<template>
<div class="main">
  <div class="bannder">
    <div class="curt curt1"></div>
    <div class="curt curt2"></div>
    <div class="curt curt3"></div>
    <div class="curt curt4"></div>
    <div class="curt curt5"></div>
    <div class="curt curt6"></div>
    <div class="leader">
      <p>{{msg}}</p>
    </div>
  </div>
  <div class="item">
    <div class="items" v-for="item in articleList">

      <img class="imgbg" v-bind:src="item.imgurl" alt="">
      <div class="title">
      <p> <a @click="gotoInfo(item._id)">{{item.title}}</a></p>
      </div>
      <div class="cont">
      <p>  {{item.content}}</p>
      </div>
      <div class="athor">
        <span>{{item.author}}</span>
        <span>{{item.classify}}</span>
        <span>{{item.createTime}}</span>
      </div>
    </div>
    <div class="cont_next">
      <span @click="gobackpush" :class="isactiveUp?'isactive':''">上一页</span>
      <span @click="getpush" :class="isactiveDown?'isactive':''">下一页</span>
    </div>
    <div :class="isFixed?'isFixed rightCloud':'rightCloud'">
        <div class="CloudLinks">
          <p class='cloudTitle'>云标签</p>
          <div class="Clouditems">
            <span v-for='item in cloudArr'>{{item}}</span>
          </div>
        </div>
        <div class="newarticle">
            <p class='newTitle'>推荐文章</p>
            <div class="articleitems">
                <p v-for="item in articleTitles">
                  <a @click='gotoInfo(item._id)' >{{item.title}}</a>
                </p>
            </div>
        </div>
    </div>
  </div>


</div>
</template>

<script>

import {getArticle} from "@/API/api"

export default {
  name:'Article',
  data(){
    return {
      msg:'文章列表 ',
      isactiveUp :false,
      isactiveDown:false,
      isFixed:false,
      articleList:[],
      cloudArr:['JS','HTML','CSS','node','服务器'],
      articleTitles:[{
        _id:"2222",title:"标题标题标题标题标题标题标题标题标题标题标题标题标题标题"
      },{
        _id:"2222",title:"biaoti"
      },{
        _id:"2222",title:"biaoti"
      }],
      numPage:{
        num:1,
        page:0,
      }
    }
  },
  mounted:function(){
      this.$router.push({path:"article?page=1"})
      var pagepams =+this.$route.query.page;
      getArticle(pagepams)
        .then( (response) =>{
          if(response.status==200){
            let resdata = response.data;
            this.articleList.push(...resdata);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
        //滚动监听
        window.addEventListener('scroll', this.handleScroll)
  },
  //重新渲染之后 更改状态
  methods:{
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      if(scrollTop>350){
        this.isFixed = true;
      }else{
        this.isFixed = false;
      }
    },

    getpush:function(){
      var pagepams =+this.$route.query.page+1;

      getArticle(pagepams)
        .then( (response) =>{
          if(response.status==200){
            let resdata = response.data;
            if(resdata.length <=0){
              return
            }
            this.articleList=resdata;
            if(resdata.length <=0){
            this.$router.push({path:"article?page="+(+this.$route.query.page)})
              }else{

              this.$router.push({path:"article?page="+pagepams})
              }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    gobackpush:function(){

      var pagepams =+this.$route.query.page-1;
      if(pagepams<=0){
        return
      }
      getArticle(pagepams)
        .then( (response) =>{
          if(response.status==200){
            let resdata = response.data;
            this.articleList=resdata;
            if(resdata.length <=0){

              }else{
                  this.$router.push({path:"article?page="+(+this.$route.query.page-1)})
              }

          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    gotoInfo:function(id){
      this.$router.push({path:"articleInfo/"+id})
    }
  },
  destroyed () {//离开该页面需要移除这个监听的事件
      window.removeEventListener('scroll', this.handleScroll)
    },
}



</script>
<style >
@import "../../../src/assets/css/article.css";

</style>
