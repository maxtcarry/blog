'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // async index(req) {
  //   const { ctx, service } = this;
  //    // const res = await service.user.getUser();
  //    this.ctx.status = 200;
  //   this.ctx.body = {"res":"1"};
  // }
  // async new(req) {
  //   const { ctx, service } = this;
  //    // const res = await service.user.getUser();
  //    this.ctx.status = 200;
  //   this.ctx.body = {"res":req};
  // }
  async login() {

    const { ctx, service } = this;
    let resbody = {};
    let logindata = ctx.request.body;
      const res = await service.user.getUserInfo(logindata.username);
      if(+(res.length) > 0){
        if(res[0].username !== logindata.username){
            resbody = {
             msg:"ok",
             status:"error",
             data:"账号不存在"
           }
           this.ctx.body = resbody;
           return
        }
       if(res[0].password !== logindata.password){
         resbody = {
          msg:"ok",
          status:"error",
          data:"密码错误"
        }
        this.ctx.body = resbody;
        return
       }
      ctx.status = 200;
      resbody = {
       msg:"登陆成功",
       status:"200",
       data:res,
     };
     this.ctx.body = resbody;
     return
    }else{
      this.ctx.status = 200;
      resbody = {
       msg:"error",
       status:"400",
       data:"账号密码不存在"
     };

     this.ctx.body = resbody;
     return
    }



}
  async create() {
    const { ctx, service } = this;
       const resbody = {};
    const userInfo = ctx.request.body;
      console.log("userInfo",userInfo)
    const nowMaxId =   await service.user.getUserId();
    const userInfoserver =  await service.user.getUserInfo(userInfo.username);
    console.log("nowMaxId",nowMaxId)
    if(!userInfo.username&&!userInfo.password){
      this.ctx.status = 200;
      resbody.status = '200';
      resbody.msg = '用户名密码不能为空';

      this.ctx.body =resbody;
    }
    if(userInfoserver.length ==0){

      const postData = {
        id:nowMaxId[0].id+1,
        ip:ctx.request.header.origin,
        ...userInfo
      }
       const res = await service.user.createUser(postData);
       this.ctx.status = 200;

       resbody.status = 'success';
       resbody.msg = '创建成功！';
       this.ctx.body =resbody;
    }else{
      this.ctx.status = 200;
      resbody.status = '200';
      resbody.msg = '返回用户信息';
        resbody.data = " 当前 用户已存在";
      this.ctx.body =resbody;
      }

      return
  }
}
module.exports = UserController;
