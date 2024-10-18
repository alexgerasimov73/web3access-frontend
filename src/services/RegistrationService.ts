import axios, { type AxiosResponse } from 'axios';
import type { IRegistrationResponse } from '../pages/Registration/types';

export const startRegistrationService = async (
  email: string,
): Promise<AxiosResponse<IRegistrationResponse>> =>
  axios.post<IRegistrationResponse>(
    `${import.meta.env.VITE_API_URL}/start-registration`,
    { email },
    {
      withCredentials: true,
    },
  );
