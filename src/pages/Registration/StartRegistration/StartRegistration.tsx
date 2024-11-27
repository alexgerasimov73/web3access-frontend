import { VStack } from '@chakra-ui/react'
import { useState } from 'react'

import { RegistrationStepper } from '../../../components/RegistrationStepper'
import { assertUnreachable } from '../../../helpers/utils'
import { StartRegistrationStep } from '../types'
import { stepsForStartRegistration } from '../utils'

import { EmailSent } from './Steps/EmailSent'
import { Introduction } from './Steps/Introduction'

const StartRegistration = () => {
	const [step, setStep] = useState(StartRegistrationStep.Introduction)

	const renderStep = () => {
		switch (step) {
			case StartRegistrationStep.Introduction:
				return <Introduction setStep={setStep} />
			case StartRegistrationStep.EmailSent:
				return <EmailSent />
			default:
				assertUnreachable(step)
		}
	}

	return (
		<VStack pos='relative' justify='center' h='full'>
			<RegistrationStepper step={step} steps={stepsForStartRegistration} />
			{renderStep()}
		</VStack>
	)
}

export default StartRegistration
