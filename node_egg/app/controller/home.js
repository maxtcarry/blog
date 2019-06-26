'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let {
      ctx
    } = this;
    if (!ctx.session.token) {
      ctx.session.token = ctx.csrf;
    }
    ctx.status = 200;
    console.log('提示',ctx.csrf)
    this.ctx.body = ctx.session.token;
  }
  async loginout() {
    let {
      ctx
    } = this;
 ctx.session.token = null;
 ctx.status = 200;
 ctx.body = {
   res: "当前用户退出登陆",
   data: ctx.cookies._keys
 };
  }
}

module.exports = HomeController;
