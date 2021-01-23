import axios from 'axios';

const BlueSoft = axios.create({
  baseURL: 'https://cosmos.bluesoft.com.br/produtos'
})

export default BlueSoft;