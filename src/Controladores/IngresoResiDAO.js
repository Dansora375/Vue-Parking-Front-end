import * as Dao from '@/models/DAO/ingresoResiDAO'

export async function AddIngresoResi (entrada) {
  const datos = await Dao.addEntradaResi(entrada)
  return datos
}
