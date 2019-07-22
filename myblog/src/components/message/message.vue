<template>
<div class="main_msg">

  <div class="author" v-if='changeMSG'>
    <div class="v_show">{{message}}</div>
    <div class="" style="text-align:right;">
      <button class="changebtn" @click="changemsg" type="button" name="button"></button>
    </div>
  </div>
  <div class="author" v-else>
    <p>
      <input class="name" type="text" name="name" v-model="data.author" placeholder="留下您的大名" />
      <button class="postmsg" @click='changemsg' type="button" name="button">抬起爪子</button>
      <button class="postmsg" @click="postmsg" type="button" name="button">踩个脚印</button>
    </p>
    <p>
      <textarea class="content" name="content" v-model="data.content" placeholder="畅所欲言 ^v^"></textarea>
    </p>
  </div>
  <div class="msglist">
    <div class="msgitem" v-for="( item, index) in msglist">
      <span class="author">
        {{item.author}} <span class="say">说：</span>
        <span class='createTime'>{{item.createTime}}</span>
      </span>
      <p class="content">
        {{item.content}}
        <span class="revert" @click='revert(index,item._id)'>回复</span>
      </p>
      <p class="revertContent  "  v-if="item.message">

      <span class="msgitem" v-for="( msgitem, msgindex ) in item.message "> {{msgitem.author}} <em>回复:</em>       {{msgitem.content}}</span>
      </p>
      <div class="author" v-show="item.show">
        <p>
          <input class="name" type="text" name="name" v-model="revertData.author" placeholder="留下您的大名" />
          <button class="postmsg" @click='revert(index)' type="button" name="button">抬起爪子</button>
          <button class="postmsg" @click="revertPost(index)" type="button" name="button">踩个脚印</button>
        </p>
        <p>
          <textarea class="content" name="content" v-model="revertData.content" placeholder="畅所欲言 ^v^"></textarea>
        </p>

      </div>
    </div>
  </div>
  <p :class="loadflag?'loadMore':'loadMoreDefu'"><span @click="loadMore">{{loadpage}}</span> </p>
</div>
</template>

<script>
import { getMessageList, postMsg, revertMsg } from '@/API/api'
export default {
  name: 'Message',
  data() {
    return {
      page: 1,
      loadpage: '加载更多',
      loadflag: true,

      data: {
        author: '',
        content: ''
      },
      revertData:{
        author:'',
        content:'',
        revertId:''
      },
      message: '',
      changeMSG: true,
      msglist: [],
    }

  },
  mounted: function() {
    let i = 0;
    let msgarr = '留下你的脚印。 '.split("");
    setInterval(() => {
      this.message = this.message + msgarr[i]
      i++;
      if (i > msgarr.length) {
        i = 0;
        this.message = '';
      }
    }, 500)
    //第一页留言加载
    getMessageList({
        page: this.page
      })
      .then((res) => {
        if (res.status !== 200) {
          return
        } else {
          this.msglist = res.data;
          for(let item of this.msglist){
            item.show = false;
          }
        }
      })
      .catch((res) => {
        console.log(res)
      })

  },
  methods: {
    changemsg: function() {
      this.changeMSG = !this.changeMSG;
    },
    postmsg: function() {
      let data = {
        author: this.data.author ? this.data.author : "不愿透露姓名的沙雕网友",
        content: this.data.content
      }
      if (this.data.content.length < 10) {
        alert("请多说点,表达清楚点 ^v^   <10个字符以上>")
        return
      }
      postMsg(data)
        .then((res) => {
          if (res.status == 200) {
            let msglist = this.msglist.splice(0, 0, res.data)
            this.msglist = this.msglist.splice(0, 5);
            this.changeMSG = !this.changeMSG;
            this.data.author = '';
            this.data.content = "";
          }
        })
        .catch((res) => {
          console.log(res)
        })
    },
    loadMore: function() {
      if (!this.loadflag) {
        return
      }
      this.page = +this.page + 1;
      getMessageList({
          page: this.page
        })
        .then((res) => {
          if (res.status !== 200) {
            return
          } else {
            if (res.data.length == 0) {

              this.loadpage = '没有更多数据···';
              this.loadflag = false;

            } else {
              this.msglist.push(...res.data);
              for(let item of this.msglist){
                item.show = false;
              }
            }

          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    revert: function(id,_id) {
    this.revertData.revertId = _id;
    this.msglist[id].show = !this.msglist[id].show;
    },
    revertPost:function(id){
      let resdata = this.revertData;
      if(resdata.content.length<0){
        alert("请多说点,表达清楚点 ^v^  ")
        return
      }
      if(!resdata.revertId){
        alert("你要回复给谁呢~")
      }
      let that = this;
      revertMsg({
        author:resdata.author?resdata.author:"热心的网友",
        content:resdata.content,
        revertId:resdata.revertId
      })
      .then((res)=>{
        console.log(res);
        that.msglist[id].show = false;
        that.msglist[id].message.push({
          author:resdata.author?resdata.author:"热心的网友",
          content:resdata.content,
          revertId:resdata.revertId
        })
      })
      .catch((err)=>{
        console.log(err)
      })
    },
  },
  watch: {

  },
}
</script>

<style scoped>
@import "../../assets/css/message.css"
</style>
