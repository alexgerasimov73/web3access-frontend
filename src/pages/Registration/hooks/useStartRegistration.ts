import { useToast } from '@chakra-ui/react'
import { useMutation } from '@tanstack/react-query'

import { TAxiosError } from '../../../helpers/types'
import { startRegistrationService } from '../../../services/RegistrationService'
import { StartRegistrationStep } from '../types'

export const useStartRegistration = (
	setStep: (step: StartRegistrationStep) => void
) => {
	const toast = useToast()

	const { isPending, mutate: startRegistration } = useMutation({
		mutationKey: ['start registration'],
		mutationFn: (emailAddress: string) =>
			startRegistrationService(emailAddress),
		onSuccess: () => {
			toast({
				title: 'Well done!',
				description: 'Your email address was successfully sent',
				status: 'success'
			})
			setStep(StartRegistrationStep.EmailSent)
		},
		onError: (err: TAxiosError) =>
			toast({
				title: 'Oh no!',
				description: `An error has occurred: ${err.response?.data.message}`,
				status: 'error'
			})
	})

	return { isPending, startRegistration }
}
