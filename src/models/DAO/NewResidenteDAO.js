import axios from 'axios';

/**
 * @param {*} rcompletadas: referencia a lista con o sin entradas ya finalizadas
 * @returns lista de datos desde el servidor
 */
export async function listaEntradas(rcompletadas = false) {
  try {
    const lista = await axios.get('/entrada_vehiculo/lista', { params: { fin: rcompletadas } });
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
    const nResidente = await axios.post('/residentInf', {
      nombre: entradar.nombre,
      cedula: entradar.cedula,
      telefono: entradar.telefono,
      apto_num: entradar.apto_num,
      tower: entradar.tower,
      placa: entradar.placa,
      
    });
    return new ResPost(true, {}, nResidente);
  } catch (error) {
    return new ResPost(false, error, {});
  }
}