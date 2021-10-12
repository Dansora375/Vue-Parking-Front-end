import * as Dao from '@/models/DAO/NewResidenteDAO';

export async function ObtainLista(rcompletadas = false) {
  const lista = await Dao.listaEntradas(rcompletadas);
  // console.log(lista);
  return lista;
}

export async function PostEntrada(entradar) {
  const result = await Dao.nuevaResidente(entradar);
  return result;
}