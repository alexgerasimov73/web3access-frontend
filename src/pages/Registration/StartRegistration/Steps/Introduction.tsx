import {
	Button,
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input
} from '@chakra-ui/react'
import { useForm } from 'react-hook-form'

import { Card } from '../../../../components/Card'
import { useStartRegistration } from '../../hooks/useStartRegistration'
import { StartRegistrationStep } from '../../types'

interface FormData {
	readonly emailAddress: string
}
interface Props {
	readonly setStep: (step: StartRegistrationStep) => void
}

export const Introduction = ({ setStep }: Props) => {
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm<FormData>()
	const { isPending, startRegistration } = useStartRegistration(setStep)

	const increaseStep = ({ emailAddress }: FormData) =>
		startRegistration(emailAddress)

	return (
		<Card title='Your application to join'>
			<form onSubmit={handleSubmit(increaseStep)}>
				<FormControl mb='4' isInvalid={!!errors.emailAddress}>
					<FormLabel htmlFor='emailAddress'>Email</FormLabel>
					<Input
						id='emailAddress'
						disabled={isPending}
						placeholder='E.g. hello@example.com'
						{...register('emailAddress', {
							required: 'This is required',
							pattern: {
								message: 'It should be valid email',
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
							}
						})}
					/>
					<FormErrorMessage>
						{errors.emailAddress && errors.emailAddress.message}
					</FormErrorMessage>
				</FormControl>

				<Button w='full' isLoading={isPending} type='submit'>
					Continue
				</Button>
			</form>
		</Card>
	)
}
