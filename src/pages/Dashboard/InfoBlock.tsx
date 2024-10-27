import { Link, Text, VStack } from '@chakra-ui/react';
import { store } from '../../store/store';
import { observer } from 'mobx-react-lite';
import { useAccount } from 'wagmi';

export const InfoBlock = observer(() => {
  const { address, chain } = useAccount();

  return (
    <VStack align="flex-start" spacing={2}>
      <Text>
        Email: <b>{store.user?.emailAddress}</b>
      </Text>
      <Text>
        Address::&nbsp;
        <Link href={`${chain?.blockExplorers?.default.url}/address/${address}`} isExternal>
          <b>{store.user?.ethAddress}</b>
        </Link>
      </Text>
      {store.user?.linkedIn && (
        <Text>
          LinkedIn:&nbsp;
          <Link href={store.user?.linkedIn} isExternal>
            <b>{store.user?.linkedIn}</b>
          </Link>
        </Text>
      )}
    </VStack>
  );
});
