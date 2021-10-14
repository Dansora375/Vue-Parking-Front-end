import * as Dao from '@/models/DAO/NewResidenteDAO';

export async function ObtainLista() {
  try {
    const result = await Dao.listaResidentes();
    return result;
  } catch (error) {
    return { data: error, completed: false };
  }
}

export async function PostEntrada(entrada) {
  const result = await Dao.nuevoResidente(entrada);
  return result;
}

export async function nuevoResidente(data) {

  const {
    nombre,
    cedula,
    telefono,
    apto_num,
    tower,
    placa,
  }=data
  
try {
    const result = await Dao.nuevoResidente();

  console.log(result);
  return result.data;
} catch (error) {
  // console.error(error);
  return { data: error, completed: false };
}
}