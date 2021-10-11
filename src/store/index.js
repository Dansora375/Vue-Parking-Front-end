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
        // this.$cookies.set('user', usuario.data.data);
        context.commit('login', usuario.data.data);
      }
    },
    register(context, values) {
      loginController.register(values);
      // console.log('hola mundo: \n', values);
    },
  },
  getters: {
    getUserData(state) {
      // console.log('datos de usuairo\n', state.userData);
      // return this.$cookies.get('user');
      return state.userData;
    },
    getIsNotLogged(state) {
      return Object.keys(state.userData).length === 0 && state.userData.constructor === Object;
      // return this.$cookies.isKey('user');
    },
  },
  modules: {
    entrada_salida: entradasModule,
    inf_resident:inf_residentModule,
  },
});
