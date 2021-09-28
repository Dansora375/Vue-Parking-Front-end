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
      state.registroEntrada = entradas;
    },
  },
  actions: {
    async cargarDocs(context) {
      const lista = await controller.obtainLista();
      context.commit('createListEntradas', lista);
    },
    changeModalNewEntrada(context, value) {
      context.commit('changeShowModalNewEntrada', value);
    },
    addNewEntrada(context, value) {
      context.commit('addNewEntrada', value);
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
    },
  },
};
