import * as Dao from '@/models/DAO/IngresoResiDAO'

export async function AddIngresoResi (entrada) {
  const datos = await Dao.updateSalidaTime(entrada)
  return datos
}

//  ESta es la que utilizo para traer los ingresos de residentes FILTRANDO CON ACTIVO
export async function IngResiList () {
  const listResi = await Dao.resiIngresolist()
  return listResi
}

export async function postNewIngresoResi (entrada) {
  const dato = await Dao.postNewIngreso(entrada)
  return dato
}
