import axios, { AxiosError, type CreateAxiosDefaults } from 'axios';
import type { IAuthResponse } from '../models/models';
import { errorCatch } from './error';
import { JWT_EXPIRED, JWT_MUST_BE_PROVIDED } from '../helpers/constants';

const options: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
};

const api = axios.create(options);
const apiWithAuth = axios.create(options);

apiWithAuth.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiWithAuth.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response.status === 401 ||
        errorCatch(error) === JWT_EXPIRED ||
        errorCatch(error) === JWT_MUST_BE_PROVIDED) &&
      error.config.config &&
      !error.config.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await api.get<IAuthResponse>(`${import.meta.env.VITE_API_URL}/refresh`);
        // TODO: Create a common util for handling localStorsaage.
        localStorage.setItem('token', response.data.accessToken);

        return apiWithAuth.request(originalRequest);
      } catch (error) {
        if (error instanceof AxiosError && errorCatch(error) === JWT_EXPIRED) {
          console.error('The user is unauthorized');
          localStorage.removeItem('token');
        }
      }
    }

    throw error;
  },
);

export { api, apiWithAuth };
