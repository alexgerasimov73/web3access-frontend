import { AxiosError } from 'axios';
import { Address } from 'viem';

interface IAxiosErrorData {
  readonly error: string;
  readonly message: string;
  readonly statusCode: number;
}

export type TAxiosError = AxiosError<IAxiosErrorData>;

export type LoginOrRegistration = 'login' | 'registration';

export interface ILoginResponse {
  readonly chainId: number;
  readonly ethAddress: Address;
  readonly ethSignature: string;
  readonly transmittedAt: string;
}

export const enum ConnectorNames {
  MetaMask = 'MetaMask',
  Web3Auth = 'Web3Auth',
}

export const enum TokenNames {
  Mainnet = 'Mainnet',
  Sepolia = 'Sepolia',
}
