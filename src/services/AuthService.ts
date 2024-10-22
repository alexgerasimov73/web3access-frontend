import type { AxiosResponse } from 'axios';
import type { IAuthResponse } from '../models/models';
import { api, apiWithAuth } from '../interceptors/interceptors';

export const login = async (
  email: string,
  password: string,
): Promise<AxiosResponse<IAuthResponse>> => api.post<IAuthResponse>('/login', { email, password });

export const logout = async (): Promise<void> => apiWithAuth.post('/logout');
