import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/=2I3TIONFDBOESAS8hGB72A8JR=-DS89Q2H1NF',
    name: 'Index',
    component: () => import(/* webpackChunkName: "index" */ '../views/ResumeIndex.vue'),
  },
  {
    path: '/H0-I0I34ONTOIN78SD612bG0RN3240',
    name: 'ResumeV2',
    component: () => import(/* webpackChunkName: "index" */ '../views/ResumeV2.vue'),
  },
  {
    path: '/short',
    redirect: '/H0-I0I34ONTOIN78SD612bG0RN3240',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;