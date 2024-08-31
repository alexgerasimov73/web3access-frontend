import type { AxiosResponse } from 'axios';
import api from '../interceptors';
import type { IUser } from '../models/models';

export const fetchUsers = async (): Promise<AxiosResponse<ReadonlyArray<IUser>>> =>
  api.get<ReadonlyArray<IUser>>('/users');
