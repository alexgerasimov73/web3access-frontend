import { getBalance } from '@wagmi/core';
import { useState } from 'react';

interface TokenData {
  readonly formatted: string;
  readonly symbol: string;
}

export const useGetBalances = () => {
  const [balances, setBalances] = useState<ReadonlyArray<TokenData>>();

  return balances;
};
