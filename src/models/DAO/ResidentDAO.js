import axios from 'axios'

// Esta es para enlistar a los residentes que tiene
// paruqeadero y del resdente que se seleccione se creara
// un nuevo ingreso
export async function resi_list_entradas (completadas = false) {
  try {
    const List = await axios.get('/residentList', { params: { fin: completadas } })
    console.log(List.data)
    return List.data
  } catch (error) {
    console.log(error)
    return [{}]
  }
}

// para llamar los parqueaderos de residentes
export async function resiIngresolistNF () {
  try {
    const listR = await axios.get('/viewParqueadero')
    // console.log(list_R.data);
    return listR.data
  } catch (e) {
    return console.log(e.response)
  }
}

function ResPost (completed, error, data) {
  this.result = completed
  this.error = error
  this.data = data
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

// PODRIA SERVIR PARA CREAR RESIDENTES PARA RICARDO
export async function nuevo_resi (entrada) {
  try {
    const Resident_Entrada = await axios.post('/residentInf', { nombre: entrada.nombre, cedula: entrada.cedula, telefono: entrada.telefono, apto_num: entrada.apto_num, tower: entrada.tower, placa: entrada.placa, marca: entrada.marca, color: entrada.color, tipo: entrada.tipo, datos_extra: entrada.extra })
    return ResPost(true, {}, Resident_Entrada)
  } catch (error) {
    return new ResPost(false, error, {})
  }
}

export async function listaResidentesParking () {
  try {
    const lista = await axios.get('/residentList')
    // console.log(lista);
    return { data: lista.data, completed: lista.statusText === 'OK' }
  } catch (error) {
    return { data: error, completed: false }
  }
}
