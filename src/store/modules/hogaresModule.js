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
        // console.log(listaHogares.data);
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
    async cambiarOwner() {
      const result = await hogaresController.ChangeOwner({
        homeId: '6166e0705587cfea2f97e2a4',
        homeOwnerId: '61670f3c583516ee675aca12',
        user: 'Cristian2024',
        password: '48596712',
      });
      console.log(result);
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
