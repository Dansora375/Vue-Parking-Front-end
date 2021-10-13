import axios from 'axios';

/**
 * @param {*} completadas: referencia a lista con o sin entradas ya finalizadas
 * @returns lista de datos desde el servidor
 */
export async function listaResidentes() {
  try {
    const lista = await axios.get('/residentInf', );
    // console.log('Datos de la lista l', lista);
    return { data: lista.data, completed: true };
  } catch (error) {
    return { data: error, completed: false };
  }
}
  

function ResPost(completed, error, data) {
  this.result = completed;
  this.error = error;
  this.data = data;
}

export async function nuevaResidente(entrada) {
  try {
    console.log('post function', entrada);
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