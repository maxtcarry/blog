'use strict';

const Controller = require('egg').Controller;

class MessageController extends Controller {
  //分页查询 不输入就是查全部 通过query查询
  async index() {
    const {
      ctx,
      service
    } = this;
    let data = ctx.query;
    //参数检验
    let resbody = {};
    let res = await service.message.getMessageInfo(data);
    let count = await service.message.getMessageInfoCount();
    resbody = {
      msg: "success",
      status: 200,
      data: res ,
      pages: {
        count: count
      },
    }
    this.ctx.status = 200;
    this.ctx.body = resbody;
  }
  async show() {
    const {
      ctx,
      service
    } = this;
    let data = ctx.params.id;
    let res = await service.message.getMessageInfo_classify(data);
    const resbody = {
      msg: "success",
      status: 200,
      data: res,
    }
    this.ctx.status = 200;
    this.ctx.body = resbody;
  }
  async create() {
    const {
      ctx,
      service
    } = this;
  let resbody ={};
    let rsqdata = await ctx.request.body;
    let newdate = new Date();
    for (let i in rsqdata) {
      if (!rsqdata[i]) {
        this.ctx.status = 400;
       resbody = {
          msg: "提交失败，参数错误",
          status: '400',
          data: i + "参数错误！"
        }
        this.ctx.body = resbody;
        return
      }
    }

    let getdate =await ctx.app.middleware.getdate();
    rsqdata.createTime =  await getdate(ctx,function(){}).then((res)=>{
      return res;
    })

    let res = await service.message.createMessage(rsqdata);
    this.ctx.status = 200;
    resbody = {
       msg: "提交成功",
       status: 200,
       data: res
     }
    this.ctx.body = resbody;
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
    let res = await service.message.updateMessage(reqdata);
   resbody = {
     msg: "success",
     status: 200,
     data: {
       msg:"更新成功！",
       data:res,
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
    let res = await service.message.delectMessage(data);
        let resbody = {}
    if(res.ok == 1){
      resbody = {
        msg: "success",
        status: 200,
        data: res,
      }
      this.ctx.status = 200;
      this.ctx.body = resbody;
      return
    }else{
      resbody = {
        msg: "error",
        status: 400,
        data: '当前已删除或者不存在! ^v^',
      }
      this.ctx.status = 200;
      this.ctx.body = resbody;
      return
    }


  }
  async revert(){
    const {
      ctx,
      service
    } = this;
    let data =  ctx.request.body;
    let resData = await service.message.getMessageInfo_id(data.revertId);
    console.log(resData)
    if(!Array.isArray(resData[0].message)){
        resData[0].message= [];
    }
    resData[0].message.push(data);
    console.log(resData[0].message)
    let reqData = {
      _id:data.revertId,
      message:resData[0].message
    }
    let res = await service.message.revertMessage(reqData);
    this.ctx.status = 200;
    this.ctx.body = res;
  }
}
module.exports = MessageController;
