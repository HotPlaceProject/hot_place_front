import { createRouter, createWebHistory } from 'vue-router'
import TopPlaceView from '../views/TopPlaceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'hotPlaces',
      component: TopPlaceView,
    },
    {
      path: '/recommend',
      name: 'recommend',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RecommnedView.vue'),
    },
  ],
})

export default router
