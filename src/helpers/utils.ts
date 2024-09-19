import { MetaMask, Web3AuthLogo } from '../assets';
import { ConnectorNames } from './constants';

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
