import request from '@/plugin/axios'
import url from '@/api/url'
// let url = 'http://101.200.54.162:7001/'
export function AccountLogin (data) {
  return request({
    url: url + 'login',
    method: 'post',
    data
  })
}
// export function GetToken () {
//   return request({
//     url: url + 'home'
//   })
// }
export function LoginOut () {
  return request({
    url: url + 'loginout'
  })
}
