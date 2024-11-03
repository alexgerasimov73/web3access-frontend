import { useAccount } from 'wagmi';
import { ConnectWallet } from '../../components/ConnectWallet';
import { WalletBadge } from '../../components/WalletBadge';
import { useLaunchServer } from '../../hooks/useLaunchServer';

export const ConnectedWalletGuard = () => {
  const { isConnected } = useAccount();
  const {} = useLaunchServer();

  return isConnected ? <WalletBadge /> : <ConnectWallet />;
};
