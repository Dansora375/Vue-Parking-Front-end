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
    ]
  }
}
