import validator from 'email-validator';
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
  // console.log('adiosMundo', usuario.data);
  // alert(values);
  // console.log('validacion', usuario.validation);
  if (validator.validate(usuario.email)) {
    console.log(usuario, 'es valido');
    const result = await Dao.register(usuario.data);

    console.log(result);
    return result;
  }
  return { register: false, error: 'Error creando el dato', data: {} };
  // return { result: false, error: 'El correo no es un correo', data: {} };
}
