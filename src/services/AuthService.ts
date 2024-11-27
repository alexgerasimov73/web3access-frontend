import type { AxiosResponse } from 'axios'

import { ILoginResponse } from '../helpers/types'
import { api, apiWithAuth } from '../interceptors/interceptors'
import type { IAuthResponse } from '../models/models'

export const refreshService = async (): Promise<AxiosResponse<IAuthResponse>> =>
	await api.get<IAuthResponse>(`${import.meta.env.VITE_API_URL}/refresh`)

export const loginService = async (
	data: ILoginResponse
): Promise<AxiosResponse<IAuthResponse>> =>
	await api.post<IAuthResponse>('/login', data)

export const logoutService = async (): Promise<void> =>
	await apiWithAuth.post('/logout')
