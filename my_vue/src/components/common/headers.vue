<template>
<div class="header">
  <nav>
    <span href="#" v-for="(id,index) in acitved" v-bind:class="{actives:id.id==isActive}" v-on:click="on_active(id.id)">{{id.text}}</span>
  </nav>
</div>
</template>
<script>
export default {
  name: 'HEADERHTML',
  data:function(){
    return {
    acitved:[
      {text:"首页",id:"index"},
      {text:"导航",id:"navs"},
      {text:"留言",id:"message"},
      {text:"文章",id:"article"},
      {text:"实验室",id:"laboratory"},
      {text:"个人",id:"demon"},
    ],
    isActive:'index',

    }
  },
  mounted:function(){
  
    if(this.$route.name == "articleInfo"){
        this.isActive = "article"
    }else{
      this.isActive = this.$route.name
    }

  },
  updated:function(){
    if(this.$route.name == "articleInfo"){
        this.isActive = "article"
    }else{
      this.isActive = this.$route.name
    }
  },
  methods:{
    on_active:function (index){

        if(index == "article"){
            this.$router.push("/"+index+"?page=1")
        }else{
          this.$router.push("/"+index);
        }
    },
  },
    watch: {
      $route(to,from){
        this.isActive= to.name;
      }
}

}
</script>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  min-height: 68px;
  background: var(--bg-color3);
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .09);
  z-index: 1000;
  top: 0;
  left: 0;
}
nav{
  float: right;
width: 620px;
height: 68px;
  line-height: 68px;
margin-right: 80px;
}
nav span {
  display: inline-block;
  width: 100px;
  text-align: center;
  float:  left;
}
nav span:hover{
  line-height: 70px;
  color:var(--tiao-color1);
  background: var(--bg-color2);
}
nav span.actives{
  line-height: 70px;
  color:var(--tiao-color1);
  background: var(--bg-color2);
}
</style>
