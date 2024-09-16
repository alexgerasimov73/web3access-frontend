import { CHAIN_NAMESPACES, UX_MODE, WEB3AUTH_NETWORK } from '@web3auth/base';
import { EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider';
import { Web3AuthNoModal } from '@web3auth/no-modal';
import { OpenloginAdapter, OpenloginLoginParams } from '@web3auth/openlogin-adapter';
import type { Chain } from 'wagmi/chains';

export const web3AuthOptionsBuilder = (
  chain: Chain,
  loginParams: OpenloginLoginParams = { loginProvider: 'google' },
) => {
  const chainConfig = {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: '0x' + chain.id.toString(16),
    rpcTarget: chain.rpcUrls.default.http[0],
    displayName: chain.name,
    tickerName: chain.nativeCurrency.name,
    ticker: chain.nativeCurrency.symbol,
    blockExplorer: chain.blockExplorers?.default.url[0],
  };

  const web3AuthInstance = new Web3AuthNoModal({
    clientId:
      'BKAosmL7M9S-M2SKFaUtghtzg1smgcm0GSgIcqP-CX9qGY0ROv1mEylVMAOf7Zze7QZ5evkg350B1Sk23Q_fc6U',
    chainConfig,
    privateKeyProvider: new EthereumPrivateKeyProvider({ config: { chainConfig } }),
    web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_DEVNET,
    enableLogging: true,
  });

  web3AuthInstance.configureAdapter(
    new OpenloginAdapter({
      adapterSettings: {
        uxMode: UX_MODE.REDIRECT,
      },
    }),
  );

  // const walletServicesPlugin = new WalletServicesPlugin({
  //   walletInitOptions: {
  //     whiteLabel: {
  //       showWidgetButton: true,
  //     }
  //   }
  // });
  // web3AuthInstance.addPlugin(walletServicesPlugin);

  return {
    chains: [chain],
    options: {
      web3AuthInstance,
      loginParams,
    },
  };
};
