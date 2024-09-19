import { useAccount } from 'wagmi';
import { sepolia } from 'wagmi/chains';
import { Flex } from '@chakra-ui/react';
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

  return (
    <Flex justify="center" align="center" h="100vh" className="ConnectWallet">
      {getContent()}
    </Flex>
  );
};
