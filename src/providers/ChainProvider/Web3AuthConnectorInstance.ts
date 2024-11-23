import { EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider';
import { Web3AuthConnector } from '@web3auth/web3auth-wagmi-connector';
import { Web3AuthNoModal } from '@web3auth/no-modal';
import { OpenloginAdapter, OpenloginLoginParams } from '@web3auth/openlogin-adapter';
import type { Chain } from 'wagmi/chains';
import { CHAIN_NAMESPACES, UX_MODE, WEB3AUTH_NETWORK } from '@web3auth/base';

export const Web3AuthConnectorInstance = (
  chains: ReadonlyArray<Chain>,
  loginParams: OpenloginLoginParams = { loginProvider: 'google' },
) => {
  const chainConfig = {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: '0x' + chains[0].id.toString(16),
    rpcTarget: chains[0].rpcUrls.default.http[0],
    displayName: chains[0].name,
    tickerName: chains[0].nativeCurrency?.name,
    ticker: chains[0].nativeCurrency?.symbol,
    blockExplorerUrl: chains[0].blockExplorers?.default.url[0],
  };

  const web3AuthInstance = new Web3AuthNoModal({
    clientId: import.meta.env.VITE_WEB3AUTH_CLIENT_ID,
    chainConfig,
    privateKeyProvider: new EthereumPrivateKeyProvider({ config: { chainConfig } }),
    web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
  });

  web3AuthInstance.configureAdapter(
    new OpenloginAdapter({
      adapterSettings: {
        uxMode: UX_MODE.REDIRECT,
      },
    }),
  );

  return Web3AuthConnector({
    web3AuthInstance,
    loginParams,
  });
};
