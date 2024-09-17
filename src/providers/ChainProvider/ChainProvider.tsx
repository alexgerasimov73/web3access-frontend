import type { PropsWithChildren } from 'react';
import { createConfig, http, WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { sepolia } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';
import { Web3AuthConnectorInstance } from './Web3AuthConnectorInstance';

export const ChainProvider = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient();

  const config = createConfig({
    chains: [sepolia],
    connectors: [Web3AuthConnectorInstance(sepolia), injected({ target: 'metaMask' })],
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
