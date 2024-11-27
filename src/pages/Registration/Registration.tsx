import { Flex } from '@chakra-ui/react'
import { useSearch } from '@tanstack/react-router'
import { lazy } from 'react'

const RegistrationFlow = lazy(
	() => import('./RegistrationFlow/RegistrationFlow.tsx')
)
const StartRegistration = lazy(
	() => import('./StartRegistration/StartRegistration.tsx')
)

type TSearch = {
	id?: string
}

export const Registration = () => {
	const registrationId = useSearch({
		from: '/registration',
		select: (search: TSearch) => search.id
	})

	return (
		<Flex justify='center' align='center' h='100vh'>
			{registrationId ? (
				<RegistrationFlow id={registrationId} />
			) : (
				<StartRegistration />
			)}
		</Flex>
	)
}
