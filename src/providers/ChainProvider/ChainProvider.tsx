import type { PropsWithChildren } from 'react';
import { createConfig, http, WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { mainnet, sepolia } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';
import { Web3AuthConnectorInstance } from './Web3AuthConnectorInstance';

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [Web3AuthConnectorInstance(sepolia), injected({ target: 'metaMask' })],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});

export const ChainProvider = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient();

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};
