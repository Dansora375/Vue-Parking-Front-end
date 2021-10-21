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
