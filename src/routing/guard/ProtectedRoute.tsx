import { Outlet } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { store } from '../../store/store';
import { ConnectWallet } from '../../components/ConnectWallet';
import { GreetingPage } from '../../components/GreetingPage';
import { useCheckAuth } from '../../hooks/useCheckAuth';

const enum Permission {
  AuthenticatedAndIdentified,
  ConnectedWallet,
}

interface Props {
  readonly requires: Permission;
}

const Guard = ({ requires }: Props) => {
  const { isConnected } = useAccount();

  useCheckAuth();

  const authorized =
    (requires === Permission.AuthenticatedAndIdentified && store.user) ||
    (requires === Permission.ConnectedWallet && isConnected);

  return authorized ? (
    <Outlet />
  ) : requires === Permission.ConnectedWallet ? (
    <ConnectWallet />
  ) : (
    <GreetingPage />
  );
};

export const ConnectedWallet = () => <Guard requires={Permission.ConnectedWallet} />;
export const AuthenticatedAndIdentified = () => (
  <Guard requires={Permission.AuthenticatedAndIdentified} />
);
