const Service = require('egg').Service;

class UserService extends Service {
  async getUserId() {
    return  await this.ctx.model.User.find().sort({_id:-1}).skip(0).limit(1);
  }
  async getUserInfo(req) {
    if(!req){
      return []
    }
    return  await this.ctx.model.User.find({"username":req});
  }

  async createUser(req) {
      const { ctx } = this;
      return await ctx.model.User.create(req);

   }

   async delectUser(req) {
      return await this.ctx.model.User.create(req);

    }
}

module.exports = UserService;
