import { useAccount } from 'wagmi';
import { ConnectWallet } from '../../components/ConnectWallet';
import { MainLayout } from '../../components/MainLayout';
import { useLaunchServer } from '../../hooks/useLaunchServer';

export const ConnectedWalletGuard = () => {
  const { isConnected } = useAccount();
  const {} = useLaunchServer();

  return isConnected ? <MainLayout /> : <ConnectWallet />;
};
