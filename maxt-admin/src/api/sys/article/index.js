import request from '@/plugin/axios'
let url = 'http://127.0.0.1:7001/'

//新增文章
export function addArticle (data) {
  return request({
    url: url + 'article',
    method: 'post',
    data:data

  })
}

//获取文章列表
export function GetArticle (data) {
  return request({
    url: url + 'article?page=' + data.ID,
    method: 'get'

  })
}
//获取文章详情
export function GetArticleInfo (data) {
  return request({
    url: url + 'article/' + data._id,
    method: 'get'

  })
}
//更新文章
export function updateArticleInfo (data) {
  return request({
    url: url + 'article/update',
    method: 'put',
    data: data
  })
}
//删除文章
export function delectArticleInfo (data) {
  return request({
    url: url + 'article/' + data._id,
    method: 'DELETE'

  })
}
