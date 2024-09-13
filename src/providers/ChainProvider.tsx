import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { createConfig, http, WagmiProvider } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

export const ChainProvider = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient();

  const config = createConfig({
    chains: [mainnet, sepolia],
    connectors: [injected()],
    transports: {
      [mainnet.id]: http(),
      [sepolia.id]: http(),
    },
  });

  console.log('config', config);

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
};
