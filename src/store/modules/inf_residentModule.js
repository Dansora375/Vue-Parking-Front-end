import * as controller from '@/Controladores/ResidentController'

export default {

  namespaced: true,
  state: {
    // Para enlistar ingreso residente
    data_resident: [],
    Entrada_data_resident: []

  },
  mutations: {

    cargarListaIngrResi (state, entrada) {
      state.data_resident = entrada
    },
    createLista_EntradaResi (state, entrada) {
      state.Entrada_data_resident = entrada
    },
    AddIngResidentUpdated (state, entrada) {
      const IngUpdated = entrada
      const indiceDato = state.data_resident.findIndex(
        el => el._id === IngUpdated._id
      )
      state.data_resident.splice(indiceDato, 1, entrada)
    }
    // add_resi (state, data) {
    //   state.Entrada_data_resident.push(data)
    //   state.showOptions = false
    // }

  },
  actions: {
    // Esta obtiene la lista de ingresos de residentes
    async cargar_data_resi (context) {
      const dataResi = await controller.IngResi_list()
      context.commit('cargarListaIngrResi', dataResi)
    },

    // Esta obtiene la lista de reidentes que tienen parqueadero
    async cargarData_EntradaResi (context) {
      const data_EntradaResi = await controller.list_entrada_resi()
      context.commit('createLista_EntradaResi', data_EntradaResi)
    },
    // Esta es para agregar un ingreso de residente
    async AgregarEntradaResi (context, values) {
      const datosToaddIngr = await controller.AddIngresoResi(values)
      if (datosToaddIngr.result) {
        context.commit('AddIngResidentUpdated', datosToaddIngr)
      } else {
        alert('No se ha podido actualizar el dato a la base: ')
        console.error('Error al subir el dato  a la base : ', datosToaddIngr.error)
      }
    },
    async cargarListaResidentesParking (context) {
      await controller.listaResidentesParking()
    }

    // async addNewResident (context, value) {
    //   const result = await controller.post_Resident(value)
    //   if (result.result) {
    //     context.commit('add_resi', value)
    //   } else {
    //     alert('No se ha podido subir el dato del residente a la base: ')
    //     console.log('Error al subir el dato del resiedente a la base : ', result.error)
    //   }
    // }

  },
  getters: {

    showOptions (state) {
      return state.showOptions
    },
    resident_list (state) {
      return state.data_resident
    },
    Entrada_resident_list (state) {
      return state.Entrada_data_resident
    }

  }

}
