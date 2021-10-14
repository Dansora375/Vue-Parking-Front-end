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
  const result = await Dao.nuevaResidente(entrada);
  return result;
}