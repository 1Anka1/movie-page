import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  routes: () => [
    {
      name: 'home',
      path: '/',
      meta: {
        layout: 'main',
      },
      component: () => import('~/pages/home/Home.vue'),
    },
  ],
}
