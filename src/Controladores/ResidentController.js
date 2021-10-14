import * as Dao from '@/models/DAO/ResidentDAO'

export async function post_Resident (entrada) {
  const datos = await Dao.nuevo_resi(entrada)
  return datos
}

export async function list_entrada_resi (completadas = false) {
  const list = await Dao.resi_list_entradas(completadas)
  return list
}
//  ESta es la que utilizo para taer los ingresos de residentes
export async function IngResi_list () {
  const listResi = await Dao.resiIngresolist()
  return listResi
}

export async function AddIngresoResi (entrada) {
  const datos = await Dao.addEntradaResi(entrada)
  return datos
}

export async function listaResidentesParking () {
  const lista = await Dao.listaResidentesParking();
  return lista;
} 
