import { useToast } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { getSettingsSevice } from '../services/UserService'
import { useStore } from '../store/useStore'

export const useGetSettings = () => {
	const setSettings = useStore(state => state.setSettings)
	const toast = useToast()

	return useQuery({
		queryKey: ['get settings'],
		queryFn: async () => {
			toast({
				duration: 10_000,
				title: 'For your information',
				description:
					'ATTENTION! The first request to the server might take 2-3 minutes because it launches the server and needs some time to be ready. Sorry!',
				status: 'info'
			})
			const response = await getSettingsSevice()
			setSettings(response.data)

			return response.data
		}
	})
}
