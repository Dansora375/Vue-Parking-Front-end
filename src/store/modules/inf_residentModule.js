import * as controller from '@/Controladores/ResidentController'

export default {

  namespaced: true,
  state: {
    // Para enlistar ingreso residente

    // Entrada_data_resident: [],
    dataResidentParking: []

  },
  mutations: {

    crearDataResidentParking (state, values) {
      state.dataResidentParking = values
    }

  },
  actions: {

    // Esta obtiene la lista de reidentes que tienen parqueadero
    async cargarData_EntradaResi (context) {
      const data_EntradaResi = await controller.list_entrada_resi()
      context.commit('createLista_EntradaResi', data_EntradaResi)
    },

    async cargarListaResidentesParking (context) {
      const lista = await controller.listaResidentesParking()
      if (lista.completed) {
        // console.log(lista);
        context.commit('crearDataResidentParking', lista.data)
      } else {
        console.error(lista.data)
      }
    }

  },
  getters: {

    Entrada_resident_list (state) {
      return state.Entrada_data_resident
    },
    residentListParking (state) {
      return state.dataResidentParking
    }

  }

}
