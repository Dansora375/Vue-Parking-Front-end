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
    listaParqueaderosVisitantes: []

  },
  mutations: {
    addNewParqueadero (state, entrada) {
      state.listaParqueaderosVisitantes.push(entrada)
    }
  },
  actions: {
    async addNewParking (context, value) {
      console.log(value)
      const result = await controller.PostParqueadero(value)
      if (result.result) {
        alert('Dato subido con exito')
        context.commit('addNewParqueadero', value)
      } else {
        alert('No se ha podido subir el dato a la base: ')
        console.error('Error al subir el dato  a la base : ', result.error)
      }
    }
  },
  getters: {
    tipoVehicle (state) {
      return state.tipoVehicleOptios
    },
    tipoPersonIngr (state) {
      return state.tipoPersonIngrOptions
    },
    getListV (state) {
      return state.listaParqueaderosVisitantes
    }
  }
}
