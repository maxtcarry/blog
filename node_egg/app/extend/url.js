const URL = Symbol('Context#url');
module.exports = {
  get url(param) {
    // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
    //   url:'mongodb://101.200.54.162:27017/runoob',
  const  url = 'mongodb://127.0.0.1:27017/runoob',
  if (!this[URL]) {
     // 例如，从 header 中获取，实际情况肯定更复杂
     this[URL] = this.set('x-url',url);
   }
   return this[URL];

  },
};
