import axios from "axios";
import { API_URL } from "./runtimeConfig";

export const api = axios.create({
  baseURL: API_URL,
  timeout: 10000
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("lab_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
