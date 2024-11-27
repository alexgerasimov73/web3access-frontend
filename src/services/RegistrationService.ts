import type { AxiosResponse } from 'axios'

import { api } from '../interceptors/interceptors'
import type {
	IFinalRegistrationResponse,
	IRegistrationResponse,
	TBaseRegistrationResponse,
	TConfirmWalletResponse,
	TSignDocumentResponse,
	TSubmitDetailsResponse,
	TVerifyCustomerResponse
} from '../pages/Registration/types'

const REGISTRATION_URL = `${import.meta.env.VITE_API_URL}/registration`

export const startRegistrationService = async (
	emailAddress: string
): Promise<AxiosResponse<IRegistrationResponse>> =>
	api.post<IRegistrationResponse>(`${REGISTRATION_URL}/start`, { emailAddress })

export const verifyEmailService = async (
	data: TBaseRegistrationResponse
): Promise<AxiosResponse<IRegistrationResponse>> =>
	api.post<IRegistrationResponse>(`${REGISTRATION_URL}/verify-email`, data)

export const submitDetailsService = async (
	data: TSubmitDetailsResponse
): Promise<AxiosResponse<IRegistrationResponse>> =>
	api.post<IRegistrationResponse>(`${REGISTRATION_URL}/submit-details`, data)

export const confirmWalletService = async (
	data: TConfirmWalletResponse
): Promise<AxiosResponse<IRegistrationResponse>> =>
	api.post<IRegistrationResponse>(`${REGISTRATION_URL}/confirm-wallet`, data)

export const signDocumentService = async (
	data: TSignDocumentResponse
): Promise<AxiosResponse<IRegistrationResponse>> =>
	api.post<IRegistrationResponse>(`${REGISTRATION_URL}/sign-document`, data)

export const verifyCustomerService = async (
	data: TVerifyCustomerResponse
): Promise<AxiosResponse<IFinalRegistrationResponse>> =>
	api.post<IFinalRegistrationResponse>(
		`${REGISTRATION_URL}/verify-customer`,
		data
	)
