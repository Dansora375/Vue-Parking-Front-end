import * as controller from '@/Controladores/EntradaController';

const resetData = {
  nombre: '',
  cedula: '',
  apto_num: '',
  tower: '',
  placa: '',
  selected: '',
  extra: '',
};
export default {
  namespaced: true,
  state: {
    dataNewEntrada: {
      nombre: '',
      cedula: '',
      apto_num: '',
      tower: '',
      placa: '',
      selected: '',
      extra: '',
    },
    // showModalNewEntrada: false,
    vehicleOptions: [
      'Ninguno',
      'Carro',
      'Moto',
      // Agregar las nuevas opciones de vehiculos aqui
    ],
    registrosEntrada: [],
  },
  mutations: {
    updateEntrada(state, values) {
      const { key, val } = values;
      state.dataNewEntrada[key] = val;
    },
    resetDataNewEntrada(state) {
      state.dataNewEntrada = resetData;
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

    // changeModalNewEntrada(context, value) {
    //   context.commit('changeShowModalNewEntrada', value);
    // },
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
    async addNewEntradaFromStore({ dispatch, state }) {
      await dispatch('addNewEntrada', state.dataNewEntrada);
    },
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
    dataEntrada(state) {
      return state.dataNewEntrada;
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
