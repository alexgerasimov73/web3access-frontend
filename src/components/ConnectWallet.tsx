import { useAccount } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { Connectors } from './Connectors';
import { Loader } from './Loader';
import { SwitchNetwork } from './SwitchNetwork';

export const ConnectWallet = () => {
  const { chainId, isConnected, isConnecting, isReconnecting } = useAccount();

  if (isConnecting || isReconnecting) return <Loader />;

  if (!isConnected) return <Connectors />;

  if (chainId !== sepolia.id) return <SwitchNetwork />;

  return <></>;
};
