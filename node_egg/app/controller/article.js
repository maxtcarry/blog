'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  //获取文章列表
  //字段为 时间 title _id
  async articleList(){
    const {
      ctx,
      service
    } = this;
    let resbody = {};
    let res =  await service.article.getArticleList();

    if(!res){
      ctx.status =200;
      resbody = {
        status:400,
        data:[],
        msg:'网络异常~'
      }
      ctx.body = resbody;
      return
    }
    ctx.status =200;
    resbody = {
      status:200,
      data:res,
      msg:'请求成功~ ^v^'
    }
    ctx.body = resbody;
    return
  }
  async index(req) {
    const {
      ctx,
      service
    } = this;
    let data = ctx.query;
    //参数检验
    let resbody = {};
    let objKey = ["page"];
    for (let i of objKey) {
      if (!data.hasOwnProperty(i)) {
        resbody = {
          msg: "error",
          status: 400,
          data: "参数缺失[" + i + "]",
        }
        this.ctx.status = 400;
        this.ctx.body = resbody;
        return
      }
    }
    for (let k in data) {
      if (data[k] <= 0 || isNaN(data[k])) {
        resbody = {
          msg: "error",
          status: 400,
          data: "[page]参数错误",
        }
        this.ctx.status = 400;
        this.ctx.body = resbody;
        return
      }
    }
    let res =  await service.article.getArticleInfo(data);
    let count = await service.article.getArticleInfoCount();
     resbody = {
      msg:"success",
      status:200,
      data:res,
      pages:{
        count:count,
        page:data.page
      }
    }
     this.ctx.status = 200;
    this.ctx.body = resbody;
  }
  // async new(req) {
  //   const { ctx, service } = this;
  //
  //    // const res = await service.user.getUser();
  //    this.ctx.status = 200;
  //   this.ctx.body = {"res":req};
  // }
  async show() {
    const { ctx, service } = this;
    let data = ctx.params.id;
    console.log('提示',data)
    let res =  await service.article.getArticleInfoId(data);
    console.log('提示',res)
    let updateWatchs = {
      _id:res[0]._id,
      watchs:+ res[0].watchs + 1,
    }

    let resWatchs = await service.article.getArticleInfoWatchs(updateWatchs);
    let count = await service.article.getArticleInfoCount();

    const resbody = {
      msg:"success",
      status:200,
      data:res,
    }
     this.ctx.status = 200;
    this.ctx.body = resbody;
    return
  }
  async create() {
    const {
      ctx,
      service
    } = this;

    const rsqdate = await ctx.request.body;

    let title = {title:rsqdate.title};
    let dbTitle = await service.article.getArticleInfoTitle(title);
    if(dbTitle.length>=1){
      this.ctx.status = 200;
      let resbody = {
        msg: "提交失败,当前标题已存在",
        status: '400',
        data: '不能提交相同的标题，请修改标题后重新提交~ ^_^'
      }
      this.ctx.body = resbody;
      return
    }
    const rsqdata = {
      // a_id:'',
      author:'',
      classify:'',
      title:'',
      content:'',

      // createTime:'',
      // updataTime:'',
      // imgurl:''
    }
    let newdate = new Date();

    for (let i in rsqdata) {
      if (!rsqdate[i]) {
        this.ctx.status = 400;
        let resbody = {
          msg: "提交失败，参数错误",
          status: '400',
          data: i + "参数错误！"
        }
        this.ctx.body = resbody;
        return
      }else{
        rsqdata[i] = rsqdate[i];
      }
    }
      rsqdata.watchs = 0;
    let a_id = await service.article.getArticleInfo_a_id();
    rsqdata.createTime = newdate.toLocaleDateString(Date.now());
    rsqdata.a_id =a_id.length>0? +a_id[0].a_id + 1:0;
    let res = await service.article.createArticle(rsqdata);
    this.ctx.status = 200;
    this.ctx.body = res;
    return
  }
  async update(){
   const {
     ctx,
     service
   } = this;
   let reqId = ctx.params.id;
   let resbody = {};//return 对象
   let reqdata = ctx.request.body;
   console.log(reqId)
   if(reqId !=="update" || !reqdata.hasOwnProperty("_id")){
     resbody = {
       msg: "error",
       status: 400,
       data: "参数错误",
     }
     this.ctx.status = 400;
     this.ctx.body = resbody;
     return
   }
    let newdate = new Date();
    reqdata.updateTime = newdate.toLocaleDateString(Date.now());
    let res = await service.article.updateArticle(reqdata);
   resbody = {
     msg: "success",
     status: 200,
     data: {
       msg:"更新成功！",
   },
   }
   this.ctx.status = 200;
   this.ctx.body = resbody;
  }
  async destroy() {

    const {
      ctx,
      service
    } = this;
    let data = {
      _id: ctx.params.id
    };
    let resbody = {};
    let res = await service.article.delectArticle(data);
    if(res.n ==1 ){
      resbody.msg= "success";
      resbody.data = "删除成功";
      resbody.status = 200;
      ctx.status = 200;
    }else{
      resbody.msg= "error";
      resbody.data = "当前数据不存在~";
      resbody.status = 400;
      ctx.status = 400;
    }
    this.ctx.body = resbody;
    return
  }
}
module.exports = ArticleController;
