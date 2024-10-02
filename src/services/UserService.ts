import type { AxiosResponse } from 'axios';
import api from '../interceptors';
import type { ISettings, IUser } from '../models/models';

export const fetchUsers = async (): Promise<AxiosResponse<ReadonlyArray<IUser>>> =>
  api.get<ReadonlyArray<IUser>>('/users');

export const getSettings = async (): Promise<AxiosResponse<ISettings>> =>
  api.get<ISettings>('/settings');
