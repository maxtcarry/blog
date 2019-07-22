<template lang="html">
<div class="main">



  <div class="title">
{{articleInfo.title}}
  </div>
  <div class="cound">
    <span><img src="../../assets/icons/user.png" alt="">{{articleInfo.author}}</span>
    <span><img src="../../assets/icons/tag.png" alt="">{{articleInfo.classify}}</span>
    <span><img src="../../assets/icons/time.png" alt=""> {{articleInfo.createTime}}</span>
    <span><img src="../../assets/icons/view.png" alt="">{{articleInfo.watchs}}</span>
  </div>

  <div class="content">
    {{articleInfo.content}}
  </div>

</div>
</template>

<script>
import {getArticleInfo} from "@/API/api"
export default {
  name:"ArticleInfo",
  data(){
    return {
      articleInfo:{
        author:"作者",
        classify: "JS",
        content: "暂无内容···",
        createTime: "--------",
        title: "加载中···",
}
    }
  },
  mounted:function(){
    let id = this.$route.params.id;
    getArticleInfo(id)
    .then((res)=>{
      if(res.status !=200){
        return false
      }
      this.articleInfo = res.data[0];
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}
</script>

<style scoped>
.main{
  min-height:calc(100vh - 68px - 48px);
  width: 100vw;
  background: var(--bg-color3);
  margin:68px auto 0;
  border-left:10vw solid rgba(76,180,231,0.1) ;
  border-right:10vw solid  rgba(76,180,231,0.1) ;
}
.title{
  width: 100%;
  text-align:center;
  font-size: 40px;
  color: var(--font-color1);
  height: 180px;
  line-height: 300px;
}
.cound{
  width: 100%;
  text-align:center;
  font-size: 12px;
  color: var(--font-color1);
  height: 40px;
  line-height: 40px;
  vertical-align: bottom;
}
.cound span{
  display: inline-block;
  padding:0 20px;

}
.cound span img{
  margin-right:10px;
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: text-bottom;
  filter: drop-shadow( 1px 1px 0px var(--bg-color4));
}
.content{
  padding: 30px 100px;
color:var(--font-color1);
}
</style>
