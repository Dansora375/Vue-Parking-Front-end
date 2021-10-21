import * as controller from '@/Controladores/IngresoResiDAO'

export default {
  namespaced: true,
  state: {
    dataNewIngrResi: []
    // data_resident: []

  },
  mutations: {

    cargarListaIngrResi (state, entrada) {
      state.dataNewIngrResi = entrada
    },

    updateTimeSalidaIng (state, entrada) {
      const IngUpdated = entrada
      const indiceDato = state.dataNewIngrResi.findIndex(
        el => el._id === IngUpdated._id
      )
      state.dataNewIngrResi.splice(indiceDato, 1, entrada)
    },
    AgregarNewIngreso (state, entrada) {
      state.dataNewIngrResi.push(entrada)
    }

  },
  actions: {
    // Esta obtiene la lista de ingresos de residentes
    async cargar_data_resi (context) {
      const dataResi = await controller.IngResiList()
      context.commit('cargarListaIngrResi', dataResi)
    },

    async CrearNewIngreso (context, value) {
      const newIngreso = await controller.postNewIngresoResi(value)
      if (newIngreso.data) {
        context.commit('AgregarNewIngreso', value)
      } else {
        alert('No se ha podido postear el dato a la base: ')
        console.error('Error al subir el dato  a la base : ', newIngreso.error)
      }
    },

    async updateTimeSaldiaIng (context, entradas) {
      const result = await controller.AddIngresoResi(entradas)
      if (result.data) {
        context.commit('updateTimeSalidaIng', entradas)
      } else {
        alert('No se ha podido actualizar el dato a la base: ')
        console.error('Error al subir el dato  a la base : ', result.error)
      }
    }
  },
  getters: {
    residentIngresoList (state) {
      return state.dataNewIngrResi
    }
  }
}
