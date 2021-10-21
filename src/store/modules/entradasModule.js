import * as controller from '@/Controladores/EntradaController'

const resetData = {
  nombre: '',
  cedula: '',
  apto_num: '',
  tower: '',
  placa: '',
  tipo: '',
  datos_extra: ''
}
export default {
  namespaced: true,
  state: {
    dataNewEntrada: {
      nombre: '',
      cedula: '',
      apto_num: '',
      tower: '',
      placa: '',
      tipo: '',
      datos_extra: ''
    },
    // showModalNewEntrada: false,
    vehicleOptions: [
      'Ninguno',
      'Carro',
      'Moto'
      // Agregar las nuevas opciones de vehiculos aqui
    ],
    registrosEntrada: [],
    inf_visitant: []
  },
  mutations: {
    updateEntrada (state, values) {
      const { key, val } = values
      state.dataNewEntrada[key] = val
    },
    resetDataNewEntrada (state) {
      state.dataNewEntrada = resetData
    },
    addNewEntrada (state, val) {
      const data = val
      data.hora_entrada = new Date()
      state.registrosEntrada.push(val)
      // state.showModalNewEntrada = false;
    },
    createListEntradas (state, entradas) {
      state.registrosEntrada = entradas
    },
    createListVisitant (state, entrada) {
      state.inf_visitant = entrada
    },
    deleteEntrada (state, index) {
      if (index > -1) {
        state.registrosEntrada.splice(index, 1)
      } else {
        console.error(' index no debe de ser negativo')
      }
    }
    // cambiarEstadoParking(state, index){
    // }
  },
  actions: {
    async cargarEntradas (context) {
      const lista = await controller.ObtainLista()
      context.commit('createListEntradas', lista)
    },
    // async cambiarEstadoParqueadero(context, index){

    // }
    async cargar_parq_list (context) {
      const lista_R = await controller.Obt_Parq_list()
      context.commit('createListVisitant', lista_R)
    },

    // changeModalNewEntrada(context, value) {
    //   context.commit('changeShowModalNewEntrada', value);
    // },
    async addNewEntrada (context, value) {
      const result = await controller.PostEntrada(value)
      if (result.result) {
        // console.log(value);

        context.commit('addNewEntrada', value)
      } else {
        // eslint-disable-next-line no-alert
        alert('No se ha podido subir el dato a la base: ')
        console.error('Error al subir el dato  a la base : ', result.error)
      }
    },
    async addNewEntradaFromStore ({ dispatch, state }) {
      // console.log(state.dataNewEntrada);
      await dispatch('addNewEntrada', state.dataNewEntrada)
    },
    async deleteEntrada (context, values) {
      const {
        index,
        id,
        hora_salida
      } = values
      const result = await controller.endEntrada({ id, hora_salida })
      if (result.completed) {
        context.commit('deleteEntrada', index)
        console.log(result)
      } else {
        console.error('Error al ejecutar la operacion')
      }
    }
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
    dataEntrada (state) {
      return state.dataNewEntrada
    },
    vehiculos (state) {
      return state.vehicleOptions
    },
    entradas (state) {
      return state.registrosEntrada
      // return state.registrosEntrada;
    },
    ListVisitant (state) {
      return state.inf_visitant
    }
  }
}
