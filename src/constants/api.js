import axios from 'axios'

const api = axios.create({
// baseURL: 'http://43.228.126.245:3001',
baseURL: 'http://localhost:3003',
});


// const loginApi = axios.create({
//   baseURL: 'https://art-cause.com:3003'
// });


export default api