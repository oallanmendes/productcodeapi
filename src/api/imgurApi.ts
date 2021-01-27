import axios from 'axios';

const imgurAPI = axios.create({
  baseURL: 'https://api.imgur.com/3'
})

export default imgurAPI;