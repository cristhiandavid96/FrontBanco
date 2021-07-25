import requestHttp from './RequestHttp'
const baseUrl = window.baseUrl

export const saveCuenta = async body => {
  let response = await requestHttp.post(baseUrl + '/api/cuentasbancarias', body)
  return response || null
}

export const ListCuenta = async (id) => {
  let response = await requestHttp.get(baseUrl + '/api/cuentasbancarias?usuario_id='+id, { data: {} })
  return response?.data || null
}

export const UpdateCuenta = async (id,body) => {
  let response = await requestHttp.put(baseUrl + '/api/cuentasbancarias/'+id, body)
  return response?.data || null
}

export const DeleteCuenta = async (id) => {
  let response = await requestHttp.delete(baseUrl + '/api/cuentasbancarias/'+id)
  return response?.data || null
}

export const BuscarCuenta = async (id) => {
  let response = await requestHttp.get(baseUrl + '/api/cuentasbancarias/cuentas?usuario_id='+id, { data: {} })
  return response?.data || null
}

export const ListAllCuenta = async () => {
  let response = await requestHttp.get(baseUrl + '/api/cuentasbancarias/all', { data: {} })
  return response?.data || null
}