import { HStack, Image, Link, VStack } from '@chakra-ui/react';
import { Loader } from '../../components/Loader';
import { useGetBalances } from '../../hooks/useGetBalances';
import { logoFor } from '../../helpers/utils';
import { TokenNames } from '../../helpers/types';

export const Balances = () => {
  const { balances, isLoading } = useGetBalances();

  if (isLoading) return <Loader fullScreen={false} label="Loading balances..." />;

  return (
    <VStack align="flex-start" spacing={2}>
      {balances?.map(({ name, symbol, formatted }) => (
        <HStack key={name} justify="space-between" w="full">
          <HStack>
            <Image h="7" alt={`${symbol}-icon`} src={logoFor(name)} />
            <b>{formatted}</b>
            <span>
              {symbol} {name}
            </span>
          </HStack>
          {name === TokenNames.Sepolia && (
            <Link
              href="https://cloud.google.com/application/web3/faucet/ethereum/sepolia"
              color="orange"
              isExternal>
              <b>Need to top up your account? Use the faucet</b>
            </Link>
          )}
        </HStack>
      ))}
    </VStack>
  );
};
