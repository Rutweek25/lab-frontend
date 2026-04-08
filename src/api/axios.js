import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000"
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("lab_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  
  if (config.url && !config.url.startsWith('/api') && !config.url.startsWith('api/')) {
    config.url = `/api${config.url.startsWith('/') ? '' : '/'}${config.url}`;
  }
  return config;
});

export default API;
