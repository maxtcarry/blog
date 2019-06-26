import layoutHeaderAside from '@/layout/header-aside'

const meta = { requiresAuth: true }

export default {
  path: '/demons',
  name: 'demons',
  meta,
  redirect: { name: 'index' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'message', name: `${pre}message`, component: () => import('@/pages/demons/message'), meta: { meta, title: '留言' } },
    { path: 'demons', name: `${pre}demons`, component: () => import('@/pages/demons/demons'), meta: { meta, title: '个人' } },
    { path: 'user', name: `${pre}user`, component: () => import('@/pages/demons/user'), meta: { meta, title: '用户' } },
    { path: 'lib', name: `${pre}lib`, component: () => import('@/pages/demons/lib'), meta: { meta, title: '实验室' } },
    { path: 'article', name: `${pre}article`, component: () => import('@/pages/demons/article'), meta: { meta, title: '文章' } },
    { path: 'article/edit', name: `${pre}editArticle`, component: () => import('@/pages/demons/editArticle'), meta: { meta, title: '文章修改' } },
    { path: 'article/add', name: `${pre}addArticle`, component: () => import('@/pages/demons/addArticle'), meta: { meta, title: '新增文章' } }
  ])('demons-')
}
