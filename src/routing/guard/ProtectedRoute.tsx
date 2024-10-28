import { Outlet } from 'react-router-dom';
import { useAccount } from 'wagmi';
import { ConnectWallet } from '../../components/ConnectWallet';
import { GreetingPage } from '../../components/GreetingPage';
import { useCheckAuth } from '../../hooks/useCheckAuth';
import { useStore } from '../../store/useStore';

const enum Permission {
  AuthenticatedAndIdentified,
  ConnectedWallet,
}

interface Props {
  readonly requires: Permission;
}

const Guard = ({ requires }: Props) => {
  const { isConnected } = useAccount();
  const user = useStore((state) => state.user);

  useCheckAuth();

  const authorized =
    (requires === Permission.AuthenticatedAndIdentified && user) ||
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
