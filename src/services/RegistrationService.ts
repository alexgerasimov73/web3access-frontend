import axios, { type AxiosResponse } from 'axios';
import type { IRegistrationResponse, TVerifyEmailResponse } from '../pages/Registration/types';

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

export const verifyEmailService = async (
  data: TVerifyEmailResponse,
): Promise<AxiosResponse<IRegistrationResponse>> =>
  axios.post<IRegistrationResponse>(
    `${import.meta.env.VITE_API_URL}/verify-email`,
    { data },
    {
      withCredentials: true,
    },
  );

export const submitDetails = async (
  id: string,
  firstName: string,
  lastName: string,
  linkedIn?: string,
): Promise<AxiosResponse<IRegistrationResponse>> =>
  axios.post<IRegistrationResponse>(
    `${import.meta.env.VITE_API_URL}/submit-details`,
    { id, firstName, lastName, linkedIn },
    {
      withCredentials: true,
    },
  );
