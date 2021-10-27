import axios from 'axios'

export async function listaResidentes () {
  try {
    const lista = await axios.get('/residentInf')
    // console.log('Datos de la lista l', lista);
    return { data: lista.data, completed: true }
  } catch (error) {
    return { data: error, completed: false }
  }
}

// export async function nuevoResidente (data) {
//   const {
//     nombre,
//     cedula,
//     telefono,
//     apto_num,
//     tower
//   } = data
//   try {
//     const result = await axios.post('/residentInf')

//     console.log(result)
//     return result.data
//   } catch (error) {
//     // console.error(error);
//     return { data: error, completed: false }
//   }
// }
