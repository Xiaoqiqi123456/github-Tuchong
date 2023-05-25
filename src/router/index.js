import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/page/index/index';
Vue.use(Router);


export const constantRoutes = [
  {
    path: '/index',
    component: Layout,
    redirect: '/explore',
    children: [{
      path: 'explore',
      name: '主页',
      component: () =>
        import( /* webpackChunkName: "views" */ '@/views/home/index'),
      children: [
        {
          path: '/videoChannel',
          name: '首页-摄影师列表',
          component: () => import('@/views/home/videoChannel/index')
        },
        {
          path: '/explore',
          name: '首页-标签列表',
          component: () => import('@/views/home/explore/index')
        },
      ]
    }]
  },
  {
    path: '/',
    name: '主页',
    redirect: '/index'
  },
  {
    path: '/tags',
    component: Layout,
    children: [{
      path: '',
      name: '标签',
      component: () =>
        import( /* webpackChunkName: "views" */ '@/views/tags/index'),
    }]
  },
];

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
