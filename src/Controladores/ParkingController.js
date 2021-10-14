import * as Dao from '@/models/DAO/ParkingDAO'

export async function PostParqueadero (entrada) {
  const result = await Dao.nuevoParqueadero(entrada)
  return result
}
