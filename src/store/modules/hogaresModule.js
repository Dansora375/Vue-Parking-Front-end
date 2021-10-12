import * as hogaresController from '@/Controladores/HogaresController';

export default {
  namespaced: true,
  state: {
    hogares: [],
  },
  mutations: {
    addHome(state, home) {
      state.hogares.push(home);
    },
    createListHomes(state, listHomes) {
      state.hogares = listHomes;
      console.log('datos: ', state.hogares);
    },
  },
  actions: {
    async cargarHomes(context) {
      const listaHogares = await hogaresController.ObtainListHomes();
      if (listaHogares.completed) {
        context.commit('createListHomes', listaHogares.data);
      } else {
        console.error(listaHogares.data);
      }
    },
  },
  getters: {
    getHogares(state) {
      // console.log(state.hogares);
      return state.hogares;
    },
  },

};
