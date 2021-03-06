import * as Dao from '@/models/DAO/ResidentDAO'

export async function post_Resident (entrada) {
  const result = await Dao.nuevo_resi(entrada)
  return result
}

export async function list_entrada_resi (completadas = false) {
  const list = await Dao.resi_list_entradas(completadas)
  return list
}



export async function listaResidentesParking () {
  const lista = await Dao.listaResidentesParking()
  return lista
}
