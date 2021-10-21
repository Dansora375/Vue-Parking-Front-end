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

export async function listaParqueaderosVisitantes () {
  try {
    const lista = await axios.get('/parqueaderoIngresoVis')
    return lista.data
  } catch (error) {
    return { data: `${error}`, completed: false }
  }
}
