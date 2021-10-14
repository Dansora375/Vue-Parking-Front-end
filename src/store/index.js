import { createStore } from 'vuex'
import entradasModule from './modules/entradasModule'
// eslint-disable-next-line camelcase
// import options_zona_p from './modules/options_zona_p'
import vehiculosModule from './modules/vehiculosModule'
import hogaresModule from './modules/hogaresModule'
import inf_resident from './modules/inf_residentModule'
import parqueadero from './modules/parqueaderoModule'
// import entradasModule from './modules/entradasModule';
import * as loginController from '@/Controladores/AuthenticationController'

export default createStore({
  state: {
    userData: {}

  },
  mutations: {
    login (state, user) {
      state.userData = user
    }
  },
  actions: {
    async loginWithUser (context, { user, password }) {
      const usuario = await loginController.loginWithUser(user, password)
      if (usuario.data.correctPassword) {
        // this.$cookies.set('user', usuario.data.data);
        context.commit('login', usuario.data.data)
      }
    },
    register (context, values) {
      const res = loginController.register(values)
      this.userData = res.data
      // this.$router.push({ name: 'Registro' });
      // console.log('hola mundo: \n', values);
    }
  },
  getters: {
    getUserData (state) {
      // console.log('datos de usuairo\n', state.userData);
      // return this.$cookies.get('user');
      return state.userData
    },
    getIsNotLogged (state) {
      return Object.keys(state.userData).length === 0 && state.userData.constructor === Object
      // return this.$cookies.isKey('user');
    }
  },
  modules: {
    entrada_salida: entradasModule,
    // options_zona: options_zona_p,
    vehiculos_module: vehiculosModule,
    hogares_module: hogaresModule,
    inf_resident,
    parqueadero_module: parqueadero
  }
})
