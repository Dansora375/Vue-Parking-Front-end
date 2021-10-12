import * as Dao from '@/models/DAO/hogaresDAO';

// eslint-disable-next-line import/prefer-default-export
export async function ObtainListHomes() {
  try {
    const result = await Dao.listaHogares();
    return result;
  } catch (error) {
    return { data: error, completed: false };
  }
}
