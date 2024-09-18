import { useAccount } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { Connectors } from './Connectors';
import { Loader } from './Loader';
import { SwitchNetwork } from './SwitchNetwork';

export const ConnectWallet = () => {
  const { chainId, isConnected, isConnecting, isReconnecting } = useAccount();

  const getContent = () => {
    if (isConnecting || isReconnecting) return <Loader />;
    // TODO: Remove the exclamation mark.
    if (isConnected) return <Connectors />;

    if (chainId !== sepolia.id) return <SwitchNetwork />;
  };

  return <div className="ConnectWallet">{getContent()}</div>;
};
