import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const testPage: RouteRecordRaw = { 
  path: '/test', 
  component: () => import('@/views/testPage/index.vue') 
}


const routes: Array<RouteRecordRaw> = [
  testPage,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

router.beforeEach((to, from, next) => {
  console.log(to, from)
  next();
});

export default router
