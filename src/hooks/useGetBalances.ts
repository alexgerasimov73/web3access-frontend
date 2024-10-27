import { getBalance } from '@wagmi/core';

import { mainnet } from 'wagmi/chains';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { config } from '../providers/ChainProvider/ChainProvider';
import { formatUnits } from 'viem';
import { TokenNames } from '../helpers/constants';

interface TokenData {
  readonly formatted: string;
  readonly name: string;
  readonly symbol: string;
}

export const useGetBalances = () => {
  const { address } = useAccount();
  const [balances, setBalances] = useState<ReadonlyArray<TokenData>>();

  useEffect(() => {
    if (!address || balances) return;

    Promise.all([
      getBalance(config, {
        address,
      }),
      getBalance(config, {
        address,
        chainId: mainnet.id,
      }),
    ])
      .then((res) => {
        const tokens = res.map((token, index) => ({
          name: index === 0 ? TokenNames.Sepolia : TokenNames.Mainnet,
          formatted: formatUnits(token.value, token.decimals),
          symbol: token.symbol,
        }));

        setBalances(tokens);
      })
      .catch((err) => console.error('An error occurred while fetching the balances.', err));
  }, [address, balances]);

  return balances;
};
