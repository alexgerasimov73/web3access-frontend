import { useChainId, useSwitchChain } from 'wagmi';
import { Button, Divider, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { sepolia } from 'viem/chains';
import { Card } from './Card';

export const SwitchNetwork = () => {
  const chainId = useChainId();
  const { chains, switchChain } = useSwitchChain();

  const handleSwitchChain = (id: number) => () => switchChain({ chainId: id });

  return (
    <Card>
      <VStack>
        <Heading as="h2">Switch Network</Heading>
        <Text>Connected to {chainId}</Text>
        <Divider borderColor="brand.800" />
      </VStack>

      <Flex flexFlow="wrap" justify="space-between">
        {chains.map((chain) => (
          <Button
            key={chain.id}
            colorScheme="gray"
            disabled={chain.id !== sepolia.id}
            w="47%"
            onClick={handleSwitchChain(chain.id)}>{`Switch to ${chain.name}`}</Button>
        ))}
      </Flex>
    </Card>
  );
};
