'use strict';
// 系统参数输出
const Controller = require('egg').Controller;
class HomeController extends Controller {
  
  async getIP() {
    let {
      ctx
    } = this;
    if (!ctx.session.token) {
      ctx.session.token = ctx.csrf;
    }
    ctx.status = 200;
    this.ctx.body = {
      ip: ctx.ip
    };
  }

  async getConfig() {
    let {
      ctx
    } = this;
    ctx.status = 200;
    this.ctx.body = {
      ...this.ctx.session
      }
  };

async welcome() {
  let {
    ctx
  } = this;
  ctx.session.token = null;
  ctx.status = 200;
  ctx.body = {
    res: "欢迎使用egg",
    data: ctx.cookies._keys
  };
}
}

module.exports = HomeController;
