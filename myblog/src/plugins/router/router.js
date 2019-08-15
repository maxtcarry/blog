import Vue from 'vue'
import Router from 'vue-router'
import HEADERHTML from '@/components/common/headers'
import FOOTERHTML from '@/components/common/footers'
import Index from '@/components/index/index'
import Article from '@/components/article/article'
import Message from '@/components/message/message'
import Navs from '@/components/navs/navs'
import Laboratory from '@/components/laboratory/laboratory'
import Demon from '@/components/demon/demon'
import ArticleInfo from '@/components/article/articleInfo.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'app',
      redirect: '/index',
      meta:{
        text:"主路由"
      }
    },
    {
      path: '/headers',
      name: 'headers',
      component: HEADERHTML,
      redirect: '/index',
      meta:{
        text:"头部"
      }
    },
    {
      path: '/footers',
      name: 'footers',
      component: FOOTERHTML,
      redirect: '/index',
      meta:{
        text:"底部"
      }
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      meta:{
        text:"首页"
      },

     },
    {
      path: '/article',
      name: 'article',
      component: Article,
      meta:{
        text:"文章"
      }
    },
    {
      path: '/message',
      name: 'message',
      component: Message,
      meta:{
        text:"留言"
      }
    },
    {
      path: '/laboratory',
      name: 'laboratory',
      component: Laboratory,
      meta:{
        text:"实验室"
      }
    },
    {
      path: '/demon',
      name: 'demon',
      component: Demon,
      meta:{
        text:"个人"
      }
    },
    {
      path: '/navs',
      name: 'navs',
      component: Navs,
      meta:{
        text:"导航"
      }
    },
    {
      path: '/articleInfo/:id',
      name: 'articleInfo',
      component: ArticleInfo,
      meta:{
        text:"文章详情"
      }
    },
    {path:'*',redirect: '/index',},
  ]
})
