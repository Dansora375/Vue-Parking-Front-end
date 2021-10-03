import * as controller from '@/Controladores/EntradaController';

export default {
  namespaced: true,
  state: {
    showModalNewEntrada: false,
    vehicleOptions: [
      'Ninguno',
      'Carro',
      'Moto',
      // Agregar las nuevas opciones de vehiculos aqui
    ],
    registrosEntrada: [],
  },
  mutations: {
    changeShowModalNewEntrada(state, val) {
      state.showModalNewEntrada = val;
    },
    addNewEntrada(state, val) {
      state.registrosEntrada.push(val);
      state.showModalNewEntrada = false;
    },
    createListEntradas(state, entradas) {
      state.registrosEntrada = entradas;
    },
    // cambiarEstadoParking(state, index){
    // }
  },
  actions: {
    async cargarEntradas(context) {
      const lista = await controller.ObtainLista();
      context.commit('createListEntradas', lista);
    },
    // async cambiarEstadoParqueadero(context, index){

    // }

    changeModalNewEntrada(context, value) {
      context.commit('changeShowModalNewEntrada', value);
    },
    async addNewEntrada(context, value) {
      const result = await controller.PostEntrada(value);
      if (result.result) {
        // console.log(value);
        context.commit('addNewEntrada', value);
      } else {
        // eslint-disable-next-line no-alert
        alert('No se ha podido subir el dato a la base: ');
        console.log('Error al subir el dato  a la base : ', result.error);
      }
    },
  },
  getters: {
    showModalNewEntrada(state) {
      return state.showModalNewEntrada;
    },
    vehiculos(state) {
      return state.vehicleOptions;
    },
    entradas(state) {
      return state.registrosEntrada;
      // return state.registrosEntrada;
    },
  },
};
