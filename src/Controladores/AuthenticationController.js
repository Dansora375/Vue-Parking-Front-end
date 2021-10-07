import * as Dao from '@/models/DAO/authenticationDAO';

// eslint-disable-next-line import/prefer-default-export
export async function loginWithUser(username, password) {
  const user = await Dao.loginWithUser(username, password);
  return user;
}
