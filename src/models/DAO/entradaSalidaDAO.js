/**
 * @param {*} completadas: referencia a lista con o sin entradas ya finalizadas
 * @returns lista de datos desde el servidor
 */
export async function listaEntradas(completadas = false) {
  try {
    const lista = await this.axios.get('/entrada_vehiculo/lista', { params: { finalizadas: completadas } });
    const listaJson = await lista.json();

    return listaJson;
  } catch (error) {
    return {};
  }
}

function ResPost(completed, error, data) {
  this.result = completed;
  this.error = error;
  this.data = data;
}

export async function nuevaEntrada(entrada) {
  try {
    const nEntrada = await this.axios.post('/entrada-vehiculo', { body: entrada });
    return new ResPost(true, {}, nEntrada.json());
  } catch (error) {
    return new ResPost(false, error, {});
  }
}
