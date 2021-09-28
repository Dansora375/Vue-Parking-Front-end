import { createStore } from 'vuex';
import entradasModule from './modules/entradasModule';
// import entradasModule from './modules/entradasModule';

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {
  },
  modules: {
    entrada_salida: entradasModule,
  },
});
