import axios from 'axios'

function ResPost (completed, error, data) {
  this.result = completed
  this.error = error
  this.data = data
}

export async function addEntradaResi (entrada) {
  try {
    const ResidentEntrada = await axios.put('/ingresoResident', { id: entrada._id, horaSalida: entrada.cedula })
    return ResPost(true, {}, ResidentEntrada)
  } catch (error) {
    return new ResPost(false, error, {})
  }
}
