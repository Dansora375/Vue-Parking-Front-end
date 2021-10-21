/* eslint-disable camelcase */
import axios from 'axios'

// eslint-disable-next-line import/prefer-default-export
export async function listaHogares () {
  try {
    const lista = await axios.get('/hogares')
    return { data: lista.data, completed: true }
  } catch (error) {
    return { data: error, completed: false }
  }
}

export async function CreateHome (data) {
  const {
    aptoNum,
    tower,
    home_owner,
    user,
    password
  } = data
  const sendData = {
    aptoNum,
    tower,
    user,
    password
  }
  if (home_owner !== undefined) {
    sendData.home_owner = home_owner
  }
  try {
    const result = axios.post('/hogares', sendData)
    // if (home_owner !== undefined) {
    //   // sendData.home_owner = home_owner;
    //   result = await axios.post('/hogares', {
    //     aptoNum,
    //     tower,
    //     user,
    //     password,
    //     home_owner,
    //   });
    // } else {
    //   result = await axios.post('/hogares', {
    //     aptoNum,
    //     tower,
    //     user,
    //     password,
    //     // home_owner,
    //   });
    // }
    console.log(result)
    return result.data
  } catch (error) {
    // console.error(error);
    return { data: error, completed: false }
  }
}

export async function ChangeOwner (data) {
  try {
    const result = await axios.put('/hogares/owner', data)
    console.log(result.data)
    return (result.data)
  } catch (error) {
    return { data: error, completed: false }
  }
}
