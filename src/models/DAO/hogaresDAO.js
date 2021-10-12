import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export async function listaHogares() {
  try {
    const lista = await axios.get('/hogares');
    return { data: lista.data, completed: true };
  } catch (error) {
    return { data: error, completed: false };
  }
}
