'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = "demonsLOVE";
  config.security = {
    csrf: {
      enable: false ,
      ignoreJSON: true,
      headerName: 'demontoken',
    },
    domainWhiteList: ['*']
  };
  //跨域cors 配置
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  // add your config here
  config.middleware = ['getdate'];
  config.getdate = {

  };
  //连接mongodb 本地数据库
  exports.mongoose = {
    //mongo 192.168.1.100:27017
    //线上数据库地址
  //   url:'mongodb://101.200.54.162:27017/runoob',
   url: 'mongodb://127.0.0.1:27017/runoob',
    //链接到本地的MongoDB，mongoTest是我本地数据库的名字，根据自己数据库名字进行填写即可
    options: {
      useNewUrlParser: true
    },
  };


  return config;
};
