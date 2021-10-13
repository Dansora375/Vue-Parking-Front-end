import axios from 'axios'

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

export async function resi_list () {
  try {
    const list_R = await axios.get('/ingresoResident')
    // console.log(list_R.data);
    return list_R.data
  } catch (e) {
    return console.log(e.response)
  }
}

function ResPost (completed, error, data) {
  this.result = completed
  this.error = error
  this.data = data
}

export async function nuevo_resi (entrada) {
  try {
    const Resident_Entrada = await axios.post('/residentInf', { nombre: entrada.nombre, cedula: entrada.cedula, telefono: entrada.telefono, apto_num: entrada.apto_num, tower: entrada.tower, placa: entrada.placa, marca: entrada.marca, color: entrada.color, tipo: entrada.tipo, datos_extra: entrada.extra })
    return ResPost(true, {}, Resident_Entrada)
  } catch (error) {
    return new ResPost(false, error, {})
  }
}
