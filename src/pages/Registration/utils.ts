import { assertUnreachable } from '../../helpers/utils'

import { RegistrationFlowStep, StartRegistrationStep } from './types'

const titleForStartRegistrationStep = (step: StartRegistrationStep) => {
	switch (step) {
		case StartRegistrationStep.Introduction:
			return 'Introduction'
		case StartRegistrationStep.EmailSent:
			return 'Email Sent'
		default:
			assertUnreachable(step)
	}
}

const titleForRegistrationFlowStep = (step: RegistrationFlowStep) => {
	switch (step) {
		case RegistrationFlowStep.VerifyEmail:
			return 'Verify Email'
		case RegistrationFlowStep.YourDetails:
			return 'Your Details'
		case RegistrationFlowStep.ConnectWallet:
			return 'Confirmation Wallet'
		case RegistrationFlowStep.Documentation:
			return 'Documentation'
		case RegistrationFlowStep.KYCAML:
			return 'Verify Identity'
		case RegistrationFlowStep.Confirmation:
			return 'Confirmation'
		default:
			assertUnreachable(step)
	}
}

export const stepsForStartRegistration = [
	{ title: titleForStartRegistrationStep(StartRegistrationStep.Introduction) },
	{ title: titleForStartRegistrationStep(StartRegistrationStep.EmailSent) }
]

export const stepsForRegistrationFlow = [
	{ title: titleForRegistrationFlowStep(RegistrationFlowStep.VerifyEmail) },
	{ title: titleForRegistrationFlowStep(RegistrationFlowStep.YourDetails) },
	{ title: titleForRegistrationFlowStep(RegistrationFlowStep.ConnectWallet) },
	{ title: titleForRegistrationFlowStep(RegistrationFlowStep.Documentation) },
	{ title: titleForRegistrationFlowStep(RegistrationFlowStep.KYCAML) },
	{ title: titleForRegistrationFlowStep(RegistrationFlowStep.Confirmation) }
]
