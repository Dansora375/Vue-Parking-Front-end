import * as Dao from '@/models/DAO/NewResidenteDAO';

export async function ObtainLista() {
  try {
    const result = await Dao.listaResidentes();
    return result;
  } catch (error) {
    return { data: error, completed: false };
  }
}

export async function PostEntrada(entradar) {
  const result = await Dao.nuevaResidente(entradar);
  return result;
}