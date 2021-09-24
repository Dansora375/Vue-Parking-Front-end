import { createRouter, createWebHashHistory } from 'vue-router';

import InOut from '../views/InOut.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: InOut,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/vehicle_zone',
    name: 'Vehicle_zone',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "vehicle_zone" */ '../views/vehicle_zone.vue'),
  },

{
    path: '/inicio_sesion',
    name: 'Inicio_sesion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Inicio_sesion" */ '../views/Inicio.vue'),
  },

  {
    path: '/registrer',
    name: 'Registrer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Registrer" */ '../views/Registrer.vue'),
  },
  //   component: () => import(/* webpackChunkName: "about" */ '../views/vehicle_zone.vue'),
  // },
  {
    path: '/residentes',
    name: 'Residentes',
    component: () => import(/* webpackChunkName: "about" */ '../views/Residentes.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
