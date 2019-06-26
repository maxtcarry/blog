const Service = require('egg').Service;
class MessageService extends Service {
//查询留言50条
  async getMessageInfo(req) {
    let num = 5;
    console.log("分页参数",req)
    return  await this.ctx.model.Message
    .find({},{message:1,_id:1,author:1,content:1,createTime:1})
    .limit(num)
    .skip(num * (req.page-1))
    .sort({"createTime":-1});
  }
  //查询总条数
  async getMessageInfoCount() {
    return await this.ctx.model.Message.find().count(true);
  }
  //根据 id id查询
  async getMessageInfo_id(req) {
    const pams = {_id:1};//不现实_id 字段
    return  await this.ctx.model.Message.find({"_id":req},{});
  }
  //创建
  async createMessage(req) {
      const { ctx } = this;
      return await ctx.model.Message.create(req);
   }
   //更新
   async updateMessage(req){
     const { ctx } = this;
     return await ctx.model.Message.updateOne({"_id":req._id},req);
   }
   //删除
  async delectMessage(req) {

      return await this.ctx.model.Message.deleteOne({"_id":req._id});
    }
    //回复
  async revertMessage(req){
    console.log("Service",req)
      return await this.ctx.model.Message.updateOne({"_id":req._id},{'message':req.message});
  }
}

module.exports = MessageService;
