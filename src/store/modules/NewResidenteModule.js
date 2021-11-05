import * as controller from '@/Controladores/NewResidenteController'
import * as controllerResi from '@/Controladores/ResidentController'

export default {
  namespaced: true,
  state: {

    registrosResidente: []

  },
  // showModalNewEntrada: false,

  mutations: {
    addNewResidente (state, residente) {
      state.registrosResidente.push(residente)
    },

    createListaResidentes (state, entradasr) {
      state.registrosResidente = entradasr
      // console.log('datos: ', state.registrosResidente)
    }

    // cambiarEstadoParking(state, index){
    // }

  },
  actions: {
    async cargarResidentes (context) {
      const listaResidentes = await controller.ObtainLista()
      context.commit('createListaResidentes', listaResidentes.data)
    },

    // async crearResidente (context, data) {
    //   const result = await controller.nuevoResidente(data)
    //   console.log('En module', result)
    // },

    async addNewResidente (context, value) {
      const result = await controllerResi.post_Resident(value)
      if (result.result) {
        context.commit(' addNewResidente', result.data)
      } else {
        alert('No se ha podido subir el dato del residente a la base: ')
        // console.log('Error al subir el dato del resiedente a la base : ', result.error)
      }
    }
    // async cambiarEstadoParqueadero(context, index){

    // }

    // changeModalNewEntrada(context, value) {
    //   context.commit('changeShowModalNewEntrada', value);
    // },

  },
  getters: {
    // getNombre(state) {
    //   return state.dataNewEntrada.nombre;
    // },
    // getCedula(state) {
    //   return state.dataNewEntrada.cedula;
    // },
    // getApto(state) {
    //   return state.dataNewEntrada.apto_num;
    // },
    // getTower(state) {
    //   return state.dataNewEntrada.tower;
    // },
    // getPlaca(state) {
    //   return state.dataNewEntrada.placa;
    // },
    // getSelected(state) {
    //   return state.dataNewEntrada.selected;
    // },
    // getExtra(state) {
    //   return state.dataNewEntrada.extra;
    // },
    // showModalNewEntrada(state) {
    //   return state.showModalNewEntrada;
    // },

    getNewResidente (state) {
      return state.registrosResidente
      // return state.registrosEntrada;
    }
  }
}
