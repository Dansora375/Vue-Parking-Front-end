import * as hogaresController from '@/Controladores/HogaresController';
import * as towerController from '@/Controladores/TowerController';

export default {
  namespaced: true,
  state: {
    hogares: [],
    torres: [],
  },
  mutations: {
    addHome(state, home) {
      state.hogares.push(home);
    },
    createListHomes(state, listHomes) {
      state.hogares = listHomes;
      // console.log('datos: ', state.hogares);
    },
    createListTowers(state, listTowers) {
      state.torres = listTowers;
    },
  },
  actions: {
    async cargarHomes(context) {
      const listaHogares = await hogaresController.ObtainListHomes();
      if (listaHogares.completed) {
        console.log(listaHogares.data);
        context.commit('createListHomes', listaHogares.data);
      } else {
        console.error(listaHogares.data);
      }
    },
    async cargarTorres(context) {
      const listaTorres = await towerController.ObtainListaTorres();
      // console.log(listaTorres);
      if (listaTorres.completed) {
        context.commit('createListTowers', listaTorres.data);
      } else {
        console.error(listaTorres.data);
      }
    },
    async crearHome(context, data) {
      const result = await hogaresController.CreateHome(data);
      console.log('En module', result);
    },
  },
  getters: {
    getHogares(state) {
      // console.log(state.hogares);
      return state.hogares;
    },
    getTowers(state) {
      // console.log('en module', state.torres);
      return state.torres;
    },
  },

};
