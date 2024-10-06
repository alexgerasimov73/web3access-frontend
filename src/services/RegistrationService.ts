import type { AxiosResponse } from 'axios';
import api from '../interceptors';
import type { IRegistrationResponse } from '../pages/Registration/types';

export const startRegistration = async (
  email: string,
): Promise<AxiosResponse<IRegistrationResponse>> =>
  api.post<IRegistrationResponse>('start-registration', { email });
