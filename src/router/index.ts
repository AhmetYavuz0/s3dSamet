import * as path from 'node:path'
import { setupLayouts } from 'virtual:generated-layouts'

import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/default.vue'
import HomeView from '@/pages/index.vue'
import sepet from '@/pages/sepet.vue'
// Sayfalar

const routes = [
  {
    path: '/',
    component: DefaultLayout, // Ana rotayı default layout'a sarıyoruz
    children: [
      {
        path: '', // Boş path, ana sayfa için
        name: 'home',
        component: HomeView,
        meta: {
          layout: 'DefaultLayout', // Bu sayfada DefaultLayout kullan
        },
      },
      {
        path: '/sepet',
        name: 'cart',
        component: sepet, // Buraya sepet sayfasının bileşenini ekleyin.
        meta: {
          layout: 'DefaultLayout',
        },
      },
    ],
  },

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (localStorage.getItem('vuetify:dynamic-reload')) {
      console.error('Dynamic import error, reloading page did not fix it', err)
    } else {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
