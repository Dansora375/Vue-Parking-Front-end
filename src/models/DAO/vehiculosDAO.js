import axios from 'axios'

export async function listaVehiculos () {
  try {
    const lista = await axios.get('/vehiculos')
    // console.log('Ejecucion en DAO: ', lista);
    return { data: lista.data, completado: true }
  } catch (error) {
    return { data: error, completado: false }
  }
}

export async function crearVehiculo (dataVehiculo) {
  // try {

  // } catch (error) {

  // }
  console.log(dataVehiculo)
}
