import { useAccount } from 'wagmi';
import { getBalance } from '@wagmi/core';
import { mainnet } from 'wagmi/chains';
import { formatUnits } from 'viem';
import { useQuery } from '@tanstack/react-query';
import { config } from '../providers/ChainProvider/ChainProvider';
import { TokenNames } from '../helpers/constants';

interface TokenData {
  readonly formatted: string;
  readonly name: string;
  readonly symbol: string;
}

export const useGetBalances = () => {
  const { address } = useAccount();

  const { data: balances } = useQuery<ReadonlyArray<TokenData>>({
    queryKey: ['balances', address],
    queryFn: async () => {
      if (!address) return [];

      const res = await Promise.all([
        getBalance(config, {
          address,
        }),
        getBalance(config, {
          address,
          chainId: mainnet.id,
        }),
      ]);

      const tokens = res.map((token, index) => ({
        name: index === 0 ? TokenNames.Sepolia : TokenNames.Mainnet,
        formatted: formatUnits(token.value, token.decimals),
        symbol: token.symbol,
      }));

      return tokens;
    },
    enabled: !!address,
    refetchOnWindowFocus: false,
    retry: false,
    staleTime: Infinity,
  });

  return balances;
};
