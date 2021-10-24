import axios from 'axios'

function ResPost (completed, error, data) {
  this.result = completed
  this.error = error
  this.data = data
}

export async function nuevoParqueadero (entrada) {
  try {
    // console.log('post function', entrada)
    const nParqueadero = await axios.post('/parqueadero', {
      nombreParqueadero: entrada.nombreParqueadero,
      tipoVehicle: entrada.tipoVehicle,
      tipoPersonIngr: entrada.tipoPersonIngr
    })
    return new ResPost(true, {}, nParqueadero)
  } catch (error) {
    return new ResPost(false, error, {})
  }
}

// Get para obtener los parqueaderos que se usaran en los
// select de los ingresos de vehiculos PARA VISITANTES; se filtraran por
// aquellos que tengan el dato "Ocupado :false"
export async function listaParqueaderosVisitantes () {
  try {
    const lista = await axios.get('/parqueaderoIngresoVis')
    // console.log(lista)
    // console.log(lista.data)
    // return lista.data
    return lista
  } catch (error) {
    return { data: `${error}`, completed: false }
  }
}
