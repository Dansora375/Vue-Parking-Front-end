import axios from 'axios'

function ResPost (completed, error, data) {
  this.result = completed
  this.error = error
  this.data = data
}
// Para posrtear se necesita el id edl residente que ingresa
export async function postNewIngreso (entrada) {
  try {
    const nIngreso = await axios.post('/ingresoResident', { id: entrada._id })
    return new ResPost(true, {}, nIngreso)
  } catch (error) {
    return new ResPost(false, error, {})
  }
}

// Se utilizara para agregar la hora de salida cuando
// se de en terminar parquedero para  RESIDENTES
export async function updateSalidaTime (entrada) {
  try {
    const residentSalida = await axios.put('/salidaResident', { id: entrada._id, horaSalida: entrada.horaSalida })
    // SI NO FUNCIONA PROBAR RETORNA SIN RESPOST
    return ResPost(true, {}, residentSalida)
  } catch (error) {
    return new ResPost(false, error, {})
  }
}

// Esta es la lista de IMGRESOS DE RESIDENTES filtrados
// por aquellos que tengan  activo true yq que tenga parqueadero
export async function resiIngresolist () {
  try {
    const listR = await axios.get('/ingresoResident')
    // console.log(list_R.data);
    return listR.data
  } catch (e) {
    return console.log(e.response)
  }
}
