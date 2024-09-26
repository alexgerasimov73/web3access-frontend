import { Address } from 'viem';

export const enum ConnectorNames {
  MetaMask = 'MetaMask',
  Web3Auth = 'Web3Auth',
}

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

export interface RegistrationData {
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
