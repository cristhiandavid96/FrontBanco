import requestHttp from './RequestHttp'
const baseUrl = window.baseUrl + '/users/list'

export const getAuth = async () => {
  let response = await requestHttp.get(baseUrl, { data: {} })
  console.log(response)
  return response?.data || null
}
