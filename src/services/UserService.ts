import type { AxiosResponse } from 'axios'

import { api } from '../interceptors/interceptors'
import type { ISettings } from '../models/models'

export const getSettingsSevice = async (): Promise<AxiosResponse<ISettings>> =>
	await api.get<ISettings>(`${import.meta.env.VITE_API_URL}/settings`)

export const launchServerSevice = async (): Promise<AxiosResponse<string>> =>
	await api.get<string>(`${import.meta.env.VITE_API_URL}/launch-server`)
