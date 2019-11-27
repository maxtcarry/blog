import request from '@/plugin/axios'
import url from '@/api/url'

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
