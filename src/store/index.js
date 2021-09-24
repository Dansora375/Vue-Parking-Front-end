import { createStore } from 'vuex';

export default createStore({
  state: {
    showModalNewEntrada: false,
  },
  mutations: {
    changeShowModalNewEntrada(state, val) {
      state.showModalNewEntrada = val;
    },
  },
  actions: {
    changeModalNewEntrada(context, value) {
      context.commit('changeShowModalNewEntrada', value);
    },
  },
  getters: {
    showModalNewEntrada(state) {
      return state.showModalNewEntrada;
    },
  },
  modules: {
  },
});
