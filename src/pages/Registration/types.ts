import { Address } from 'viem'

import { IAuthResponse } from '../../models/models'

export const enum StartRegistrationStep {
	Introduction,
	EmailSent
}

export const enum RegistrationFlowStep {
	VerifyEmail,
	YourDetails,
	ConnectWallet,
	Documentation,
	KYCAML,
	Confirmation
}

export interface IRegistrationResponse {
	readonly documentsSignedAt?: string
	readonly emailAddress: string
	readonly ethAddress?: Address
	readonly firstName?: string
	readonly id: string
	readonly identityCheckStatus?: boolean
	readonly lastName?: string
	readonly linkedIn?: string
	readonly onboardingStep: RegistrationFlowStep
	readonly verificationToken: string
}

export interface IFinalRegistrationResponse {
	readonly registration: IRegistrationResponse
	readonly user: IAuthResponse
}

export interface StepProps {
	readonly data: IRegistrationResponse
	readonly refreshData: (data: IRegistrationResponse) => void
}

export type TBaseRegistrationResponse = Pick<
	IRegistrationResponse,
	'id' | 'verificationToken'
>

export type TSubmitDetailsResponse = TBaseRegistrationResponse &
	Pick<IRegistrationResponse, 'firstName' | 'lastName' | 'linkedIn'>

export type TConfirmWalletResponse = TBaseRegistrationResponse & {
	readonly ethAddress: Address
	readonly ethSignature: string
	readonly transmittedAt: string
}

export type TSignDocumentResponse = Omit<
	TConfirmWalletResponse,
	'ethAddress'
> & {
	readonly documentId: string
}

export type TVerifyCustomerResponse = TBaseRegistrationResponse & {
	readonly simulatedData: string
}
