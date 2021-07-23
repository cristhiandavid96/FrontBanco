import requestHttp from './RequestHttp'
const baseUrl = window.baseUrl

export const saveProject = async body => {
  let response = await requestHttp.post(baseUrl + '/projects/add', body)
  return response || null
}

export const ListProject = async () => {
  let response = await requestHttp.get(baseUrl + '/projects/list', { data: {} })
  return response?.data || null
}
