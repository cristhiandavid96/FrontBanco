import requestHttp from './RequestHttp'
const baseUrl = window.baseUrl

export const saveUsuario = async body => {
  let response = await requestHttp.post(baseUrl + '/api/users', body)
  return response || null
}

export const ListUsuario = async () => {
  let response = await requestHttp.get(baseUrl + '/api/users', { data: {} })
  return response?.data || null
}

export const UpdateUsuario = async (id,body) => {
  let response = await requestHttp.put(baseUrl + '/api/users/'+id, body)
  return response?.data || null
}

export const DeleteUsuario = async (id) => {
  let response = await requestHttp.delete(baseUrl + '/api/users/'+id)
  return response?.data || null
}
