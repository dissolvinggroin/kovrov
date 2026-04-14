import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuideView from '../views/GuideView.vue'
import HistoryView from '../views/HistoryView.vue'
import MayorView from '../views/MayorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Ковров — городской сайт',
      },
    },
    {
      path: '/guide',
      alias: '/news',
      name: 'guide',
      component: GuideView,
      meta: {
        title: 'Маршруты и события — Ковров',
      },
    },
    {
      path: '/heritage',
      alias: '/history',
      name: 'heritage',
      component: HistoryView,
      meta: {
        title: 'История и наследие — Ковров',
      },
    },
    {
      path: '/mayor',
      alias: '/head',
      name: 'mayor',
      component: MayorView,
      meta: {
        title: 'Глава города — Ковров',
      },
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        top: 108,
        behavior: 'smooth',
      }
    }

    return { top: 0 }
  },
})

router.afterEach((to) => {
  const title = typeof to.meta.title === 'string' ? to.meta.title : 'Ковров — городской сайт'
  document.title = title
})

export default router
