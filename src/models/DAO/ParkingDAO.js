import axios from 'axios'

function ResPost (completed, error, data) {
  this.result = completed
  this.error = error
  this.data = data
}

export async function nuevoParqueadero (entrada) {
  try {
    // console.log('post function', entrada)
    const nParqueadero = await axios.post('/parqueadero', {
      nombreParqueadero: entrada.nombreParqueadero,
      tipoVehicle: entrada.tipoVehicle,
      tipoPersonIngr: entrada.tipoPersonIngr
    })
    return new ResPost(true, {}, nParqueadero)
  } catch (error) {
    return new ResPost(false, error, {})
  }
}

// Get para obtener los parqueaderos que se usaran en los
// select de los ingresos de vehiculos PARA VISITANTES; se filtraran por
// aquellos que tengan el dato "Ocupado :false"
export async function listaParqueaderosVisitantes () {
  try {
    const lista = await axios.get('/parqueaderoIngresoVis')
    // console.log(lista)
    // console.log(lista.data)
    // return lista.data
    return lista
  } catch (error) {
    return { data: `${error}`, completed: false }
  }
}

// para llamar los parqueaderos de residentes
export async function parkingResident () {
  try {
    const listR = await axios.get('/viewParqueadero/Resident')
    // console.log(list_R.data);
    return listR.data
  } catch (e) {
    return console.log(e.response)
  }
}
// para llamar los parqueaderos de VISITANTES
export async function parkingVisitant () {
  try {
    const listR = await axios.get('/viewParqueadero/Visitant')
    // console.log(list_R.data);
    return listR.data
  } catch (e) {
    return console.log(e.response)
  }
}

// Actualizar lahora de entrada en un parqueadero de acuerdo
// a su ingreso
export async function addEntradaResi (entrada) {
  try {
    // console.log(entrada)
    const ResidentEntrada = await axios.put('/parqueaderoIngresoResi', { id: entrada.id, horaEntrada: entrada.horaEntrada })
    // recordar probar argegando el .data en el return
    return ResidentEntrada
  } catch (error) {
    return console.log(error.response)
  }
}
// Actualizar lahora de salida en un parqueadero de a cuerdo
// a la finalizacion de su ingreso
export async function addSalidaResi (entrada) {
  try {
    // console.log(entrada)
    const ResidentEntrada = await axios.put('/parqueaderoSalidaResi', { id: entrada.id, horaSalida: entrada.horaSalida })
    return ResidentEntrada
  } catch (error) {
    return console.log(error.response)
  }
}
