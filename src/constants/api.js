import axios from "axios";
const api = axios.create({
    baseURL: 'https://www.unitdtechnologies.com:3003/api'
   // baseURL: 'https://localhost:3003/api'
  });
  export default api;