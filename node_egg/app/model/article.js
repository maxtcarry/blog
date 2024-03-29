module.exports = app => {
  const mongoose = app.mongoose;
  const Runoob = mongoose.Schema;

  const ArticleRunoob = new Runoob({
    title: { type: String  },
    content: { type: String},
    classify:{type : String },
    author:{type : String },
    a_id:{type:Number},
    createTime:{type : String },
    updataTime:{type : String },
    imgurl:{type : String },
    watchs:{type:Number},
  },{versionKey:false});
  // 以上定义了表数据的类型
  return mongoose.model('article', ArticleRunoob,'article');
  // model(参数1，参数2，参数3）
  // 参数1   service 层 调用model的函数名称
  // 参数2  上面定义的数据库对应字段对象 Schema
  // 参数3  是你数据表中需要操作的表的名字，
}
