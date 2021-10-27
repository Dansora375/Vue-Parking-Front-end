import * as Dao from '@/models/DAO/ParkingDAO'

export async function PostParqueadero (entrada) {
  const result = await Dao.nuevoParqueadero(entrada)
  return result
}

export async function listaParqueaderosVisitantes () {
  try {
    const lista = await Dao.listaParqueaderosVisitantes()
    return lista
  } catch (error) {
    return { data: `${error}`, completed: false }
  }
}

//  ESta es la que utilizo para taer los ingresos de residentes SIN FILTRO
export async function ParkingResident () {
  const listResi = await Dao.parkingResident()
  return listResi
}
export async function ParkingVisitant () {
  const listVisi = await Dao.parkingVisitant()
  return listVisi
}

export async function AddIngresoResi (entrada) {
  const datos = await Dao.addEntradaResi(entrada)
  return datos
}
export async function AddSalidaResidente (entrada) {
  const datos = await Dao.addSalidaResi(entrada)
  return datos
}
