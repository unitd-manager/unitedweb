import axios from "axios";
const api = axios.create({
    baseURL: 'https://unitdweb.unitdtechnologies.com:3003/api'
  });
  export default api;