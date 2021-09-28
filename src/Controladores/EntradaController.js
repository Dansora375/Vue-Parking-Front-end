import * as Dao from '@/models/DAO/entradaSalidaDAO';

export async function ObtainLista(completadas = false) {
  const lista = await Dao.listaEntradas(completadas);
  return lista;
}

export async function PostEntrada(entrada) {
  const result = await Dao.nuevaEntrada(entrada);
  return result;
}
