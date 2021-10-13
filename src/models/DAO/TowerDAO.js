import axios from 'axios';

export async function listaTorres() {
  try {
    const lista = await axios.get('/buildings/towers/list');
    // console.log('En dao', lista);
    return { data: lista.data.data, completed: lista.data.completed };
  } catch (error) {
    return { data: error, completed: false };
  }
}

export async function crearTorre(datos) {
  try {
    const result = await axios.post('/buildings/towers/create', { datos });
    return { data: result.data.data, completed: result.data.completed };
  } catch (error) {
    return { data: error, completed: false };
  }
}
