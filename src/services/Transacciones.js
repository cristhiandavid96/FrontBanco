import requestHttp from './RequestHttp'
const baseUrl = window.baseUrl

export const saveTransaccion = async body => {
  let response = await requestHttp.post(baseUrl + '/api/transacciones', body)
  return response || null
}

export const ListTransaccion = async (id) => {
  let response = await requestHttp.get(baseUrl + '/api/transacciones?usuario_id='+id, { data: {} })
  return response?.data || null
}

export const UpdateTransaccion = async (id,body) => {
  let response = await requestHttp.put(baseUrl + '/api/transacciones/'+id, body)
  return response?.data || null
}

export const DeleteTransaccion = async (id) => {
  let response = await requestHttp.delete(baseUrl + '/api/transacciones/'+id)
  return response?.data || null
}
