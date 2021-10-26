import * as controller from '@/Controladores/ParkingController'

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
    ParqueaderosVisitantes: [],
    ParqueaderosResidentes: []

  },
  mutations: {
    addNewParqueadero (state, entrada) {
      state.ParqueaderosResidentes.push(entrada)
    },
    addNewParkingVisi (state, entrada) {
      state.ParqueaderosVisitantes.push(entrada)
    },

    cargarListaParkingRe (state, entrada) {
      state.ParqueaderosResidentes = entrada
    },

    cargarListaParkingVisi (state, entrada) {
      state.ParqueaderosVisitantes = entrada
    },
    // Update Visitant  hora entrada o salida
    AddIngResidentUpdated (state, entrada) {
      const indiceDato = state.ParqueaderosResidentes.map(element => element._id).indexOf(
        entrada._id
      )
      // console.log(indiceDato)
      state.ParqueaderosResidentes.splice(indiceDato, 1, entrada)
    },
    AddSaliResidentUpdated (state, entrada) {
      const indiceDato = state.ParqueaderosResidentes.map(element => element._id).indexOf(
        entrada._id
      )
      // console.log(indiceDato)
      state.ParqueaderosResidentes.splice(indiceDato, 1, entrada)
    },
    // Update Visitant  hora entrada o salida
    AddIngVisitantUpdated (state, entrada) {
      const indiceDato = state.ParqueaderosVisitantes.map(element => element._id).indexOf(
        entrada._id
      )
      // console.log(indiceDato)
      state.ParqueaderosVisitantes.splice(indiceDato, 1, entrada)
    },
    AddSaliVisitantUpdated (state, entrada) {
      const indiceDato = state.ParqueaderosVisitantes.map(element => element._id).indexOf(
        entrada._id
      )
      // console.log(indiceDato)
      state.ParqueaderosVisitantes.splice(indiceDato, 1, entrada)
    }

  },
  actions: {

    // Crear nuevo parqueadero Residente
    async addNewParking (context, value) {
      // console.log(value)
      const result = await controller.PostParqueadero(value)
      if (result.result) {
        // alert('Dato subido con exito')
        context.commit('addNewParqueadero', value)
      } else {
        alert('No se ha podido subir el dato a la base: ')
        console.error('Error al subir el dato  a la base : ', result.error)
      }
    },
    // Crear nuevo parqueadero Visitante
    async addNewParkingVisit (context, value) {
      // console.log(value)
      const result = await controller.PostParqueadero(value)
      if (result.result) {
        // alert('Dato subido con exito')
        context.commit('addNewParqueadero', value)
      } else {
        alert('No se ha podido subir el dato a la base: ')
        console.error('Error al subir el dato  a la base : ', result.error)
      }
    },

    async cargar_data_resiParkig (context) {
      const dataResi = await controller.ParkingResident()
      context.commit('cargarListaParkingRe', dataResi)
    },

    async cargar_data_visitantParkig (context) {
      const dataResi = await controller.ParkingVisitant()
      context.commit('cargarListaParkingVisi', dataResi)
    },

    // Esta es para agregar un ingreso de residente DESDE
    // la vista de parqueaderos
    async AgregarEntradaParking (context, values) {
      const result = await controller.AddIngresoResi(values)
      if (result.data) {
        // console.log(values)
        console.log(result.data)
        context.commit('AddIngResidentUpdated', result.data)
        // Este return se utilizaria en caso de querer
        // implementar la actualizacion con el emit
        // return result.data
      } else {
        alert('No se ha podido actualizar el dato a la base: ')
        console.error('Error al actualizar el dato  a la base : ', result.error)
      }
    },
    async AgregarSalidaparking (context, values) {
      const result = await controller.AddSalidaResidente(values)
      if (result.data) {
        // console.log(values)
        console.log(result.data)
        context.commit('AddSaliResidentUpdated', result.data)
        // Este return se utilizaria en caso de querer
        // implementar la actualizacion con el emit
        // return result.data
      } else {
        return alert('No se ha podido actualizar el dato a la base: ')
      }
    },

    // agregar un ingreso de Visitante DESDE
    // la vista de parqueaderos
    async AgregarEntradaParkingVisi (context, values) {
      const result = await controller.AddIngresoResi(values)
      if (result.data) {
        // console.log(values)
        console.log(result.data)
        context.commit('AddIngVisitantUpdated', result.data)
        // Este return se utilizaria en caso de querer
        // implementar la actualizacion con el emit
        // return result.data
      } else {
        alert('No se ha podido actualizar el dato a la base: ')
        console.error('Error al actualizar el dato  a la base : ', result.error)
      }
    },
    async AgregarSalidaparkingVisi (context, values) {
      const result = await controller.AddSalidaResidente(values)
      if (result.data) {
        // console.log(values)
        console.log(result.data)
        context.commit('AddSaliVisitantUpdated', result.data)
        // Este return se utilizaria en caso de querer
        // implementar la actualizacion con el emit
        // return result.data
      } else {
        return alert('No se ha podido actualizar el dato a la base: ')
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
    Visitant_listParkings (state) {
      return state.ParqueaderosVisitantes
    },
    resident_listParkings (state) {
      return state.ParqueaderosResidentes
    }
  }
}
