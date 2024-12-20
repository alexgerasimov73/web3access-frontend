import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Button, Link, Text } from '@chakra-ui/react'

import { Card } from '../../../../components/Card'
import { useVerifyCustomer } from '../../hooks/useVerifyCustomer'
import type { StepProps } from '../../types'

export const KYCVerification = ({ data, refreshData }: StepProps) => {
	const { isPending, verifyCustomer } = useVerifyCustomer(refreshData)

	const onContinue = () => {
		const { id, verificationToken } = data
		verifyCustomer({
			id,
			simulatedData: 'the data looks eligible',
			verificationToken
		})
	}

	return (
		<Card title='KYC/AML Verification'>
			<Text>
				<b>Important Notice:</b>
				<br />
				This step is part of a simulated onboarding process for demonstration
				purposes only.&nbsp;
				<b>Web3Access</b> is an educational project, and I do not collect,
				verify, or process any real personal information.
			</Text>
			<Text>
				In a real-world application, compliance with KYC (Know Your Customer)
				and AML (Anti-Money Laundering) regulations is essential to ensure user
				identity and prevent illegal activity. I recommend using a trusted
				service such as&nbsp;
				<Link href='https://onfido.com/' isExternal>
					Onfido
				</Link>
				&nbsp; for secure identity verification and compliance with these
				regulations.
			</Text>
			<Text>
				For more information about KYC/AML services, visit the&nbsp;
				<Link href='https://onfido.com/' isExternal>
					Onfido website <ExternalLinkIcon mx='2px' />
				</Link>
				.
			</Text>

			<Button w='full' disabled={isPending} onClick={onContinue}>
				Continue
			</Button>
		</Card>
	)
}
