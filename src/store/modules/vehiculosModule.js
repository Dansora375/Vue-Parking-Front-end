import * as vehiculoController from '@/Controladores/vehiculosController'

// const listaV = [
//   {
//     _id: '6164a533039fddf95c06637b',
//     placa: 'SPO-901',
//     marca: 'Mazda',
//     color: 'negro',
//     tipo: 'Carro',
//     datos_extra: 'Ninguno',
//     parqueadero: {
//       _id: '6164a527039fddf95c066376',
//       nombre_Parqueadero: 'A-1',
//     },
//     ResidentOwner: {
//       _id: '6164a512039fddf95c06636b',
//       nombre: 'Sebastian',
//       cedula: 689915977,
//     },
//     createdAt: '2021-10-11T20:57:23.364Z',
//     updatedAt: '2021-10-11T20:57:23.364Z',
//   },
//   {
//     _id: '6164a5ad039fddf95c066386',
//     placa: 'ERT-485',
//     marca: 'Ford',
//     color: 'blanco',
//     tipo: 'Carro',
//     datos_extra: 'Un rayon',
//     ResidentOwner: {
//       _id: '6164a523039fddf95c066373',
//       nombre: 'Andres',
//       cedula: 612003054,
//     },
//     createdAt: '2021-10-11T20:59:25.860Z',
//     updatedAt: '2021-10-11T20:59:25.860Z',
//   },
// ];
async function getListaVehiculos () {
  const lista = await vehiculoController.ObtainVehiculosLista()
  if (lista.completado) {
    return lista.data
  }
  console.error(lista.data)
  return []
}
export default {
  namespaced: true,
  state: {
    vehiculos: []
  },
  mutations: {
    addVehiculo (state, vehiculo) {
      state.vehiculos.push(vehiculo)
    },
    createListVehiculos (state, vehiculos) {
      state.vehiculos = vehiculos
    }
  },
  actions: {
    async cargarVehiculos (context) {
      const listaVehiculos = await getListaVehiculos()
      // console.log(listaVehiculos);
      context.commit('createListVehiculos', listaVehiculos)
    }
  },
  getters: {
    getVehiculos (state) {
      return state.vehiculos
    },
    getVehiculoByIndex (state, index) {
      return state.vehiculos[index]
    }
  }
}
