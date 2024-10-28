import { useAccount } from 'wagmi';
import { Link, Text, VStack } from '@chakra-ui/react';
import { useStore } from '../../store/useStore';

export const InfoBlock = () => {
  const { address, chain } = useAccount();
  const user = useStore((state) => state.user);

  return (
    <VStack align="flex-start" spacing={2}>
      <Text>
        Email: <b>{user?.emailAddress}</b>
      </Text>
      <Text>
        Address::&nbsp;
        <Link href={`${chain?.blockExplorers?.default.url}/address/${address}`} isExternal>
          <b>{user?.ethAddress}</b>
        </Link>
      </Text>
      {user?.linkedIn && (
        <Text>
          LinkedIn:&nbsp;
          <Link href={user?.linkedIn} isExternal>
            <b>{user?.linkedIn}</b>
          </Link>
        </Text>
      )}
    </VStack>
  );
};
