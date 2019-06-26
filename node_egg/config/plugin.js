'use strict';

// had enabled by egg
// exports.static = true;
//mongodb 插件 mongoose
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};
//cors 跨域
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
//开启参数校验
exports.validate = {
  enable: true,
  package: 'egg-validate',
};
