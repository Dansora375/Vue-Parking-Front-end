import * as Dao from '@/models/DAO/authenticationDAO';
import User from '@/models/Objetos/User';

// eslint-disable-next-line import/prefer-default-export
export async function loginWithUser(username, password) {
  const user = await Dao.loginWithUser(username, password);
  return user;
}

export async function register(Cedula, Nombre, user, email, contrasena, tipo = 'Guarda') {
  const usuario = new User(Cedula, Nombre, user, email, contrasena, tipo);
  if (usuario.validation) {
    const result = await Dao.register(usuario);
    return result;
  }
  return { result: false, error: 'El correo no es un correo', data: {} };
}
