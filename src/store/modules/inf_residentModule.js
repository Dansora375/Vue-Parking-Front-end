import * as controller from '@/Controladores/ResidentController'

export default {

  namespaced: true,
  state: {
    // Para enlistar ingreso residente

    Entrada_data_resident: [],
    dataResidentParking: [],
    data_residentNF: []

  },
  mutations: {

    cargarListaIngrResiNF (state, entrada) {
      state.data_residentNF = entrada
    },

    AddIngResidentUpdated (state, entrada) {
      const indiceDato = state.data_residentNF.map(element => element._id).indexOf(
        entrada._id
      )
      // console.log(indiceDato)
      state.data_residentNF.splice(indiceDato, 1, entrada)
    },
    AddSaliResidentUpdated (state, entrada) {
      const indiceDato = state.data_residentNF.map(element => element._id).indexOf(
        entrada._id
      )
      // console.log(indiceDato)
      state.data_residentNF.splice(indiceDato, 1, entrada)
    },
    crearDataResidentParking (state, values) {
      state.dataResidentParking = values
    },

    add_resi (state, data) {
      state.Entrada_data_resident.push(data)
    }

  },
  actions: {

    async cargar_data_resiNF (context) {
      const dataResi = await controller.IngResi_listNF()
      context.commit('cargarListaIngrResiNF', dataResi)
    },

    // Esta obtiene la lista de reidentes que tienen parqueadero
    async cargarData_EntradaResi (context) {
      const data_EntradaResi = await controller.list_entrada_resi()
      context.commit('createLista_EntradaResi', data_EntradaResi)
    },
    // Esta es para agregar un ingreso de residente
    async AgregarEntradaResi (context, values) {
      const result = await controller.AddIngresoResi(values)
      if (result.data) {
        // console.log(values)
        // console.log(result)
        context.commit('AddIngResidentUpdated', result.data)
        // Este return se utilizaria en caso de querer
        // implementar la actualizacion con el emit
        // return result.data
      } else {
        alert('No se ha podido actualizar el dato a la base: ')
        console.error('Error al subir el dato  a la base : ', result.error)
      }
    },
    async AgregarSalidaResi (context, values) {
      const result = await controller.AddSalidaResidente(values)
      if (result.data) {
        // console.log(values)
        // console.log(result)
        context.commit('AddSaliResidentUpdated', result.data)
        // Este return se utilizaria en caso de querer
        // implementar la actualizacion con el emit
        // return result.data
      } else {
        return alert('No se ha podido actualizar el dato a la base: ')
      }
    },
    async cargarListaResidentesParking (context) {
      const lista = await controller.listaResidentesParking()
      if (lista.completed) {
        // console.log(lista);
        context.commit('crearDataResidentParking', lista.data)
      } else {
        console.error(lista.data)
      }
    },

    async addNewResident (context, value) {
      const result = await controller.post_Resident(value)
      if (result.result) {
        context.commit('add_resi', result)
      } else {
        alert('No se ha podido subir el dato del residente a la base: ')
        console.log('Error al subir el dato del resiedente a la base : ', result.error)
      }
    }

  },
  getters: {

    showOptions (state) {
      return state.showOptions
    },

    Entrada_resident_list (state) {
      return state.Entrada_data_resident
    },
    residentListParking (state) {
      return state.dataResidentParking
    },
    resident_listNF (state) {
      return state.data_residentNF
    }

  }

}
