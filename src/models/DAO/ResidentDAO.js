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

function ResPost (completed, error, data) {
  this.result = completed
  this.error = error
  this.data = data
}

// PODRIA SERVIR PARA CREAR RESIDENTES PARA RICARDO
export async function nuevo_resi (entrada) {
  try {
    const Resident_Entrada = await axios.post('/residentInf', {
      nombre: entrada.nombre,
      cedula: entrada.cedula,
      telefono: entrada.telefono,
      apto_num: entrada.apto_num,
      tower: entrada.tower
    })
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
