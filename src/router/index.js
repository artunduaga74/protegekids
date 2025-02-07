// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    //component: () => import('@/layouts/default/Default.vue'), (--en caso necesito introducir algo un componente--)
    children: [
      {
        path: '/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/información',
        name: 'Ventana1',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Ventana1.vue'),
      },
      {
        path: '/alertas',
        name: 'Ventana2',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Ventana2.vue'),
      },
      {
        path: '/Test-Evaluación',
        name: 'Ventana3',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Ventana3.vue'),
      },
      {
        path: '/Guías_acción',
        name: 'Ventana4',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Ventana4.vue'),
      },
      {
        path: '/Ventana5',
        name: 'Ventana5',
        component: () => import(/* webpackChunkName: "home" */ '@/views/Ventana5.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
