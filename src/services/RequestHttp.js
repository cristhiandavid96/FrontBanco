import axios from 'axios'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.common.Accept = 'application/json'
export default axios
