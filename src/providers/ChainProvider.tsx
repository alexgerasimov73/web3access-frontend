import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
import { createConfig, http, WagmiProvider } from 'wagmi';
import { mainnet, sepolia } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [injected()],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
});
export const ChainProvider = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient();

  console.log('config', config);

  return <WagmiProvider config={config}>{children}</WagmiProvider>;
};
