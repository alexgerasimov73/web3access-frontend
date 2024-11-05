import { useAccount } from 'wagmi';
import { Outlet } from '@tanstack/react-router';
import { ConnectWallet } from '../../components/ConnectWallet';
import { Header } from '../../components/Header';
import { useLaunchServer } from '../../hooks/useLaunchServer';

export const ConnectedWalletGuard = () => {
  const { isConnected } = useAccount();
  const {} = useLaunchServer();

  return isConnected ? (
    <>
      <Header />
      <Outlet />
    </>
  ) : (
    <ConnectWallet />
  );
};
