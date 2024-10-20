import axios, { type AxiosResponse } from 'axios';
import type {
  IRegistrationResponse,
  TConfirmWalletResponse,
  TSubmitDetailsResponse,
  TBaseRegistrationResponse,
  TSignDocumentResponse,
  TVerifyCustomerResponse,
} from '../pages/Registration/types';

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
  data: TBaseRegistrationResponse,
): Promise<AxiosResponse<IRegistrationResponse>> =>
  axios.post<IRegistrationResponse>(
    `${import.meta.env.VITE_API_URL}/verify-email`,
    { data },
    {
      withCredentials: true,
    },
  );

export const submitDetailsService = async (
  data: TSubmitDetailsResponse,
): Promise<AxiosResponse<IRegistrationResponse>> =>
  axios.post<IRegistrationResponse>(
    `${import.meta.env.VITE_API_URL}/submit-details`,
    { data },
    {
      withCredentials: true,
    },
  );

export const confirmWalletService = async (
  data: TConfirmWalletResponse,
): Promise<AxiosResponse<IRegistrationResponse>> =>
  axios.post<IRegistrationResponse>(
    `${import.meta.env.VITE_API_URL}/confirm-wallet`,
    { data },
    {
      withCredentials: true,
    },
  );

export const signDocumentService = async (
  data: TSignDocumentResponse,
): Promise<AxiosResponse<IRegistrationResponse>> =>
  axios.post<IRegistrationResponse>(
    `${import.meta.env.VITE_API_URL}/sign-document`,
    { data },
    {
      withCredentials: true,
    },
  );

export const verifyCustomerService = async (
  data: TVerifyCustomerResponse,
): Promise<AxiosResponse<IRegistrationResponse>> =>
  axios.post<IRegistrationResponse>(
    `${import.meta.env.VITE_API_URL}/verify-customer`,
    { data },
    {
      withCredentials: true,
    },
  );
