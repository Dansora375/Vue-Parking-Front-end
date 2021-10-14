import * as Dao from '@/models/DAO/entradaSalidaDAO'

export async function ObtainLista (completadas = false) {
  const lista = await Dao.listaEntradas(completadas)
  // console.log(lista);
  return lista
}

export async function PostEntrada (entrada) {
  const result = await Dao.nuevaEntrada(entrada)
  return result
}

export async function Obt_Parq_list () {
  const ParVisitant_list = await Dao.list_info_parq()
  return ParVisitant_list
}

export async function endEntrada(data){
  const {
    id,
    hora_salida,
  } = data;
  try {
    const result = Dao.endEntrada({ id, hora_salida });
    return result;
  } catch (error) {
    return { data: `${error}`, completed: false };
  }
}

