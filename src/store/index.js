import { createStore } from 'vuex';
import entradasModule from './modules/entradasModule';
import inf_residentModule from './modules/inf_residentModule';

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
    inf_resident:inf_residentModule,
  },
});
