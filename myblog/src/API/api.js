import axios from "../plugins/axios"

let url = 'http://127.0.0.1:7001';
// 文章分页
function getArticle(options) {
  if (typeof options == "object") {
    return axios.get(url + '/article', {
      params: options
    })
  }
  if (typeof options == 'number') {
    return axios.get(url + '/article?page=' + options)
  }
}
//获取文章详情
function getArticleInfo(id) {
  return axios.get(url + '/article/' + id)
}
//获取文章列表
function getArticleList() {
  return axios.get('/articleList');
}
//获取留言列表
function getMessageList(obj) {

  if (obj) {
    return axios.get(url + '/message?page=' + obj.page)
  } else {
    return axios.get(url + '/message')
  }

}
//新增留言
function postMsg(data) {
  return axios.post(url + '/message', data)
}
//修改留言
function revertMsg(data){
  return axios.post(url + '/revert', data)
}
export {
  getArticle,
  getArticleList,
  getArticleInfo,
  getMessageList,
  postMsg,
  revertMsg,
}
