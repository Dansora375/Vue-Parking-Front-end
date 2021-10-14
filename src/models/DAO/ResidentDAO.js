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
// Esta es la lista de IMGRESOS DE RESIDENTES
export async function resiIngresolist () {
  try {
    const listR = await axios.get('/ingresoResident')
    // console.log(list_R.data);
    return listR.data
  } catch (e) {
    return console.log(e.response)
  }
}
// SIN FILTRO S DE ACTVO
export async function resiIngresolistNF () {
  try {
    const listR = await axios.get('/ingresoResidentNF')
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
// Agregar entrada de residente
export async function addEntradaResi (entrada) {
  try {
    // console.log(entrada)
    const ResidentEntrada = await axios.put('/ingresoResident', { id: entrada.id, horaSalida: entrada.horaSalida })
    return ResidentEntrada
  } catch (error) {
    return console.log(error.response)
  }
}
// Agregar saldia de residente
export async function addSalidaResi (entrada) {
  try {
    // console.log(entrada)
    const ResidentEntrada = await axios.put('/saldiaResident', { id: entrada.id, horaSalida: entrada.horaSalida })
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
