import * as controller from '@/Controladores/ParkingController'

const resetData = {
  nombreParqueadero: '',
  tipoVehicle: '',
  tipoPersonIngr: ''
}

export default {
  namespaced: true,
  state: {
    dataNewParking: {
      nombreParqueadero: '',
      tipoVehicle: '',
      tipoPersonIngr: ''
    },
    tipoVehicleOptios: [
      'Carro',
      'Moto'
    ],
    tipoPersonIngrOptions: [
      'Residente',
      'Visitante'
    ],
    listaParqueaderosVisitantes: [],
  },
  mutations: {
    createListParkingV(state, value) {
      state.listaParqueaderosVisitantes = value;
    }
  },
  actions: {
    async cargarPV(context) {
      const lista = await controller.listaParqueaderosVisitantes();
      if ( lista.completed ) {
        context.commit('createListParkingV', lista.data);
      } else  {
        console.error(lista.data);
      }
    },
  },
  getters: {
    getListV(state) {
      return state.listaParqueaderosVisitantes
    },
  }
}
