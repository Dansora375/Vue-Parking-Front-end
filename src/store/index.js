import { createStore } from 'vuex';
import entradasModule from './modules/entradasModule';
import inf_residentModule from './modules/inf_residentModule';

// import entradasModule from './modules/entradasModule';
import * as loginController from '@/Controladores/AuthenticationController';

export default createStore({
  state: {
    userData: {},
  },
  mutations: {
    login(state, user) {
      state.userData = user;
    },
  },
  actions: {
    async loginWithUser(context, { user, password }) {
      const usuario = await loginController.loginWithUser(user, password);
      if (usuario.data.correctPassword) {
        context.commit('login', usuario.data.data);
      }
    },
  },
  getters: {
    getUserData(state) {
      // console.log('datos de usuairo\n', state.userData);
      return state.userData;
    },
    getIsNotLogged(state) {
      return Object.keys(state.userData).length === 0 && state.userData.constructor === Object;
    },
  },
  modules: {
    entrada_salida: entradasModule,
    inf_resident:inf_residentModule,
  },
});
