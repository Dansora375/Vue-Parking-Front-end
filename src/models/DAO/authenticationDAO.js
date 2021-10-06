import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export async function loginWithUser(username, pass) {
  try {
    const userData = await axios.post('/authentication/login', { user: username, password: pass });
    return userData;
  } catch (error) {
    console.log(error);
    return {};
  }
}

// export async function loginWithEmail(user, password) {
//   try {
//     const user = await axios.post('/authentication/login')
//   } catch (error) {
//   }
// }
