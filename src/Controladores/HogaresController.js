/* eslint-disable camelcase */
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

export async function CreateHome(data) {
  const {
    aptoNum,
    tower,
    home_owner,
    user,
    password,
  } = data;
  const sendData = {
    aptoNum,
    tower,
    user,
    password,
  };
  if (home_owner !== undefined) {
    sendData.home_owner = home_owner;
  }
  // console.log(sendData);
  // return sendData;
  try {
    const result = await Dao.CreateHome(sendData);
    console.log(result);
    return result;
  } catch (error) {
    return { data: error, completed: false };
  }
}
