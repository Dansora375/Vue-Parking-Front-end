import { createStore } from 'vuex';
import entradasModule from './modules/entradasModule';
import options_zona_p from './modules/options_zona_p';
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
    options_zona_p
  },
});
