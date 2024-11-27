import { useToast } from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'

import { TAxiosError } from '../helpers/types'
import { logoutService } from '../services/AuthService'
import { useStore } from '../store/useStore'

export const useLogout = () => {
	const toast = useToast()
	const setUser = useStore(state => state.setUser)

	const { mutate: logout } = useMutation({
		mutationKey: ['log out'],
		mutationFn: () => logoutService(),
		onSuccess: () => {
			localStorage.removeItem('token')
			setUser(null)
		},
		onError: (err: TAxiosError) =>
			toast({
				title: 'Arrrrghhh!',
				description: `An error has occurred: ${err.response?.data.message}`,
				status: 'error'
			})
	})

	return logout
}
