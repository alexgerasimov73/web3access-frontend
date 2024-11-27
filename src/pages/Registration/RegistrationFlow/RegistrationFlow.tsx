import { VStack } from '@chakra-ui/react'
import { useState } from 'react'

import { RegistrationStepper } from '../../../components/RegistrationStepper'
import { isEthAddress } from '../../../helpers/utils'
import { type IRegistrationResponse, RegistrationFlowStep } from '../types'
import { stepsForRegistrationFlow } from '../utils'

import { Confirmation } from './Steps/Confirmation'
import { ConfirmationWallet } from './Steps/ConfirmationWallet'
import { Details } from './Steps/Details'
import { Documentation } from './Steps/Documentation'
import { KYCVerification } from './Steps/KYCVerification'
import { VerifyEmail } from './Steps/VerifyEmail'

interface Props {
	readonly id: string
}

const RegistrationFlow = ({ id }: Props) => {
	const [registrationData, setRegistrationData] =
		useState<IRegistrationResponse>()

	const getStepAndContent = () => {
		if (!registrationData) {
			return {
				step: RegistrationFlowStep.VerifyEmail,
				content: <VerifyEmail id={id} refreshData={setRegistrationData} />
			}
		} else if (
			registrationData.onboardingStep === RegistrationFlowStep.YourDetails
		) {
			return {
				step: RegistrationFlowStep.YourDetails,
				content: (
					<Details data={registrationData} refreshData={setRegistrationData} />
				)
			}
		} else if (
			registrationData.onboardingStep === RegistrationFlowStep.ConnectWallet
		) {
			return {
				step: RegistrationFlowStep.ConnectWallet,
				content: (
					<ConfirmationWallet
						data={registrationData}
						refreshData={setRegistrationData}
					/>
				)
			}
		} else if (
			registrationData.onboardingStep === RegistrationFlowStep.Documentation &&
			registrationData.ethAddress &&
			isEthAddress(registrationData.ethAddress)
		) {
			return {
				step: RegistrationFlowStep.Documentation,
				content: (
					<Documentation
						address={registrationData.ethAddress}
						data={registrationData}
						refreshData={setRegistrationData}
					/>
				)
			}
		} else if (
			registrationData.onboardingStep === RegistrationFlowStep.KYCAML
		) {
			return {
				step: RegistrationFlowStep.KYCAML,
				content: (
					<KYCVerification
						data={registrationData}
						refreshData={setRegistrationData}
					/>
				)
			}
		} else if (
			registrationData.onboardingStep === RegistrationFlowStep.Confirmation &&
			registrationData.firstName &&
			registrationData.lastName
		) {
			return {
				step: RegistrationFlowStep.Confirmation,
				content: (
					<Confirmation
						fullName={`${registrationData.firstName} ${registrationData.lastName}`}
					/>
				)
			}
		}

		return { step: 0, content: <></> }
	}

	const { content, step } = getStepAndContent()

	return (
		<VStack pos='relative' justify='center' h='full'>
			<RegistrationStepper step={step} steps={stepsForRegistrationFlow} />
			{content}
		</VStack>
	)
}

export default RegistrationFlow
