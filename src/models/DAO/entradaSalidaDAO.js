import axios from 'axios';

/**
 * @param {*} completadas: referencia a lista con o sin entradas ya finalizadas
 * @returns lista de datos desde el servidor
 */
export async function listaEntradas(completadas = false) {
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

export async function nuevaEntrada(entrada) {
  try {
    console.log('post function', entrada);
    const nEntrada = await axios.post('/entrada_vehiculo', { placa: entrada.placa, tipo: entrada.tipo, extra: entrada.extra });
    return new ResPost(true, {}, nEntrada);
  } catch (error) {
    return new ResPost(false, error, {});
  }
}
