import { useAccount } from 'wagmi';
import { ConnectWallet } from '../../components/ConnectWallet';
import { WalletBadge } from '../../components/WalletBadge';

export const ConnectedWalletGuard = () => {
  const { isConnected } = useAccount();

  return isConnected ? <WalletBadge /> : <ConnectWallet />;
};
