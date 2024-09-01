import axios from 'axios';

console.log(import.meta.env.API_URL);
const api = axios.create({
  baseURL: import.meta.env.API_URL || 'http://localhost:5001/api',
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

export default api;
