import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import(/* webpackChunkName: "index" */ '../views/ResumeIndex.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;