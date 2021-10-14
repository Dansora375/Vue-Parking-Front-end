export default {

  namespaced: true,
  state: {
    showOptions: false,
  },
  mutations: {
    changeShowOptions(state, value) {
      state.showOptions = value;
    },
  },
  getters: {

    showOptions(state) {
      return state.showOptions;
    },
  },
};
