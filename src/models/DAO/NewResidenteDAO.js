import axios from 'axios';

/**
 * @param {*} rcompletadas: referencia a lista con o sin entradas ya finalizadas
 * @returns lista de datos desde el servidor
 */
export async function listaEntradas(rcompletadas = false) {
  try {
    const lista = await axios.get('/entrada_vehiculo/lista', { params: { fin: completadas } });
    // console.log('Datos de la lista l', lista);
    return lista.data;
  } catch (error) {
    console.log(error);
    return [{}];
  }
}

function ResPost(completed, error, data) {
  this.result = completed;
  this.error = error;
  this.data = data;
}

export async function nuevaResidente(entradar) {
  try {
    console.log('post function', entradar);
    const nEntrada = await axios.post('/entrada_vehiculo', {
      nombre: entradar.nombre,
      cedula: entradar.cedula,
      apto_num: entradar.apto_num,
      tower: entradar.tower,
      placa: entradar.placa,
      
    });
    return new ResPost(true, {}, nEntrada);
  } catch (error) {
    return new ResPost(false, error, {});
  }
}