import * as Dao from '@/models/DAO/vehiculosDAO';

export async function ObtainVehiculosLista() {
  const lista = await Dao.listaVehiculos();
  return lista;
}

export async function createVehiculo(vehiculoData) {
  // filtrar los datos para pasarlos al servidor
  console.log(vehiculoData);
}
