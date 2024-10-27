import { Box, Divider, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { store } from '../../store/store';
import { observer } from 'mobx-react-lite';
import { useGetBalances } from '../../hooks/useGetBalances';
import { logoFor } from '../../helpers/utils';

export const Dashboard = observer(() => {
  const balances = useGetBalances();

  return (
    <Flex justify="center" align="center" h="100vh">
      <Flex
        className="RotationAnimation"
        direction="column"
        gap={10}
        w={800}
        p="24px 32px 56px"
        borderRadius={16}
        border="2px"
        borderColor="brand.800">
        <HStack justify="space-between">
          <Heading as="h2">
            Hi, {store.user?.firstName} {store.user?.lastName}
          </Heading>

          <Image
            boxSize="60px"
            borderRadius="full"
            border="2px"
            borderColor="brand.800"
            src={`https://robohash.org/${store.user?.firstName}${store.user?.lastName}.png?size=60x60`}
          />
        </HStack>
        <Divider borderColor="brand.800" />

        <VStack align="flex-start" spacing={2}>
          <Text>Email: {store.user?.emailAddress}</Text>
          <Text>Address: {store.user?.ethAddress}</Text>
          {store.user?.linkedIn && <Text>Address: {store.user?.linkedIn}</Text>}
        </VStack>
        <Divider borderColor="brand.800" />

        <VStack align="flex-start" spacing={2}>
          {balances?.map((balance) => (
            <HStack key={balance.name}>
              <Image h="7" alt={`${balance.symbol}-icon`} src={logoFor(balance.name)} />
              <span>{balance.formatted}</span>
              <span>
                {balance.symbol} {balance.name}
              </span>
            </HStack>
          ))}
        </VStack>
      </Flex>
    </Flex>
  );
});
