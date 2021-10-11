import * as Dao from '@/models/DAO/authenticationDAO';
import User from '@/models/Objetos/User';

// eslint-disable-next-line import/prefer-default-export
export async function loginWithUser(username, password) {
  const user = await Dao.loginWithUser(username, password);
  return user;
}

export async function register(values) {
  const {
    Cc, name, user, email, password,
  } = values;
  const usuario = new User({
    Cc, name, user, email, password,
  });
  console.log('adiosMundo', usuario.data);
  // alert(values);
  // if (usuario.validation) {
  //   const result = await Dao.register(usuario);
  //   return result;
  // }
  // return { result: false, error: 'El correo no es un correo', data: {} };
}
