import * as Dao from '@/models/DAO/ResidentDAO'

export async function post_Resident (entrada) {
  const datos = await Dao.nuevo_resi(entrada)
  return datos
}

export async function list_entrada_resi (completadas = false) {
  const list = await Dao.resi_list_entradas(completadas)
  return list
}

export async function resiedents_list () {
  const list_resi = await Dao.resi_list()
  return list_resi
}
