import request from '@/plugin/axios'
let url = 'http://127.0.0.1:7001/'
export function AccountLogin (data) {
  return request({
    url: url + 'login',
    method: 'post',
    data
  })
}
export function GetToken () {
  return request({
    url: url + 'home'
  })
}
export function LoginOut () {
    return request({
      url: url + 'loginout'
    })
  }
