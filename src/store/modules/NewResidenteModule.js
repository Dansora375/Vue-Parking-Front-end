import * as controller from '@/Controladores/NewResidenteController';

const resetData = {
  nombre: '',
  cedula: '',
  apto_num: '',
  tower: '',
  placa: '',
 
};
export default {
  namespaced: true,
  state: {
    dataNewResidente: {
      nombre: '',
      cedula: '',
      telefono: '',
      apto_num: '',
      tower: '',
      placa: '',
      
    },
    // showModalNewEntrada: false,
    
    registrosResidente: [],
  },
  mutations: {
    updateResidente(state, values) {
      const { key, val } = values;
      state.dataNewResidente[key] = val;
    },
    resetDataNewResidente(state) {
      state.dataNewResidente = resetData;
    },
    addNewEntrada(state, val) {
      const data = val;
      data.nombre;
      data.cedula;
      data.apto_num;
      data.tower;
      data.placa;
      state.registrosResidente.push(val);
      // state.showModalNewEntrada = false;
    },
    createListEntradas(state, entradasr) {
      state.registrosResidente = entradasr;
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
        console.error('Error al subir el dato  a la base : ', result.error);
      }
    },
    async addNewEntradaFromStore({ dispatch, state }) {
      // console.log(state.dataNewEntrada);
      await dispatch('addNewEntrada', state.dataNewResidente);
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
    dataResidente(state) {
      return state.dataNewResidente;
    },
    
    entradas(state) {
      return state.registrosResidente;
      // return state.registrosEntrada;
    },
  },
};
