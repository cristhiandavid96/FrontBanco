import requestHttp from './RequestHttp'
const baseUrl = window.baseUrl + '/api/login'

export const getAuth = async (data) => {
  let response = await requestHttp.post(baseUrl, data)
  return response?.data || null
}
