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
    component: () => import(/* webpackChunkName: "vehicle_zone" */ '../views/Vehicle_zone.vue'),
  },

  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Inicio_sesion" */ '../views/Inicio.vue'),
  },

  {
    path: '/register',
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
  {
    path: '/Hogares',
    name: 'Hogares',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Hogares.vue'),
  },
  {
    path: '/select_tower',
    name: 'Select_tower',
    component: () => import(/* webpackChunkName: "about" */ '../views/Select_tower.vue'),
  },

  {
    path: '/infoapto',
    name: 'Info_apto',
    component: () => import(/* webpackChunkName: "about" */ '../views/Info_apto.vue'),
  },

  {
    path: '/infovehiculoparqueado',
    name: 'Info_vehiculo_parqueadero',
    component: () => import(/* webpackChunkName: "about" */ '../views/Info_vehiculo_parqueadero.vue'),
  },

  {
    path: '/vehiculos',
    name: 'Vehiculos',
    component: () => import('../views/Vehicle.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
// router.currentRoute.ra
export default router;
