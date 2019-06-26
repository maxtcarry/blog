// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '博客',
    icon: 'folder-o',
    children: [
      { path: '/demons/article', title: '文章' },
      { path: '/demons/message', title: '留言' },
      { path: '/demons/lib', title: '实验室' },
      { path: '/demons/user', title: '用户' },
      { path: '/demons/demons', title: '个人' }
    ]
  }
]
