import type { PropsWithChildren } from 'react';
import { createConfig, http, WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { mainnet, sepolia } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';
import { Web3AuthConnectorInstance } from './Web3AuthConnectorInstance';

export const config = createConfig({
  chains: [sepolia, mainnet],
  connectors: [Web3AuthConnectorInstance([sepolia, mainnet]), injected({ target: 'metaMask' })],
  transports: {
    [sepolia.id]: http(),
    [mainnet.id]: http(),
  },
});

export const ChainProvider = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
        staleTime: Infinity,
      },
    },
  });

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};
