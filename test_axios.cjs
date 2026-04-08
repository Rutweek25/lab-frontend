const axios = require('axios');
const API = axios.create({ baseURL: 'https://lab-backend-e3ux.onrender.com/api' });
console.log('Result 1:', API.getUri({ url: '/patients' }));
console.log('Result 2:', API.getUri({ url: 'patients' }));
