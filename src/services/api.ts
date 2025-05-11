import axios from 'axios'

const api = axios.create({
  baseURL: 'http://locahost:8080', // porta de entrada da api
})

export default api;