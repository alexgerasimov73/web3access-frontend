import { Address } from 'viem';

export const enum StartRegistrationStep {
  Introduction,
  EmailSent,
}

export const enum RegistrationFlowStep {
  VerifyEmail,
  YourDetails,
  ConnectWallet,
  Documentation,
  KYCAML,
  Confirmation,
}

export type LoginOrRegistration = 'login' | 'registration';

export interface IRegistrationResponse {
  readonly documentsSignedAt?: string;
  readonly emailAddress: string;
  readonly ethAddress?: Address;
  readonly firstName?: string;
  readonly id: string;
  readonly identityCheckStatus?: boolean;
  readonly lastName?: string;
  readonly linkedIn?: string;
  readonly onboardingStep: RegistrationFlowStep;
  readonly state?: string;
  readonly submittedAt?: string;
  readonly verificationToken: string;
}

export interface StepProps {
  readonly data: IRegistrationResponse;
  readonly refreshData: (data: IRegistrationResponse) => void;
}
