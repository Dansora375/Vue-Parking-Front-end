import axios from 'axios';


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
      nombre: entrada.nombre,
      cedula: entrada.cedula,
      telefono: entrada.telefono,
      apto_num: entrada.apto_num,
      tower: entrada.tower,
      placa: entrada.placa,
      
    });
    return new ResPost(true, {}, nResidente);
  } catch (error) {
    return new ResPost(false, error, {});
  }
}