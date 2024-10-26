import type { AxiosResponse } from 'axios';
import type { ISettings } from '../models/models';
import { api } from '../interceptors/interceptors';

// TODO: Remove this method.
// export const fetchUsers = async (): Promise<AxiosResponse<ReadonlyArray<IUser>>> =>
//   apiWithAuth.get<ReadonlyArray<IUser>>('/users');

export const getSettingsSevice = async (): Promise<AxiosResponse<ISettings>> =>
  await api.get<ISettings>(`${import.meta.env.VITE_API_URL}/settings`);
