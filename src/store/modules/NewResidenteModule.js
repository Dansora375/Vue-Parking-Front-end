import * as controller from '@/Controladores/NewResidenteController';


export default {
  namespaced: true,
  state: {
    
    registrosResidente: [],
      
    },
    // showModalNewEntrada: false,
    

  mutations: {
   
    createListResidentes(state, entradasr) {
      state.registrosResidente = entradasr;
      console.log('datos: ', state.entradasr);
    },
    // cambiarEstadoParking(state, index){
    // }
  },
  actions: {
    async cargarResidentes(context) {
      const listaResidentes = await controller.ObtainLista();
      context.commit('createListaResidentes', listaResidentes);
    },
    // async cambiarEstadoParqueadero(context, index){

    // }

    // changeModalNewEntrada(context, value) {
    //   context.commit('changeShowModalNewEntrada', value);
    // },
    
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
    
    getNewResidente(state) {
      return state.registrosResidente;
      // return state.registrosEntrada;
    },
  },
};
