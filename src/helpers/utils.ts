import { MetaMask, Web3AuthLogo } from '../assets';
import { ConnectorNames } from './constants';

export const assertUnreachable = (x: never): never => {
  throw new Error(`Value should be 'never' but found ${JSON.stringify(x)} instead.`);
};

export const logoFor = (attribute: string) => {
  switch (attribute) {
    case ConnectorNames.MetaMask:
      return MetaMask;
    case ConnectorNames.Web3Auth:
      return Web3AuthLogo;
    default:
      return undefined;
  }
};

// Returns a signed-plaintext-compatible string representation of the passed date.
export const formatDateForSignature = (d: Date) => d.toISOString().split('.')[0] + 'Z';
