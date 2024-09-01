import axios from 'axios';
import { IAuthResponse } from '../models/models';

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

api.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status == 401 && error.config.config && !error.config.config._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<IAuthResponse>(
          `${import.meta.env.API_URL || 'http://localhost:5001/api'}/refresh`,
          { withCredentials: true },
        );
        localStorage.setItem('token', response.data.accessToken);

        return api.request(originalRequest);
      } catch (error) {
        console.error('The user is unauthorized');
      }
    }

    throw error;
  },
);

export default api;
