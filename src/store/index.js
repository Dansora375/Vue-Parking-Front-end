import { createStore } from 'vuex'
import entradasModule from './modules/entradasModule'
// eslint-disable-next-line camelcase
// import options_zona_p from './modules/options_zona_p'
import vehiculosModule from './modules/vehiculosModule'
import hogaresModule from './modules/hogaresModule'
import inf_resident from './modules/inf_residentModule'
import parqueadero from './modules/parqueaderoModule'
import ResiIngreso from './modules/ResiIngresoDAO'

// import entradasModule from './modules/entradasModule';
import NewResidenteModule from './modules/NewResidenteModule'
import * as loginController from '@/Controladores/AuthenticationController'

export default createStore({
  state: {
    userData: {},
    isAuthenticating: false
  },
  mutations: {
    login (state, user) {
      state.userData = user
    },
    authenticating (state, val) {
      state.isAuthenticating = val
    },
    terminarSesion (state) {
      state.userData = {}
      // console.log(state.userData);
    }
  },
  actions: {
    async loginWithUser (context, { user, password }) {
      try {
        if (!this.state.isAuthenticating) {
          context.commit('authenticating', true)
          const usuario = await loginController.loginWithUser(user, password)
          if (usuario.data.correctPassword) {
            // this.$cookies.set('user', usuario.data.data);
            context.commit('login', usuario.data.data)
          }
        }
      } catch (error) {
        console.log(error)
      } finally {
        context.commit('authenticating', false)
      }
    },
    async register (context, values) {
      context.commit('authenticating', true)
      console.log('hola', this.state.isAuthenticating)
      const res = await loginController.register(values)
      context.commit('authenticating', false)
      this.userData = res.data
      // this.$router.push({ name: 'Registro' });
      // console.log('hola mundo: \n', values);
    },
    terminarSesion (context) {
      // console.log('hola mundo');
      context.commit('terminarSesion')
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
    parqueadero_module: parqueadero,
    inf_resident,
    ResiIngreso,

    // options_zona: options_zona_p,
    New_Residente: NewResidenteModule
  }
})
