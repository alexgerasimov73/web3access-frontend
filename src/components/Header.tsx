import { HStack } from '@chakra-ui/react';
import { Logo } from './Logo';
import { WalletBadge } from './WalletBadge';

export const Header = () => (
  <HStack as="header" pos="absolute" justify="space-between" w="full" h={16} p={4}>
    <Logo />
    <WalletBadge />
  </HStack>
);
