import { HStack } from '@chakra-ui/react';
import { Outlet } from '@tanstack/react-router';
import { Logo } from './Logo';
import { WalletBadge } from './WalletBadge';
import { useGetSettings } from '../hooks/useGetSettings';
import { Loader } from './Loader';

export const MainLayout = () => {
  const { isLoading } = useGetSettings();

  if (isLoading) return <Loader label="Loading settings..." />;

  return (
    <>
      <HStack as="header" pos="absolute" justify="space-between" w="full" h={16} p={4}>
        <Logo />
        <WalletBadge />
      </HStack>

      <Outlet />
    </>
  );
};
