import * as Dao from '@/models/DAO/TowerDAO';

// eslint-disable-next-line import/prefer-default-export
export async function CreateList(data) {
  const {
    torre,
    capacidad,
    user,
    password,
    name,
  } = data;
  try {
    const result = await Dao.crearTorre({
      torre,
      capacidad,
      user,
      password,
      name,
    });
    return result;
  } catch (error) {
    return { data: error, completed: false };
  }
}

export async function ObtainListaTorres() {
  try {
    const lista = await Dao.listaTorres();
    // console.log(lista);
    return lista;
  } catch (error) {
    return { data: error, completed: false };
  }
}
