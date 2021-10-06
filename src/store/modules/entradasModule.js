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
    inf_visitant:[]
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
    createListVisitant(state, entrada){
      state.inf_visitant=entrada;
    }
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
    async cargar_parq_list(context){
      const lista_R= await controller.Obt_Parq_list();
      context.commit('createListVisitant', lista_R)
    },

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
    ListVisitant(state) {
      return state.inf_visitant;
    }
  },
};
