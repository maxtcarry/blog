const Service = require('egg').Service;

class ArticleService extends Service {

  async getArticleInfo(req) {
    const pams = {
      _id: 0
    };
    let num = 5;
    return await this.ctx.model.Article
      .find({}, {})
      .limit(num)
      .skip(num * (req.page - 1)).sort({
        'createTime': -1
      });
  }
  //查询所有列表
  async getArticleList() {
    return await this.ctx.model.Article.find({}, {
      title: 1,
      _id: 1,
      createTime: 1
    }).sort({
      'createTime': -1
    });
  }
  //查询总字段
  async getArticleInfoCount() {
    return await this.ctx.model.Article.find().count(true);
  }
  //查询 title 是否存在
  async getArticleInfoTitle(data) {
    return await this.ctx.model.Article.find(data);
  }
  //查询_id
  async getArticleInfoId(req) {
    const {
      ctx
    } = this;
    const pams = {
      _id: 0
    }; //不现实_id 字段
    return await ctx.model.Article.find({
      "_id": req
    }, {});
  }
  //更新 查看次数
  async getArticleInfoWatchs(req) {
    const {
      ctx
    } = this;
    return await ctx.model.Article.updateOne({
      "_id": req._id
    }, {
      watchs: req.watchs
    });
  }
  //查询最大的a_id
  async getArticleInfo_a_id(req) {
    const pams = {
      a_id: 1
    }; //不现实_id 字段
    return await this.ctx.model.Article.find({}, pams).sort({
      a_id: -1
    }).skip(0).limit(1);
  }
  async createArticle(req) {
    const {
      ctx
    } = this;
    return await ctx.model.Article.create(req);
  }
  async updateArticle(req) {
    const {
      ctx
    } = this;
    return await ctx.model.Article.updateOne({
      "_id": req._id
    }, req);
  }
  async delectArticle(req) {
    return await this.ctx.model.Article.deleteOne(req);
  }
}
module.exports = ArticleService;
