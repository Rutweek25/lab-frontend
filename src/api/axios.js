import axios from "axios";

const API = axios.create({
  baseURL: "https://lab-backend-e3ux.onrender.com"
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("lab_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
