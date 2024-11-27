import { useToast } from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'

import { TAxiosError } from '../../../helpers/types'
import { verifyCustomerService } from '../../../services/RegistrationService'
import { useStore } from '../../../store/useStore'
import type { IRegistrationResponse, TVerifyCustomerResponse } from '../types'

export const useVerifyCustomer = (
	refreshData: (data: IRegistrationResponse) => void
) => {
	const setUser = useStore(state => state.setUser)
	const toast = useToast()

	const { isPending, mutate: verifyCustomer } = useMutation({
		mutationKey: ['verify customer'],
		mutationFn: (data: TVerifyCustomerResponse) => verifyCustomerService(data),
		onSuccess: response => {
			localStorage.setItem('token', response.data.user.accessToken)
			setUser(response.data.user.user)

			toast({
				title: 'Perfect!',
				description: 'Your data was successfully sent',
				status: 'success'
			})
			refreshData(response.data.registration)
		},
		onError: (err: TAxiosError) =>
			toast({
				title: 'Oh no!',
				description: `An error has occurred: ${err.response?.data.message}`,
				status: 'error'
			})
	})

	return { isPending, verifyCustomer }
}
