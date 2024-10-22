import { AxiosError } from 'axios';

interface IAxiosErrorData {
  readonly error: string;
  readonly message: string;
  readonly statusCode: number;
}

export type TAxiosError = AxiosError<IAxiosErrorData>;

export const enum ConnectorNames {
  MetaMask = 'MetaMask',
  Web3Auth = 'Web3Auth',
}

export const JWT_EXPIRED = 'jwt expired';
export const JWT_MUST_BE_PROVIDED = 'jwt must be provided';
