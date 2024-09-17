import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import {MetaMaskConnector} from 'wagmi/connectors/metaMask';
import { PropsWithChildren } from 'react';
import { createConfig, http, WagmiProvider } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { Web3AuthConnectorInstance } from './Web3AuthConnectorInstance';

export const ChainProvider = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient();

  const config = createConfig({
    chains: [sepolia],
    connectors: [Web3AuthConnectorInstance(sepolia)],
    transports: {
      [sepolia.id]: http(),
    },
  });

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};
