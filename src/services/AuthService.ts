import type { AxiosResponse } from 'axios';
import api from '../interceptors';
import type { IAuthResponse } from '../models/models';

export const login = async (
  email: string,
  password: string,
): Promise<AxiosResponse<IAuthResponse>> => api.post<IAuthResponse>('/login', { email, password });

export const registration = async (
  email: string,
  password: string,
): Promise<AxiosResponse<IAuthResponse>> =>
  api.post<IAuthResponse>('/register', { email, password });

export const logout = async (): Promise<void> => api.post('/logout');
