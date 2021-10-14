import axios from 'axios'

/**
 * @param {*} completadas: referencia a lista con o sin entradas ya finalizadas
 * @returns lista de datos desde el servidor
 */
export async function listaEntradas (completadas = false) {
  try {
    const lista = await axios.get('/entrada_vehiculo/lista', { params: { fin: completadas } })
    // console.log('Datos de la lista l', lista);
    return lista.data
  } catch (error) {
    console.log(error)
    return [{}]
  }
}

export async function list_info_parq () {
  try {
    const list_Visitant = await axios.get('/entrada_vehiculo')
    // console.log(list_R.data);
    return list_Visitant.data
  } catch (e) {
    return console.log(e.response)
  }
}

function ResPost (completed, error, data) {
  this.result = completed
  this.error = error
  this.data = data
}

export async function nuevaEntrada (entrada) {
  try {
    // console.log('post function', entrada)
    const nEntrada = await axios.post('/entrada_vehiculo', {
      nombre: entrada.nombre,
      cedula: entrada.cedula,
      apto_num: entrada.apto_num,
      tower: entrada.tower,
      placa: entrada.placa,
      tipo: entrada.tipo,
      datos_extra: entrada.datos_extra,
      parqueadero: entrada.parqueadero,
    })
    return new ResPost(true, {}, nEntrada)
  } catch (error) {
    return new ResPost(false, error, {})
  }
}

export async function endEntrada(data){
  const {
    id,
    hora_salida,
  } = data;
  try {
    const result = axios.put('/entrada_vehiculo/salida', { id, hora_salida })
    return result.data;
  } catch (error) {
    return { data: `${error}`, completed: false };
  }
}
