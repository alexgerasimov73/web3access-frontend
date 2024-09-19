import { useAccount, useDisconnect } from 'wagmi';
import { Outlet } from 'react-router-dom';
import {
  Button,
  HStack,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { MetaMask, Wallet } from '../assets';

export const WalletBadge = () => {
  const { address, chain, connector } = useAccount();
  const { disconnect } = useDisconnect();
  const { isOpen } = useDisclosure();

  const handleDisconnect = () => disconnect();

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button
            pos="fixed"
            top={4}
            right={6}
            variant="link"
            transition="transform 0.2s"
            _hover={{
              transform: 'translateX(-2px)',
            }}>
            <Image src={Wallet} alt="wallet" />
          </Button>
        </PopoverTrigger>
        <PopoverContent minW="480px" p={4} color="brand.900">
          <VStack align="flex-start" spacing={4}>
            <Button colorScheme="red" variant="link" onClick={handleDisconnect}>
              Disconnect
            </Button>

            <HStack spacing={2}>
              <Image boxSize="18px" src={MetaMask} />
              <Text>{`Connected to the ${chain?.name} network via ${connector?.name}`}</Text>
            </HStack>

            <HStack spacing={2}>
              <Image boxSize="18px" src={MetaMask} />
              <Text>{address}</Text>
            </HStack>
          </VStack>
        </PopoverContent>
      </Popover>
      <Outlet />
    </>
  );
};
