import { Outlet } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { ConnectWallet } from '../../components/ConnectWallet';

export const ConnectedWalletGuard = () => {
  const { isConnected } = useAccount();

  return isConnected ? <Outlet /> : <ConnectWallet />;
};
