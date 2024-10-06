import axios, { type AxiosResponse } from 'axios';
import api from '../interceptors';
import type { ISettings, IUser } from '../models/models';

export const fetchUsers = async (): Promise<AxiosResponse<ReadonlyArray<IUser>>> =>
  api.get<ReadonlyArray<IUser>>('/users');

export const getSettings = async (): Promise<AxiosResponse<ISettings>> =>
  axios.get<ISettings>(`${import.meta.env.VITE_API_URL}/settings`, {
    withCredentials: true,
  });
