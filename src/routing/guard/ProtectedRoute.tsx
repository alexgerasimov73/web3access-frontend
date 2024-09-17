import { Outlet } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { ConnectWallet } from '../../components/ConnectWallet';

const enum Permission {
  // Authenticated, TODO: implemented authentitication permission.
  ConnectedWallet,
}

interface Props {
  readonly requires: Permission;
}

const Guard = ({ requires }: Props) => {
  const { isConnected } = useAccount();

  const authorized = requires === Permission.ConnectedWallet && isConnected;

  // TODO: Remove the exclamation mark.
  return !authorized ? <Outlet /> : <ConnectWallet />;
};

export const ConnectedWallet = () => <Guard requires={Permission.ConnectedWallet} />;
