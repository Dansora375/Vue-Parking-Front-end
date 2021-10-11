import axios from 'axios';

export async function loginWithUser(username, pass) {
  try {
    const userData = await axios.post('/authentication/login', { user: username, password: pass });
    return userData;
  } catch (error) {
    console.log(error);
    return {};
  }
}
function ResRegister(completed, error, data) {
  this.result = completed;
  this.error = error;
  this.data = data;
}

export async function register(userData) {
  try {
    const registro = await axios.post('/authentication/register', userData.data);
    return new ResRegister(true, {}, registro);
  } catch (error) {
    console.error(error);
    return new ResRegister(false, error, {});
  }
}
// export async function loginWithEmail(user, password) {
//   try {
//     const user = await axios.post('/authentication/login')
//   } catch (error) {
//   }
// }
